<template>
    <div class="card" @click="$emit('item-selected', props.item)">
        <Tooltip :label="props.item.type">
            <div class="avatar">{{ props.item.avatar }}</div>
        </Tooltip>
        <div class="card-text">
            <div class="card-title">{{ props.item.itemText }}</div>
            <div class="card-comment">{{ props.item.comment }}</div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { PrefixZazukoItem } from './prefix-server-response.model'
import Tooltip from '../common/tooltip.vue'

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
    name: 'PrefixZazukoListItem',
}

</script>

<style scoped>
.card {
    padding: 10px;
    border-radius: 11px;
    margin-top: 5px;
    height: 60px;
    max-height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
}

.card:hover {
    background-color: rgb(220, 220, 220);
}

.avatar {
    width: 40px;
    background-color: rgb(98, 141, 147);
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    font-size: 18px;
    font-weight: 400;
    margin-right: 10px;
    color: white;
}

.card-text {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.card-title {
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
}

.card-comment {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
}
</style>
