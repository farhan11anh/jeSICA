<template>
 <div
    class="w-full h-fit p-3 flex-col justify-center items-center gap-2.5 inline-flex"
  >
    <div class="self-stretch justify-start gap-1.5 inline-flex">
      <div
        class="grow shrink basis-0 flex-col justify-start gap-1.5 inline-flex focus-within:ring-primary-600"
      >
        <!-- {{ Msg() }} -->
        <input
          type="text"
          class="self-stretch px-2 py-3 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 whitespace-normal break-all inline-flex focus:ring-primary-600"
          placeholder="Ask me Anything"
          v-model="msg"
          @keyup.enter="sendMessage"
        />
      </div>
      <button type="submit" 
              class="btn-primary"
              @click="sendMessage()"
              :disabled="isNullMessage"
              :class="isNullMessage ? 'cursor-not-allowed' : ''"
      
      >
        <div class="w-5 h-5 relative">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="send-03">
              <path
                id="Icon"
                d="M8.75036 10.0001H4.16702M4.09648 10.243L2.15071 16.0552C1.99785 16.5119 1.92142 16.7402 1.97627 16.8808C2.0239 17.0029 2.1262 17.0954 2.25244 17.1307C2.3978 17.1712 2.61736 17.0724 3.05647 16.8748L16.9827 10.608C17.4113 10.4151 17.6256 10.3187 17.6918 10.1847C17.7494 10.0684 17.7494 9.93179 17.6918 9.8154C17.6256 9.68143 17.4113 9.585 16.9827 9.39212L3.05161 3.12317C2.61383 2.92617 2.39493 2.82767 2.24971 2.86807C2.1236 2.90317 2.0213 2.99549 1.97351 3.11736C1.91847 3.25769 1.99408 3.4855 2.14531 3.94113L4.09702 9.82134C4.12299 9.8996 4.13598 9.93873 4.14111 9.97874C4.14565 10.0143 4.14561 10.0502 4.14097 10.0857C4.13574 10.1257 4.12265 10.1648 4.09648 10.243Z"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
      </button>
    </div>
    <div
      class="w-fit text-center text-gray-500 text-sm font-normal leading-tight"
    >
      Jessica is continually improving, and her responses may become more
      accurate over time. ChatGPT May 24 Version.
    </div>
  </div>
  </template>
  
  <script setup>
    import {useChatStore} from '../stores/chat'
    import { useAuthStore } from '../stores/auth';
    const chatStore = useChatStore()
    const $auth = useAuthStore()

    const msg = ref('')

    const id_history = ref("")

    watch(()=> chatStore.message, (newChat) => {
      msg.value = newChat
    })

    const sendMessage = async () => {
      const data = {
        isJesica : "false",
        msg : msg.value
      }
      const chat = msg.value
      addChat(data, true)

      try {
        const config = useRuntimeConfig()
        const url = config.public.apiBase
        const userData = JSON.parse(localStorage.getItem('user_data'))
        const userID = userData.data.data.user_id

        // id yang akan dipanggil (menentukan akan membuat chat baru ataupun melanjutkan chat.)
        let id = chatStore.id_history

        // melakukan set history
        if(chatStore.messages.length >= 2) {
          id = chatStore.historyChat[0].history_id
        }

        // mengirim chat menggunakan api dari be.
        await $fetch(`${url}/api/chat/inazure/v1`, {
          method: 'POST',
          headers : {
            'Authorization':`Bearer ${localStorage.getItem("token")}`
          },
          body: {
            text : chat,
            user_id : userID,
            history_id : id
          }
        })
        // console.log(resp.headers);
        .then((resp)=> {
          const d = {
            isJesica : "true",
            msg : resp.data.text_response
          }
          addChat(d, false)

          if(chatStore.messages.length <= 3){
            chatStore.getHistoryByUserId(userID)
          }
        })
      } catch (error) {
        const d = {
          isJesica : "true",
          msg : "server tidak merespon ..."
        }
        addChat(d, false)
      }
    }

    // template send chat 
    const addChat = (data, wait) => {
      chatStore.addMessages(data)
      msg.value = ""
      chatStore.changeWait(wait)
      // ubah nilai agar bisa trigger scroll
      chatStore.scrollDown()
    }

    onMounted(() => {
      setIdHistory()
    });

    const setIdHistory = () => {
      id_history.value = chatStore.id_history
    }

    const waitingResp = ref(false)
    watch(()=>chatStore.waitResp, (newVal)=>{
      waitingResp.value = newVal
      // console.log(waitingResp);
    })

    const isNullMessage = computed(()=> {
      if(msg.value == "" || waitingResp.value == true) {
        return true
      } else {
        return false
      }
    })

  </script>
  
  <style lang="scss" scoped></style>