<template>
  <v-sheet>
    <v-container class="py-6">
      <v-row>
        <v-col v-for="(card, i) in cards" :key="i" cols="12" md="4">
          <!-- card example -->
          <Card2 v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import Card2 from '@/components/ui/landing/card/Card2.vue'

export default {
  components: {
    Card2
  },
  data() {
    return {
      cards: [{
        user: {
          name: 'Robert Smith',
          image: '/images/avatars/avatar1.svg'
        },
        post: {
          timeago: '14 mins',
          image: '/images/features/7.jpg',
          content: 'Let\'s be productive! <a href="#" class="text-decoration-none">#productivity</a>'
        },
        stats: {
          comments: 4,
          likes: 32,
          shares: 12
        }
      }, {
        user: {
          name: 'Laura Smith',
          image: '/images/avatars/avatar3.svg'
        },
        post: {
          timeago: '32 mins',
          image: '/images/features/19.jpg',
          content: 'Buy fresh local products. Sponsor your local farmers. <a href="#" class="text-decoration-none">#freshlocal</a>'
        },
        stats: {
          comments: 2,
          likes: 7,
          shares: 2
        }
      }, {
        user: {
          name: 'Dave Chad',
          image: '/images/avatars/avatar16.svg'
        },
        post: {
          timeago: '14 mins',
          title: 'We are preparing the feast. Come and join us at 5pm.',
          image: '',
          content: 'Party! <a href="#" class="text-decoration-none">#feast</a>'
        },
        stats: {
          comments: 23,
          likes: 2,
          shares: 8
        }
      }]
    }
  }
}
</script>
