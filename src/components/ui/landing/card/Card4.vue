<template>
  <v-card class="pa-2" :to="post.link">
    <v-img :src="post.image" height="200" class="rounded"></v-img>
    <div class="secondary--text text--lighten-1 text-caption d-flex mt-1">
      {{ post.created }} - {{ post.readtime }} read
    </div>

    <div class="pt-2">
      <div class="title font-weight-bold text-h5">{{ post.title }}</div>
      <div class="secondary--text text--lighten-1 text-body-1 mt-1 mb-2">
        {{ post.content }}
      </div>

      <div class="d-flex align-center mt-4">
        <div class="text-body-2">
          Author:
          <span class="font-weight-bold">{{ user.name }}</span>
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
