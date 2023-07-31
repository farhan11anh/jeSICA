// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ['/e:/---- SIGMA ----/jeSICA/plugins/pinia.js'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      },
    },

})
