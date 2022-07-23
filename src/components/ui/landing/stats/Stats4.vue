<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" md="4">
          <h2 class="text-h3 text-lg-h2">The fastest car in the universe</h2>
        </v-col>
        <v-col cols="12" md="8" class="pa-md-0">
          <v-row dense>
            <v-col v-for="(item, i) in stats" :key="i" cols="12" md="6">
              <v-sheet color="surface" class="pa-4 text-center">
                <div class="text-h2 text-lg-h1">{{ item.value }}</div>
                <div class="text-h6 text-lg-h5">{{ item.title }}</div>
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
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
      }, {
        title: 'Torque',
        value: '10k Nm'
      }]
    }
  }
}
</script>
