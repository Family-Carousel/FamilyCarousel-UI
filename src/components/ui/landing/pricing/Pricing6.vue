<template>
  <v-container class="pt-4 pt-md-8 pb-10">
    <v-responsive max-width="700" class="mx-auto text-center">
      <h2 class="text-h3 text-lg-h2">A plan for every price</h2>
      <div class="text-h4 primary--text mt-2">Get started with a free trial today</div>
    </v-responsive>

    <v-row class="mt-10" dense>
      <v-col
        v-for="(plan, i) in plans"
        :key="i"
        cols="12"
        md="6"
        lg="3"
      >
        <v-card
          class="text-body-1"
          outlined
          elevation="2"
        >
          <v-sheet class="pa-4 text-center">
            <div class="mb-6">
              <div class="text-h6 font-weight-bold text-uppercase">{{ plan.title }}</div>
            </div>
            <div v-if="plan.price">
              <div class="d-flex justify-center ml-n3">
                <div class="font-weight-regular text-h4 mr-1" style="margin-top: 4px">$</div>
                <div class="text-h1">{{ plan.price }}</div>
              </div>
              <div class="grey--text justify-end overline">/ month</div>
            </div>
            <div v-else class="text-h6 my-2">
              A personalized approach to your business needs
            </div>
          </v-sheet>
          <div class="text-center">
            <v-chip v-if="plan.highlight" color="secondary" class="mb-n3 overline font-weight-bold" small>Popular</v-chip>
          </div>
          <v-divider></v-divider>
          <v-sheet class="pa-4" color="surface">
            <div class="my-6 text-h6">
              <div v-for="(feat, j) in plan.features" :key="j" class="d-flex align-center my-1">
                <v-icon color="success" class="mr-2">mdi-check</v-icon>
                <span v-if="feat.value" class="font-weight-black mr-1">{{ feat.value }}</span>
                <span class="text-truncate">{{ feat.label }}</span>
              </div>
            </div>
            <v-btn
              x-large
              block
              outlined
              :dark="plan.highlight"
              :class="[plan.highlight && 'secondary']"
            >
              {{ plan.price ? 'Start Trial' : 'Contact Sales' }}
            </v-btn>
          </v-sheet>
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
        title: 'Basic',
        price: '9',
        features: [{
          value: '5',
          label: 'Accounts'
        }, {
          value: '100GB',
          label: 'Bandwith'
        }, {
          value: '10GB',
          label: 'Disk Space'
        }, {
          value: '',
          label: 'Unlimited Emails'
        }]
      }, {
        highlight: true,
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
        }, {
          value: '',
          label: 'Unlimited Emails'
        }, {
          value: '',
          label: 'Support 24/7'
        }]
      }, {
        highlight: false,
        title: 'Enterprise',
        price: '149',
        features: [{
          value: '100',
          label: 'Accounts'
        }, {
          value: '10TB',
          label: 'Bandwith'
        }, {
          value: '10TB',
          label: 'Disk Space'
        }, {
          value: '',
          label: 'Unlimited Emails'
        }, {
          value: '',
          label: 'Support 24/7'
        }]
      }, {
        highlight: false,
        title: 'Custom',
        price: '',
        features: [{
          value: '+200',
          label: 'Accounts'
        }, {
          value: '+100TB',
          label: 'Bandwith'
        }, {
          value: '+1000TB',
          label: 'Disk Space'
        }, {
          value: '',
          label: 'Unlimited Emails'
        }, {
          value: '',
          label: 'Support 24/7'
        }]
      }]
    }
  }
}
</script>
