<template>
  <v-sheet color="transparent">
    <Toolbar2 />
    <Hero2 />
  </v-sheet>
</template>

<script>
import Hero2 from '@/components/ui/landing/hero/Hero2.vue'
import Toolbar2 from '@/components/ui/landing/toolbar/Toolbar2.vue'

export default {
  components: {
    Hero2,
    Toolbar2
  }
}
</script>
