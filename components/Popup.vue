<template>
    <transition>
        <div @click="$emit('close-modal')" class="overlay z-30">
            <div @click.stop class="modal h-[35rem] w-[24rem] bg-white fixed bottom-5 right-5 shadow-lg shadow-gray-600 rounded-md">
                <div class="top">
                    <HeaderPopup />
                    <div class="overflow-auto h-[22rem] p-4">
                        <BubleChat 
                            v-for="i in messages"
                            :jesica="i.isJesica"
                            :msg="i.msg"
                         />
                    </div>
                </div>
                <div class="footer p-4 border-t-[1px] border-gray-300">
                    <div class="flex gap-3 justify-between">
                        <div class="message basis-10/12 border border-[#667085] border-solid rounded-md overflow-hidden h-10">
                            <input v-model="message" placeholder="Ask me anything" class="w-full border-none" type="text">
                        </div>
                        <div class="basis=2/12">
                            <Button @click="sendMessage" title=">" background="bg-background-primary text-t-primary" class="hover:bg-background-hover-primary hover:text-t-hover-primary" />
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
    export default {
        data(){
            return{
                message : "",
                messages : [
                    {
                        isJesica : "true",
                        msg : "Jadi kamu belum tahu tentang JSC ya? Okey, aku bakal jelasin secara singkat. Jadi, JSC itu kepanjangannya Jogja Solution Center. Karena namanya ada Jogja-nya, berarti letak JSC ada di Daerah Istimewa Yogyakarta. JSC itu menyediakan layanan B2B Digital IT Services yang saat ini masih berfokus di daerah regional 4 (Jawa Tengah dan DIY) dan regional 5 (Jawa Timur). JSC sendiri adalah sebuah unit yang dibentuk langsung oleh Telkomsigma, keren kan."
                    },
                    {
                        isJesica : "false",
                        msg : "Wow, menarik! Jadi, JSC merupakan bagian dari Telkomsigma, ya? Apa layanan yang ditawarkan oleh JSC?"
                    }
                ]
            }
        },
        methods : {
            sendMessage(){
                const text = this.message
                this.messages.push(
                    {
                        isJesica : "false",
                        msg : text
                    }
                )
                console.log(text);
                this.message = ""

                // jessica responese dummy
                setTimeout(()=>{
                    this.messages.push(
                    {
                        isJesica : "true",
                        msg : "halo ada yang bisa dibantu ?"
                    }
                )
                }, 2000)
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