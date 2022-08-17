module.exports = {
  srcDir: "src/",
  telemetry: false,
  server: {
    host: process.env.NODE_ENV !== "production" ? 'localhost' : '0.0.0.0',
    port: '3000'
  },
  performance: {
    gzip: false,
  },
  dev: process.env.NODE_ENV !== "production",
  head: {
    titleTemplate: "%s - Family Carousel",
    title: "Family Carousel",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Tools to run a family with some automation built in",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;600;700;800;900&display=swap",
      },
      {
        rel: "",
        href: "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css",
      },
    ],
    script: [
      {
        // ROC-105: Display browser support message for IE (using document.documentMode to target IE)
        hid: 'ie-script',
        innerHTML: 'if (document.documentMode && window.location.href.indexOf(\'unsupported-browser\') === -1){' +
          'window.location = \'/unsupported-browser\';' +
          '}',
        type: 'text/javascript',
        id: 'ie-script'
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'ie-script': ['innerHTML']
    }
  },
  css: ["~/assets/scss/theme.scss"],
  loading: {
    color: "blue",
    height: "5px",
    continuous: true,
    trottle: 75,
  },
  vue: {
    config: {
      productionTip: process.env.NODE_ENV !== "production",
      devtools: process.env.NODE_ENV !== "production",
    },
  },
  plugins: [
    { src: "~/filters/capitalize.js" },
    { src: "~/filters/lowercase.js" },
    { src: "~/filters/uppercase.js" },
    { src: "~/filters/trim.js" },
    { src: "~/filters/placeholder.js" },
    { src: "~/filters/formatDate.js" },
  ],
  serverMiddleware: [{ path: "/api", handler: "~/server/start.js" }],
  buildModules: [
    [
      "@nuxtjs/vuetify",
      {
        customVariables: ["~/assets/scss/vuetify/variables/_index.scss"],
        optionsPath: "~/configs/vuetify.js",
        treeShake: true,
        defaultAssets: {
          font: false,
        },
      },
    ],
  ],
  modules: [
    "@nuxtjs/google-gtag",
    "cookie-universal-nuxt",
    // "@nuxtjs/proxy",
    [
      "@nuxtjs/axios",
      {
        // proxy: false,
        baseURL: process.env.NUXT_ENV_DOMAIN_HTTPS,
        credentials: process.env.NODE_ENV !== "production",
        debug: process.env.NODE_ENV !== "production",
        retry: {
          retries: 3,
        },
      },
    ],
    "@nuxtjs/auth-next",
    "@nuxt/image",
    [
      "nuxt-validate",
      {
        lang: "en",
      },
    ],
  ],
  "google-gtag": {
    id: "gaId",
    debug: process.env.NODE_ENV !== "production",
    disableAutoPageTrack: false,
  },
  auth: {
    redirect: {
      login: "/auth/loggedin",
      callback: "/auth/loggedin",
      home: "/",
      logout: "/",
    },
    strategies: {
      local: false,
      auth0: {
        domain: process.env.NUXT_ENV_AUTH_DOMAIN,
        clientId: process.env.NUXT_ENV_AUTH_CLIENT_ID,
        audience: process.env.NUXT_ENV_AUTH_AUDIENCE,
        scope: ["openid", "profile", "email", "offline_access"],
        responseType: "code",
        grantType: "authorization_code",
        codeChallengeMethod: "S256",
        logoutRedirectUri: process.env.NUXT_ENV_LOGOUT_REDIRECT_URL,
      },
    },
  },
  build: {},
  // proxy: {},
  publicRuntimeConfig: {
    NUXT_BASE_URL: process.env.NUXT_ENV_DOMAIN_HTTPS,
    axios: {
      browserBaseURL: process.env.NUXT_ENV_DOMAIN_HTTPS,
    },
  },
  privateRuntimeConfig: {
    mailchimpApiKey: process.env.MAILCHIMP_API_KEY,
    axios: {
      baseURL: process.env.NUXT_ENV_DOMAIN_HTTPS,
    },
  },
  pageTransition: {
    name: "default-page",
    mode: "out-in",
  },
  layoutTransition: {
    name: "default-layouts",
    mode: "out-in",
  },
};
