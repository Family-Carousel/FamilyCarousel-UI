<template>
  <v-container class="py-2 py-md-6">
    <v-row>
      <v-col cols="12" md="6" lg="7">
        <h1 class="text-h4 text-sm-h3 text-lg-h1 mt-xl-4">Prototype your next <span class="primary--text">web project</span></h1>
        <h2 class="text-h6 text-sm-h5 secondary--text mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ex facilis ad atque natus tenetur debitis qui quisquam iure amet.</h2>
        <v-btn
          large
          color="accent"
          class="mt-4"
        >Get Started</v-btn>
      </v-col>
      <v-col cols="12" md="6" lg="5" class="d-none d-md-block">
        <v-img
          class="rounded-lg mt-2"
          max-height="360"
          contain
          :src="require('@/assets/images/hero4.2.svg')"
          alt=""
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
