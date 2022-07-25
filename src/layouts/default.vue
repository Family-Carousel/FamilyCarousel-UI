<template>
  <v-app>
    <v-main>
      <Toolbar />
      <nuxt />
      <Snackbar></Snackbar>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "~/components/toolbarComponent";
import Snackbar from "~/components/snackbarComponent";

export default {
  components: { Snackbar, Toolbar },
};
</script>
