<template>
  <div class="section-jsc">
    <nav class="bg-whiteborder-gray-200 section-jsc fixed w-screen top-0 left-0 z-20">
      <div
        class="max-w-screen-xl flex-col lg:flex-row flex flex-wrap lg:items-center justify-between mx-auto p-2 md:p-3 lg:p-4"
      >

        <div class="flex flex-row justify-between w-full lg:w-auto">
          <NuxtLink to="/" class="flex items-center">
            <img
              src="/assets/img/logo.png"
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
          class="flex lg:flex-row lg:w-4/5 right-3 lg:right-auto min-[1440px]:w-3/4 lg:justify-between section-jsc rounded-xl" 
          :class="openMenu ? 'flex-col divide-y lg:divide-y-0 fixed lg:static top-3 w-2/3 md:w-2/5 z-40 h-[50vh] lg:h-[50vh] self-end' : 'z-auto'"
        >
          <img
            src="~/assets/icons/close.svg"
            class="cursor-pointer"
            :class="{ 'hidden': !openMenu, 'px-2 py-4 lg:px-0 lg:py-2.5 w-10 self-end lg:hidden': openMenu }"
            alt="close"
            @click="openMenu = false"  
          >

          <div
            class="items-center justify-between w-full md:w-auto"
            :class="{ 'hidden lg:flex': !openMenu, 'flex px-4 py-6 lg:px-0 lg:py-2.5': openMenu }"
            id="navbar-cta"
          >
            <ul
              class="flex flex-col w-full lg:gap-6 font-medium lg:p-4 p-0 rounded-lg lg:flex-row md:space-x-8 md:mt-0 "
            >
              <li class="!ml-0">
                <NuxtLink
                  to="/"
                  class="block py-2 pl-3 pr-4 bg-blue-700 dark:text-primary-600 rounded lg:bg-transparent lg:text-blue-700 lg:p-0"
                  aria-current="page"
                  >Home</NuxtLink
                >
              </li>
              <li class="!ml-0">
                <NuxtLink
                  to="#"
                  class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-900 md:p-0"
                  >Solutions & Services</NuxtLink
                >
              </li>
              <li class="!ml-0">
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-900 md:p-0"
                  >About Us</a
                >
              </li>
              <li class="!ml-0">
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-900 md:p-0"
                  >Information</a
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
                  class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:md:hover:text-blue-900 md:p-0"
                  >Chats</NuxtLink
                >
              </li>
            </ul>
          </div>

          <div v-show="isLogin" :class="{ 'hidden lg:flex flex-row gap-4': !openMenu, 'flex flex-col lg:flex-row gap-4 px-4 py-6 lg:px-0 lg:py-2.5': openMenu }">
              <Button @click="goTo('auth/login')" background="bg-background-secondary !mb-0 !mr-0 text-t-secondary border border-b-secondary" class="hover:text-t-hover-secondary hover:border-gray-400 hover:bg-background-secondary" title="Login" style="height: 40px;" />
              <!-- <Button @click="goTo('try-now')" background="bg-background-primary !mb-0 !mr-0 text-t-primary" class="hover:bg-background-hover-primary hover:text-t-hover-primary" title="Try Now" /> -->
          </div>
        </div>

      </div>
        <div v-if="openMenu" @click="openMenu = false" class="bg-black opacity-50 inset-0 h-screen w-screen z-30 fixed lg:hidden"></div>
    </nav>
    <div class="h-16"></div>

    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      openMenu: false,
      newWidth: 1,
      oldWidth: 1
    };
  },
  mounted() {
    this.getPath();
  },
  methods: {
    goTo(url) {
      navigateTo({
        path: `/${url}`,
      });
    },
    getPath() {
      this.url = this.$route.name;
      console.log(this.url);
    },
    getData(e) {
      console.log(e);
    },
  },
  computed : {
    isLogin(){
      let login = ""
      if(process.client){
        login = localStorage.getItem('token') ? false : true
      }
      return login
    }
  }
};
</script>
