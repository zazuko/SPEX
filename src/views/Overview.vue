<template>
  <div class="Overview">
    <Splitpanes class="default-theme">
      <Pane>
        <Splitpanes horizontal>
          <Pane>
            <b-button type="is-white" icon-right="cog" title="Options" @click="showSettings">
              <h2 class="title is-6">
                {{ settings.endpoint }}
              </h2>
            </b-button>

            <div class="OverviewTables">
              <OverviewTable v-for="table in tables" :key="table.id" :table="table" @explore="exploreTable" />
            </div>
            <div class="section" v-if="error">
              <div class="message is-danger">
                <div class="message-body">
                  Error loading data: {{ error }}
                </div>
              </div>
            </div>
          </Pane>

          <Pane v-if="explorerShown">
            <TableExplorer :table="exploredTable" :settings="settings" @close="hideExplorer" />
          </Pane>
        </Splitpanes>
      </Pane>
      <Pane v-if="settingsShown" size="20">
        <SettingsPane :settings="settings" @change="loadData" @close="hideSettings" />
      </Pane>
    </Splitpanes>
  </div>
</template>

<style scoped>
.Overview {
  flex-grow: 1;
  overflow-y: hidden;
}

.OverviewTables {
  display: flex;
  flex-wrap: wrap;
}

.splitpanes .splitpanes__pane {
  background-color: white;
  overflow: auto;
}
</style>

<script>
import { jsPlumb } from 'jsplumb'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import OverviewTable from '@/components/OverviewTable.vue'
import SettingsPane from '@/components/SettingsPane.vue'
import TableExplorer from '@/components/TableExplorer.vue'
import { fetchTables } from '@/fetch-tables'
import config from '@/config'

export default {
  components: {
    OverviewTable,
    SettingsPane,
    TableExplorer,
    Splitpanes,
    Pane
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
      error: null,
      plumb: jsPlumb.getInstance({ Container: this.$el })
    }
  },

  methods: {
    async loadData (settings) {
      this.resetView()

      this.tables = []
      this.error = null
      const loader = this.$buefy.loading.open({})
      try {
        this.tables = await fetchTables(settings)
      } catch (e) {
        this.error = e
        console.error(e)
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
    },
    resetView () {
      this.settingsShown = false
      this.exploredTable = null
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
