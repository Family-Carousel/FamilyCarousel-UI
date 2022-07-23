<template>
  <v-sheet color="transparent">
    <v-container class="py-4 py-lg-8">
      <div class="text-center">
        <div class="text-overline secondary--text mb-3">Support</div>
        <h2 class="text-h3 text-lg-h2">{{ title }}</h2>
        <v-responsive max-width="1200" class="mx-auto">
          <div class="text-h6 text-lg-h5 mt-4">{{ subtitle }}</div>
        </v-responsive>
      </div>
      <v-row class="mt-6">
        <v-col
          v-for="(item, i) in faq"
          :key="i"
          cols="12"
          lg="6"
        >
          <v-card class="pa-3">
            <div class="text-h5">
              {{ item.question }}
            </div>
            <div class="text-h6 secondary--text mt-2">
              {{ item.answer }}
            </div>
          </v-card>
        </v-col>
      </v-row>
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
  }
}
</script>
