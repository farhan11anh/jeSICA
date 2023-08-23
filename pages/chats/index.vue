<template>
  <div  class="container mx-auto w-full h-auto">
    <div v-if="messages.length == 0" class="h-full p-4 md:p-8 flex justify-center items-center flex-col space-y-4">
      <div class="flex">
        <div class="inline-flex space-x-4">
          <card-recomend class="w-full">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="magic-wand-02">
                  <path
                    id="Icon"
                    d="M15 4V2M15 16V14M8 9H10M20 9H22M17.8 11.8L19 13M17.8 6.2L19 5M3 21L12 12M12.2 6.2L11 5"
                    stroke="#E31B53"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </span>
            <div
              class="flex flex-col justify-start items-start space-y-4 w-full wrap"
            >
              <span
                class="text-xl font-body text-gray-900 font-semibold max-w-full whitespace-normal"
                >Capabilities</span
              >
              <span
                class="text-base font-body text-gray-900 font-base max-w-full whitespace-normal"
              >
                Berisikan penjelasan tentang kapabilitas yang dimiliki JeSICA.
                Kurang lebih 2-3 Baris.
              </span>
            </div>
          </card-recomend>
          <card-recomend class="w-full">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="alert-triangle">
                  <path
                    id="Icon"
                    d="M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z"
                    stroke="#E31B53"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </span>
            <div
              class="flex flex-col justify-start items-start space-y-4 w-full wrap"
            >
              <span
                class="text-xl font-body text-gray-900 font-semibold max-w-full whitespace-normal"
                >Limitations</span
              >
              <span
                class="text-base font-body text-gray-900 font-base max-w-full whitespace-normal"
              >
                Berisikan penjelasan tentang kapabilitas yang dimiliki JeSICA.
                Kurang lebih 2-3 Baris.
              </span>
            </div>
          </card-recomend>
        </div>
      </div>
      <div>
        <div class="card" >
          <div class="flex justify-start flex-col space-y-4">
            <span class="text-xl font-body font-semibold text-gray-900"
              >Suggestions</span
            >
            <span class="text-lg font-body font-base text-gray-900"
              >Berisikan pertanyaan-pertanyaan yang mungkin akan ditanyakan
              user.</span
            >
            <div
              class="flex flex-stretch flex-wrap justify-start items-start gap-2"
            >
              <!-- suggestions -->
              <NuxtLink
                class="flex w-fit justify-center items-center gap-2 px-4 py-2 bg-white rounded-full border hover:bg-gray-50 active:bg-gray-100 cursor-pointer"
                v-for="templatechat in questionTemplates"
                key="templatechat.id"
                @click="assignChat(templatechat.title)"
              >
                <span
                  class="text-base font-body font-base text-gray-700"
                  
                >
                  {{ templatechat.title }}
                </span>
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="arrow-right">
                      <path
                        id="Icon"
                        d="M4.16699 9.99996H15.8337M15.8337 9.99996L10.0003 4.16663M15.8337 9.99996L10.0003 15.8333"
                        stroke="#344054"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else >
      <BubleChat 
        v-for="i of messages"
        :jesica="i.isJesica"
        :msg="i.msg" 
      />

      <BubleChat 
        v-if="waitingResp"
        jesica="true"
        msg=".."
        wait-res="true"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import {useChatStore} from '../../stores/chat'
definePageMeta({
  middleware: [
    'auth'
  ],
});

// Define the data properties
const questionTemplates = ref([]);
// define chat store pinia
const chatStore = useChatStore()

function assignChat(msg){
  chatStore.setMessage(msg)
}

// Listen for the 'chatbar-clicked' event on the event bus
onMounted(() => {
  // Simulate the question templates loading after 1 second
  questionTemplates.value = [
    {
      id: 1,
      title: "Hari Senin pakai seragam apa ya?",
    },
    {
      id: 2,
      title: "Bagaimana peraturan berpakaian?",
    },
    {
      id: 3,
      title: "Bagaimana caranya mengklaim asuransi?",
    },
    {
      id: 4,
      title: "Bagaimana cara mengajukan cuti?",
    },
  ];
});

const messages = ref(chatStore.messages)

// sinkronisasi dengan data baru pada pinia
watch(()=>chatStore.messages, (newMessages)=> {
  messages.value = newMessages
})

const waitingResp = ref(false)

watch(()=>chatStore.waitResp, (newVal)=>{
  waitingResp.value = newVal
  // console.log(waitingResp);
})

watch(() => chatStore.messages, () => {
  userSentChat.value = true;
});

definePageMeta({
  layout: userSentChat.value ? 'chat' : 'sidebar'
})
</script>

<style lang="scss" scoped></style>
