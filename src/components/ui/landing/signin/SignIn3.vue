<template>
  <v-container class="py-6">
    <v-responsive max-width="700" class="mx-auto text-center">
      <div class="text-overline secondary--text mb-3">Account</div>
      <h2 class="text-h3 text-lg-h2 mb-6">Your Account</h2>
    </v-responsive>

    <v-card class="pa-4 mx-auto" max-width="600">
      <v-card-text>
        <v-text-field label="Email" outlined></v-text-field>
        <v-text-field label="Password" outlined hide-details></v-text-field>
        <v-checkbox dense label="Remember me"></v-checkbox>
        <v-btn block class="secondary" x-large>Sign In</v-btn>
        <div class="text-center mt-2 text-body-2">
          <router-link to="#">Forgot your password?</router-link>
        </div>

        <div class="d-flex my-3">
          <v-divider class="my-1"></v-divider>
          <div class="text-overline mx-1">Or Sign In With</div>
          <v-divider class="my-1"></v-divider>
        </div>

        <div class="d-flex justify-space-between">
          <v-btn outlined large class="flex-grow-1" color="secondary lighten-1">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn outlined large class="flex-grow-1 mx-2" color="secondary lighten-1">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn outlined large class="flex-grow-1" color="secondary lighten-1">
            <v-icon>mdi-google</v-icon>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
    <div class="text-overline text-uppercase mt-3 text-center">
      By signing in, you agree to the
      <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>
    </div>
  </v-container>
</template>
