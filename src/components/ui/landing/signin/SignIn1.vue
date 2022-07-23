<template>
  <v-container class="py-6">
    <div class="text-center">
      <h2 class="text-h4 mb-3">Your Account</h2>
      <div style="width: 80px; height: 4px" class="mb-3 secondary mx-auto" />
    </div>

    <v-card class="pa-3 mx-auto" max-width="500">
      <v-card-title>
        <v-divider class="my-1"></v-divider>
        <div class="mx-2">Sign In</div>
        <v-divider class="my-1"></v-divider>
      </v-card-title>
      <v-card-text>
        <v-text-field label="Email" outlined></v-text-field>
        <v-text-field label="Password" outlined hide-details></v-text-field>
        <v-checkbox dense label="Remember me"></v-checkbox>
        <v-btn block class="success" x-large>Sign In</v-btn>
        <div class="text-center mt-2 text-body-2">
          <router-link to="#">Forgot your password?</router-link>
        </div>

        <div class="d-flex my-3">
          <v-divider class="my-1"></v-divider>
          <div class="text-overline mx-1">Or Sign In With</div>
          <v-divider class="my-1"></v-divider>
        </div>

        <div class="d-flex justify-space-between">
          <v-btn outlined large class="flex-grow-1" color="secondary lighten-2">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn outlined large class="flex-grow-1 mx-2" color="secondary lighten-2">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn outlined large class="flex-grow-1" color="secondary lighten-2">
            <v-icon>mdi-google</v-icon>
          </v-btn>
        </div>
        <div class="text-overline text-uppercase mt-3 text-center">
          <v-responsive max-width="280" class="mx-auto">
            By signing in, you agree to the
            <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>
          </v-responsive>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
