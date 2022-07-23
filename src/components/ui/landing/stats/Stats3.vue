<template>
  <v-container class="py-4 py-lg-8">
    <div style="width: 80px; height: 4px" class="mb-3 secondary" />
    <h2 class="text-h3 text-lg-h2 mb-3">The fastest car in the universe</h2>
    <div class="text-h6 text-lg-h5 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>

    <v-row class="mt-6" dense>
      <v-col
        v-for="(item, i) in stats"
        :key="i"
        cols="12"
        md="4"
        class="text-center"
      >
        <v-card class="pa-4">
          <div class="text-h2 text-lg-h1">{{ item.value }}</div>
          <div class="text-h6 text-lg-h5">{{ item.title }}</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      stats: [{
        title: '0-60 mph',
        value: '1.9s'
      }, {
        title: 'Top Speed',
        value: '+250mph'
      }, {
        title: 'Range',
        value: '620mi'
      }]
    }
  }
}
</script>
