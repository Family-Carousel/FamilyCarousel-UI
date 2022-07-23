<template>
  <v-sheet>
    <v-container class="py-8 text-center">
      <div class="text-h3">{{ title }}</div>
      <v-btn large class="mt-4 mx-sm-2 w-full w-sm-auto" color="primary" :to="btn1Link">{{ btn1Label }}</v-btn>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    btn1Label: {
      type: String,
      default: ''
    },
    btn1Link: {
      type: String,
      default: ''
    }
  }
}
</script>
