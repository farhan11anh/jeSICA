<template>
  <div class="overflow-hidden w-full h-full relative flex z-0">
    <div class="hidden sm:block">
      <Sidenav/>
    </div>
    <div
      class="relative flex h-screen max-w-full max-h-screen flex-1 overflow-hidden justify-between"
    >
      <div class="flex-1">
        <div class="flex flex-col h-screen text-sm justify-between">
          <div class="sm:invisible">
            <HeaderChatIndex />
          </div>
          <div ref="chatContainer" class="flex grow h-full overflow-auto p-5 row-span-full">
            <slot />
          </div>
          <Chatbar />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderChatIndex from '../components/headerChatIndex.vue';
import Sidenav from '../components/sidenav.vue';
import { ref, onMounted, nextTick } from "vue";
import {useChatStore} from '../stores/chat'
// define chat store pinia
const chatStore = useChatStore()


watch(()=>chatStore.scroll, (scroll)=>{
  //scroll down ketika data messages pada pinia berubah
  nextTick(() => {
    scrollToBottom();
  });
})

const chatContainer = ref(null)
const scrollToBottom = () => {
  // console.log(chatContainer.value);
  chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
}
</script>

<style scoped></style>
