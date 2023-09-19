<template>
  <header
    class="top-0 w-full h-fit p-2 sm:p-4 border-b border-gray-200 backdrop-blur-sm justify-between items-center inline-flex"
  >
    <div class="sm:hidden">
      <div class="flex flex-col items-center justify-between">
        <button class="btn-tertiary">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="menu-01">
                <path
                  id="Icon"
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="#344054"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </span>
        </button>
      </div>
    </div>

    <!-- drawer -->

    <!-- drawer init and show -->
    <div class="text-center">
      <button
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="button"
        data-drawer-target="drawer-navigation"
        data-drawer-show="drawer-navigation"
        aria-controls="drawer-navigation"
      >
        Show navigation
      </button>
    </div>

    <!-- drawer component -->
    <div
      id="drawer-navigation"
      class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800"
      tabindex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <h5
        id="drawer-navigation-label"
        class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        Menu
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <mobileSidenav />
    </div>

    <div class="hidden">
      <div class="w-full flex flex-row items-center justify-center gap-2">
        <div class="invisible">
          <span class="w-fit font-body font-semibold"
            >Jessica’s Introduction</span
          >
          <span>
            <button>
              <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="sm:hidden">
      <div class="flex flex-col items-center justify-between">
        <NuxtLink to="/chats" class="btn-secondary">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="plus">
              <path
                id="Icon"
                d="M10.0001 4.16669V15.8334M4.16675 10H15.8334"
                stroke="#344054"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import mobileSidenav from './mobileSidenav.vue';
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<style lang="scss" scoped></style>
