/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {},
    colors : {
      // background
      'background' : {
        'primary' : "#E31B53",
        'secondary' :"#FFFFFF",

      },
      // text
      't' : {
        'primary' : "#FFFFFF",
        'secondary' : "#344054",
      },
      // border
      "b" : {
        'secondary' : "#344054"
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}