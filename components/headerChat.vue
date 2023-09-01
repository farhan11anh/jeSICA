<template>
  <header
    class="top-0 w-full h-16 p-4 bg-white border-b border-gray-200 backdrop-blur-sm justify-between items-center gap-4 inline-flex"
  >
    <div class="md:hidden">
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
    <div class="w-full flex flex-row items-center justify-center gap-2">
      <span class="w-fit font-body font-semibold">Jessica’s Introduction</span>
      <!-- <span>
        <div class="relative">
          <button
            @click="toggleDropdown()"
            class="btn-tertiary"
            id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ 'rotate-180': isDropdownOpen }"
              class="w-4 h-4 transition-transform duration-300 transform"
            >
              <g id="chevron-down">
                <path
                  id="Icon"
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="#344054"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
          <ul id="dropdownNavbar" class="dropdown">
     
            <li><a href="#" class="dropdown-item">Item 1</a></li>
            <li><a href="#" class="dropdown-item">Item 2</a></li>
            <li><a href="#" class="dropdown-item">Item 3</a></li>
          </ul>
        </div>
      </span> -->

      <button
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        class="btn-tertiary"
        type="button"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="{ 'rotate-180': isDropdownOpen }"
          class="w-4 h-4 transition-transform duration-300 transform"
        >
          <g id="chevron-down">
            <path
              id="Icon"
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#344054"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        id="dropdownDivider"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDividerButton"
        >
          <li>
            <button type="button" class="btn-tertiary">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="share-02">
                    <path
                      id="Icon"
                      d="M4.66667 7.33333C4.04669 7.33333 3.7367 7.33333 3.48236 7.40148C2.79218 7.58642 2.25308 8.12551 2.06815 8.8157C2 9.07003 2 9.38002 2 10V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.07989 14 5.2 14H10.8C11.9201 14 12.4802 14 12.908 13.782C13.2843 13.5903 13.5903 13.2843 13.782 12.908C14 12.4802 14 11.9201 14 10.8V10C14 9.38002 14 9.07003 13.9319 8.8157C13.7469 8.12551 13.2078 7.58642 12.5176 7.40148C12.2633 7.33333 11.9533 7.33333 11.3333 7.33333M10.6667 4.66667L8 2M8 2L5.33333 4.66667M8 2V10"
                      stroke="#344054"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </span>
              <span> Share </span>
            </button>
          </li>
          <!-- <li>
            <button type="button" class="btn-tertiary">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="pencil-line" clip-path="url(#clip0_7653_4096)">
                    <path
                      id="Icon"
                      d="M14 14H8.66664M1.66663 14.3334L5.36614 12.9105C5.60277 12.8195 5.72108 12.774 5.83177 12.7146C5.93009 12.6618 6.02383 12.6009 6.11199 12.5324C6.21124 12.4554 6.30088 12.3658 6.48015 12.1865L14 4.66671C14.7364 3.93033 14.7364 2.73642 14 2.00004C13.2636 1.26366 12.0697 1.26366 11.3333 2.00004L3.81348 9.51985C3.63421 9.69912 3.54457 9.78876 3.46755 9.88801C3.39914 9.97617 3.33823 10.0699 3.28545 10.1682C3.22603 10.2789 3.18053 10.3972 3.08951 10.6339L1.66663 14.3334ZM1.66663 14.3334L3.03871 10.766C3.13689 10.5107 3.18598 10.3831 3.27019 10.3246C3.34377 10.2735 3.43483 10.2542 3.52282 10.271C3.62351 10.2902 3.72021 10.3869 3.91361 10.5803L5.41967 12.0864C5.61307 12.2798 5.70977 12.3765 5.729 12.4772C5.74581 12.5652 5.72648 12.6562 5.67539 12.7298C5.61692 12.814 5.48928 12.8631 5.23401 12.9613L1.66663 14.3334Z"
                      stroke="#344054"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7653_4096">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span> Rename </span>
            </button>
          </li> -->
        </ul>
        <!-- <div class="py-2">
          <button type="button" class="btn-tertiary">
              <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="trash-04">
                    <path id="Icon" d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4" stroke="#F04438" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>

              </span>
              <span class="text-error-600"> Delete </span>
            </button>
        </div> -->
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
import { ref } from 'vue';
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<style scoped>
/* Icon rotation when dropdown is open */
.rotate-180 {
  transform: rotate(180deg);
}
</style>
