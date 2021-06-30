<template>
  <Splitpanes class="default-theme">
    <Pane size="40">
      <h2 class="font-bold text-lg px-4 py-2 bg-gray-200">RDF editor</h2>
      <rdf-editor class="w-full h-full overflow-hidden" :format="format" :value="shacl" ref="shaclEditor" />
      <div class="p-2 flex gap-2 items-end">
        <b-field label="Format">
          <b-select v-model="format">
            <option v-for="format in formats" :key="format" :value="format">{{ format }}</option>
          </b-select>
        </b-field>
        <b-field class="mb-3 flex-grow">
          <b-button type="is-primary" icon-left="sync" @click="loadResources" class="w-full">
            Update representation
          </b-button>
        </b-field>
      </div>
    </Pane>
    <Pane>
      <Splitpanes horizontal>
        <Pane>
          <div class="flex-grow flex flex-col">
            <h2 class="font-bold text-lg px-4 py-2 bg-gray-200">Representation</h2>

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
                  <template v-slot:property-value="{ value }">
                    <div class="flex items-center">
                      <Term :term="value" :endpoint="endpoint" />
                    </div>
                  </template>
                </ResourceCard>
              </template>
            </GraphLayout>

            <div class="section" v-if="error">
              <div class="message is-danger">
                <div class="message-body">
                  Error showing data: {{ error }}
                </div>
              </div>
            </div>
          </div>
        </Pane>
      </Splitpanes>
    </Pane>
  </Splitpanes>
</template>

<script>
import RDF from '@rdfjs/dataset'
import { shrink } from '@zazuko/rdf-vocabularies/shrink'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import '@rdfjs-elements/rdf-editor'
import TermSet from '@rdfjs/term-set'
import { parsers } from '@rdf-esm/formats-common'
import GraphLayout from '@/components/GraphLayout.vue'
import ResourceCard from '@/components/ResourceCard.vue'
import Term from '@/components/Term.vue'

const formats = [...parsers.keys()]

const initialEditorContent = ''

export default {
  components: {
    GraphLayout,
    Splitpanes,
    Pane,
    ResourceCard,
    Term,
  },

  data () {
    return {
      format: 'text/turtle',
      formats,
      shacl: initialEditorContent,
      resources: [],
      error: null,
      activeLinks: [],
      endpoint: {
        shrink (uri) {
          return shrink(uri) || uri
        },
      },
    }
  },

  computed: {
    links () {
      const resources = this.resources
      const resourceIds = new TermSet(resources.map(({ term }) => term))

      return resources
        .flatMap(resource => resource.properties.map((property) => ({ ...property, resource })))
        .reduce((links, property) => {
          property.values.forEach((value) => {
            const source = property.resource.term
            const target = value

            if (resourceIds.has(target)) {
              links.push({
                source: source.value,
                target: target.value,
                sourceProperty: property.id,
                label: property.name,
              })
            }
          })

          return links
        }, [])
    },
  },

  methods: {
    async loadResources () {
      const editor = this.$refs.shaclEditor

      this.error = null
      this.resources = []

      try {
        const quads = await editor.quads
        const dataset = RDF.dataset(quads)
        this.resources = extractResources(dataset, this.endpoint)
      } catch (e) {
        this.error = e.toString()
      }
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
  }
}

function extractResources (dataset, endpoint) {
  const subjects = new TermSet([...dataset].map(({ subject }) => subject))

  return [...subjects].map(subject => {
    const quads = dataset.match(subject)
    const properties = [...quads].reduce((acc, { predicate, object }) => {
      if (!acc.has(predicate.value)) {
        const property = {
          id: predicate.value,
          term: predicate,
          name: endpoint.shrink(predicate.value),
          values: new TermSet(),
        }
        acc.set(predicate.value, property)
      }

      acc.get(predicate.value).values.add(object)

      return acc
    }, new Map())

    return {
      id: subject.value,
      term: subject,
      name: endpoint.shrink(subject.value),
      properties: [...properties.values()],
    }
  })
}
</script>
