<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <div class="text-center">
        <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Support</div>
        <h2 class="text-h3 text-lg-h2">{{ title }}</h2>
        <v-responsive max-width="1200" class="mx-auto">
          <div class="text-h6 text-lg-h5 mt-4">{{ subtitle }}</div>
        </v-responsive>
      </div>

      <v-expansion-panels
        v-model="panel"
        multiple
        class="mt-8"
      >
        <v-expansion-panel
          v-for="(item, i) in faq"
          :key="i"
        >
          <v-expansion-panel-header class="text-h5">
            {{ item.question }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="text-h6 secondary--text">
            {{ item.answer }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
    faq: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      panel: [0]
    }
  }
}
</script>
