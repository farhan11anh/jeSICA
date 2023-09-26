<template>
  <div class="section-jsc">
    <nav
      class="bg-whiteborder-gray-200 section-jsc fixed w-screen top-0 left-0 z-20"
    >
      <div
        class="w-3/4 mx-auto flex-col lg:flex-row flex flex-wrap lg:items-center justify-between py-2 md:py-3 lg:py-4"
      >
        <div class="flex flex-row justify-between w-full lg:w-auto">
          <NuxtLink to="/" class="flex items-center"> 
            <img v-if="theme == 'dark'"
              src="@/img/logo-inverted.png"
              class="h-12 mr-3"
              alt="Telkomsigma Logo"
            />
            <img v-else
              src="@/img/logo.png"
              class="h-12 mr-3"
              alt="Telkomsigma Logo"
            />
          </NuxtLink>

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            @click="openMenu = !openMenu"
            class="inline-flex lg:hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          class="flex lg:flex-row lg:w-4/5 right-3 lg:right-auto min-[1540px]:w-3/4 lg:justify-between section-jsc rounded-xl"
          :class="
            openMenu
              ? 'flex-col divide-y lg:divide-y-0 fixed lg:static top-3 w-2/3 md:w-2/5 z-40 h-[90vh] lg:h-[90vh] self-end'
              : 'z-auto'
          "
        >
          <img
            src="~/assets/icons/close.svg"
            class="cursor-pointer"
            :class="{
              hidden: !openMenu,
              'px-2 py-4 lg:px-0 lg:py-2.5 w-10 self-end lg:hidden': openMenu,
            }"
            alt="close"
            @click="openMenu = false"
          />

          <div
            class="items-center justify-between w-full md:w-auto"
            :class="{
              'hidden lg:flex': !openMenu,
              'flex px-4 py-6 lg:px-0 lg:py-2.5': openMenu,
            }"
            id="navbar-cta"
          >
            <ul
              class="flex flex-col w-full lg:gap-6 font-medium lg:p-4 p-0 rounded-lg lg:flex-row md:space-x-8 md:mt-0"
            >
              <li class="!ml-0" 
                  :class="url=='index' ? 'border-b-[3.1px] border-red-800 shadow-2xl shadow-[#ff00002c] lg:text-red-700' : ''">
                <NuxtLink
                  to="/"
                  class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-900 md:p-0"
                  aria-current="page"
                  >{{ $t('navbar__home') }}</NuxtLink
                >
              </li>
              <li class="!ml-0"  data-dropdown-toggle="dropdown"
              :class="url=='products-it-services'  ? 'border-b-[3.1px] border-red-800 shadow-2xl shadow-[#ff00002c] lg:text-red-700' : ''">
                <div class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-900 md:p-0 cursor-pointer"  >
                  {{ $t('navbar__solution_services') }}
                </div>
                <!-- <NuxtLink
                  to="/products/it-services"
                  class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-900 md:p-0"
                  >{{ $t('navbar__solution_services') }}</NuxtLink
                > -->
              </li>

              <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 pl-5">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <NuxtLink
                          to="/products/it-services"
                          class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-900 md:p-0"
                          >IT Solution</NuxtLink
                        >
                    </li>
                  </ul>
              </div>

              <li class="!ml-0"
              :class="url=='about'  ? 'border-b-[3.1px] border-red-800 shadow-2xl shadow-[#ff00002c] lg:text-red-700' : ''">
                <NuxtLink
                  to="/about"
                  class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-900 md:p-0"
                  >{{ $t('navbar__about_us') }}</Nuxtlink
                >
              </li>
              <li class="!ml-0"
              :class="url.includes('information')  ? 'border-b-[3.1px] border-red-800 shadow-2xl shadow-[#ff00002c] lg:text-red-700' : ''">
                <NuxtLink
                  to="/information"
                  class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-900 md:p-0"
                  >{{ $t('navbar__information') }}</NuxtLink
                >
              </li>
              <!-- <li class="!ml-0">
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-900 md:p-0"
                  >Career</a
                >
              </li> -->

              <li v-if="!isLogin" class="!ml-0">
                <NuxtLink
                  to="/chats"
                  class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-900 md:p-0"
                  >{{ $t('navbar__chats') }}</NuxtLink
                >
              </li>
            </ul>
          </div>

          <div
            v-show="isLogin"
            :class="{
              'hidden lg:flex flex-row gap-4': !openMenu,
              'flex flex-col lg:flex-row gap-4 px-4 py-6 lg:px-0 lg:py-2.5':
                openMenu,
            }"
          >
            <Button
              @click="goTo('auth/login')"
              background="bg-background-secondary !mb-0 !mr-0 text-t-secondary border border-b-secondary"
              class="hover:text-t-hover-secondary hover:border-gray-400 hover:bg-background-secondary"
              title="Login"
              style="height: 40px"
            />
            <!-- <Button @click="goTo('try-now')" background="bg-background-primary !mb-0 !mr-0 text-t-primary" class="hover:bg-background-hover-primary hover:text-t-hover-primary" title="Try Now" /> -->
          </div>
        </div>
      </div>
      <div
        v-if="openMenu"
        @click="openMenu = false"
        class="bg-black opacity-50 inset-0 h-screen w-screen z-30 fixed lg:hidden"
      ></div>
    </nav>
    <div class="h-24"></div>

    <slot />

    <Avatar
      class="fixed bottom-5 right-5 shadow-lg shadow-gray-600 cursor-pointer"
      width="w-12"
      online="true"
      @click="showModal = true"
    />

    <Popup v-show="showModal" @close-modal="showModal = false" />

    <!-- footer -->
    <footer class="w-full bg-[#000000] py-20 mt-16">
      <div class="w-3/4 mx-auto text-warning-25 flex flex-wrap">
          <div class="basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div class="mb-5" >
                  <img class="w-52" src="@/img/logo-inverted.png" alt="">
              </div>
              <div class=" text-white font-bold text-lg mb-3">
                  <img class="w-4 inline-block" src="@/img/pin-location.png" alt=""> <span class="ml-2" >Head Office</span> 
              </div>
              <div class="text-gray-400 font-semibold text-sm w-4/5" >
                  <div class="mb-2">Indigohub Jogja</div>
                  <span class="leading-loose" >
                      Jl. Kartini No.7, Terban, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55223
                  </span>
              </div>

          </div>
          <div class="basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div class="mx-auto w-fit">
                  <h2 class="text-white font-bold text-lg mb-3" >
                      Navigation
                  </h2>
                  <ul class="text-gray-400 leading-loose" >
                      <li>
                          <NuxtLink to="/">{{ $t('navbar__home') }}</NuxtLink>
                      </li>
                      <li>
                          <NuxtLink to="#">{{ $t('navbar__solution_services') }}</NuxtLink>
                      </li>
                      <li>
                          <NuxtLink to="/about">{{ $t('navbar__about_us') }}</NuxtLink>
                      </li>
                      <li>
                          <NuxtLink to="/information">{{ $t('navbar__information') }}</NuxtLink>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="basis-1/2 mt-10 md:mt-0 md:basis-1/3 lg:basis-1/4">
              <h2 class="text-white font-bold text-lg mb-3" >
                  Product & Services
              </h2>
              <ul class="text-gray-400 leading-loose" >
                  <li>
                      IT Services
                  </li>
                  <li>
                      Cloud
                  </li>
                  <li>
                      Cyber Security
                  </li>
              </ul>
          </div>
          <div class="basis-1/2 mt-10 md:basis-1/3 lg:basis-1/4">
              <div class="flex mx-auto w-4/5" >
                  <div class="basis-1/4">
                      <NuxtLink to="#">
                          <div class=" rounded-full h-10 w-10 bg-[#dbdbdb] relative" >
                              <img class="w-1/2 mx-auto absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" src="@/icons/facebook.svg" alt="">
                          </div>
                      </NuxtLink>
                      
                  </div>
                  <div class="basis-1/4">
                      <NuxtLink to="#">
                          <div class=" rounded-full h-10 w-10 bg-[#dbdbdb] relative" >
                              <img class="w-1/2 mx-auto absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" src="@/icons/youtube.svg" alt="">
                          </div>
                      </NuxtLink>
                      
                  </div>
                  <div class="basis-1/4">
                      <NuxtLink to="#">
                          <div class=" rounded-full h-10 w-10 bg-[#dbdbdb] relative" >
                              <img class="w-1/2 mx-auto absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" src="@/icons/instagram.svg" alt="">
                          </div>
                      </NuxtLink>
                      
                  </div>
                  <div class="basis-1/4">
                      <NuxtLink to="#">
                          <div class=" rounded-full h-10 w-10 bg-[#dbdbdb] relative" >
                              <img class="w-1/2 mx-auto absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" src="@/icons/linkedin.svg" alt="">
                          </div>
                      </NuxtLink>
                      
                  </div>
              </div>
          </div>
      </div>
  </footer>
  </div>
</template>

<script setup>
import { useLayoutStore } from '@/stores/layout';
import { useRoute } from 'vue-router';
const $layout = useLayoutStore()

const url = ref('')
const openMenu = ref(false)
const newWidth = ref(1)
const oldWidth = ref(1)
const theme = ref(localStorage.theme)

const showModal = ref(false);


const route = useRoute()

onMounted(() => {
  getPath()
})

const goTo = (url) => {
  navigateTo({
    path: `/${url}`
  })
}

const getPath = () => {
  url.value = route.name
}

const isLogin = computed(()=>{
    let login = '';
    if (process.client) {
      login = localStorage.getItem('token') ? false : true;
    }
    return login;
})

watch(route, (val) => {
  url.value = val.matched[0].name
})

watch(()=>$layout.theme, (val)=>{
  theme.value = val;
})

</script>
