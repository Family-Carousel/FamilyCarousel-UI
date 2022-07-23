<template>
  <v-card :to="post.link">
    <v-img :src="post.image" height="200"></v-img>

    <div class="pa-2 pa-md-3">
      <div class="text-uppercase font-weight-black text-body-2 primary--text mb-1">{{ post.category }}</div>
      <div class="title font-weight-bold text-h5">{{ post.title }}</div>
      <div class="secondary--text text--lighten-1 text-body-1 mt-1 mb-4">
        {{ post.content }}
      </div>

      <div class="d-flex align-center">
        <v-avatar small class="mr-1" size="38">
          <v-img :src="user.image" :alt="user.name"/>
        </v-avatar>
        <div>
          <span class="font-weight-bold text-body-2">{{ user.name }}</span>
          <v-spacer></v-spacer>
          <div class="secondary--text text--lighten-1 text-caption">
            {{ post.created }} - {{ post.readtime }} read
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    },
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
