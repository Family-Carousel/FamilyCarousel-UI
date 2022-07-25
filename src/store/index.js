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
};

export default {
  namespaced: true,
  state,
  mutations,
};
