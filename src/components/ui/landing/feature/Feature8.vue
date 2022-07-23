<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col v-for="(item, i) in features" :key="i" cols="12" md="4">
          <v-card outlined>
            <v-img :src="item.image" height="280"></v-img>
            <v-responsive max-width="360" class="mx-auto text-center pa-4">
              <div class="text-h5 mt-5">{{ item.title }}</div>
              <div class="text-h6 mt-5">{{ item.text }}</div>
              <div class="my-4">
                <router-link :to="item.link.to" class="text-decoration-none font-weight-bold text-h6">{{ item.link.title }}</router-link>
              </div>
            </v-responsive>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      features: [{
        title: 'New Design',
        image: '/images/features/6.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum commodi corrupti maiores ex sunt dolorum inventore facilis reprehenderit ullam minima quaerat sit!',
        link: {
          title: 'Learn More',
          to: '#'
        }
      }, {
        title: 'Responsive Websites',
        image: '/images/features/7.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum commodi corrupti maiores ex sunt dolorum inventore facilis reprehenderit ullam minima quaerat sit!',
        link: {
          title: 'Learn More',
          to: '#'
        }
      }, {
        title: 'Modern Websites',
        image: '/images/features/19.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum commodi corrupti maiores ex sunt dolorum inventore facilis reprehenderit ullam minima quaerat sit!',
        link: {
          title: 'Learn More',
          to: '#'
        }
      }]
    }
  }
}
</script>
