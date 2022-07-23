<template>
  <v-sheet>
    <div class="d-flex flex-column flex-md-row">
      <div class="w-full w-md-half d-flex align-center">
        <div class="pa-6 pa-md-12">
          <h2 class="text-h3 text-lg-h2 mt-0 mt-xl-10">Get your startup ready for business</h2>
          <div class="text-h6 text-lg-h5 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
          <div class="mt-4">
            <router-link to="#" class="text-decoration-none font-weight-bold text-h6 mt-3">Learn More</router-link>
          </div>
        </div>
      </div>
      <div class="w-full w-md-half">
        <v-img
          src="/images/features/14.jpg"
          :max-height="$vuetify.breakpoint.mdAndUp ? '600' : '300'"
          alt=""
        ></v-img>
      </div>
    </div>
  </v-sheet>
</template>
