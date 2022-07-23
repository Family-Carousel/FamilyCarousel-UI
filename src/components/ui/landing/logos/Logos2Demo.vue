<template>
  <Logos2
    title="Partners"
    :logos="logos"
  />
</template>

<script>
import Logos2 from '@/components/ui/landing/logos/Logos2.vue'

export default {
  components: {
    Logos2
  },
  data() {
    return {
      logos: [{
        image: require('@/assets/images/logos/logo-1.svg'),
        link: '#'
      }, {
        image: require('@/assets/images/logos/logo-2.svg'),
        link: '#'
      }, {
        image: require('@/assets/images/logos/logo-3.svg'),
        link: '#'
      }, {
        image: require('@/assets/images/logos/logo-4.svg'),
        link: '#'
      }, {
        image: require('@/assets/images/logos/logo-5.svg'),
        link: '#'
      }, {
        image: require('@/assets/images/logos/logo-7.svg'),
        link: '#'
      }]
    }
  }
}
</script>
