<template>
  <v-card outlined flat class="h-full d-flex flex-column">
    <v-card-title class="font-weight-bold">
      <div class="flex-grow-1 text-truncate">
        {{ title }}
        <v-divider></v-divider>
      </div>
    </v-card-title>
    <v-card-text class="flex-grow-1">
      <div>
        <v-chip
          v-for="(tag, j) in tags"
          :key="j"
          class="mr-1 mb-2"
          small
        >
          {{ tag }}
        </v-chip>
      </div>
      <div>
        {{ description }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="primary" :to="to">View and Apply</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    },
    description: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: '#'
    }
  }
}
</script>
