<template>
    <div class="panel-block is-justify-content-space-between">
        <span style="flex-grow:1; overflow-x: clip; text-overflow:ellipsis">{{ table.name }}</span>
        <Tooltip :label="'Instances'">
            <div style="flex-grow:0;" class="badge">{{ count }}</div>
        </Tooltip>

        <SpexSwitch style="flex-grow:0;" :modelValue="table.isShown"
            @update:modelValue="$emit('toggle-table', table, $event)" />
    </div>
</template>

<script setup lang="ts">
import { Table } from '../../model/data-model.model'
import { computed } from 'vue'
import SpexSwitch from '../common/switch.vue'
import Tooltip from '../common/tooltip.vue'

interface Props {
    table: Table
}
const props = defineProps<Props>()

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const emit = defineEmits<{
    (event: 'toggle-table', boolean): void;
    (event: 'select-viewport', value: any): void,
}>()

const count = computed(() => {
    const value = props.table.count ?? 0
    if (value > 1000 && value < 1000000) {
        return round(value / 1000, 1) + 'K'
    } else if (value > 1000000) {
        return round(value / 1000000, 1) + 'M'
    }
    return `${value}`
})

function round(value, precision) {
    const multiplier = Math.pow(10, precision || 0)
    return Math.round(value * multiplier) / multiplier
}
</script>

<script lang="ts">

export default {
    name: 'TableListItem'
}

</script>

<style scoped>
.badge {
    border-radius: 11px;
    background-color: rgb(98, 141, 147);
    font-size: 10px;
    min-width: 35px;
    width: 35px;
    max-width: 35px;
    min-height: 22px;
    max-height: 22px;
    text-align: center;
    line-height: 22px;
    color: white;
    margin-left: 5px;
    margin-right: 5px;
}
</style>
