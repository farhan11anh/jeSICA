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
        // "contoh" : "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7w_ppyXkK6Fi0IEu8amIpkSDOq0v4KO5sA&usqp=CAU')",
        // "ct" : "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7w_ppyXkK6Fi0IEu8amIpkSDOq0v4KO5sA&usqp=CAU')",
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
        'hover-secondary' : "#D0D5DD",

        "--base---white": "#FFFFFF",
        "--base---black": "#000000",
        "--gray--25": "#FCFCFD",
        "--gray--50": "#F9FAFB",
        "--gray--100": "#F2F4F7",
        "--gray--200": "#EAECF0",
        "--gray--300": "#D0D5DD",
        "--gray--400": "#98A2B3",
        "--gray--500": "#667085",
        '--gray--600': "#475467",
        '--gray--700': "#344054",
        '--gray--800': "#1D2939",
        '--gray--900': "#101828",
        '--gray--950': "#0C111D",
        "--primary--25": "#FFF5F6",
        "--primary--50": "#FFF1F3",
        "--primary--100": "#FFE4E8",
        "--primary--200": "#FECCD6",
        "--primary--300": "#FEA3B4",
        "--primary--400": "#FD6F8E",
        "--primary--500": "#F63D68",
        "--primary--600": "#E31B53",
        "--primary--700": "#C01048",
        "--primary--800": "#A11043",
        "--primary--900": "#89123E",
        "--primary--950": "#510B24",
        "--error--25": "#FFFBFA",
        "--error--50": "#FEF3F2",
        "--error--100": "#FEE4E2",
        "--error--200": "#FECDCA",
        "--error--300": "#FDA29B",
        "--error--400": "#F97066",
        "--error--500": '#F04438',
        "--error--600": '#D92D20',
        "--error--700": '#B42318',
        "--error--800": "#912018",
        "--error--900": "#7A271A",
        "--error--950": "#55160C",
        "--warning--25": "#FFFCF5",
        "--warning--50": "#FFFAEB",
        "--warning--100": "#FEF0C7",
        "--warning--200": "#FEDF89",
        "--warning--300": "#FEC84B",
        "--warning--400": "#FDB022",
        "--warning--500": "#F79009",
        "--warning--600": "#DC6803",
        "--warning--700": "#B54708",
        "--warning--800": "#93370D",
        "--warning--900": "#7A2E0E",
        "--warning--950": "#4E1D09",
        "--success--25": "#F6FEF9",
        "--success--50": "#ECFDF3",
        "--success--100": "#DCFAE6",
        "--success--200": "#ABEFC6",
        "--success--300": "#75E0A7",
        "--success--400": "#47CD89",
        "--success--500": "#17B26A",
        "--success--600": "#079455",
        "--success--700": "#067647",
        "--success--800": "#085D3A",
        "--success--900": "#074D31",
        "--success--950": "#053321",

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