<template>
  <CallToAction5
    title="Ready to talk?"
    subtitle="Our team is here to help."
    btn1-label="Learn More"
    btn1-link="#"
    btn2-label="Contact Sales"
    btn2-link="#"
  >
    <router-link to="#">Get started now with a FREE trial</router-link>
  </CallToAction5>
</template>

<script>
import CallToAction5 from '@/components/ui/landing/call-to-action/CallToAction5.vue'

export default {
  components: {
    CallToAction5
  }
}
</script>
