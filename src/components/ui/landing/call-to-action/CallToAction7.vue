<template>
  <v-sheet>
    <v-container class="py-8 text-center">
      <div class="text-overline secondary--text mb-3">{{ subtitle }}</div>
      <div class="text-h3">{{ title }}</div>

      <div class="mt-4">
        <v-btn x-large outlined class="my-1 w-full w-sm-auto" :to="btn1Link">
          {{ btn1Label }}
          <v-icon right>mdi-menu-right</v-icon>
        </v-btn>
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
    }
  }
}
</script>
