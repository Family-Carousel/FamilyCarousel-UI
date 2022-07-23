<template>
  <v-sheet>
    <v-container class="py-8">
      <div class="text-uppercase font-weight-black primary--text mb-1">
        {{ category }}
      </div>
      <div class="text-h3">{{ title }}</div>
      <div class="mt-4">
        <v-btn x-large class="my-1 w-full w-sm-auto" :to="btn1Link">{{ btn1Label }}</v-btn>
        <v-btn x-large class="my-1 mx-sm-2 w-full w-sm-auto" color="primary" :to="btn2Link">{{ btn2Label }}</v-btn>
      </div>
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
    category: {
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
    },
    btn2Label: {
      type: String,
      default: ''
    },
    btn2Link: {
      type: String,
      default: ''
    }
  }
}
</script>
