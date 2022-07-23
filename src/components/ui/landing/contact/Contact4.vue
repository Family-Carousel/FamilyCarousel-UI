<template>
  <v-sheet>
    <v-container class="py-8">
      <v-responsive max-width="900" class="mx-auto">
        <div class="text-center">
          <h3 class="text-h3">Contact Us</h3>
          <div class="text-h6 text-lg-h5 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Lorem ipsum dolor sit amet.</div>
        </div>

        <v-divider class="my-3"></v-divider>

        <div class="font-weight-bold text-body-1">
          <div class="d-flex align-center mt-3">
            <v-icon>mdi-map-marker-outline</v-icon>
            <span class="ml-1">W Shoreline Dr, Long Beach, Los Angeles, CA 90802 USA</span>
          </div>
          <div class="d-flex align-center mt-3">
            <v-icon>mdi-phone-outline</v-icon>
            <span class="ml-1">
              <a href="#" class="text-decoration-none">+03 000 000 000 555 55</a>
            </span>
          </div>
          <div class="d-flex align-center mt-3">
            <v-icon>mdi-email-outline</v-icon>
            <span class="ml-1">
              <a href="#" class="text-decoration-none">hello@loremcompany.com</a>
            </span>
          </div>
        </div>

        <v-divider class="my-3"></v-divider>

        <v-form class="mt-2">
          <v-text-field label="Name" outlined></v-text-field>
          <v-text-field label="Email" outlined></v-text-field>
          <v-text-field label="Phone" outlined></v-text-field>
          <v-textarea label="Message" outlined></v-textarea>
          <v-btn submit x-large color="secondary" min-width="180">Send</v-btn>
        </v-form>
      </v-responsive>
    </v-container>
  </v-sheet>
</template>
