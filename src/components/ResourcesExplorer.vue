<template>
  <div class="card h-full flex flex-col">
    <div class="card-header has-background-light">
      <h3 class="card-header-title">
        Resources explorer
      </h3>
      <p class="card-header-icon py-0 px-1">
        <b-button type="is-light" icon-left="times" @click="$emit('close')" title="Close" />
      </p>
    </div>
    <GraphLayout
      class="card-content p-0"
      :nodes="resources"
      :links="links"
      :active-links="activeLinks"
      :auto-zoom="false"
      @link-enter="onLinkHover"
      @link-out="onUnhover"
    >
      <template v-slot:node="{ node }">
        <ResourceCard
          :resource="node"
          :active-links="activeLinks"
          @hover-title="onHoverResource"
          @unhover-title="onUnhover"
          @hover-property="onHoverProperty"
          @unhover-property="onUnhover"
        >
          <template v-slot:actions>
            <b-tooltip label="Open URI in new tab">
              <a :href="node.id" target="_blank" rel="noopener noreferrer" class="button is-light flex items-baseline gap-2">
                <b-icon icon="external-link-alt" class="w-5" />
              </a>
            </b-tooltip>
            <b-tooltip label="Hide">
              <b-button type="is-light" icon-left="eye-slash" @click="$emit('unexplore-resource', node)" />
            </b-tooltip>
          </template>
          <template v-slot:property-value="{ value }">
            <div class="flex items-center">
              <Term :term="value" :endpoint="endpoint" />
              <TermExploreButton :term="value" @explore-resource="$emit('explore-resource', $event)" />
            </div>
          </template>
        </ResourceCard>
      </template>
    </GraphLayout>
  </div>
</template>

<script>
import GraphLayout from '../components/GraphLayout.vue'
import ResourceCard from '../components/ResourceCard.vue'
import Term from '../components/Term.vue'
import TermExploreButton from '../components/TermExploreButton.vue'

export default {
  name: 'ResourcesExplorer',
  components: { GraphLayout, ResourceCard, Term, TermExploreButton },
  props: ['resources', 'endpoint'],

  data () {
    return {
      activeLinks: [],
    }
  },

  async mounted () {
    this.fetchResources()
  },

  watch: {
    endpoint () {
      this.fetchResources()
    },

    resources () {
      this.fetchResources()
    },
  },

  computed: {
    uri () {
      return this.$route.params.uri
    },

    links () {
      const resourceIds = new Set(this.resources.map(({ id }) => id))
      return this.resources
        .filter(resource => resource.properties)
        .flatMap(resource => resource.properties.map((property) => ({ ...property, resource })))
        .reduce((acc, property) => {
          property.values.forEach((value) => {
            const source = property.resource.id
            const target = value.value
            if (resourceIds.has(target)) {
              acc.push({ source, target, sourceProperty: property.id, label: property.name })
            }
          })

          return acc
        }, [])
    },
  },

  methods: {
    async fetchResources () {
      if (!this.endpoint) return

      this.resources.forEach(async (resource) => {
        if (resource.isFetched) return

        try {
          const responseResource = await this.endpoint.fetchResource(resource.id)
          const fetchedResource = { ...responseResource, isFetched: true }
          this.$emit('explore-resource', fetchedResource)
        } catch (e) {
          const fetchedResource = { ...resource, isFetched: true }
          this.$emit('explore-resource', fetchedResource)
        }
      })
    },

    onLinkHover (link) {
      this.activeLinks.push(link)
    },

    onUnhover () {
      this.activeLinks = []
    },

    onHoverResource (resource) {
      this.activeLinks = this.links.filter((link) => link.source === resource.id)
    },

    onHoverProperty (resource, property) {
      this.activeLinks = this.links.filter((link) => (
        link.source === resource.id &&
        link.sourceProperty === property.id
      ))
    },
  },
}
</script>
