<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-responsive max-width="1200" class="mx-auto text-center">
        <h2 class="text-h3 text-lg-h2">{{ title }}</h2>
        <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
        <div class="text-h6 text-lg-h5">{{ subtitle }}</div>
      </v-responsive>

      <v-row class="mt-6">
        <v-col
          v-for="(item, i) in faq"
          :key="i"
          cols="12"
          lg="6"
        >
          <div class="text-h5 font-weight-bold">
            {{ item.question }}
          </div>
          <div class="text-h6 secondary--text mt-2">
            {{ item.answer }}
          </div>
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
