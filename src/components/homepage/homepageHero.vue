<template>
  <LazyHydrate when-visible>
    <v-sheet class="pb-4">
      <v-container class="py-6 py-lg-12">
        <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">
          The best way to <span class="primary--text">MANAGE</span> and
          <span class="primary--text">ORGANIZE</span> your
          <span class="primary--text">FAMILY</span>
        </h1>
        <h2 class="text-h6 text-sm-h5 secondary--text mt-4">
          We provide tools to make the family go around and around. Looking for
          something specific? Reach out to us and we will consider your feature!
        </h2>
        <h2 class="text-h6 font-weight-bold secondary--text mt-8">
          We are almost there! If you want to get notified when the website goes
          live, subscribe to our mailing list!
        </h2>
        <div class="mt-4">
          <ValidationObserver ref="obs" v-slot="{ invalid, validated }">
            <div class="d-flex flex-column flex-sm-row w-full w-lg-half">
              <VTextFieldWithValidation
                outlined
                rules="required|email"
                solo
                label="Email"
                v-model="emailAddress"
                class="mr-sm-2 d-flex flex-column flex-sm-row w-full w-lg-half"
              ></VTextFieldWithValidation>
              <v-btn
                x-large
                :disabled="invalid || !validated"
                color="secondary"
                @click.prevent="subscribe()"
                >Subscribe</v-btn
              >
            </div>
          </ValidationObserver>
        </div>
      </v-container>
    </v-sheet>
  </LazyHydrate>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";
import { ValidationObserver } from "vee-validate";
import VTextFieldWithValidation from "../inputs/VTextFieldWithValidation.vue";

export default {
  components: {
    LazyHydrate,
    VTextFieldWithValidation,
    ValidationObserver,
  },
  data: () => ({
    emailAddress: "",
    launchSubscriptionListId: "3a6b58bc2f",
  }),
  methods: {
    async subscribe() {
      console.log(this.$store.state);

      const result = await this.$axios.post("/api/newsletter/subscribe", {
        subscriptionInformation: {
          listId: this.launchSubscriptionListId,
          emailAddress: this.emailAddress,
        },
        _csrf: this.$store.state.csrfToken,
      });
    },
  },
};
</script>
