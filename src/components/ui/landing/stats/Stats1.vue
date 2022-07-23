<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="text-h3 text-lg-h2">Working with our servers</h2>
          <div class="text-h6 text-lg-h5 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
          <div class="mt-4">
            <router-link to="#" class="text-decoration-none font-weight-bold text-h6">Learn More</router-link>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex justify-center align-center mt-md-4">
            <div v-for="(stat, i) in stats" :key="i" class="text-center mx-2">
              <v-progress-circular
                :value="stat.value"
                :width="stat.width"
                :size="$vuetify.breakpoint.mdAndUp ? '120' : '70'"
                rotate="-90"
              >
                {{ stat.value }}%
              </v-progress-circular>
              <div class="mt-2 text-h5">
                {{ stat.label }}
              </div>
            </div>
          </div>
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
        label: 'Server Uptime',
        value: 98,
        width: 6
      }, {
        label: 'Reduced Costs',
        value: 74,
        width: 3
      }, {
        label: 'Tests Coverage',
        value: 100,
        width: 10
      }]
    }
  }
}
</script>
