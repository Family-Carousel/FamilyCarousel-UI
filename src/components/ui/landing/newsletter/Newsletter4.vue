<template>
  <v-sheet>
    <v-container class="py-8">
      <v-row>
        <v-col cols="12" lg="6">
          <h4 class="text-h4">Receive updates in your inbox</h4>
          <div class="text-h6 text-lg-h5 mt-2">Sign up today</div>
        </v-col>
        <v-col cols="12" lg="6">
          <div class="d-flex flex-column flex-sm-row w-full">
            <v-text-field
              solo
              hide-details
              placeholder="Your email"
              height="64"
              outlined
              class="mr-sm-2 mb-2 mb-sm-0 flex-grow-1"
            ></v-text-field>
            <v-btn x-large color="primary">Subscribe</v-btn>
          </div>
          <v-checkbox dense>
            <template #label>
              <div class="text-caption">
                <span>I have read and agree to the</span><router-link to="#" style="margin-left: 6px">terms and conditions</router-link>.
              </div>
            </template>
          </v-checkbox>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
