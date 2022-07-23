<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="(stat, i) in stats"
        :key="i"
        cols="12"
        md="6"
        xl="3"
      >
        <!-- application card -->
        <AppCard6 v-bind="stat" :graph-labels="graphLabels" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppCard6 from '@/components/ui/application/appcard/AppCard6.vue'

export default {
  components: {
    AppCard6
  },
  data() {
    return {
      stats: [{
        title: 'Visits',
        value: '13,748',
        diff: 5.23,
        graphValues: [
          12143,
          11143,
          13143,
          12143,
          12143,
          12143,
          13748
        ]
      }, {
        title: 'Conversion',
        value: '22.42%',
        diff: -3.83,
        graphValues: [
          25,
          22,
          21,
          18,
          21,
          20,
          22.42
        ]
      }, {
        title: 'Subscribers',
        value: '132',
        diff: 2.77,
        graphValues: [
          118,
          118,
          122,
          122,
          132,
          132,
          132
        ]
      }, {
        title: 'MRR',
        value: '$ 3,288.92',
        diff: 8.93,
        graphValues: [
          3000,
          3100,
          3090,
          3070,
          3200,
          3450,
          3288
        ]
      }],
      graphLabels: [
        '22 Nov',
        '23 Nov',
        '24 Nov',
        '25 Nov',
        '26 Nov',
        '27 Nov',
        '28 Nov'
      ]
    }
  }
}
</script>
