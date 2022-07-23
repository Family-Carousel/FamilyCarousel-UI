<template>
  <v-footer>
    <v-container class="py-5">
      <v-row>
        <v-col cols="12" md="4">
          <div class="mb-2">
            <router-link to="#" class="d-flex align-center text-decoration-none mr-2">
              <span class="font-weight-black text-uppercase text-h5 text-truncate">
                Carbon UI
              </span>
            </router-link>
          </div>
          <div class="text-body-1 secondary--text text--lighten-2">
            <div>W Shoreline Dr, Long Beach, Los Angeles, CA 90802 USA</div>
            <div class="mt-2">
              <v-btn icon color="secondary lighten-2" class="mr-1"><v-icon>mdi-facebook</v-icon></v-btn>
              <v-btn icon color="secondary lighten-2" class="mr-1"><v-icon>mdi-twitter</v-icon></v-btn>
              <v-btn icon color="secondary lighten-2" class="mr-1"><v-icon>mdi-linkedin</v-icon></v-btn>
              <v-btn icon color="secondary lighten-2" class="mr-1"><v-icon>mdi-google-plus</v-icon></v-btn>
            </div>
          </div>
        </v-col>
        <v-col
          v-for="(item, i) in footer"
          :key="i"
          cols="12"
          md="2"
        >
          <div class="mb-3 body-2 font-weight-bold secondary--text text--lighten-3 text-uppercase">{{ item.title }}</div>

          <div v-for="(link, j) in item.links" :key="j" class="my-1 body-1 font-weight-bold">
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
        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <div class="d-flex flex-column flex-sm-row align-center justify-center mt-4 overline">
        <div class="secondary--text">© indielayer 2021</div>
        <router-link to="#" class="text-decoration-none ml-sm-2 secondary--text text--lighten-3">Privacy Policy</router-link>
        <router-link to="#" class="text-decoration-none ml-sm-2 secondary--text text--lighten-3">Terms of Service</router-link>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      footer: [{
        title: 'Product',
        links: [{
          label: 'Overview',
          to: '#'
        }, {
          label: 'Features',
          to: '#'
        }, {
          label: 'Pricing',
          to: '#'
        }]
      }, {
        title: 'Resources',
        links: [{
          label: 'Documentation',
          to: '#'
        }, {
          label: 'News',
          to: '#'
        }, {
          label: 'FAQ',
          to: '#'
        }, {
          label: 'Packages',
          to: '#'
        }, {
          label: 'Components',
          to: '#'
        }]
      }, {
        title: 'Company',
        links: [{
          label: 'About us',
          to: '#'
        }, {
          label: 'Carrers',
          to: '#'
        }, {
          label: 'Press',
          to: '#'
        }]
      }, {
        title: 'Support',
        links: [{
          label: 'Guides',
          to: '#'
        }, {
          label: 'Help Center',
          to: '#'
        }, {
          label: 'Status',
          to: '#'
        }]
      }]
    }
  }
}
</script>
