<template>
  <v-card class="pa-3 text-center">
    <div class="overline mb-2">{{ title }}</div>
    <div class="text-h4">{{ value }}</div>
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
    }
  }
}
</script>
