<template>
  <h5>Logging in...</h5>
</template>

<script>
export default {
  mounted: function () {
    this.$auth.loginWith('auth0');
  },
};
</script>