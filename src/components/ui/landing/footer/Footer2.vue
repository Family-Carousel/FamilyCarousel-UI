<template>
  <v-footer color="transparent">
    <v-container class="py-5">
      <v-row>
        <v-col cols="12" md="4">
          <div>
            <router-link to="#" class="d-flex align-center text-decoration-none mr-2">
              <span class="font-weight-black text-uppercase text-h5 text-truncate">
                Carbon UI
              </span>
            </router-link>
          </div>
          <div class="text-body-1 mt-4 secondary--text text--lighten-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil debitis at dolorum.</div>
        </v-col>
        <v-col cols="12" md="8">
          <div class="text-center text-md-right">
            <v-btn fab small color="secondary" class="mx-2">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn fab small color="secondary">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
          </div>
          <div class="text-center text-md-right mt-4">
            <router-link v-for="(link, i) in links" :key="i" class="font-weight-bold text-decoration-none d-inline-block text-truncate text-h6 ml-2" to="#">{{ link.title }}</router-link>
          </div>
        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <div class="text-center body-2 font-weight-bold secondary--text text--lighten-2">
        Indielayer © All Rights Reserved
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: [{
        title: 'Home',
        to: '#'
      }, {
        title: 'About us',
        to: '#'
      }, {
        title: 'Services',
        to: '#'
      }, {
        title: 'Team',
        to: '#'
      }, {
        title: 'Blog',
        to: '#'
      }, {
        title: 'Contact us',
        to: '#'
      }]
    }
  }
}
</script>
