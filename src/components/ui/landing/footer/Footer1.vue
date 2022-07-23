<template>
  <v-footer>
    <v-container class="py-5">
      <v-row>
        <v-col
          v-for="(item, i) in footer"
          :key="i"
          cols="12"
          md="2"
        >
          <div class="mb-3">{{ item.title }}</div>

          <div v-for="(link, j) in item.links" :key="j" class="my-1 body-2">
            <router-link
              v-if="link.to"
              class="text-decoration-none"
              :to="link.to"
            >{{ link.label }}</router-link>
            <a
              v-else
              class="text-decoration-none"
              :href="link.href"
              :target="link.target || 'blank'"
            >{{ link.label }}</a>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="font-weight-bold mb-3">LoremCompany</div>
          <div class="text-body-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, at!</div>
        </v-col>
      </v-row>
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
        title: 'Contact',
        links: [{
          label: 'Contact us',
          to: '#'
        }, {
          label: 'Offices',
          to: '#'
        }, {
          label: 'Twitter',
          href: '#'
        }]
      }]
    }
  }
}
</script>
