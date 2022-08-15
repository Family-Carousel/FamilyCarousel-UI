module.exports = {
  srcDir: "src/",
  telemetry: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
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
        rel: '',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css'
      },
      // ...config.icons.map((href) => ({ rel: "stylesheet", href })),
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/scss/theme.scss"],

  loading: { 
    color: "blue",
    height: '5px',
    continuous: true,
    trottle: 75
  },

  vue: {
    config: {
      productionTip: true,
      devtools: true,
    },
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // filters
    { src: "~/filters/capitalize.js" },
    { src: "~/filters/lowercase.js" },
    { src: "~/filters/uppercase.js" },
    { src: "~/filters/trim.js" },
    { src: "~/filters/placeholder.js" },
    { src: "~/filters/formatDate.js" },
  ],

  serverMiddleware: [
    { path: '/api', handler: '~/server/start.js' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
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
  
  // render: {
  //   bundleRenderer: {
  //     runInNewContext: false
  //   }
  // },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/google-gtag",
    'cookie-universal-nuxt',
    // "@nuxtjs/proxy",
    "@nuxtjs/axios",
    '@nuxtjs/auth-next',
    "@nuxt/image",
    [
      "nuxt-validate",
      {
        lang: "en",
        // regular vee-validate options
      },
    ],
  ],

  "google-gtag": {
    id: 'gaId',
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  },

  auth: {
    redirect: {
      login: '/auth/loggedin',
      callback: '/auth/loggedin',
      home: '/',
      logout: '/'
    },
    strategies: {
      local: false,
      auth0: {
        domain: process.env.NUXT_ENV_AUTH_DOMAIN,
        clientId: process.env.NUXT_ENV_AUTH_CLIENT_ID,
        audience: process.env.NUXT_ENV_AUTH_AUDIENCE,
        scope: ['openid', 'profile', 'email', 'offline_access'],
        responseType: 'code',
        grantType: 'authorization_code',
        codeChallengeMethod: 'S256',
        logoutRedirectUri: process.env.NUXT_ENV_LOGOUT_REDIRECT_URL,
      }
    }
  },  

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // proxy: {},

  axios: {
    // proxy: false,
    baseURL: process.env.NUXT_ENV_DOMAIN_HTTP,
    credentials: true
  },

  publicRuntimeConfig: {
    NUXT_BASE_URL: process.env.NUXT_ENV_DOMAIN_HTTP,
    axios: {
      browserBaseURL: process.env.NUXT_ENV_DOMAIN_HTTP,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.NUXT_ENV_DOMAIN_HTTP,
    },
  },
  pageTransition: {
    name: "default-page",
    mode: "out-in",
    beforeEnter(el) {
      console.log("Before enter...");
    },
  },
  layoutTransition: {
    name: "default-layouts",
    mode: "out-in",
  },
};
