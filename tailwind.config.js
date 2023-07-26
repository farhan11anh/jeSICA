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
    extend: {
      // backgorund image
      "backgroundImage" : {
        "contoh" : "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7w_ppyXkK6Fi0IEu8amIpkSDOq0v4KO5sA&usqp=CAU')",
        "ct" : "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7w_ppyXkK6Fi0IEu8amIpkSDOq0v4KO5sA&usqp=CAU')",
        'pattern': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('/assets/img/chat-ss.svg')",
        'bg-login' : "url('/assets/img/bg-login.png')"

      },
      flexBasis : {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      fontFamily:{
        nunito : ['Nunito'],
        inter : ['Inter']
      }
    },
    colors : {
      // background
      'background' : {
        'primary' : "#E31B53",
        'hover-primary' : "#C01048",
        'secondary' :"#FFFFFF",
        'hover-secondary' : "#D0D5DD"

      },
      // text
      't' : {
        'primary' : "#FFFFFF",
        'hover-primary' : "#FFFFFF",
        'secondary' : "#344054",
        'hover-secondary' : "#1D2939",
        'second' : "#475467"
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