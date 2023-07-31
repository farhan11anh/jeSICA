// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  plugins: [],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      },
    },

})
