<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <div style="width: 80px; height: 4px" class="mb-3 secondary" />
      <h2 class="text-h4 mb-3">{{ title }}</h2>
      <div class="text-h6 text-lg-h5">{{ subtitle }}</div>

      <v-expansion-panels
        v-model="panel"
        multiple
        accordion
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
