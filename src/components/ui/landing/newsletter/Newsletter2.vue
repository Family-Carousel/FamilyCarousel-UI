<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="text-h3 text-lg-h2 mt-0 mt-lg-6">Get the best insights directly to your inbox</h2>
          <div class="text-h6 text-lg-h5 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
          <div class="mt-4">
            <v-text-field solo outlined label="Email" hide-details></v-text-field>
            <v-checkbox dense>
              <template #label>
                <div>I have read and agree to the</div><router-link to="#" style="margin-left: 6px">terms and conditions</router-link>.
              </template>
            </v-checkbox>
            <v-btn
              color="primary"
              class="mt-2"
              block
              large
              height="52"
            >Subscribe to the Newsletter</v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="/images/features/2.jpg" class="rounded-lg elevation-6" max-height="600"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
