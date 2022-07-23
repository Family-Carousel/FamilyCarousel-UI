<template>
  <v-sheet class="bg-sheet" dark>
    <v-container class="text-center py-8">
      <h1 class="font-weight-light">Purchase now and get lifetime updates</h1>

      <v-btn color="accent" x-large class="my-5">Purchase Now</v-btn>

      <div class="text-body-1 text-md-h5 font-weight-light">
        <v-responsive max-width="800" class="mx-auto">
          Each purchase comes with six months support<br>and a lifetime of free content and bug-fix updates
        </v-responsive>
      </div>
    </v-container>
  </v-sheet>
</template>

<style scoped>
.bg-sheet {
  background: linear-gradient(90deg, rgb(54 90 127) 0%, rgb(11 20 38) 100%);
}
</style>
