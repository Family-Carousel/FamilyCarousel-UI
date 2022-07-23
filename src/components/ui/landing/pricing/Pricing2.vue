<template>
  <v-container class="py-4 py-lg-8">
    <div style="width: 80px; height: 4px" class="mb-3 secondary" />
    <h2 class="text-h4 mb-3">Pricing Plans</h2>

    <v-row class="mt-8">
      <v-col v-for="(plan, i) in plans" :key="i" cols="12" lg="4">
        <v-card
          class="text-center text-body-1 px-2 py-4"
          :color="plan.color"
          :dark="plan.dark"
          to="#"
        >
          <div class="text-body-1 text-uppercase font-weight-black mb-6">{{ plan.title }}</div>
          <div class="d-flex justify-center">
            <div style="margin-top: 2px; margin-right: 1px;">$</div>
            <div class="text-h3">{{ plan.price }}</div>
            <div style="margin-top: 1px; margin-left: 2px">00</div>
          </div>
          <div class="mt-6 text-body-1">
            <div v-for="(feat, j) in plan.features" :key="j">
              <span class="font-weight-black mr-1">{{ feat.value }}</span>
              <span class="font-weight-light">{{ feat.label }}</span>
            </div>
          </div>
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
          value: '4',
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
        color: 'secondary darken-2',
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
