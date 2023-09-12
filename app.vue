<template class="h-screen">
  <div :class="isDark ? 'dark' : ''" class="font-inter relative">
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>

    <div @click="hide_and_show" 
    class="rounded-full bg-gray-400 hover:bg-gray-500 w-6 h-6 fixed bottom-3 left-20 z-50"
    data-tooltip-target="tooltip-settings">
      <span class="-mb-10" >
        <svg v-if="!appear_settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-up">
          <polyline points="17 11 12 6 7 11"></polyline>
          <polyline points="17 18 12 13 7 18"></polyline>
        </svg>

        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down">
          <polyline points="7 13 12 18 17 13"></polyline>
          <polyline points="7 6 12 11 17 6"></polyline>
        </svg>
      </span>
    </div>
      <!-- tooltip settings -->
      <div id="tooltip-settings" role="tooltip" class="absolute z-40 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        {{ $t('app__setting') }}
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>

    <transition name="fade" mode="out-in">
      <!-- <div class="fixed bottom-5 left-5 z-40 w-40 h-20"> -->
      <div v-if="animation" class="fixed left-5 z-30 w-40 h-20" 
        :class="appear_settings ? 'bottom-5' : '-bottom-16'">


        <div class="bg-[#D0D5DD] dark:bg-[#5a5c60] p-5 border border-gray-400 w-full h-full box-border rounded-2xl">
          <!-- lang changer -->
          <div class="locale-changer absolute bottom-5 left-5">
            <!-- <select v-model="$i18n.locale">
              <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                {{ lang }}
              </option>
            </select> -->
            <transition name="lang">
              <div v-if="$i18n.locale == 'en'" @click="$i18n.locale = 'id'" class="w-12 cursor-pointer">
                <img class="w-full" src="/img/en-flag.svg" alt="">
              </div>
              <div v-else @click="$i18n.locale = 'en'" class="w-12">
                <img class="w-full" src="/img/id-flag.svg" alt="">
              </div>
            </transition>
          </div>

          <!-- theme changer -->
          <div @click="togle_dark_mode" class="absolute bottom-5 right-5 bg-[#ffffff93] rounded-full z-50 cursor-pointer" >
            <transition name="lang" mode="out-in" >
              <div v-if="isDark">
                <img class="w-12" src="/icons/moon.svg" alt="" srcset=""> 
              </div>
              <div v-else >
                <img class="w-12" src="/icons/sun.svg" alt="" srcset=""> 
              </div>
            </transition>
          </div>
          
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup >
  import {initFlowbite} from "flowbite";
  import { useI18n } from 'vue-i18n'
  const {locale} = useI18n()

  const langs = ref()
  const isDark = ref(false)
  // settings corner
  const appear_settings = ref(false)

  const animation = ref(false)

  onMounted(()=>{
    // console.log(window.matchMedia('(prefers-color-scheme: dark)'));
    // darkmode matches the device theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      isDark.value = true
    } else {
      isDark.value = false
    }
    initFlowbite()

    // set lang
    if((!('lang' in localStorage)) || localStorage.lang === 'en'){
      localStorage.setItem('lang','en')
    } else {
      localStorage.setItem('lang','id')
    }
    // Loads the language based on the language stored in local storage
    locale.value = localStorage.lang
  })

  const togle_dark_mode = () => {
    isDark.value = !isDark.value
    localStorage.theme = isDark.value == false ? 'light' : 'dark'
  }

  const hide_and_show = () => {
    animation.value = !animation.value
    appear_settings.value=!appear_settings.value
  }

  // save to local storage every lang change
  watch((locale), (val)=>{
    localStorage.lang = val
  })
</script>

<style>

  .fade-leave-active {
    transition: all 0.5s ease-out;
  }
  .fade-leave-to {
    transform: translateY(100%);
  }

  .fade-enter-active {
    transition: all 0.5s ease-in;
  }
  .fade-enter-from {
    transform: translateY(100%);
  }


  .lang-leave-active {
    transition: all 0.3s ease-out;
  }
  .lang-leave-to {
    transform: translateY(100%);
  }

  .lang-enter-active {
    transition: all 0.5s ease-in;
  }
  .lang-enter-from {
    transform: translateY(-100%);
  }

</style>