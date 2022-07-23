<template>
  <v-sheet class="hero9-bg" dark>
    <Toolbar3 />
    <Hero9 />
  </v-sheet>
</template>

<script>
import Toolbar3 from '@/components/ui/landing/toolbar/Toolbar3.vue'
import Hero9 from '@/components/ui/landing/hero/Hero9.vue'

export default {
  components: {
    Toolbar3,
    Hero9
  }
}
</script>

<style scoped>
.hero9-bg {
  background-image: url("/images/office.jpg");
  background-image: linear-gradient(
      to bottom right,
      rgba(16 57 92 / 96%),
      rgba(0 0 0 / 0.9)
    ),
    url("/images/office.jpg");
  background-size: cover;
  background-position: center;
}
</style>
