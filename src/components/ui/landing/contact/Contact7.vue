<template>
  <v-container class="py-8">
    <v-responsive class="mx-auto" max-width="900">
      <v-card class="pa-4 pa-md-8">
        <h2 class="text-h3 text-lg-h2">Have any questions?</h2>
        <div class="text-h6 text-lg-h5 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>

        <div class="mt-6">
          <v-text-field label="Email" outlined solo></v-text-field>
          <v-textarea label="Message" outlined solo></v-textarea>
          <v-btn submit x-large color="secondary" min-width="180">Send</v-btn>
        </div>
      </v-card>
    </v-responsive>
  </v-container>
</template>
