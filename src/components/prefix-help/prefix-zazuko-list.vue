<template>
    <PrefixZazukoListItem v-for="item in props.items" :key="item.itemText" :item="item" @item-selected="onItemSelected" />
</template>

<script setup lang="ts">
import { PrefixZazukoItem } from './prefix-server-response.model'
import PrefixZazukoListItem from './prefix-zazuko-list-item.vue'

interface Props {
    items: PrefixZazukoItem[]
}
const props = defineProps<Props>()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
    (event: 'item-selected', value: PrefixZazukoItem): void
}>()

function onItemSelected(item: PrefixZazukoItem) {
    emit('item-selected', item)
}
</script>

<script lang="ts">

export default {
    name: 'PrefixZazukoList'
}

</script>
