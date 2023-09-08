<template class="h-screen">
  <div :class="isDark ? 'dark' : ''" class="font-inter relative overflow-hidden">
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>

    
    <transition mode="in-out">
      <!-- <div class="fixed bottom-5 left-5 z-40 w-40 h-20"> -->
      <div class="fixed left-5 z-40 w-40 h-20" 
        :class="appear_settings ? 'bottom-5' : '-bottom-16'">
        <div @click="appear_settings=!appear_settings" 
            class="rounded-full bg-gray-400 hover:bg-gray-500 w-6 h-6 absolute -top-3 left-1/2 -translate-x-1/2"
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
        <div id="tooltip-settings" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Settings (language and darkmode)
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>

        <div class="bg-[#D0D5DD] dark:bg-[#5a5c60] p-5 border border-gray-400 w-full h-full box-border rounded-2xl">
          <!-- lang changer -->
          <div class="locale-changer absolute bottom-5 left-5">
            <select v-model="$i18n.locale">
              <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                {{ lang }}
              </option>
            </select>
          </div>

          <!-- theme changer -->
          <div @click="togle_dark_mode" class="absolute bottom-7 left-28 bg-[#ffffff93] rounded-full z-50 cursor-pointer" >
            <transition mode="out-in" >
              <div v-if="isDark">
                <img src="/icons/moon.svg" alt="" srcset=""> 
              </div>
              <div v-else >
                <img src="/icons/sun.svg" alt="" srcset=""> 
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

  const langs = ref(['id', 'en'])
  const isDark = ref(false)
  // settings corner
  const appear_settings = ref(false)

  onMounted(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      isDark.value = true
    } else {
      isDark.value = false
    }
    localStorage.theme = 'light'
    initFlowbite()
  })

  const togle_dark_mode = () => {
    isDark.value = !isDark.value
    localStorage.theme = isDark.value == false ? 'light' : 'dark'
  }
</script>

<style>

</style>