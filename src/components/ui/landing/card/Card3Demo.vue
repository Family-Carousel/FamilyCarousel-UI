<template>
  <v-sheet>
    <v-container class="py-10">
      <div class="text-center">
        <h2 class="text-h3">Blog posts</h2>
        <v-responsive max-width="700" class="mx-auto">
          <div class="text-h6 text-lg-h5 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit!</div>
        </v-responsive>
      </div>
      <v-row>
        <v-col v-for="(card, i) in cards" :key="i" cols="12" md="4">
          <!-- card example -->
          <Card3 v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import Card3 from '@/components/ui/landing/card/Card3.vue'

export default {
  components: {
    Card3
  },
  data() {
    return {
      cards: [{
        user: {
          name: 'Robert Smith',
          image: '/images/avatars/avatar1.svg'
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
          name: 'Laura Smith',
          image: '/images/avatars/avatar3.svg'
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
          name: 'Dave Chad',
          image: '/images/avatars/avatar16.svg'
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
