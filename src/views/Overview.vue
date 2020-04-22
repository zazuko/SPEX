<template>
  <div class="Overview section">
    <b-button type="is-white" icon-right="cog" title="Options" @click="showSettings">
      <h2 class="title is-6">
        {{ settings.endpoint }}
      </h2>
    </b-button>

    <SettingsPane :settings="settings" :open="settingsShown" @change="loadData" @close="hideSettings" />

    <div class="OverviewTables">
      <OverviewTable v-for="table in tables" :key="table.id" :table="table" @explore="exploreTable" />
    </div>

    <TableExplorer :table="exploredTable" :open="explorerShown" :settings="settings" @close="hideExplorer" />
  </div>
</template>

<style scoped>
.Overview {
  padding-top: 1em;
}

.OverviewTables {
  display: flex;
  flex-wrap: wrap;
}
</style>

<script>
import { jsPlumb } from 'jsplumb'
import OverviewTable from '@/components/OverviewTable.vue'
import SettingsPane from '@/components/SettingsPane.vue'
import TableExplorer from '@/components/TableExplorer.vue'
import { fetchTables } from '@/fetch-tables'
import config from '@/config'

export default {
  components: {
    OverviewTable,
    SettingsPane,
    TableExplorer
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
      settingsShown: false,
      explorerShown: false,
      exploredTable: null,
      tables: [],
      plumb: jsPlumb.getInstance({ Container: this.$el })
    }
  },

  methods: {
    async loadData (settings) {
      this.settingsShown = false

      const loader = this.$buefy.loading.open({})
      this.tables = []
      // TODO: Handle error
      try {
        this.tables = await fetchTables(settings)
      } finally {
        loader.close()
      }
    },
    showSettings () {
      this.settingsShown = true
    },
    hideSettings () {
      this.settingsShown = false
    },
    exploreTable (table) {
      this.explorerShown = true
      this.exploredTable = table
    },
    hideExplorer () {
      this.explorerShown = false
    }
  },

  watch: {
    tables (tables) {
      this.plumb.reset()

      if (tables.length === 0) {
        return
      }

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

        this.plumb.ready(() => {
          relations.forEach(this.plumb.connect)
        })
      }, 0)
    }
  }
}
</script>
