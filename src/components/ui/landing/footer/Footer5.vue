<template>
  <v-footer color="transparent">
    <v-container class="py-5">
      <v-row>
        <v-col cols="12" md="4">
          <div class="text-h6 font-weight-bold text-uppercase mb-5">About</div>
          <div class="d-flex mb-2 font-weight-bold">
            <v-icon color="secondary lighten-1" class="mr-2">mdi-map-marker-outline</v-icon>
            W Shoreline Dr, Long Beach, Los Angeles, CA 90802 USA
          </div>
          <div class="d-flex mb-2">
            <v-icon color="secondary lighten-1" class="mr-2">mdi-email-outline</v-icon>
            <a href="#" class="text-decoration-none secondary--text text--lighten-2">hello@loremcompany.com</a>
          </div>
          <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae numquam ullam non esse atque tempore. Maxime, quia sed! Incidunt, repudiandae?</div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="text-h6 font-weight-bold text-uppercase mb-5">Navigation</div>
          <div class="d-flex flex-wrap">
            <div v-for="(link, i) in links" :key="i" class="w-half body-2 mb-1 font-weight-bold text-uppercase">
              <router-link
                v-if="link.to"
                class="text-decoration-none secondary--text"
                :to="link.to"
              >{{ link.label }}</router-link>
              <a
                v-else
                class="text-decoration-none secondary--text"
                :href="link.href"
                :target="link.target || 'blank'"
              >{{ link.label }}</a>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="text-h6 font-weight-bold text-uppercase mb-5">Subscribers</div>
          <div class="text-h1 font-weight-thin">
            4343
          </div>
        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <div class="d-flex flex-column flex-md-row align-center justify-md-space-between font-weight-bold text-uppercase caption my-4">
        <div>Powered by vuetify</div>
        <div>© indielayer 2021. All Rights Reserved</div>
        <div>
          <v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
          <v-btn icon><v-icon>mdi-twitter</v-icon></v-btn>
          <v-btn icon><v-icon>mdi-linkedin</v-icon></v-btn>
          <v-btn icon><v-icon>mdi-google-plus</v-icon></v-btn>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: [{
        label: 'Overview',
        to: '#'
      }, {
        label: 'Features',
        to: '#'
      }, {
        label: 'Pricing',
        to: '#'
      }, {
        label: 'Documentation',
        to: '#'
      }, {
        label: 'News',
        to: '#'
      }, {
        label: 'FAQ',
        to: '#'
      }, {
        label: 'About us',
        to: '#'
      }, {
        label: 'Carrers',
        to: '#'
      }, {
        label: 'Press',
        to: '#'
      }]
    }
  }
}
</script>
