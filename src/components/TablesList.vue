<template>
  <div class="card is-shadowless overflow-y-auto">
    <div class="card-header has-background-light">
      <h3 class="card-header-title">Classes</h3>
      <p class="card-header-icon py-0 px-1">
        <b-button icon-left="times" type="is-light" @click="$emit('close')"></b-button>
      </p>
    </div>
    <div class="card-content px-0 py-1">
      <b-field v-show="datamodel.viewports.length > 0" class="m-0 px-2 py-2 border-b" label="Predefined views">
        <b-select @input="$emit('select-viewport', $event)">
          <option :value="null">-</option>
          <option
            v-for="(viewport, index) in datamodel.viewports"
            :key="index"
            :value="viewport"
          >{{ viewport.name }}</option>
        </b-select>
      </b-field>
      <ul>
        <li v-for="table in datamodel.tables" :key="table.id" class="panel-block is-justify-content-space-between pr-0">
          <span>{{ table.name }}</span>
          <b-switch type="is-primary" :value="table.isShown" @input="$emit('toggle-table', table, $event)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TablesList',
  props: ['datamodel'],
}
</script>
