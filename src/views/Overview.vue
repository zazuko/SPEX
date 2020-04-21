<template>
  <div class="section">
    <h1 class="title">Overview</h1>

    <b-collapse class="card" animation="slide" :open.sync="optionsOpen">
      <div
        slot="trigger"
        class="card-header"
        role="button"
      >
        <p class="card-header-title">Options</p>
      </div>
      <form class="card-content" @submit.prevent="loadData">
        <b-field label="Endpoint">
          <b-input v-model="endpoint" />
        </b-field>
        <b-field label="Username">
          <b-input v-model="user" />
        </b-field>
        <b-field label="Password">
          <b-input type="password" v-model="password" password-reveal />
        </b-field>
        <b-field label="Graph">
          <b-input v-model="graph" />
        </b-field>
        <b-field><button class="button is-primary" type="submit">Load</button></b-field>
      </form>
    </b-collapse>

    <div class="OverviewTables">
      <OverviewTable v-for="table in tables" :key="table.id" :table="table" />
    </div>
  </div>
</template>

<style scoped>
.OverviewTables {
  display: flex;
  flex-wrap: wrap;
}
</style>

<script>
import { jsPlumb } from 'jsplumb'
import OverviewTable from '@/components/OverviewTable.vue'
import { fetchTables } from '@/fetch-tables'
import config from '@/config'

export default {
  components: {
    OverviewTable
  },

  data () {
    return {
      endpoint: config.endpoint,
      user: config.user,
      password: config.password,
      graph: config.graph,
      tables: [],
      optionsOpen: false,
      async loadData () {
        this.optionsOpen = false
        const loader = this.$buefy.loading.open({})
        this.tables = []
        this.tables = await fetchTables(this.endpoint, this.user, this.password, this.graph)
        loader.close()
      }
    }
  },

  async mounted () {
    await this.loadData()
  },

  watch: {
    tables (tables) {
      setTimeout(() => {
        const relations = tables
          .flatMap(table => table.columns)
          .reduce((acc, column) => {
            const source = document.querySelector(`[data-id="${column.id}"]`)
            const target = document.querySelector(`[data-id="${column.type.id}"]`)

            if (source && target) {
              acc.push({ source, target })
            }

            return acc
          }, [])

        const plumb = jsPlumb.getInstance({
          Container: this.$el
        })

        plumb.ready(() => {
          relations.forEach(plumb.connect)
        })
      }, 0)
    }
  }
}
</script>
