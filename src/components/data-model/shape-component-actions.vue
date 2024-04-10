<template>
    <div class="flex justify-center flex-row gap-1">
        <div>
            <div class="relative z-50 text-right flex justify-center flex-row">
                <Menu as="div" class="relative inline-block">
                    <div class="flex h-full justify-center">
                        <MenuButton
                            style="font-size: 0.75rem; height: 2.5em; width: 2.5em; border-radius: 2px; padding-top:1px"
                            class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <EllipsisVerticalIcon class="h-7 w-7 --color-primary-300 hover:text-orange"
                                aria-hidden="true" />
                        </MenuButton>
                    </div>

                    <transition enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                        <MenuItems
                            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div class="px-1 py-1">
                                <MenuItem v-slot="{ active }">
                                <button :class="[
                                    active ? 'bg-orange-400 text-white' : 'text-gray-900',
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                ]" @click="onExportTable(table)">
                                    <ClipboardDocumentIcon class="mr-2 h-5 w-5 icon" aria-hidden="true" />
                                    Copy NodeShape
                                </button>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <button :class="[
                                    active ? 'bg-orange-400 text-white' : 'text-gray-900',
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                ]" @click="$emit('explore', table)">
                                    <TableCellsIcon class="mr-2 h-5 w-5 icon" aria-hidden="true" />
                                    Explore Data
                                </button>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </div>
        <Tooltip label="Hide">
            <button class="button is-light is-small" @click="$emit('hide', table)">
                <EyeSlashIcon class="icon" />
            </button>
        </Tooltip>
    </div>
    <!-- end actions -->
</template>

<script setup lang="ts">
import { Table } from '../../model/data-model.model'
import { EllipsisVerticalIcon, EyeSlashIcon, TableCellsIcon, ClipboardDocumentIcon } from '@heroicons/vue/24/solid'

import { ref } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

import Tooltip from '../common/tooltip.vue'

interface Props {
    table: Table,
}
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const props = defineProps<Props>()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
    (event: 'hide', value: Table): void;
    (event: 'explore', value: Table): void,
    (event: 'export', value: Table): void
}>()
const copiedMessage = ref<string | null>(null)

function onExportTable(table: Table): void {
    emit('export', table)
    copiedMessage.value = '👍'
    setTimeout(() => { copiedMessage.value = null }, 1500)
}

</script>

<script lang="ts">

export default {
    name: 'ShapeComponentActions',
}
</script>
