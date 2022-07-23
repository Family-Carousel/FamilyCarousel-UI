<template>
  <v-container fluid>
    <v-tabs
      dark
      background-color="primary"
      grow
    >
      <v-tab>
        <v-badge
          color="pink"
          dot
        >
          Item One
        </v-badge>
      </v-tab>

      <v-tab>
        <v-badge
          color="green"
          content="6"
        >
          Item Two
        </v-badge>
      </v-tab>

      <v-tab>
        <v-badge
          color="deep-purple accent-4"
          icon="mdi-vuetify"
        >
          Item Three
        </v-badge>
      </v-tab>
    </v-tabs>

    <div class="d-flex align-center justify-center mt-5">
      <v-badge
        bordered
        color="error"
        icon="mdi-lock"
        overlap
      >
        <v-btn
          class="white--text"
          color="error"
          depressed
        >
          Lock Account
        </v-btn>
      </v-badge>

      <div class="mx-3"></div>

      <v-badge
        bordered
        bottom
        color="deep-purple accent-4"
        dot
        offset-x="10"
        offset-y="10"
      >
        <v-avatar size="40">
          <v-img src="/images/avatars/avatar1.svg"></v-img>
        </v-avatar>
      </v-badge>

      <div class="mx-3"></div>

      <v-badge
        avatar
        bordered
        overlap
      >
        <template v-slot:badge>
          <v-avatar>
            <v-img src="/images/avatars/avatar8.svg"></v-img>
          </v-avatar>
        </template>

        <v-avatar size="40">
          <v-img src="/images/avatars/avatar1.svg"></v-img>
        </v-avatar>
      </v-badge>
    </div>
  </v-container>
</template>
