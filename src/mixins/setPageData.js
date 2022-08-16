/**
 * Removes prefixes from route params, eg "make-", "model-",...
 * @param route
 * @return {{}}
 */

const update = async ({ store, route, $axios }) => {
  try {
    // set page loading to true
    store.commit("setPageLoading", true);

    const response = await $axios.get(`/api/${route.name}`, {
      params: {
        ...route.params,
        ...route.query,
      },
    });

    // set page data
    store.commit("setPageData", { page: route.name, data: response.data.data });

    // set csrf
    if (response.data.csrfToken) {
      store.commit("setCsrfToken", response.data.csrfToken);
    }

    // set page loading to false
    store.commit("setPageLoading", false);

    // remove old notifications/errors
    store.commit("unsetNotification");
  } catch (err) {
    store.commit("setPageLoading", false);
    store.commit("setNotification", {
      type: "error",
      message: `Failed fetching data ${err}`,
    });
  }
};

export default {
  watch: {
    async $route(to, from) {
      await update({
        store: this.$store,
        route: this.$route,
        $axios: this.$axios,
      });
    },
  },
  async asyncData({ app, store, route, $axios }) {
    await update({ app, store, route, $axios });
  },

  computed: {
    pageData() {
      return this.$store.state[this.$route.name];
    },
  },
};
