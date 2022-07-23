<template>
  <v-sheet color="transparent">
    <v-container class="py-4 py-lg-8">
      <div class="text-center">
        <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Bootstrap your business</div>
        <h2 class="text-h3 text-lg-h2">Get your startup ready for business</h2>
        <v-responsive max-width="1200" class="mx-auto">
          <div class="text-h6 text-lg-h5 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
        </v-responsive>
      </div>
      <v-row class="mt-4">
        <v-col cols="12" lg="7" xl="8">
          <h2 class="text-h3 text-lg-h2">How can we help you?</h2>
          <div v-for="(item, i) in features" :key="i" class="d-flex mt-5">
            <div class="mr-2">
              <v-sheet color="secondary" rounded class="pa-2" dark>
                <v-icon>{{ item.icon }}</v-icon>
              </v-sheet>
            </div>
            <div>
              <div class="text-h5">{{ item.title }}</div>
              <div class="text-h6 mt-1">{{ item.description }}</div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="5" xl="4">
          <v-card class="pa-3">
            <v-card-title>
              Create Account
            </v-card-title>
            <v-card-text>
              <v-text-field label="First Name" dense outlined></v-text-field>
              <v-text-field label="Last Name" dense outlined></v-text-field>
              <v-text-field label="Email" dense outlined></v-text-field>
              <v-text-field label="Password" dense outlined></v-text-field>
              <v-btn block class="success" large>Create Account</v-btn>

              <div class="text-overline text-uppercase mt-3 text-center">
                <v-responsive max-width="280" class="mx-auto">
                  By signing up, you agree to the
                  <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>
                </v-responsive>
              </div>
            </v-card-text>
          </v-card>
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
        title: 'Responsive Designs',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda'
      }, {
        icon: 'mdi-lifebuoy',
        title: 'Dedicated Support',
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
