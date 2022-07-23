<template>
  <Layout2 is-demo>
    <h1 class="text-h4">Dashboard</h1>
    <v-divider class="my-2"></v-divider>
    <AppCard5Demo class="pa-0" />
    <UserTable class="my-2"/>
    <AppCard2Demo class="pa-0" />
  </Layout2>
</template>

<script>
import UserTable from '@/components/examples/UserTable'
import Layout2 from '@/components/ui/application/layout/Layout2'
import AppCard2Demo from '@/components/ui/application/appcard/AppCard2Demo'
import AppCard5Demo from '@/components/ui/application/appcard/AppCard5Demo'

export default {
  components: {
    UserTable,
    Layout2,
    AppCard2Demo,
    AppCard5Demo
  }
}
</script>
