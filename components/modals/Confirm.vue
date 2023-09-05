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
                <Button @click="$emit('send-to')" title="Continue for Verification" background="bg-background-primary text-t-primary w-full" />
                <Button @click="$emit('close-confirm')" background="bg-background-secondary text-t-secondary border border-b-secondary w-full" title="Back" />
    
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        emits : ['send-to', 'close-confirm'],
        props : {
            "title", "description"
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

