<template>
    <div class="card is-shadowless h-full overflow-y-auto">
        <div class="card-header has-background-light">
            <h3 class="card-header-title">Resolve RDF Terms</h3>
            <p class="card-header-icon py-0 px-1">
                <button type="button" class="button is-light" @click="onClose" title="Close">
                    <XMarkIcon class="icon" />
                </button>
            </p>
        </div>
        <div v-if="selectedTerm === null" style="padding: 21px">
            <div class="field">
                <div class="flex flex-row">
                    <label class="label" for="prefix">Prefix</label>&nbsp;&nbsp;&nbsp;(<a target="_blank"
                        href="https://prefix.zazuko.com/">prefix.zazuko.com</a>)
                </div>
                <input type="text" v-model="searchTerm" placeholder="Start typing to search... eg. sh:name" class="input"
                    required />
            </div>
            <PrefixZazukoList :items="searchResult as PrefixZazukoItem[]" @item-selected="onItemSelected" />
        </div>
        <div v-if="selectedTerm !== null" style="padding: 21px">
            <div class="flex flex-row items-center mb-4">
                <button class="flex flex-grow-0" @click="goBack">
                    <ArrowLeftIcon class="icon" />
                </button>
                <div style="display: flex; flex-direction: column;" class="pl-4">
                    <h1 class="title mb-0">{{ selectedTerm.splitA }}:{{
                        selectedTerm.splitB }}</h1>
                    <div>{{ selectedTerm.type }}</div>
                </div>
            </div>
            <PrefixZazukoDetail :item="selectedTerm as PrefixZazukoItem" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { XMarkIcon, ArrowLeftIcon } from '@heroicons/vue/24/solid'
import { ref, watch } from 'vue'
import debounce from 'lodash.debounce'
import { PrefixServerResponse, PrefixZazukoItem } from './prefix-server-response.model'
import PrefixZazukoList from './prefix-zazuko-list.vue'
import PrefixZazukoDetail from './prefix-zazuko-detail.vue'

interface Props {
    searchString: string
}
const props = defineProps<Props>()
const emit = defineEmits<{
    (event: 'close'): void
}>()

const searchTerm = ref<string>(props.searchString)
const searchResult = ref<PrefixZazukoItem[]>([])
const selectedTerm = ref<PrefixZazukoItem | null>(null)

watch(searchTerm, debounce((searchString) => {
    fetchFromPrefixServer(searchString)
}, 300))

async function fetchFromPrefixServer(searchString: string): Promise<void> {
    const apiEndpoint = 'https://prefix.zazuko.com/api/v1/search'
    const queryString = `q=${encodeURIComponent(searchString)}`
    const result = await fetch(apiEndpoint + '?' + queryString)
    const data = await result.json() as PrefixServerResponse[]
    const a = data.map(item => new PrefixZazukoItem(item))
    searchResult.value = a
}
function onClose(): void {
    emit('close')
}

function onItemSelected(item: PrefixZazukoItem) {
    selectedTerm.value = item
}

function goBack() {
    selectedTerm.value = null
}
</script>

<script lang="ts">

export default {
    name: 'PrefixHelp'
}
</script>
