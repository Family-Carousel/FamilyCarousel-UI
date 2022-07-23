<template>
  <v-app>
    <v-main>
      <Layout>
        <nuxt />
      </Layout>
    </v-main>
  </v-app>
</template>

<script>
import Layout from '@/components/ui/application/layout/Layout2.vue'

export default {
  components: {
    Layout
  }
}
</script>
