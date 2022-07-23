<template>
  <v-container class="py-6">
    <v-row>
      <v-col cols="12" md="6" lg="7">
        <h1 class="text-h4 text-sm-h3 text-lg-h1 mt-xl-4">A better way to build your next <span class="primary--text">web project</span></h1>
        <h2 class="text-h6 text-sm-h5 secondary--text mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ex facilis ad atque natus tenetur debitis qui quisquam iure amet.</h2>
        <div class="mt-4 mt-xl-10">
          <v-sheet elevation="2" rounded class="d-flex w-full">
            <v-text-field
              placeholder="Products name or keywords"
              hide-details
              flat
              solo
              height="80"
              full-width
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
            <v-btn x-large class="ma-1 mx-sm-1 w-sm-auto" color="success">Search</v-btn>
          </v-sheet>
        </div>
      </v-col>
      <v-col cols="12" md="6" lg="5" class="d-none d-md-block">
        <v-img class="rounded-lg" :aspect-ratio="$vuetify.breakpoint.lgAndDown ? 1 : undefined" :src="require('@/assets/images/hero.jpg')" alt="">
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
