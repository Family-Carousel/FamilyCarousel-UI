<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" md="6">
          <v-img src="/images/features/19.jpg" contain class="rounded" max-height="400"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-hover v-slot:default="{ hover }" >
            <v-sheet
              :elevation="hover ? 2 : 0"
              rounded
              class="feature-sheet pa-2"
            >
              <div class="title">Build your startup</div>
              <div class="text-body-1 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos! <a href="#" class="text-decoration-none">Learn more.</a></div>
            </v-sheet>
          </v-hover>
          <v-hover v-slot:default="{ hover }" >
            <v-sheet
              :elevation="hover ? 2 : 0"
              rounded
              class="feature-sheet mt-5 pa-2"
            >
              <div class="title">Get started today</div>
              <div class="text-body-1 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
            </v-sheet>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style scoped>
.feature-sheet {
  transition: box-shadow 0.2s ease-in-out;
}
</style>
