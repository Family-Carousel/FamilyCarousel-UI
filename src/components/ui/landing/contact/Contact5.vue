<template>
  <v-sheet>
    <div class="d-flex flex-column flex-md-row">
      <div class="w-full w-md-half">
        <v-img
          src="/images/features/10.jpg"
          :max-height="$vuetify.breakpoint.mdAndUp ? undefined : '300'"
          min-height="100%"
          alt=""
        ></v-img>
      </div>
      <div class="w-full w-md-half d-flex align-center">
        <div class="pa-6 pa-md-12">
          <h2 class="text-h3 text-lg-h2">Get in touch</h2>
          <div class="text-h6 text-lg-h5 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
          <v-form class="mt-2">
            <v-text-field label="Name" outlined solo></v-text-field>
            <v-text-field label="Email" outlined solo></v-text-field>
            <v-text-field label="Phone" outlined solo></v-text-field>
            <v-textarea label="Message" outlined solo></v-textarea>
            <v-btn submit x-large color="secondary" min-width="180">Send</v-btn>
          </v-form>
        </div>
      </div>
    </div>
  </v-sheet>
</template>
