<template>
  <v-card>
    <div class="d-flex flex-column">
      <div class="d-flex">
        <div class="pa-2">
          <div class="font-weight-bold">{{ title }}</div>
          <div class="secondary--text text-body-2 text-truncate">{{ description }}</div>
        </div>
        <v-spacer></v-spacer>
        <v-menu
          bottom
          left
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list nav dense>
            <v-list-item
              v-for="(item, i) in menuItems"
              :key="i"
              @click="item.action"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    <v-sheet
      height="8"
      width="100%"
      :color="color"
      dark
      class="align-center rounded-b justify-center d-flex"
    >
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      menuItems: [
        { title: 'Delete', action: () => this.$emit('delete', this.id) },
        { title: 'Edit', action: () => this.$emit('edit', this.id) },
        { title: 'Open', action: () => this.$emit('open', this.id) }
      ]
    }
  }
}
</script>
