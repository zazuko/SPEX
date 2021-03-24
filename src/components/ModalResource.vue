<template>
  <div class="modal-card">
    <div class="modal-card-head" v-if="resource">
      <h3>
        <TermLink :uri="resource.id">
          <Term :term="resource.term" :endpoint="endpoint" />
        </TermLink>
      </h3>
    </div>
    <div class="modal-card-body">
      <div v-if="!resource">
        <b-skeleton width="10rem" :animated="true"></b-skeleton>
        <b-skeleton width="11rem" :animated="true"></b-skeleton>
        <b-skeleton width="9rem" :animated="true"></b-skeleton>
      </div>
      <div v-if="resource">
        <table v-if="resource.properties.length > 0" class="table is-fullwidth">
          <tr v-for="property in resource.properties" :key="property.id">
            <td>
              <Term :term="property.term" :endpoint="endpoint" />
            </td>
            <td>
              <ul>
                <li v-for="(value, index) in property.values" :key="index">
                  <Term :term="value" :endpoint="endpoint" />
                  <TermDescribe :term="value" :endpoint="endpoint" />
                </li>
              </ul>
            </td>
          </tr>
        </table>
        <p v-if="resource.properties.length === 0" class="has-text-grey">
          No properties found for this resource
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Term from './Term.vue'
import TermLink from './TermLink.vue'

export default {
  name: 'ModalResource',
  props: ['uri', 'endpoint'],
  components: {
    Term,
    TermLink,
    // Import at runtime to fix circular dependency
    TermDescribe: () => import('./TermDescribe.vue'),
  },

  data () {
    return {
      resource: null
    }
  },

  async mounted () {
    this.resource = await this.endpoint.fetchResource(this.uri)
  }
}
</script>

<style scoped>
.modal-card {
  width: 60rem;
  max-width: 100%;
}

.modal-card-body {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
</style>
