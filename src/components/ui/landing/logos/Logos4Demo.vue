<template>
  <Logos4
    title="Trusted by the best in the business"
    :logos="logos"
  />
</template>

<script>
import Logos4 from '@/components/ui/landing/logos/Logos4.vue'

export default {
  components: {
    Logos4
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
