<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="(card, index) in cards" :key="index" cols="12" md="4">
        <!-- application card -->
        <AppCard3 v-bind="card" @edit="onEdit" @delete="onDelete" @open="onOpen" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppCard3 from '@/components/ui/application/appcard/AppCard3.vue'

export default {
  components: {
    AppCard3
  },
  data() {
    return {
      cards: [{
        id: '1',
        title: 'Project A',
        description: 'Kanban Board',
        color: 'accent'
      }, {
        id: '2',
        title: 'Project B',
        description: 'Stats Algorithm',
        color: 'primary'
      }, {
        id: '3',
        title: 'Project C',
        description: 'Keeping it real',
        color: 'error'
      }]
    }
  },
  methods: {
    onOpen(id) { alert(`open ${id}`) },
    onEdit(id) { alert(`edit ${id}`) },
    onDelete(id) { alert(`delete ${id}`) }
  }
}
</script>
