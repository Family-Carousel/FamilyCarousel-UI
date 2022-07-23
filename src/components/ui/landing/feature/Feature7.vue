<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col
          v-for="(item, i) in features"
          :key="i"
          cols="12"
          sm="6"
          lg="3"
        >
          <v-responsive max-width="300" class="mx-auto text-center">
            <div class="mb-2">
              <v-icon class="text-h1" color="primary">{{ item.icon }}</v-icon>
            </div>
            <div class="text-h5 mt-3">{{ item.title }}</div>
            <div class="font-weight-regular mt-2">{{ item.description }}</div>
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
      features: [{
        icon: 'mdi-account-check-outline',
        title: 'Account Verification',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'mdi-lifebuoy',
        title: 'Dedicated Support',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'mdi-email-open-multiple-outline',
        title: 'Email Integration',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'mdi-clock-outline',
        title: 'Save Time',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }]
    }
  }
}
</script>
