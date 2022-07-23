<template>
  <v-footer>
    <v-container>
      <div class="d-flex flex-column flex-md-row align-center justify-md-space-between">
        <div class="d-flex flex-column flex-md-row align-center">
          <div class="d-flex align-center">
            <img src="/images/v-logo-small.png" alt="" height="48" class="mr-1">
            <span class="font-weight-black text-uppercase text-h5 text-truncate">
              Carbon UI
            </span>
          </div>
          <div class="my-3 my-md-0">
            <router-link to="#" class="text-decoration-none ml-md-4 secondary--text text--lighten-3">Get Started</router-link>
            <router-link to="#" class="text-decoration-none ml-4 secondary--text text--lighten-3">Services</router-link>
            <router-link to="#" class="text-decoration-none ml-4 secondary--text text--lighten-3">Pricing</router-link>
          </div>
        </div>
        <div>
          <v-btn icon color="secondary lighten-3" class="ml-2"><v-icon>mdi-facebook</v-icon></v-btn>
          <v-btn icon color="secondary lighten-3" class="ml-2"><v-icon>mdi-twitter</v-icon></v-btn>
          <v-btn icon color="secondary lighten-3" class="ml-2"><v-icon>mdi-linkedin</v-icon></v-btn>
          <v-btn icon color="secondary lighten-3" class="ml-2"><v-icon>mdi-google-plus</v-icon></v-btn>
        </div>
      </div>
      <v-divider class="my-3"></v-divider>
      <div class="d-flex flex-column flex-md-row align-center justify-md-space-between body-2">
        <div class="my-1">
          <router-link to="#" class="text-decoration-none mr-2 secondary--text text--lighten-3">Privacy Policy</router-link>
          <router-link to="#" class="text-decoration-none secondary--text text--lighten-3">Terms of Service</router-link>
        </div>
        <div class="my-1 secondary--text">© indielayer 2021. All Rights Reserved</div>
        <div class="my-1">
          <router-link to="#" class="text-decoration-none secondary--text text--lighten-3">hello@loremcompany.com</router-link>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>
