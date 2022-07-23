<template>
  <v-sheet class="bg-sheet pb-8" dark>
    <Toolbar3 />
    <Hero3 />
  </v-sheet>
</template>

<script>
import Toolbar3 from '@/components/ui/landing/toolbar/Toolbar3.vue'
import Hero3 from '@/components/ui/landing/hero/Hero3.vue'

export default {
  components: {
    Toolbar3,
    Hero3
  }
}
</script>

<style scoped>
.bg-sheet {
  margin-bottom: 120px;
  background: linear-gradient(90deg, rgb(54 90 127) 0%, rgb(11 20 38) 100%);
}

@media screen and (min-width: 700px) {
  .bg-sheet {
    margin-bottom: 220px;
  }
}
</style>
