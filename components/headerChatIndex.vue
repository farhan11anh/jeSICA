<template>
  <header
    class="top-0 w-full h-16 p-4 bg-white border-b border-gray-200 backdrop-blur-sm justify-between items-center gap-4 inline-flex"
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
    <div class="w-full flex flex-row items-center justify-center gap-2">
      <div class="invisible">
        <span class="w-fit font-body font-semibold"
          >Jessica’s Introduction</span
        >
        <span>
          <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar">
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
    <div class="sm:hidden">
      <div class="flex flex-col items-center justify-between">
        <button class="btn-secondary">
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
        </button>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
