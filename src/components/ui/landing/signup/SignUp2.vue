<template>
  <v-container class="py-6">
    <v-responsive max-width="700" class="mx-auto text-center">
      <div class="text-overline secondary--text mb-3">Account</div>
      <h2 class="text-h3 text-lg-h2 mb-4">Sign up today</h2>
    </v-responsive>

    <v-card class="pa-2 mx-auto" max-width="600" color="transparent" flat>
      <v-card-text>
        <div class="d-flex flex-column flex-md-row">
          <v-text-field label="First Name" solo outlined class="mr-md-2"></v-text-field>
          <v-text-field label="Last Name" solo outlined></v-text-field>
        </div>
        <v-text-field label="Email" solo outlined></v-text-field>
        <v-text-field label="Password" solo outlined></v-text-field>
        <v-btn block class="primary" x-large>Create Account</v-btn>

        <div class="d-flex my-3">
          <v-divider class="my-1"></v-divider>
          <div class="text-overline mx-1">Or Sign Up With</div>
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
            By signing up, you agree to the
            <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>
          </v-responsive>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
