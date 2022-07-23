<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="(card, index) in cards" :key="index" cols="12" md="4">
        <!-- application card -->
        <AppCard2 v-bind="card" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppCard2 from '@/components/ui/application/appcard/AppCard2.vue'

export default {
  components: {
    AppCard2
  },
  data() {
    return {
      cards: [{
        image: '/images/avatars/avatar3.svg',
        name: 'Laura Smith',
        role: 'Admin',
        title: 'Senior Software Engineer',
        phone: 'tel:123',
        email: '#'
      }, {
        image: '/images/avatars/avatar1.svg',
        name: 'Robert Smith',
        role: '',
        title: 'QA',
        phone: '',
        email: '#'
      }, {
        image: '/images/avatars/avatar16.svg',
        name: 'Dave Chad',
        role: 'Moderator',
        title: 'Senior Product Manager',
        phone: 'tel:123',
        email: '#'
      }]
    }
  }
}
</script>
