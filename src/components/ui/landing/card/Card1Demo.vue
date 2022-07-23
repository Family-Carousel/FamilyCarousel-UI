<template>
  <v-container class="py-6" fluid>
    <h2 class="text-h3">Current Openings</h2>
    <v-divider class="my-2"></v-divider>
    <v-row>
      <v-col v-for="(open, i) in openings" :key="i" cols="12" md="4">
        <!-- card example -->
        <Card1 v-bind="open" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card1 from '@/components/ui/landing/card/Card1.vue'

export default {
  components: {
    Card1
  },
  data() {
    return {
      openings: [{
        title: 'Senior Software Engineer',
        tags: ['Frontend', 'React', 'Redux', 'Remote'],
        description: 'Focus on evolving our Universal React/Redux front end and be the future of accessible web interfaces using the latest technology stack.',
        to: '#1'
      }, {
        title: 'Lead Data Scientist',
        tags: ['Data', 'R&D', 'Remote'],
        description: 'As a Lead Data Scientist, you will be helping us build the next-generation intelligent platform of the art Machine Learning, and Deep Learning.',
        to: '#2'
      }, {
        title: 'Senior Data Quality Analyst',
        tags: ['QA', 'Usability', 'Remote'],
        description: 'As a Senior Data Quality Analyst, you\'re responsible for analysing and identifying improvement areas for our data.',
        to: '#3'
      }]
    }
  }
}
</script>
