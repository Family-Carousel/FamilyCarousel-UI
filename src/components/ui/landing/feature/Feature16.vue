<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="text-h3 text-lg-h2 mt-xl-4">Get your startup ready for business</h2>
          <div class="text-h6 text-lg-h5 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
          <v-responsive class="mt-8" max-width="600">
            <div class="d-flex flex-column flex-sm-row w-full">
              <v-text-field
                outlined
                solo
                label="Your email"
                height="64"
                class="mr-sm-2"
              ></v-text-field>
              <v-btn x-large color="secondary" min-width="180">Let's go</v-btn>
            </div>
          </v-responsive>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-2">
            <v-list two-line>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon small class="success lighten-4 success--text">mdi-check</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Lifetime updates</v-list-item-title>
                  <v-list-item-subtitle>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, nesciunt?</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider inset></v-divider>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon small class="yellow lighten-4 yellow--text text--darken-3">mdi-check</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Fast prototyping</v-list-item-title>
                  <v-list-item-subtitle>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, nesciunt?</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider inset></v-divider>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon small class="primary lighten-5 primary--text">mdi-check</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Premium support</v-list-item-title>
                  <v-list-item-subtitle>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, nesciunt?</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider inset></v-divider>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon small class="orange lighten-4 orange--text text--darken-1">mdi-check</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Ready to use components</v-list-item-title>
                  <v-list-item-subtitle>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, nesciunt?</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider inset></v-divider>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon small class="pink lighten-4 pink--text text--darken-1">mdi-check</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Startup friendly</v-list-item-title>
                  <v-list-item-subtitle>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, nesciunt?</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
