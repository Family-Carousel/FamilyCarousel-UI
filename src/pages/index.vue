<template>
  <div>
    <Hero />
    <Feature />
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
import Hero from "~/components/homepage/homepageHero.vue";
import Feature from "~/components/homepage/homepageFeature.vue";
import CallToAction from "~/components/homepage/homepageCallToAction.vue";
import Footer from "~/components/footerComponent.vue";
import setPageData from "@/mixins/setPageData";

export default {
  components: {
    Hero,
    CallToAction,
    Feature,
    Footer,
  },
  mixins: [setPageData],
};
</script>
