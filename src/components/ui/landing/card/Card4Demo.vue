<template>
  <v-container class="py-10">
    <div style="width: 80px; height: 4px" class="mb-3 secondary" />
    <h2 class="text-h4 mb-3">Articles</h2>
    <v-row>
      <v-col v-for="(card, i) in cards" :key="i" cols="12" md="4">
        <!-- card example -->
        <Card4 v-bind="card" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card4 from '@/components/ui/landing/card/Card4.vue'

export default {
  components: {
    Card4
  },
  data() {
    return {
      cards: [{
        user: {
          name: 'Robert Smith'
        },
        post: {
          category: 'Startups',
          created: 'Apr 11, 2020',
          readtime: '8 min',
          image: '/images/features/7.jpg',
          title: 'How to get funded',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe similique alias accusantium, quas suscipit odio consequuntur quibusdam repellat accusamus ipsum reiciendis, necessitatibus, deleniti molestias iste id voluptatibus fuga rem.',
          link: '#'
        }
      }, {
        user: {
          name: 'Laura Smith'
        },
        post: {
          category: 'Music',
          created: 'Apr 11, 2020',
          readtime: '2 min',
          image: '/images/features/6.jpg',
          title: 'Is Bob Marley alive?',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe similique alias accusantium, quas suscipit odio consequuntur quibusdam repellat accusamus ipsum reiciendis, necessitatibus, deleniti molestias iste id voluptatibus fuga rem.',
          link: '#'
        }
      }, {
        user: {
          name: 'Dave Chad'
        },
        post: {
          category: 'Business',
          created: 'Sep 21, 2020',
          readtime: '13 min',
          image: '/images/features/13.jpg',
          title: '10 tips to improve your shop',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe similique alias accusantium, quas suscipit odio consequuntur quibusdam repellat accusamus ipsum reiciendis, necessitatibus, deleniti molestias iste id voluptatibus fuga rem.',
          link: '#'
        }
      }]
    }
  }
}
</script>
