<template>
  <nav
    class="bg-bg-login bg-no-repeat bg-center bg-cover md:bg-none dark:bg-none md:bg-white border-gray-200 fixed w-full p-0 m-0 top-0 -left-2 z-20 dark:md:bg-gray-900 dark:md:text-background-hover-secondary"
  >
    <div
      class="w-3/4 flex flex-wrap items-center justify-center md:justify-between mx-auto p-4"
    >
      <NuxtLink to="/" class="flex items-center">
        <img
          src="/assets/img/logo.png"
          class="h-12 mr-3"
          alt="Telkomsigma Logo"
        />
      </NuxtLink>
    </div>
  </nav>
  <slot />
</template>

<script setup></script>

<style scoped></style>
