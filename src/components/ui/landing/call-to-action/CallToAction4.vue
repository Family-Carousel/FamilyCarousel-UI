<template>
  <v-sheet>
    <v-container class="py-8">
      <div class="d-flex flex-column flex-lg-row justify-space-between align-center">
        <div class="text-center text-lg-left">
          <div class="text-h3">{{ title }}</div>
          <div class="text-h3 primary--text">{{ subtitle }}</div>
        </div>
        <div class="mt-4 mt-lg-0">
          <v-btn x-large class="my-1 mx-sm-2 w-full w-sm-auto" color="primary" :to="btn1Link">{{ btn1Label }}</v-btn>
          <v-btn x-large class="my-1 w-full w-sm-auto" :to="btn2Link">{{ btn2Label }}</v-btn>
        </div>
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
    subtitle: {
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
