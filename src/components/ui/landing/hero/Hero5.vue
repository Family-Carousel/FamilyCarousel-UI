<template>
  <div class="d-flex flex-column flex-md-row">
    <div class="w-full w-md-half d-flex align-center">
      <div class="pa-6 pa-md-12">
        <h1 class="text-h4 text-sm-h3 text-lg-h1 mt-xl-4">Prototype your next <span class="primary--text">web project</span></h1>
        <h2 class="text-h6 text-sm-h5 secondary--text mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ex facilis ad atque natus tenetur debitis qui quisquam iure amet.</h2>
        <div class="mt-6">
          <v-btn x-large class="my-1 mr-sm-1 w-full w-sm-auto" color="primary">Get started</v-btn>
          <v-btn x-large class="my-1 ml-sm-1 w-full w-sm-auto">Learn more</v-btn>
        </div>
      </div>
    </div>
    <div class="w-full w-md-half">
      <v-img
        :src="require('@/assets/images/vertical.jpg')"
        :max-height="$vuetify.breakpoint.mdAndUp ? 'calc(100vh - 80px)' : '400'"
        alt=""
      ></v-img>
    </div>
  </div>
</template>
