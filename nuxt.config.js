require('dotenv').config()
import redirectSSL from 'redirect-ssl';
export default {
  ssr: true,
  /*
  ** Headers of the page
  */
  head: {
    title: 'CEDU',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/images/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/images/favicons/favicon-16x16.png' },

      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap" },

      { rel: "stylesheet", href: "/assets/css/animate.min.css" },
      { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/owl.carousel.min.css" },
      { rel: "stylesheet", href: "/assets/css/owl.theme.default.min.css" },
      { rel: "stylesheet", href: "/assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css" },
      { rel: "stylesheet", href: "/assets/plugins/kipso-icons/style.css" },
      { rel: "stylesheet", href: "/assets/css/magnific-popup.css" },
      { rel: "stylesheet", href: "/assets/css/vegas.min.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/assets/css/responsive.css" },

    ],

    script: [
      { src: "/assets/js/jquery.min.js", body: true , ssr: false },
      { src: "/assets/js/bootstrap.bundle.min.js", body: true , ssr: false },
      { src: "/assets/js/waypoints.min.js", body: true , ssr: false },
      { src: "/assets/js/owl.carousel.min.js", body: true , ssr: false },
      { src: "/assets/js/jquery.counterup.min.js", body: true , ssr: false },
      { src: "/assets/js/TweenMax.min.js", body: true , ssr: false },
      { src: "/assets/js/wow.js", body: true , ssr: false },
      { src: "/assets/js/jquery.magnific-popup.min.js", body: true , ssr: false },
      { src: "/assets/js/countdown.min.js", body: true , ssr: false },
      { src: "/assets/js/vegas.min.js", body: true , ssr: false },
      { src: "/assets/js/jquery.validate.min.js", body: true , ssr: false },
      { src: "/assets/js/jquery.ajaxchimp.min.js", body: true , ssr: false },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#f16101',
    height: '4px'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/TiptapVuetify",
    { src: '~/plugins/vue-tel-input-vuetify', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  components: true,
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
    '@nuxtjs/moment',
    "@nuxtjs/vuetify",
    'bootstrap-vue/nuxt',
  ],
  moment: {
    timezone: true
  },
  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true
  },
  serverMiddleware: [redirectSSL.create({enabled: process.env.NODE_ENV === 'production'})],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en-US.json',
        dir: 'ltr'
      },
      {
        code: 'fr',
        name: 'French',
        iso: 'fr-FR',
        file: 'fr-FR.json',
        dir: 'ltr'
      },
    ],
    langDir: "static/lang",
    lazy: true,
    defaultLocale: 'en',
    strategy: 'no_prefix',
    silentTranslationWarn: process.env.NODE_ENV === 'production',
    silentFallbackWarn: process.env.NODE_ENV === 'production',
  },
  axios: {
    proxy: true,
    BaseURL: process.env.API_URL,
    // proxyHeaders: false,
    // credentials: false
  },
  proxy: {
    "/api": process.env.API_URL
  },
  build: {
    transpile: ['vuetify/lib', "tiptap-vuetify" , 'vue-tel-input-vuetify']
  },
  router: {
    middleware: ['auth']
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/users/login',
            method: 'post',
            propertyName: "token"
          },
          logout: {
            url: '/api/users/logout',
            method: 'post',
          },
          user: {
            url: '/api/users/user',
            method: 'get',
          }
        }
        },
        facebook: {
          client_id: '332127222262076',
          userinfo_endpoint: 'https://graph.facebook.com/me?fields=about,name,picture.typr(large){url},email,birthday',
          scope: ['public_profile', 'email', 'user_birthday']
        },
        google: {
          client_id: '160001613518-8qdslgbi9iq1h2f01p31utp6mpd2scd5.apps.googleusercontent.com'
        }
      },

      redirect: {
        login: '/users/login',
        logout: '/',
        callback: '/users/login',
        home: '/'
      },
  },
}
