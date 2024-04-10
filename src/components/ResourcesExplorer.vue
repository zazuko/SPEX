<template>
  <div class="card h-full flex flex-col">
    <div class="card-header has-background-light">
      <h3 class="card-header-title">
        Resources Explorer
      </h3>
      <p class="card-header-icon py-0 px-1">
        <button class="button is-light" @click="$emit('close')" title="Close">
          <XMarkIcon class="icon" />
        </button>
      </p>
    </div>
    <!-- GRAPH -->
    <GraphLayout class="card-content p-0" :nodes="resources" :links="links" :active-links="activeLinks" :auto-zoom="false"
      @link-enter="onLinkHover" @link-out="onUnhover">

      <!-- Template for NODES -->
      <template v-slot:node="{ node }">
        <ResourceCard :resource="node" :active-links="activeLinks" @hover-title="onHoverResource"
          @unhover-title="onUnhover" @hover-property="onHoverProperty" @unhover-property="onUnhover">
          <!-- this is the header ?-->
          <template v-slot:actions>
            <Tooltip label="Open URI in new tab">
              <a :href="node.id" target="_blank" rel="noopener noreferrer" class="button is-light">
                <ArrowTopRightOnSquareIcon class="icon" />
              </a>
            </Tooltip>
            <Tooltip label="Hide">
              <button class="button is-light" @click="$emit('unexplore-resource', node)">
                <EyeSlashIcon class="icon" />
              </button>
            </Tooltip>
          </template>
          <!-- END: this is the header ?-->
          <!-- these are the terms in the table / rows -->
          <template v-slot:property-value="{ value }">
            <div class="flex items-center">
              <Term :term="value" :endpoint="endpoint" />
              <TermExploreButton :term="value" @explore-resource="$emit('explore-resource', $event)" />
            </div>
          </template>
          <!-- END: these are the terms in the table / rows -->
        </ResourceCard>
        <!-- END Template for NODES -->
      </template>
    </GraphLayout>
    <!-- END GRAPH -->
  </div>
</template>
<script setup lang="ts">
import { Endpoint } from '../endpoint'
import { computed, onMounted, ref, watch } from 'vue'
import { Link } from '../model/data-model.model'
import { ArrowTopRightOnSquareIcon, EyeSlashIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import { GraphLayout } from '@zazuko/vue-graph-layout'
import ResourceCard from './ResourceCard.vue'
import Term from './Term.vue'
import TermExploreButton from './TermExploreButton.vue'
import Tooltip from './common/tooltip.vue'
import { useRoute } from 'vue-router'

interface Props {
  resources: any[],
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
  (event: 'explore-resource', value: any): void;
  (event: 'unexplore-resource', value: any): void,
  (event: 'close'): void
}>()

const route = useRoute()
const endpoint = Endpoint.getInstance()

const links = computed(() => {
  const resourceIds = new Set(props.resources.map(({ id }) => id))

  return props.resources
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

const activeLinks = ref<Link[]>([])

function onLinkHover(link: Link) {
  activeLinks.value.push(link)
}
function onUnhover() {
  activeLinks.value = []
}

function onHoverResource(resource: any) {
  activeLinks.value = links.value.filter((link) => link.source === resource.id)
}

function onHoverProperty(resource: any, property: any) {
  activeLinks.value = links.value.filter((link) => (
    link.source === resource.id &&
    link.sourceProperty === property.id
  ))
}

async function fetchResources() {
  props.resources.forEach(async (resource) => {
    if (resource.isFetched) {
      return
    }

    try {
      const responseResource = await endpoint.fetchResource(resource.id)
      const fetchedResource = { ...responseResource, isFetched: true }
      emit('explore-resource', fetchedResource)
    } catch (e) {
      const fetchedResource = { ...resource, isFetched: true }
      emit('explore-resource', fetchedResource)
    }
  }
  )
}

// lifecycle hooks
onMounted(() => {
  fetchResources()
})

watch(props.resources, fetchResources)

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const uri = computed(() => {
  return route.params.uri
})

</script>

<script lang="ts">

export default {
  name: 'ResourcesExplorer'
}
</script>
