<template>
    <table>
        <tr v-for="part in props.item.parts" :key="part.predicate" :item="part">
            <th>
                {{ valueToString(part.predicate) }}
            </th>
            <td>
                {{ valueToString(part.object) }}
            </td>
        </tr>
    </table>
</template>

<script setup lang="ts">
import { PrefixZazukoItem, valueToString } from './prefix-server-response.model'

interface Props {
    item: PrefixZazukoItem
}
const props = defineProps<Props>()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
    (event: 'item-selected', value: PrefixZazukoItem): void;
}>()

</script>

<script lang="ts">

export default {
    name: 'PrefixZazukoDetail',
}

</script>

<style scoped>
table {
    background: white;
    border-radius: 0.25em;
    border-collapse: collapse;
    margin: 1em;
}

th {
    border-bottom: 1px solid black;
    color: black;
    font-size: 0.85em;
    font-weight: 600;
    padding: 0.5em 1em;
    text-align: left;
}

td {
    color: black;
    font-weight: 400;
    padding: 0.65em 1em;
}

tbody tr {
    transition: background 0.25s ease;
}

tbody tr:hover {
    background: white;
}
</style>
