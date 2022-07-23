<template>
  <v-sheet>
    <v-container class="py-8">
      <div class="d-flex flex-column flex-lg-row align-center">
        <div class="text-h4 mr-2">Start your free trial today</div>
        <div class="d-flex flex-column flex-sm-row w-full mt-4 mt-lg-0">
          <v-text-field
            solo
            hide-details
            placeholder="Enter your email"
            height="64"
            full-width
            class="mr-sm-2 mb-2 mb-sm-0 flex-grow-1"
          ></v-text-field>
          <v-btn x-large color="primary">Join Now</v-btn>
        </div>
      </div>
    </v-container>
  </v-sheet>
</template>
