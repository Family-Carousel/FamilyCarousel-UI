<template>
  <v-sheet>
    <v-container class="py-8">
      <div>
        <div class="text-h4">Receive updates in your inbox</div>
        <div class="text-h4 primary--text">Sign up today</div>
      </div>
      <v-responsive max-width="800" class="mt-4">
        <div class="d-flex flex-column flex-sm-row w-full">
          <v-text-field
            placeholder="Your email"
            height="48"
            class="mr-sm-2 mb-2 mb-sm-0 flex-grow-1"
          ></v-text-field>
          <v-btn x-large color="primary">Subscribe</v-btn>
        </div>
      </v-responsive>
    </v-container>
  </v-sheet>
</template>
