<template>
  <v-container class="py-4 py-lg-8">
    <div class="text-center">
      <div class="text-uppercase font-weight-bold body-2 primary--text mb-2">Subscribe Today</div>
      <h2 class="text-h3 text-lg-h2">Pricing Plans</h2>
      <v-responsive max-width="1200" class="mx-auto">
        <div class="text-h6 text-lg-h5 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!</div>
      </v-responsive>
    </div>

    <v-row class="mt-8">
      <v-col v-for="(plan, i) in plans" :key="i" cols="12" lg="4">
        <v-card
          class="text-center text-body-1 pa-4"
          :class="[plan.highlight && 'pt-8 mt-n4']"
          :color="plan.color"
          :dark="plan.dark"
        >
          <div class="text-h4 font-weight-black mb-6">{{ plan.title }}</div>
          <div class="d-flex justify-center">
            <div class="font-weight-bold text-h5">$</div>
            <div class="text-h1">{{ plan.price }}</div>
          </div>
          <div class="my-6 text-h6">
            <div v-for="(feat, j) in plan.features" :key="j" class="my-1">
              <span class="font-weight-black mr-1">{{ feat.value }}</span>
              <span>{{ feat.label }}</span>
            </div>
          </div>
          <v-btn
            x-large
            outlined
            block
            :class="[plan.highlight && 'mt-10 accent']"
          >Subscribe</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      plans: [{
        highlight: false,
        color: '',
        dark: false,
        title: 'Basic',
        price: '19',
        features: [{
          value: '5',
          label: 'Accounts'
        }, {
          value: '100GB',
          label: 'Bandwith'
        }, {
          value: '10GB',
          label: 'Disk Space'
        }]
      }, {
        highlight: true,
        color: 'secondary darken-1',
        dark: true,
        title: 'Startup',
        price: '29',
        features: [{
          value: '20',
          label: 'Accounts'
        }, {
          value: '1TB',
          label: 'Bandwith'
        }, {
          value: '100GB',
          label: 'Disk Space'
        }]
      }, {
        highlight: false,
        color: '',
        dark: false,
        title: 'Corporate',
        price: '99',
        features: [{
          value: '100',
          label: 'Accounts'
        }, {
          value: '10TB',
          label: 'Bandwith'
        }, {
          value: '100TB',
          label: 'Disk Space'
        }]
      }]
    }
  }
}
</script>
