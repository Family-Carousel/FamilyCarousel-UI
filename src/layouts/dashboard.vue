<template>
  <v-app>
    <v-main>
      <Layout>
        <nuxt />
      </Layout>
      <Snackbar></Snackbar>
    </v-main>
  </v-app>
</template>

<script>
import Layout from "@/components/ui/application/layout/Layout2.vue";
import Snackbar from "~/components/snackbarComponent";

export default {
  components: {
    Layout,
    Snackbar,
  },
};
</script>
