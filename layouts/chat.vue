<template>
  <div class="overflow-hidden w-full h-full relative flex z-0">
    <div class="hidden sm:block">
      <Sidenav />
    </div>
    <div
      class="relative flex h-screen max-w-full max-h-screen flex-1 overflow-hidden justify-between"
    >
      <div class="flex-1 overflow-hidden">
        <div class="flex flex-col h-screen text-sm justify-between">
          <HeaderChat />
          <div class="flex grow h-full overflow-auto p-5 row-span-full">
            <slot />
          </div>
          <Chatbar />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderChat from '../components/headerChat.vue';
import Sidenav from '../components/sidenav.vue';
</script>

<style scoped></style>
