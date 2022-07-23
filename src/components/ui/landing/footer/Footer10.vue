<template>
  <v-footer>
    <v-container class="py-5">
      <v-row>
        <v-col
          v-for="(item, i) in footer"
          :key="i"
          cols="12"
          sm="3"
          md="2"
        >
          <div class="text-h6 text-lg-h5 font-weight-bold">{{ item.title }}</div>
          <div style="width: 60px; height: 4px" class="mb-4 mt-1 secondary" />

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
        <v-col cols="12" md="4">
          <div class="text-h6 text-lg-h5 font-weight-bold">Newsletter</div>
          <div style="width: 60px; height: 4px" class="mb-4 mt-1 secondary" />
          <div class="text-body-1 mb-1">Get the latest news and resources directly in your inbox.</div>
          <div class="d-flex flex-column flex-lg-row w-full">
            <v-text-field
              outlined
              solo
              label="Your email"
              dense
              height="44"
              class="mr-lg-2"
            ></v-text-field>
            <v-btn large color="secondary">Subscribe</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <div class="d-flex flex-column flex-sm-row align-center justify-space-between mt-4 overline">
        <div class="d-flex flex-column flex-sm-row align-center">
          <div class="secondary--text">© indielayer 2021</div>
          <router-link to="#" class="text-decoration-none ml-sm-2 secondary--text text--lighten-3">Privacy Policy</router-link>
          <router-link to="#" class="text-decoration-none ml-sm-2 secondary--text text--lighten-3">Terms of Service</router-link>
        </div>
        <div class="mt-2 mt-md-0">
          <v-btn icon color="secondary lighten-2" class="ml-1"><v-icon>mdi-facebook</v-icon></v-btn>
          <v-btn icon color="secondary lighten-2" class="ml-1"><v-icon>mdi-github</v-icon></v-btn>
          <v-btn icon color="secondary lighten-2" class="ml-1"><v-icon>mdi-twitter</v-icon></v-btn>
          <v-btn icon color="secondary lighten-2" class="ml-1"><v-icon>mdi-linkedin</v-icon></v-btn>
          <v-btn icon color="secondary lighten-2" class="ml-1"><v-icon>mdi-google-plus</v-icon></v-btn>
        </div>
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
