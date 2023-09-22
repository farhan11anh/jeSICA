<template>
  <nav
    class="bg-gray-50 border section-jsc border-gray-300 dark:border-gray-900 rounded-t-md"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <div class="flex gap-3 place-items-center">
        <Avatar online="true" width="w-12 relative" />
        <div
          class="font-semibold text-[#344054] dark:text-background-hover-secondary"
        >
          JeSiCa
        </div>
      </div>

      <div class="hidden w-full" id="navbar-hamburger">
        <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50">
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded"
              aria-current="page"
              >JeSiCa</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
