<template>
    <div class="z-10 py-1 shadow-sm flex justify-between items-center dark:bg-gray-800">
        <h1 class="px-4 py-2 text-3xl text-black dark:text-white font-bold font-title">
            SPEX
        </h1>
        <div class="flex flex-row items-center gap-3">
            <button class="button is-white dark:is-dark flex items-center gap-1" title="Options" @click="toggleSettings">
                <h2>
                    <span v-if="sparqlEndpointUrl">{{ sparqlEndpointUrl }}</span>
                    <span v-else>No endpoint configured yet</span>
                </h2>
                <CogIcon class="icon" />
            </button>
            <button class="button is-white dark:is-dark" title="Prefix Zazuko" @click="togglePrefixHelp">
                <BookOpenIcon class="icon" />
            </button>
        </div>
        <div v-if="!isSettingsEditorShown" class="flex flex-row items-center mr-2">
            <ZazukoLogo />
            <div style="height: 15px;border-left: 1px solid; margin-left: 6px; margin-right: 8px; width: 1px;"></div>
            <GitHubLogo />
        </div>
        <div v-if="isSettingsEditorShown">
        </div>
    </div>
</template>

<script setup lang="ts">
import { CogIcon } from '@heroicons/vue/24/solid'
import { BookOpenIcon } from '@heroicons/vue/24/outline'
import GitHubLogo from './git-hub-logo.vue'
import ZazukoLogo from './zazuko-logo.vue'

interface Props {
    isSettingsEditorShown: boolean
    sparqlEndpointUrl: string | null
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
    (event: 'toggle-settings-editor', boolean): void;
    (event: 'toggle-prefix-help'): void;
}>()

function toggleSettings() {
    emit('toggle-settings-editor', !props.isSettingsEditorShown)
}

function togglePrefixHelp() {
    emit('toggle-prefix-help')
}
</script>

<script lang="ts">

export default {
    name: 'SpexHeader',
}

</script>
