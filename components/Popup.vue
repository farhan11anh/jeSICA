<template>
  <transition>
    <div @click="$emit('close-modal')" class="overlay z-30">
      <div
        @click.stop
        class="modal h-[35rem]  section-jsc fixed bottom-5 right-5 shadow-lg shadow-gray-600 rounded-md"
        :class="isMaximized ? ' w-10/12' : 'w-[24rem]'"
      >
        <div class="top">
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
              <div @click="isMaximized = !isMaximized" >
                <svg v-if="!isMaximized" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize-2 cursor-pointer">
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize-2 cursor-pointer">
                  <polyline points="4 14 10 14 10 20"></polyline>
                  <polyline points="20 10 14 10 14 4"></polyline>
                  <line x1="14" y1="10" x2="21" y2="3"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
              </div>

            </div>
          </nav>
          <div ref="chatContainer" class="overflow-auto h-[22rem] p-4">
            <BubleChat
              v-for="i in messages"
              :jesica="i.isJesica"
              :msg="i.msg"
            />

            <BubleChat v-if="waitResp" jesica="true" msg=".." wait-res="true" />
          </div>
        </div>
        <div class="footer p-4 border-t-[1px] border-gray-300">
          <div class="flex gap-3 justify-between">
            <div
              class="message grow border border-[#667085] border-solid rounded-md overflow-hidden h-10"
            >
              <input
                v-model="message"
                :placeholder="$t('chats_page__ask_me_anything')"
                class="w-full border-none bg-transparent"
                type="text"
                @keyup.enter="sendMessage"
              />
            </div>
            <div class="basis=2/12">
              <Button
                :disabled="isNullMessage"
                @click="sendMessage"
                title=">"
                background="bg-background-primary text-t-primary h-full"
                class="hover:bg-background-hover-primary hover:text-t-hover-primary"
                :class="isNullMessage ? 'cursor-not-allowed' : ''"
              />
            </div>
          </div>
          <div class="flex justify-center">
            <div class="basis-10/12">
              <h2 class="text-center text-xs text-[#667085]">
                {{ $t('chats_page__footer') }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      messages: [
        // message user and JeSICA ...
      ],

      waitResp: false,
      config: useRuntimeConfig(),
      isFirstSendMessage: 'true',

      isMaximized: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollToBottom();
    });
  },
  computed: {
    isNullMessage() {
      if (this.message == '' || this.waitResp == true) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async sendMessage() {
      const text = {
        text: this.message,
        first: this.isFirstSendMessage,
      };
      this.messages.push({
        isJesica: 'false',
        msg: this.message,
      });
      // console.log(text);
      this.message = '';
      // grayout send
      this.waitResp = true;

      // Setelah pesan baru ditambahkan, scroll ke bawah
      this.$nextTick(() => {
        this.scrollToBottom();
      });

      try {
        const url = '';
        // const resp = await $fetch( `${this.config.public.apiBase}/api/chat/palm/v1`, {
        const resp = await $fetch(
          `${this.config.public.apiBase}/api/chat/exazure/v1`,
          {
            method: 'POST',
            body: text,
          },
        );

        console.log(resp);

        if (resp) {
          this.isFirstSendMessage = 'false';
          this.waitResp = false;
          this.messages.push({
            isJesica: 'true',
            msg: resp.data.text_response,
          });
          // Setelah pesan baru ditambahkan, scroll ke bawah
          this.$nextTick(() => {
            this.scrollToBottom();
          });
        }
      } catch (error) {
        this.waitResp = false;
        this.messages.push({
          isJesica: 'true',
          msg: 'tidak ada response',
        });
        // Setelah pesan baru ditambahkan, scroll ke bawah
        this.$nextTick(() => {
          this.scrollToBottom();
        });

        console.error('Fetch error:', error);
      }
    },

    scrollToBottom() {
      this.$refs.chatContainer.scrollTop =
        this.$refs.chatContainer.scrollHeight;
    },
  },
};
</script>

<style>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #00000091;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
