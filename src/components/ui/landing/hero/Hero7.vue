<template>
  <v-container class="py-6">
    <div class="d-flex flex-column flex-lg-row">
      <div class="d-flex align-center">
        <div class="pr-6">
          <h1 class="text-h4 text-sm-h3 text-lg-h1 mt-xl-4">A better way to build your next <span class="primary--text">web project</span></h1>
          <h2 class="text-h6 text-sm-h5 secondary--text mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ex facilis ad atque natus tenetur debitis qui quisquam iure amet.</h2>
          <v-btn x-large color="secondary" class="mt-6">Documentation</v-btn>
        </div>
      </div>
      <div class="mt-6 mt-lg-0">
        <v-card :width="$vuetify.breakpoint.lgAndUp ? '500' : undefined" class="pa-3">
          <v-card-title>
            <v-divider class="my-1"></v-divider>
            <div class="mx-2">New Account</div>
            <v-divider class="my-1"></v-divider>
          </v-card-title>
          <v-card-text>
            <v-text-field label="First Name" outlined></v-text-field>
            <v-text-field label="Last Name" outlined></v-text-field>
            <v-text-field label="Email" outlined></v-text-field>
            <v-text-field label="Password" outlined></v-text-field>
            <v-btn block class="success" x-large>Create Account</v-btn>

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
                By signing up, you agree to the
                <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>
              </v-responsive>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>
