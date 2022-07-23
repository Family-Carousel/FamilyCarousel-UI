<template>
  <v-container class="py-6 py-lg-12 text-center">
    <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 mt-md-6">Prototype your <span class="primary--text">web project</span></h1>
    <h2 class="text-h6 text-sm-h5 grey--text text--lighten-2 mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ex facilis ad atque natus tenetur debitis qui quisquam iure amet.</h2>
    <div class="mt-6">
      <v-btn x-large outlined>Get Starter Today</v-btn>
    </div>
    <v-img :src="require('@/assets/images/shot.png')" alt="" class="rounded elevation-3 mb-6"></v-img>
  </v-container>
</template>

<style scoped>
.v-image {
  margin-top: -160px;
  top: 240px;
}

@media screen and (min-width: 700px) {
  .v-image {
    margin-top: -240px;
    top: 340px;
  }
}
</style>
