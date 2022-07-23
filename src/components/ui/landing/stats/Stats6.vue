<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col
          v-for="(item, i) in stats"
          :key="i"
          cols="12"
          sm="6"
          lg="3"
        >
          <v-responsive max-width="300" class="mx-auto text-center">
            <div class="text-h2 text-lg-h1">{{ item.value }}</div>
            <div class="font-weight-regular my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit.</div>
            <div class="text-h6 text-lg-h5">{{ item.title }}</div>
          </v-responsive>
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
