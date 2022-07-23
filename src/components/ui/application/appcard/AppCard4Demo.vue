<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="(stat, index) in stats"
        :key="index"
        cols="12"
        md="6"
        lg="3"
      >
        <!-- application card -->
        <AppCard4 v-bind="stat" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppCard4 from '@/components/ui/application/appcard/AppCard4.vue'

export default {
  components: {
    AppCard4
  },
  data() {
    return {
      stats: [{
        title: 'Visits',
        value: '13,748'
      }, {
        title: 'Conversion',
        value: '22.42%'
      }, {
        title: 'Subscribers',
        value: '132'
      }, {
        title: 'MRR',
        value: '$ 3,288.92'
      }]
    }
  }
}
</script>
