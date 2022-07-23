import config from './src/configs'

const { gaId } = config.analytics
const isDev = process.env.NODE_ENV === 'development'
const baseUrl = isDev ? 'http://localhost:3000' : 'https://familycarousel.com'

export default {
  // ssr: false,
  // target: 'static',
  srcDir: 'src/',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Family Carousel',
    title: 'Family Carousel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tools to run a family with some automation built in' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;600;700;800;900&display=swap' },
      ...config.icons.map((href) => ({ rel: 'stylesheet', href }))
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/theme.scss'
  ],

  loading: { color: '#fff' },

  vue: {
    config: {
      productionTip: true,
      devtools: true
    }
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // filters
    { src: '~/filters/capitalize.js' },
    { src: '~/filters/lowercase.js' },
    { src: '~/filters/uppercase.js' },
    { src: '~/filters/trim.js' },
    { src: '~/filters/placeholder.js' },
    { src: '~/filters/formatDate.js' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', {
      customVariables: ['~/assets/scss/vuetify/variables/_index.scss'],
      optionsPath: '~/configs/vuetify.js',
      treeShake: true,
      defaultAssets: {
        font: false
      }
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/google-gtag',
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    '@nuxt/image',
    [
      'nuxt-validate',
      {
        lang: 'en'
        // regular vee-validate options
      }
    ],
  ],

  'google-gtag': {
    id: gaId,
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false // disable if you don't want to track each page route with router.afterEach(...).
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  proxy: {

  },

  axios: {
    proxy: true
  },

  publicRuntimeConfig: {
    NUXT_BASE_URL: baseUrl,
    axios: {
      browserBaseURL: baseUrl
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: baseUrl
    }
  },
  pageTransition: {
    name: 'default-page',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('Before enter...')
    }
  },
  layoutTransition: {
    name: 'default-layouts',
    mode: 'out-in'
  }
}
