<template>
  <div
    class="flex-shrink-0 overflow-x-hidden section-jsc border-r dark:border-r-0 h-full"
    :class="isOpen ? 'w-fit' : 'w-60'"
  >
    <div class="h-full w-full">
      <div class="flex h-full min-h-0 flex-col">
        <nav
          class="flex flex-col h-screen w-full p-2 gap justify-between"
          aria-label="Chat History"
        >
          <div class="justify-center flex">
            <div
              class="flex justify-between gap-2"
              :class="isOpen ? 'flex-col' : 'flex-row'"
            >
              <NuxtLink @click="newChat()" class="btn-secondary dark:bg-dark-primary dark:text-gray-400 cursor-pointer">
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
                      d="M9.99996 4.16675V15.8334M4.16663 10.0001H15.8333"
                      stroke="#999999"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                <span v-if="!isOpen">New Chat</span>
              </NuxtLink>
              <button class="btn-secondary dark:bg-dark-primary" @click="toggleSidebar()">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="layout-left">
                      <path
                        id="Icon"
                        d="M7.5 2.5V17.5M6.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V6.5C2.5 5.09987 2.5 4.3998 2.77248 3.86502C3.01217 3.39462 3.39462 3.01217 3.86502 2.77248C4.3998 2.5 5.09987 2.5 6.5 2.5Z"
                        stroke="#999999"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div class="flex-col flex-1 overflow-y-auto" v-if="!isOpen">
            <div class="flex flex-col gap-2 pb-2 text-gray-700 text-sm">
              <div>
                <span>
                  <div class="relative h-[90vh]" style="height: auto">
                
                    <ol>
                      <li v-if="loadList == 'loaded'" class="relative z-[15] h-auto my-2" 
                      v-for="(templatechat, index) in questionTemplates"
                      :key="templatechat.history_id"
                      @click="changeToActive(index, templatechat.history_id)"
                      >
                      <div class="sticky top-2 z-40 dark:text-background-hover-secondary" v-if="questionTemplates[index].history_category !== questionTemplates[index-1]?.history_category" >
                        <!-- huruf besar di awal kata -->
                        {{ templatechat.history_category.charAt(0).toUpperCase() + templatechat.history_category.slice(1) }}
                      </div>
                        <NuxtLink
                          class="flex p-4 items-center gap-3 relative rounded-lg border hover:bg-primary-50 cursor-pointer break-all component-jsc focus:border-primary-600"
                          :class="templatechat.isEdit ? 'border-red-600' : ''"
                          
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              id="message-chat-square"
                              clip-path="url(#clip0_5915_24236)"
                            >
                              <path
                                id="Icon"
                                d="M6.66671 9.99992L4.61654 12.0757C4.33056 12.3653 4.18758 12.51 4.06468 12.5202C3.95805 12.5291 3.85365 12.4862 3.78401 12.405C3.70374 12.3114 3.70374 12.1079 3.70374 11.7009V10.661C3.70374 10.2959 3.40476 10.0317 3.04351 9.9788V9.9788C2.1692 9.85073 1.48256 9.16409 1.35449 8.28978C1.33337 8.14562 1.33337 7.9736 1.33337 7.62955V4.53325C1.33337 3.41315 1.33337 2.85309 1.55136 2.42527C1.74311 2.04895 2.04907 1.74299 2.42539 1.55124C2.85322 1.33325 3.41327 1.33325 4.53337 1.33325H9.46671C10.5868 1.33325 11.1469 1.33325 11.5747 1.55124C11.951 1.74299 12.257 2.04895 12.4487 2.42527C12.6667 2.85309 12.6667 3.41315 12.6667 4.53325V7.33325M12.6667 14.6666L11.2158 13.6578C11.0118 13.516 10.9098 13.4451 10.7988 13.3949C10.7003 13.3503 10.5968 13.3178 10.4904 13.2982C10.3706 13.2761 10.2464 13.2761 9.99799 13.2761H8.80004C8.0533 13.2761 7.67994 13.2761 7.39472 13.1308C7.14384 13.003 6.93986 12.799 6.81203 12.5481C6.66671 12.2629 6.66671 11.8895 6.66671 11.1428V9.46659C6.66671 8.71985 6.66671 8.34648 6.81203 8.06126C6.93986 7.81038 7.14384 7.60641 7.39472 7.47858C7.67994 7.33325 8.0533 7.33325 8.80004 7.33325H12.5334C13.2801 7.33325 13.6535 7.33325 13.9387 7.47858C14.1896 7.60641 14.3936 7.81038 14.5214 8.06126C14.6667 8.34648 14.6667 8.71985 14.6667 9.46658V11.2761C14.6667 11.8974 14.6667 12.208 14.5652 12.453C14.4299 12.7797 14.1703 13.0393 13.8436 13.1746C13.5986 13.2761 13.288 13.2761 12.6667 13.2761V14.6666Z"
                                stroke="#E31B54"
                                stroke-width="1.33333"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_5915_24236">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <div
                            class="flex-1 max-h-5 overflow-hidden whitespace-normal relative font-body"
                          >
                           <p v-if="templatechat.isRename? false : true" >{{ templatechat.history_title.length > 10 ? templatechat.history_title.substring(0,12) +"..." : templatechat.history_title }}</p>
                           <input v-else @click.stop v-model="titleTemp" class="edit-blank"  type="text">
                          </div>
                          <div class="flex gap-2" 
                                :class="questionTemplates[index].isEdit ? '' : 'hidden'" 
                                >
                            <img v-if="templatechat.isRename? false : true" @click="renameHistory(index)" @click.stop  src="/public/img/edit.svg" alt="">
                            <img v-if="templatechat.isRename? false : true" @click="deletHistory(templatechat.history_id)" @click.stop src="/public/img/trash.svg" alt="">

                            <div v-else @click.stop class="cursor-pointer border border-black p-1 rounded-lg" @click="historyRename(templatechat.history_id, titleTemp)" >SET</div>
                          </div>
                      
                        </NuxtLink>
                      </li>
                      <li v-else-if="loadList == 'loading'" class="relative z-20 h-auto my-2" >
                        <div class="text-center">
                          <div role="status">
                              <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                              </svg>
                              <span class="sr-only">Loading...</span>
                          </div>
                      </div>
                      </li>
                      <li v-else class="relative z-20 h-auto my-2" >
                        <div class="text-center">
                          <p class="dark:text-gray-400" >Server tidak merespon</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <footer class="border-t border-gray-50 dark:border-0 pt-2">
            <div class="justify-center flex flex-col" :class="isOpen ? 'items-center' : 'items-start'">
              <!-- <NuxtLink to="#" class="btn-tertiary">
                <div class="w-5 h-5 relative">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="settings-02">
                      <g id="Icon">
                        <path
                          d="M7.82924 16.1426L8.31628 17.2379C8.46106 17.564 8.69734 17.841 8.99647 18.0355C9.29559 18.2299 9.6447 18.3334 10.0015 18.3333C10.3582 18.3334 10.7073 18.2299 11.0065 18.0355C11.3056 17.841 11.5419 17.564 11.6866 17.2379L12.1737 16.1426C12.3471 15.7539 12.6387 15.4298 13.007 15.2166C13.3777 15.0028 13.8065 14.9118 14.232 14.9564L15.4237 15.0833C15.7784 15.1208 16.1364 15.0546 16.4543 14.8927C16.7721 14.7309 17.0362 14.4802 17.2144 14.1713C17.3929 13.8625 17.4779 13.5085 17.4592 13.1524C17.4405 12.7962 17.3188 12.4531 17.1089 12.1648L16.4033 11.1953C16.1521 10.8476 16.0178 10.429 16.02 9.99996C16.0199 9.57212 16.1554 9.15525 16.407 8.80922L17.1126 7.83977C17.3225 7.55142 17.4442 7.20835 17.4629 6.85219C17.4816 6.49602 17.3966 6.14208 17.2181 5.83329C17.0399 5.52432 16.7758 5.2737 16.458 5.11182C16.1401 4.94993 15.7821 4.88373 15.4274 4.92126L14.2357 5.04811C13.8102 5.0928 13.3814 5.00173 13.0107 4.78792C12.6417 4.5735 12.35 4.24776 12.1774 3.85737L11.6866 2.762C11.5419 2.43594 11.3056 2.15889 11.0065 1.96446C10.7073 1.77003 10.3582 1.66657 10.0015 1.66663C9.6447 1.66657 9.29559 1.77003 8.99647 1.96446C8.69734 2.15889 8.46106 2.43594 8.31628 2.762L7.82924 3.85737C7.65668 4.24776 7.36497 4.5735 6.99591 4.78792C6.62525 5.00173 6.19647 5.0928 5.77091 5.04811L4.57554 4.92126C4.22081 4.88373 3.86282 4.94993 3.54497 5.11182C3.22711 5.2737 2.96305 5.52432 2.7848 5.83329C2.60632 6.14208 2.52128 6.49602 2.54002 6.85219C2.55876 7.20835 2.68046 7.55142 2.89035 7.83977L3.59591 8.80922C3.84753 9.15525 3.98302 9.57212 3.98295 9.99996C3.98302 10.4278 3.84753 10.8447 3.59591 11.1907L2.89035 12.1601C2.68046 12.4485 2.55876 12.7916 2.54002 13.1477C2.52128 13.5039 2.60632 13.8578 2.7848 14.1666C2.96323 14.4754 3.22732 14.7259 3.54513 14.8878C3.86294 15.0496 4.22084 15.1159 4.57554 15.0787L5.76721 14.9518C6.19276 14.9071 6.62155 14.9982 6.99221 15.212C7.36265 15.4258 7.65571 15.7516 7.82924 16.1426Z"
                          stroke="#475467"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.99997 12.5C11.3807 12.5 12.5 11.3807 12.5 9.99996C12.5 8.61925 11.3807 7.49996 9.99997 7.49996C8.61926 7.49996 7.49998 8.61925 7.49998 9.99996C7.49998 11.3807 8.61926 12.5 9.99997 12.5Z"
                          stroke="#475467"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <span v-if="!isOpen"> Settings </span>
              </NuxtLink> -->
              <NuxtLink @click="logOut" to="#" class="justify-start items-center gap-3 inline-flex dark:text-gray-400 mb-20">
                <span class="w-5 h-5 relative">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="log-out-02">
                      <path
                        id="Icon"
                        d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M10 14.1667C10 14.9416 10 15.3291 9.91482 15.647C9.68365 16.5098 9.00978 17.1836 8.14705 17.4148C7.82913 17.5 7.44164 17.5 6.66667 17.5H6.25C5.08515 17.5 4.50272 17.5 4.04329 17.3097C3.43072 17.056 2.94404 16.5693 2.6903 15.9567C2.5 15.4973 2.5 14.9149 2.5 13.75V6.25C2.5 5.08515 2.5 4.50272 2.6903 4.04329C2.94404 3.43072 3.43072 2.94404 4.04329 2.6903C4.50272 2.5 5.08515 2.5 6.25 2.5H6.66667C7.44164 2.5 7.82913 2.5 8.14705 2.58519C9.00978 2.81635 9.68365 3.49022 9.91482 4.35295C10 4.67087 10 5.05836 10 5.83333"
                        stroke="#999999"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </span>
                <span
                  class="text-base font-semibold leading-normal"
                  v-if="!isOpen"
                >
                  Log Out
                </span>
              </NuxtLink>
            </div>
          </footer>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, reactive} from "vue";
import { useChatStore } from '~/stores/chat'
import { useAuthStore } from "~/stores/auth";
import { log } from "console";
const chatStore = useChatStore();
const authStore = useAuthStore();

const { $swal } = useNuxtApp()

// loading waiting content from BE
const loadList = ref('loading');

// judul sementara saat edit judul history
const titleTemp = ref<any>("");

// Define an interface for the question templates
interface QuestionTemplate {
  history_id: number;
  history_title: string;
  isEdit?:boolean;
  isRename?:boolean;
  history_category:string

}

// change active chat show edit button
const changeToActive = (val:any, history_id:any) => {
  chatStore.retrieveChatById(history_id)
    .then((resp:any)=> {
      // console.log(resp);
      chatStore.scrollDown()
    })
    .catch((err:any)=>{
      throw err
    })
    renameActive()
    changeHistory(val)
    chatStore.setIdHistory(history_id)
    // console.log(chatStore.id_history); 
}

// change active and disactive unselect history list
const changeHistory = (val:any) => {
  let q = questionTemplates.value.find((val)=>{
    if(val.isEdit=true){
      return val.isEdit=false
    } else {
      val
    }
  })

  if(val!=="false"){
    questionTemplates.value[val].isEdit = true 
  }
  
}

// change rename History and disable 
const renameActive = () => {
  questionTemplates.value.find((val)=>{
    if(val.isRename=true){
      val.isRename=false
    } else {
      val
    }
  })
}

// edit data 
const renameHistory = (val:any) => {
  renameActive()
  let q = questionTemplates.value.find((value)=>{
    return value
  })
  questionTemplates.value[val].isRename = true
  titleTemp.value = questionTemplates.value[val].history_title
  
}

// submit rename 
const historyRename = async (history_id:any, history_title:any) => {
  const userData = await JSON.parse(localStorage.getItem('user_data') || "")
  const userID = await userData.data.data.user_id
  chatStore.renameChat(history_id, history_title)
  .then(()=> {
    getHistoryChat(userID);
  })
}

// Define the data properties
const questionTemplates = ref<QuestionTemplate[]>([]);


// Define props with default values
const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
  }>(),
  {
    modelValue: false,
  }
);

// Extract prop as a ref
const isOpen = ref(props.modelValue);

// Listen for the 'chatbar-clicked' event on the event bus
onMounted(() => {
  setTimeout(()=>{
    getHistoryChat("userID")
  }, 1000)
  
});

// Watch for changes in modelValue prop
const emit = defineEmits(['update:modelValue']);

const { modelValue } = toRefs(props);

watch(
  modelValue,
  (val) => {
    isOpen.value = val;
  },
  { immediate: true },
);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

watch(isOpen, (val) => {
  emit('update:modelValue', val);
});

async function getHistoryChat(val:string){
    const userData = await JSON.parse(localStorage.getItem('user_data') || "")
    const userID = await userData.data.data.user_id
    // console.log(userID);
    await chatStore.getHistoryByUserId(userID)
    .then((resp:any)=>{
      // console.log(resp.data.data);
      const data = resp.data.data
      data.map((val:any)=>{
        val.isEdit = false;
        val.isRename = false;
      })
      questionTemplates.value = resp.data.data
      loadList.value = 'loaded'
    })
    .catch((error: any) => {
      loadList.value = 'error'
      throw error

    })
}

// fungsi hapus history
const deletHistory = async (val:any) => {
  const userData = await JSON.parse(localStorage.getItem('user_data') || "")
  const userID = await userData.data.data.user_id
  const confDel = confirm("yakin ingin menghapus history ?")
  if(confDel){
    chatStore.deleteChatById(val)
    .then((val:any)=> {
      // alert("berhasil hapus history")
      
      newChat()
      
      chatStore.getHistoryByUserId(userID)


    })
  } else {
    alert("gagal hapus history")
  }
}

watch(()=>chatStore.historyChat, (val:any)=>{
  // getHistoryChat('1');
  // console.log(val);
  questionTemplates.value = val

  // mengaktifkan history baru.
  changeHistory(0)
})

const newChat = () => {
  chatStore.newChat()
  chatStore.setIdHistory("")
  changeHistory("false")
}

// const show_modal_logout = () => {

// }

function logOut(){
  $swal.fire({
    title: 'Are you sure?',
    text: "You will logout",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, i will!'
  }).then((result:any) => {
    if (result.isConfirmed) {
      if(process.client){
          authStore.logOut()
      }
    }
  })

  // const logOut = confirm('mau logout ?')
  // if(logOut){
  //   if(process.client){
  //       // localStorage.removeItem('token')
  //       authStore.logOut()
  //   }
  // }
}
</script>

<style scoped>
  .edit-blank{
    background-color: transparent;
    outline: none;
    border: none;
    box-sizing: border-box;
    padding: 0; margin: 0;
  }

  .edit-blank:focus {
    padding: 0; margin: 0; outline: 0; border: 0;
  }


</style>
