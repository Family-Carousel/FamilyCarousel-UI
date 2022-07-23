<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="(stat, index) in stats"
        :key="index"
        cols="12"
        md="6"
        xl="3"
      >
        <!-- application card -->
        <AppCard5 v-bind="stat" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppCard5 from '@/components/ui/application/appcard/AppCard5.vue'

export default {
  components: {
    AppCard5
  },
  data() {
    return {
      stats: [{
        title: 'Visits',
        value: '13,748',
        diff: 5.23
      }, {
        title: 'Conversion',
        value: '22.42%',
        diff: -3.83
      }, {
        title: 'Subscribers',
        value: '132',
        diff: 2.77
      }, {
        title: 'MRR',
        value: '$ 3,288.92',
        diff: 8.93
      }]
    }
  }
}
</script>
