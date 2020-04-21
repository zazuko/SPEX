<template>
  <div class="section">
    <h1 class="title">Overview</h1>

    <SettingsPane :settings=settings @change="loadData" />

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
import SettingsPane from '@/components/SettingsPane.vue'
import { fetchTables } from '@/fetch-tables'
import config from '@/config'

export default {
  components: {
    OverviewTable,
    SettingsPane
  },

  async mounted () {
    await this.loadData(this.settings)
  },

  data () {
    return {
      settings: {
        endpoint: config.endpoint,
        user: config.user,
        password: config.password,
        graph: config.graph
      },
      tables: [],
    }
  },

  methods: {
    async loadData (settings) {
      const loader = this.$buefy.loading.open({})
      this.tables = []
      // TODO: Handle error
      try {
        this.tables = await fetchTables(settings)
      } finally {
        loader.close()
      }
    }
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
