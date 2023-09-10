<template>
    <transition>
        <div class="overlay z-30" >
            <div class="absolute w-72 border section-jsc border-gray-800 rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10" >
                <h2 class="font-nunito font-bold font-3xl" >
                    {{ title }}
                </h2>
                <p class="text-xs text-[#475467] dark:text-gray-400 mt-5 mb-5" >
                    {{ description }}
                </p>
                <Button 
                @click="send_to"
                :loadLogin="loadLogin"
                :title="button_yes" 
                background="bg-background-primary text-t-primary w-full"
                :class="loadLogin == 'true' ? 'disabled not-allowed' : ''" />
                <Button @click="close_confirm" 
                    background="bg-background-secondary text-t-secondary border border-b-secondary w-full" 
                    :title="button_no" />
    
            </div>
        </div>
    </transition>
</template>

<script setup>
    defineProps({
        "title" : {
            type:String,
            default:""
        }, 
        "description" : {
            type:String,
            default:""
        },
        "button_yes" : {
            type:String,
            default:""
        },
        "button_no" : {
            type:String,
            default:""
        }
    })
    const loadLogin = ref("false")
    const emit = defineEmits(['send-to', 'close-confirm'])

    const send_to = () => {
        emit('send-to')
        loadLogin.value = "true"
    }

    const close_confirm = () => {
        emit('close-confirm')
        loadLogin.value = "false"
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

