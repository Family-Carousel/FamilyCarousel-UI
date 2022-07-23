<template>
  <v-footer>
    <v-container>
      <div class="d-flex flex-wrap align-center justify-center font-weight-bold text-uppercase body-2">
        <router-link to="#" class="text-decoration-none mx-2 mb-1">Services</router-link>
        <router-link to="#" class="text-decoration-none mx-2 mb-1">Products</router-link>
        <router-link to="#" class="text-decoration-none mx-2 mb-1">Pricing</router-link>
        <router-link to="#" class="text-decoration-none mx-2 mb-1">About us</router-link>
      </div>
      <div class="d-flex align-center justify-center mt-4">
        <v-btn icon color="secondary lighten-2" class="mx-1"><v-icon>mdi-facebook</v-icon></v-btn>
        <v-btn icon color="secondary lighten-2" class="mx-1"><v-icon>mdi-twitter</v-icon></v-btn>
        <v-btn icon color="secondary lighten-2" class="mx-1"><v-icon>mdi-linkedin</v-icon></v-btn>
        <v-btn icon color="secondary lighten-2" class="mx-1"><v-icon>mdi-google-plus</v-icon></v-btn>
      </div>
      <div class="d-flex flex-column flex-sm-row align-center justify-center mt-4 overline">
        <div class="secondary--text">© indielayer 2021</div>
        <router-link to="#" class="text-decoration-none ml-sm-2 secondary--text text--lighten-3">Privacy Policy</router-link>
        <router-link to="#" class="text-decoration-none ml-sm-2 secondary--text text--lighten-3">Terms of Service</router-link>
      </div>
    </v-container>
  </v-footer>
</template>
