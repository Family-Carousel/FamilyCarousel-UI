<template>
  <v-card class="my-1">
    <v-data-table
      v-model="selectedUsers"
      show-select
      :headers="headers"
      :items="users"
      :search="searchQuery"
      class="flex-grow-1"
    >
      <template v-slot:item.id="{ item }">
        <div class="font-weight-bold"># {{ item.id }}</div>
      </template>

      <template v-slot:item.email="{ item }">
        <div class="d-flex align-center py-1">
          <div class="ml-1 caption font-weight-bold">
            {{ item.email }}
          </div>
        </div>
      </template>

      <template v-slot:item.verified="{ item }">
        <v-icon v-if="item.verified" small color="success">
          mdi-check-circle
        </v-icon>
        <v-icon v-else small>
          mdi-circle-outline
        </v-icon>
      </template>

      <template v-slot:item.disabled="{ item }">
        <div>{{ item.disabled.toString() | capitalize }}</div>
      </template>

      <template v-slot:item.role="{ item }">
        <v-chip
          label
          small
          class="font-weight-bold"
          :color="item.role === 'ADMIN' ? 'primary' : undefined"
        >{{ item.role | capitalize }}</v-chip>
      </template>

      <template v-slot:item.created="{ item }">
        <div>{{ item.created }}</div>
      </template>

      <template v-slot:item.lastSignIn="{ item }">
        <div>{{ item.lastSignIn }}</div>
      </template>

      <template v-slot:item.action="{ }">
        <div class="actions">
          <v-btn icon to="#">
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import users from './content/users'

export default {
  data() {
    return {
      searchQuery: '',
      selectedUsers: [],
      headers: [
        { text: 'Id', align: 'left', value: 'id' },
        { text: 'Email', value: 'email' },
        { text: 'Verified', value: 'verified' },
        { text: 'Name', align: 'left', value: 'name' },
        { text: 'Role', value: 'role' },
        { text: 'Created', value: 'created' },
        { text: 'Last SignIn', value: 'lastSignIn' },
        { text: 'Disabled', value: 'disabled' },
        { text: '', sortable: false, align: 'right', value: 'action' }
      ],

      users
    }
  },
  watch: {
    selectedUsers(val) {

    }
  },
  methods: {
    searchUser() {},
    open() {}
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
