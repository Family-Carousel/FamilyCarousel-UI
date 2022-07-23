<template>
  <v-container class="pt-4 pt-md-8 pb-10">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h2 class="text-h3 text-lg-h2">A plan for every price</h2>
      <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
      <div class="text-h6 text-lg-h5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit.</div>
    </v-responsive>

    <v-row class="mt-10" dense>
      <v-col
        v-for="(plan, i) in plans"
        :key="i"
        cols="12"
        lg="4"
      >
        <v-card
          class="text-body-1 pa-4"
          outlined
          elevation="2"
        >

          <div class="text-h6">
            <div v-for="(feat, j) in plan.features" :key="j" class="d-flex align-center justify-space-between my-1">
              <div>
                <span v-if="feat.value" class="font-weight-black mr-1">{{ feat.value }}</span>
                <span class="text-truncate">{{ feat.label }}</span>
              </div>
              <v-icon color="primary">mdi-check</v-icon>
            </div>
          </div>

          <div class="d-flex align-center my-4">
            <v-divider class="my-1"></v-divider>
            <v-sheet
              color="primary"
              dark
              rounded
              width="140"
              height="42"
              class="font-weight-bold text-truncate d-flex align-center justify-center mx-2"
            >
              {{ plan.title }}
            </v-sheet>
            <v-divider class="my-1"></v-divider>
          </div>

          <div class="d-flex justify-space-between">
            <div class="mr-2">
              <div class="text-h5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
            <div class="text-right">
              <div class="d-flex justify-center">
                <div class="text-h4 font-weight-light mr-1" style="margin-top: 4px">$</div>
                <div class="text-h1 font-weight-light">{{ plan.price }}</div>
              </div>
              <div class="grey--text justify-end overline">/ month</div>
            </div>
          </div>

          <v-divider class="my-4"></v-divider>
          <v-btn
            x-large
            block
            outlined
            color="primary"
          >
            Subscribe
          </v-btn>
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
        }]
      }]
    }
  }
}
</script>
