<template>
  <v-card class="pa-3">
    <div class="d-flex align-center">
      <div class="font-weight-bold secondary--text text--lighten-1 mb-2">{{ title }}</div>
      <v-spacer></v-spacer>

      <span class="text-h4">{{ value }}</span>

      <span class="text-body-2 font-weight-bold ml-2">
        <span>
          <span v-if="diff === 0">
            {{ diff }}%
          </span>
          <span v-else-if="diff > 0" class="success--text">
            <v-icon small color="success">mdi-arrow-top-right</v-icon> {{ diff }}%
          </span>
          <span v-else class="error--text">
            <v-icon small color="error">mdi-arrow-bottom-right</v-icon> {{ Math.abs(diff) }}%
          </span>
        </span>
      </span>
    </div>

    <v-sparkline
      :labels="graphLabels"
      :value="graphValues"
      auto-draw
      color="secondary"
      line-width="2"
      padding="18"
    ></v-sparkline>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    diff: {
      type: Number,
      default: 0
    },
    graphValues: {
      type: Array,
      default: () => []
    },
    graphLabels: {
      type: Array,
      default: () => []
    }
  }
}
</script>
