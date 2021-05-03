<template>
  <panZoom
    v-if="tablesVisible.length > 0"
    class="flex-grow bg-gray-50 relative flex flex-col overflow-hidden"
    selector=".OverviewTables"
    :options="panZoomOptions"
  >
    <div class="OverviewTables h-full flex-grow relative flex flex-col">
      <OverviewTable
        v-for="table in tablesVisible"
        :key="table.id"
        class="OverviewTable"
        :table="table"
        :id="table.id"
        :active-links="activeLinks"
        @explore="$emit('explore', $event)"
        @hide="$emit('toggle-table', $event, false)"
        @hover-table="onHoverTable"
        @unhover-table="onUnhover"
        @hover-column="onHoverColumn"
        @unhover-column="onUnhover"
      />
      <svg class="links">
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="10" refY="5"
            markerUnits="userSpaceOnUse"
            markerWidth="10" markerHeight="10"
            orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" class="link-arrow" />
          </marker>
          <marker
            id="arrow-active"
            viewBox="0 0 10 10"
            refX="10" refY="5"
            markerUnits="userSpaceOnUse"
            markerWidth="10" markerHeight="10"
            orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" class="link-arrow" />
          </marker>
          <marker
            id="dot"
            viewBox="0 0 100 100"
            refX="50" refY="50"
            markerUnits="userSpaceOnUse"
            markerWidth="6" markerHeight="6"
            orient="auto">
            <circle cx="50" cy="50" r="50" class="link-start" />
          </marker>
          <marker
            id="dot-active"
            viewBox="0 0 100 100"
            refX="50" refY="50"
            markerUnits="userSpaceOnUse"
            markerWidth="6" markerHeight="6"
            orient="auto">
            <circle cx="50" cy="50" r="50" class="link-start" />
          </marker>
        </defs>
        <path v-for="(link, index) in links" :key="index" class="link" :class="{ active: activeLinks.includes(link) }">
          <title>{{ link.label }}</title>
        </path>
      </svg>
    </div>
  </panZoom>
  <div v-else class="flex-grow bg-gray-50 flex flex-col items-center justify-center">
    <p class="pb-4">No classes to show</p>
  </div>
</template>

<script>
import Vue from 'vue'
import * as d3 from 'd3'
import OverviewTable from './OverviewTable'
import PanZoom from 'vue-panzoom/src/components/pan-zoom/component.vue'
import panZoom from 'panzoom'

// Make panZoom available for the PanZoom component
Vue.prototype.$panZoom = panZoom

const panZoomOptions = {
  bounds: false,
  autocenter: false,
  minZoom: 0.1,
  maxZoom: 1.2,
  initialZoom: 1,
  initialX: 0,
  initialY: 0,
}

export default {
  name: 'OverviewTables',
  components: { OverviewTable, PanZoom },
  props: ['tables'],

  data () {
    return {
      activeLinks: [],
      panZoomOptions,
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.renderGraph()
    })
  },

  computed: {
    tablesVisible () {
      return this.tables.filter(({ isShown }) => isShown)
    },

    nodes () {
      return this.tablesVisible.map((table) => ({
        ...table
      }))
    },

    links () {
      const tableIds = new Set(this.tablesVisible.map(({ id }) => id))
      return this.tablesVisible
        .flatMap(table => table.columns.map((column) => ({ ...column, table })))
        .reduce((acc, column) => {
          column.types.forEach((type) => {
            const source = column.table.id
            const target = type.id
            if (tableIds.has(target)) {
              acc.push({ source, target, sourceColumn: column.id, label: column.name })
            }
          })

          return acc
        }, [])
    }
  },

  watch: {
    nodes () {
      if (this.nodes.length === 0) {
        return
      }

      this.$nextTick(() => {
        this.renderGraph()
      })
    }
  },

  methods: {
    onHoverTable (table) {
      this.activeLinks = this.links.filter((link) => link.source.id === table.id)
    },

    onHoverColumn (table, column) {
      this.activeLinks = this.links.filter((link) => (
        link.source.id === table.id &&
        link.sourceColumn === column.id
      ))
    },

    onUnhover () {
      this.activeLinks = []
    },

    renderGraph () {
      const container = this.$el
      const root = d3.select('.OverviewTables')
      const nodes = this.nodes
      const links = this.links
      const width = container.clientWidth
      const height = container.clientHeight

      const simulation = d3.forceSimulation().nodes(nodes)

      simulation
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('links', d3.forceLink(links).id(({ id }) => id))
        .force('collision', d3
          .forceCollide()
          .radius(({ id }) => {
            const elt = root.select(`[data-id="${id}"]`)
            const width = elt.style('width').replace('px', '')
            const height = elt.style('height').replace('px', '')
            return (Math.max(width, height) / 2) + 20
          })
          .strength(1)
        )
        .stop()

      // draw lines for the links
      const link = root
        .select('.links')
        .selectAll('.link')
        .data(links)
        .on('mouseover', (event, link) => {
          this.activeLinks = [link]
        })
        .on('mouseout', (event, link) => {
          this.activeLinks = []
        })

      // draw circles for the nodes
      const node = root.selectAll('.OverviewTable')
        .data(nodes)
        .call(drag(simulation))

      // Run simulation for a defined number of steps
      // See https://github.com/d3/d3-force/blob/master/README.md#simulation_tick
      for (let i = 0, n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay())); i < n; ++i) {
        simulation.tick()
      }
      renderSimulation()

      // Remove all forces after simulation is finished to allow dragging nodes around without affecting the other nodes
      simulation
        .force('center', null)
        .force('collision', null)
        .force('links', null)
        .force('charge', null)

      function renderSimulation () {
        // Update node positions
        node
          .join()
          .attr('style', (d) => `left: ${d.x}px; top: ${d.y}px`)

        // Update link positions
        const computeLinkPath = d3
          .linkHorizontal()
          .source((d) => sourcePoint(d, container))
          .target((d) => targetClosestAnchor(d, container))
          .x(({ x }) => x)
          .y(({ y }) => y)

        link.attr('d', computeLinkPath)
      }

      function drag (simulation) {
        function dragstarted (event, d) {
          if (!event.active) simulation.alphaTarget(0.3).restart()
          d.fx = d.x
          d.fy = d.y
        }

        function dragged (event, d) {
          d.fx = event.x
          d.fy = event.y
          renderSimulation()
        }

        function dragended (event, d) {
          if (!event.active) simulation.alphaTarget(0)
          d.fx = null
          d.fy = null
          renderSimulation()
        }

        return d3.drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended)
      }
    },
  }
}

/**
 * Property link source point
 */
function sourcePoint (d, container) {
  const radius = 3
  const sourceElt = container.querySelector(`[data-id="${d.source.id}${d.sourceColumn}"]`)
  const offsetX = d.target.x > d.source.x ? (sourceElt.clientWidth + radius) : -radius
  const magic = 60 // TODO: Don't know where this difference is coming from...
  return {
    x: d.source.x + offsetX,
    y: d.source.y + sourceElt.offsetTop + magic,
  }
}

/**
 * Find closest point to link to target table
 */
function targetClosestAnchor (d, container) {
  const targetElt = container.querySelector(`[data-id="${d.target.id}"]`)
  const source = sourcePoint(d, container)
  return nearestPointOnPerimeter(source, d.target, targetElt.clientWidth, targetElt.clientHeight)
}

function clamp (x, lower, upper) {
  return Math.max(lower, Math.min(upper, x))
}

function nearestPointOnPerimeter (point, rectTopLeft, rectWidth, rectHeight) {
  const rectBottomRight = {
    x: rectTopLeft.x + rectWidth,
    y: rectTopLeft.y + rectHeight,
  }

  const x = clamp(point.x, rectTopLeft.x, rectBottomRight.x)
  const y = clamp(point.y, rectTopLeft.y, rectBottomRight.y)

  const dl = Math.abs(x - rectTopLeft.x)
  const dr = Math.abs(x - rectBottomRight.x)
  const dt = Math.abs(y - rectTopLeft.y)
  const db = Math.abs(y - rectBottomRight.y)
  const m = Math.min(dl, dr, dt, db)

  if (m === dt) {
    return { x, y: rectTopLeft.y }
  } else if (m === db) {
    return { x, y: rectBottomRight.y }
  } else if (m === dl) {
    return { x: rectTopLeft.x, y }
  } else {
    return { x: rectBottomRight.x, y }
  }
}

</script>

<style scoped>
.links {
  flex-grow: 1;
  flex-basis: 100%;
  /* Hack because I can't figure out how to make the SVG take the full parent width/height */
  overflow: visible;
  pointer-events: none;
}

.link {
  fill: transparent;
  stroke-width: 1;
  stroke: #333;
  marker-end: url(#arrow);
  marker-start: url(#dot);
  pointer-events: all;
}

.link-arrow {
  fill: #456;
}

.link-start {
  fill: #456;
}

/* SVG 1 doesn't provide a way to style markers based on their referencing
 * element. To circumvent this limitation, I use one marker for the normal
 * state, and one marker for the active state. */
#arrow-active > .link-arrow { fill: #ffb15e; }
#dot-active > .link-start { fill: #ffb15e; }

.link.active {
  z-index: 10;
  stroke: #ffb15e;
  stroke-width: 2;
  marker-end: url(#arrow-active);
  marker-start: url(#dot-active);
}
</style>

<style>
.vue-pan-zoom-scene {
  flex-grow: 1;
  outline: none;
}
</style>
