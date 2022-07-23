<template>
  <v-card>
    <div class="d-flex align-center pa-3">
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
      :value="graphValues"
      fill
      auto-draw
      line-width="2"
      color="secondary"
      :gradient="diff > 0 ? ['#05c075', '#63c8a0'] : ['#ef476f', '#e7748f']"
      :auto-draw-duration="800"
      :smooth="10"
      :padding="0"
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
    }
  }
}
</script>
