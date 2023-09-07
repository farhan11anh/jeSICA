<template class="h-screen">
  <div :class="isDark ? 'dark' : ''" class="font-inter relative">
    <div @click="togle_dark_mode" class="fixed bottom-5 left-5 bg-[#ffffff93] rounded-full z-50 cursor-pointer" >
      <transition mode="out-in" >
        <div v-if="isDark">
          <img src="/icons/moon.svg" alt="" srcset=""> 
        </div>
        <div v-else >
          <img src="/icons/sun.svg" alt="" srcset=""> 
        </div>
      </transition>
    </div>
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>

    <div class="locale-changer fixed bottom-5 left-16">
      <select v-model="$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
          {{ lang }}
        </option>
      </select>
    </div>


  </div>
</template>

<script setup >
  const langs = ref(['id', 'en'])
  
  const isDark = ref(false)

  onMounted(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      isDark.value = true
    } else {
      isDark.value = false
    }
    localStorage.theme = 'light'
  })

  const togle_dark_mode = () => {
    isDark.value = !isDark.value
    localStorage.theme = isDark.value == false ? 'light' : 'dark'
  }
</script>

<style>

  .bg {
    background-color: #0000006b;
  }
</style>