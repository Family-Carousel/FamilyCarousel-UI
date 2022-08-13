import configs from "../configs";

const { product, theme } = configs;
const { isRTL, globalTheme } = theme;

// state initial values
const state = () => ({
  product,

  // app theme dark or light
  globalTheme,

  // themes and layout configurations
  isRTL,

  csrfToken: "",
  pageLoading: false,
  notification: {
    type: "",
    message: "",
  },
});

const mutations = {
  setGlobalTheme: function (state, theme) {
    this.app.vuetify.framework.theme.dark = theme === "dark";
    state.globalTheme = theme;
  },
  setRTL: function (state, isRTL) {
    this.app.vuetify.framework.rtl = isRTL;
    state.isRTL = isRTL;
  },
  setCsrfToken(state, csrfToken) {
    state.csrfToken = csrfToken;
  },
  setPageLoading(state, flag) {
    state.pageLoading = flag;
  },
  setPageData(state, { page, data }) {
    state[page] = data;
  },
  setNotification(state, { type, message }) {
    state.notification = { type, message };
  },
  unsetNotification(state) {
    state.notification = { type: "", message: "" };
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
