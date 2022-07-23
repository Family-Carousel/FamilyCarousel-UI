<template>
  <v-footer>
    <v-container class="py-5">
      <div class="my-4 mt-md-0 text-center">
        <v-btn icon color="secondary" class="mx-1"><v-icon>mdi-facebook</v-icon></v-btn>
        <v-btn icon color="secondary" class="mx-1"><v-icon>mdi-github</v-icon></v-btn>
        <v-btn icon color="secondary" class="mx-1"><v-icon>mdi-twitter</v-icon></v-btn>
        <v-btn icon color="secondary" class="mx-1"><v-icon>mdi-linkedin</v-icon></v-btn>
        <v-btn icon color="secondary" class="mx-1"><v-icon>mdi-google-plus</v-icon></v-btn>
      </div>
      <div class="d-flex flex-column flex-md-row justify-center text-center text-md-left">
        <div
          v-for="(item, i) in footer"
          :key="i"
          class="mx-3"
        >
          <div class="text-h5 font-weight-bold mb-3 mt-3 mt-md-0">{{ item.title }}</div>
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
        </div>
      </div>

      <v-divider class="my-4"></v-divider>

      <div class="d-flex flex-column flex-sm-row align-center justify-center overline">
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
        title: 'Why us?',
        links: [{
          label: 'Features',
          to: '#'
        }, {
          label: 'Team',
          to: '#'
        }, {
          label: 'Awards',
          to: '#'
        }, {
          label: 'Releases',
          to: '#'
        }, {
          label: 'Solutions',
          to: '#'
        }]
      }, {
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
          label: 'Contact Sales',
          to: '#'
        }, {
          label: 'Support Options',
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
