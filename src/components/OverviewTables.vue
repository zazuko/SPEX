<template>
  <div class="OverviewTables">
    <OverviewTable v-for="table in tables" :key="table.id" :table="table" :id="table.id" @explore="explore" />
    <div v-if="tables.length === 0" class="section">
      <p>Nothing to show</p>
    </div>
    <svg class="links">
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="10" refY="5"
          markerUnits="strokeWidth"
          markerWidth="10" markerHeight="10"
          orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" class="link-arrow" />
        </marker>
        <marker
          id="dot"
          viewBox="0 0 100 100"
          refX="50" refY="50"
          markerWidth="6" markerHeight="6"
          orient="auto">
          <circle cx="50" cy="50" r="50" class="link-start" />
        </marker>
      </defs>
      <line v-for="(link, index) in links" :key="index" class="link">
        <title>{{ link.label }}</title>
      </line>
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
</style>

<style>
.links {
  flex-grow: 1;
  flex-basis: 100%;
  /* Hack because I can't figure out how to make the SVG take the full parent width/height */
  overflow: visible;
}

.link {
  stroke-width: 1;
  stroke: #333;
  marker-end: url(#arrow);
  marker-start: url(#dot);
}

.link:hover {
  stroke-width: 2;
  z-index: 10;
}

.link-arrow {
  fill: #456;
}

.link-start {
  fill: #456;
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
    return {}
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
        .force('charge', d3.forceManyBody().strength(-200))
        .stop()

      // simulation.on('tick', tickActions)

      // draw lines for the links
      const link = root
        .select('.links')
        .selectAll('.link')
        .data(links)

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

      function renderSimulation () {
        // Update positions each tick of the simulation
        node
          .join()
          .attr('style', (d) => {
            // Prevent nodes from going off-screen
            d.x = d.x < margin ? margin : d.x
            d.y = d.y < margin ? margin : d.y

            return `left: ${d.x}px; top: ${d.y}px`
          })

        // update link positions
        link
          .attr('x1', (d) => {
            const propertyElt = document.querySelector(`[data-id="${d.source.id}${d.sourceColumn}"]`)
            const offsetX = d.target.x > d.source.x ? propertyElt.clientWidth : 0
            return d.source.x + offsetX
          })
          .attr('y1', (d) => {
            const propertyElt = document.querySelector(`[data-id="${d.source.id}${d.sourceColumn}"]`)
            const magic = 60 // TODO: Don't know where this difference is coming from...
            return d.source.y + propertyElt.offsetTop + magic
          })
          .attr('x2', (d) => {
            const tableElt = document.querySelector(`[data-id="${d.target.id}"]`)
            return d.target.x + (tableElt.clientWidth / 2)
          })
          .attr('y2', (d) => d.target.y)
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
    }
  }
}
</script>
