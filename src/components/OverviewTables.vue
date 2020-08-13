<template>
  <div class="OverviewTables">
    <OverviewTable
      v-for="table in tables"
      :key="table.id"
      :table="table"
      :id="table.id"
      :active-links="activeLinks"
      @explore="explore"
      @hover-column="onHoverColumn"
      @unhover-column="onUnhoverColumn"
    />
    <div v-if="tables.length === 0" class="section">
      <p>Nothing to show</p>
    </div>
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
          id="dot"
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
</template>

<style scoped>
.OverviewTables {
  flex-grow: 1;

  position: relative;
  overflow: auto;

  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
}

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

.link.active {
  z-index: 10;
  stroke: #ffb15e;
  stroke-width: 2;
}
</style>

<script>
import * as d3 from 'd3'
import OverviewTable from './OverviewTable'

export default {
  name: 'OverviewTables',
  components: { OverviewTable },
  props: ['tables'],

  data () {
    return {
      activeLinks: [],
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.renderGraph()
    })
  },

  computed: {
    nodes () {
      return this.tables.map((table) => ({
        ...table
      }))
    },

    links () {
      const tableIds = new Set(this.tables.map(({ id }) => id))
      return this.tables
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
    explore (table) {
      this.$emit('explore', table)
    },

    onHoverColumn (table, column) {
      this.activeLinks = this.links.filter((link) => (
        link.source.id === table.id &&
        link.sourceColumn === column.id
      ))
    },

    onUnhoverColumn (table, column) {
      this.activeLinks = []
    },

    renderGraph () {
      const root = d3.select('.OverviewTables')
      const nodes = this.nodes
      const links = this.links
      const width = this.$el.clientWidth
      const height = this.$el.clientHeight
      const margin = 5

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
        .force('bounds', keepInBounds)
        .stop()

      // draw lines for the links
      const link = root
        .select('.links')
        .selectAll('.link')
        .data(links)
        .on('mouseover', (link) => {
          this.activeLinks = [link]
        })
        .on('mouseout', (link) => {
          this.activeLinks = []
        })

      // draw circles for the nodes
      const node = root.selectAll('.OverviewTable')
        .data(nodes)
        .call(drag(simulation))

      // Run simulation for a defined number of steps
      // See https://github.com/d3/d3-force/blob/master/README.md#simulation_tick
      for (var i = 0, n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay())); i < n; ++i) {
        simulation.tick()
      }
      renderSimulation()

      // Remove all forces after simulation is finished to allow dragging nodes around without affecting the other nodes
      simulation
        .force('center', null)
        .force('collision', null)
        .force('links', null)
        .force('charge', null)

      // Force that prevents nodes from going off screen
      function keepInBounds () {
        simulation
          .nodes()
          .forEach((d) => {
            d.x = d.x < margin ? margin : d.x
            d.y = d.y < margin ? margin : d.y
          })
      }

      function renderSimulation () {
        // Update node positions
        node
          .join()
          .attr('style', (d) => `left: ${d.x}px; top: ${d.y}px`)

        // Update link positions
        const computeLinkPath = d3
          .linkHorizontal()
          .source((d) => sourcePoint(d))
          .target((d) => targetClosestAnchor(d))
          .x(({ x }) => x)
          .y(({ y }) => y)

        link.attr('d', computeLinkPath)
      }

      function drag (simulation) {
        function dragstarted (d) {
          if (!d3.event.active) simulation.alphaTarget(0.3).restart()
          d.fx = d.x
          d.fy = d.y
        }

        function dragged (d) {
          d.fx = d3.event.x
          d.fy = d3.event.y
          renderSimulation()
        }

        function dragended (d) {
          if (!d3.event.active) simulation.alphaTarget(0)
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
function sourcePoint (d) {
  const radius = 3
  const sourceElt = document.querySelector(`[data-id="${d.source.id}${d.sourceColumn}"]`)
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
function targetClosestAnchor (d) {
  const targetElt = document.querySelector(`[data-id="${d.target.id}"]`)
  const source = sourcePoint(d)
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
