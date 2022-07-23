<template>
  <v-card outlined flat class="pa-2">
    <div class="d-flex align-center">
      <v-avatar small class="mr-1" size="38">
        <v-img :src="user.image" :alt="user.name" />
      </v-avatar>
      <span class="font-weight-bold text-body-2">{{ user.name }}</span>
      <v-spacer></v-spacer>
      <div class="secondary--text text--lighten-1 text-body-2">
        {{ post.timeago }}
      </div>
    </div>

    <div v-if="post.title" class="text-h5 my-1">{{ post.title }}</div>

    <v-img v-if="post.image" :src="post.image" height="200" class="my-2 rounded" />

    <div class="secondary--text text--lighten-1 text-body-1 my-1" v-html="post.content">
    </div>

    <v-divider class="my-1"></v-divider>

    <div class="ml-n1 d-flex">
      <div class="mr-1">
        <v-btn text fab small color="secondary lighten-1">
          <v-icon small>mdi-message</v-icon>
          {{ stats.comments }}
        </v-btn>
      </div>
      <div class="mr-1">
        <v-btn text fab small color="secondary lighten-1">
          <v-icon small>mdi-heart</v-icon>
          {{ stats.likes }}
        </v-btn>
      </div>
      <div class="mr-1">
        <v-btn text fab small color="secondary lighten-1">
          <v-icon small>mdi-share</v-icon>
          {{ stats.shares }}
        </v-btn>
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
    },
    stats: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
