<template>
  <LazyHydrate when-visible>
    <v-sheet color="#222628" dark>
      <v-container class="py-8 text-center">
        <div class="text-overline mb-3">Help to make your family go around</div>
        <div class="text-h3">A better way to manage your family</div>

        <v-btn large color="#dc591a" class="mt-4 w-full w-sm-auto">
          Sign Up
          <v-icon right>mdi-menu-right</v-icon>
        </v-btn>

        <div class="text-h6 mt-4">
          Each account comes with the ability to create and manage multiple
          families. <br />
          Limitations apply, different subscriptions will be available to
          increase functionality.
        </div>
      </v-container>
    </v-sheet>
  </LazyHydrate>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";

export default {
  name: "Homepage-CallToAction",
  components: {
    LazyHydrate,
  },
};
</script>
