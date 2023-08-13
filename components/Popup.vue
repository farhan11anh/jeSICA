<template>
    <transition>
        <div @click="$emit('close-modal')" class="overlay z-30">
            <div @click.stop class="modal h-[35rem] w-[24rem] bg-white fixed bottom-5 right-5 shadow-lg shadow-gray-600 rounded-md">
                <div class="top">
                    <HeaderPopup />
                    <div ref="chatContainer" class="overflow-auto h-[22rem] p-4">
                        <BubleChat 
                            v-for="i in messages"
                            :jesica="i.isJesica"
                            :msg="i.msg"
                         />

                         <BubleChat 
                            v-if="waitResp"
                            jesica="true"
                            msg=".."
                            wait-res="true"
                        />
                        
                    </div>
                </div>
                <div class="footer p-4 border-t-[1px] border-gray-300">
                    <div class="flex gap-3 justify-between">
                        <div class="message basis-10/12 border border-[#667085] border-solid rounded-md overflow-hidden h-10">
                            <input v-model="message" 
                            placeholder="Ask me anything" class="w-full border-none" type="text" 
                            @keyup.enter="sendMessage">
                        </div>
                        <div class="basis=2/12">
                            <Button :disabled="isNullMessage" @click="sendMessage" title=">" background="bg-background-primary text-t-primary" class="hover:bg-background-hover-primary hover:text-t-hover-primary" :class="isNullMessage ? 'cursor-not-allowed' : ''" />
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="basis-10/12">
                            <h2 class="text-center text-xs text-[#667085]" >
                                Jessica is continually improving, and her responses may become more accurate over time. ChatGPT May 24 Version.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    // import Bard from "bard-ai";
    // import { Configuration, OpenAIApi } from "openai";

    export default {
        data(){
            return{
                message : "",
                messages : [
                    // message user and JeSICA ...
                ],

                waitResp : false,
                config : useRuntimeConfig()
            }
        },
        mounted() {
            this.$nextTick(() => {
                    this.scrollToBottom();
            });
        },
        computed : {
            isNullMessage(){
                if(this.message == "" || this.waitResp == true){
                    return true
                } else {
                    return false
                }
            }
        },
        methods : {
            async sendMessage(){
                const text = { "text" : this.message}
                this.messages.push(
                    {
                        isJesica : "false",
                        msg : this.message
                    }
                )
                // console.log(text);
                this.message = ""
                // grayout send
                this.waitResp = true


                // Setelah pesan baru ditambahkan, scroll ke bawah
                this.$nextTick(() => {
                     this.scrollToBottom();
                });

                try {
                    const url = ''
                    const resp = await $fetch( `${this.config.public.apiBase}/sendChat`, {
                        method: 'POST',
                        body: text
                    } );

                    console.log(resp);

                    if(resp){
                        this.waitResp = false
                        this.messages.push(
                            {
                                isJesica : "true",
                                msg : resp.textResponse
                            }
                        )
                         // Setelah pesan baru ditambahkan, scroll ke bawah
                        this.$nextTick(() => {
                            this.scrollToBottom();
                        });

                    }

                } catch (error) {
                    alert('error server')


                    this.waitResp = false

                    this.messages.push(
                            {
                                isJesica : "true",
                                msg : 'tidak ada response'
                            }
                        )
                         // Setelah pesan baru ditambahkan, scroll ke bawah
                        this.$nextTick(() => {
                            this.scrollToBottom();
                    });

                    console.error('Fetch error:', error);
                }
                



                // jessica responese dummy
                // setTimeout(()=>{
                //     this.messages.push(
                //         {
                //             isJesica : "true",
                //             msg : "halo ada yang bisa dibantu ?"
                //         }
                //     )
                //      // Setelah pesan baru ditambahkan, scroll ke bawah
                //     this.$nextTick(() => {
                //         this.scrollToBottom();
                //     });
                // }, 2000)
            },

            scrollToBottom(){
                this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
            }
        }
    }
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