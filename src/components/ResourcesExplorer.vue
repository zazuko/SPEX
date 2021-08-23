<template>
  <div class="card h-full flex flex-col">
    <div class="card-header has-background-light">
      <h3 class="card-header-title">
        Resources explorer
      </h3>
      <p class="card-header-icon py-0 px-1">
        <button class="button is-light" @click="$emit('close')" title="Close">
          <XIcon class="icon" />
        </button>
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
            <Tooltip label="Open URI in new tab">
              <a :href="node.id" target="_blank" rel="noopener noreferrer" class="button is-light">
                <ExternalLinkIcon class="icon" />
              </a>
            </Tooltip>
            <Tooltip label="Hide">
              <button class="button is-light" @click="$emit('unexplore-resource', node)">
                <EyeOffIcon class="icon" />
              </button>
            </Tooltip>
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
import { computed, onMounted, ref, toRefs, watch } from 'vue'
import { ExternalLinkIcon, EyeOffIcon, XIcon } from '@heroicons/vue/solid'
import GraphLayout from './GraphLayout.vue'
import ResourceCard from './ResourceCard.vue'
import Term from './Term.vue'
import TermExploreButton from './TermExploreButton.vue'
import Tooltip from './Tooltip.vue'

export default {
  name: 'ResourcesExplorer',
  props: ['resources', 'endpoint'],
  emits: ['explore-resource', 'unexplore-resource', 'close'],
  components: {
    ExternalLinkIcon,
    EyeOffIcon,
    GraphLayout,
    ResourceCard,
    Term,
    TermExploreButton,
    Tooltip,
    XIcon,
  },

  setup (props, context) {
    const { endpoint, resources } = toRefs(props)

    const links = computed(() => {
      const resourceIds = new Set(resources.value.map(({ id }) => id))

      return resources.value
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
    })

    const activeLinks = ref([])
    const onLinkHover = (link) => { activeLinks.value.push(link) }
    const onUnhover = () => { activeLinks.value = [] }
    const onHoverResource = (resource) => { activeLinks.value = links.value.filter((link) => link.source === resource.id) }
    const onHoverProperty = (resource, property) => {
      activeLinks.value = links.value.filter((link) => (
        link.source === resource.id &&
        link.sourceProperty === property.id
      ))
    }

    const fetchResources = async () => {
      if (!endpoint.value) return

      resources.value.forEach(async (resource) => {
        if (resource.isFetched) return

        try {
          const responseResource = await endpoint.value.fetchResource(resource.id)
          const fetchedResource = { ...responseResource, isFetched: true }
          context.emit('explore-resource', fetchedResource)
        } catch (e) {
          const fetchedResource = { ...resource, isFetched: true }
          context.emit('explore-resource', fetchedResource)
        }
      })
    }
    onMounted(fetchResources)
    watch(endpoint, fetchResources)
    watch(resources, fetchResources)

    return {
      links,
      activeLinks,
      onLinkHover,
      onUnhover,
      onHoverResource,
      onHoverProperty,
    }
  },

  computed: {
    uri () {
      return this.$route.params.uri
    },
  },
}
</script>
