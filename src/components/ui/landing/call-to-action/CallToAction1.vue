<template>
  <v-container class="text-center py-8">
    <v-badge
      :value="discount"
      :content="discount"
      overlap
      class="font-weight-bold"
      color="error"
      offset-x="32px"
    >
      <v-btn color="primary" x-large :to="link">{{ label }}</v-btn>
    </v-badge>

    <div class="text-body-1 text-md-h5 mt-5">
      <v-responsive max-width="800" class="mx-auto grey--text justify-center" v-html="content" />
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '#'
    },
    label: {
      type: String,
      default: 'Purchase Now'
    },
    discount: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>
