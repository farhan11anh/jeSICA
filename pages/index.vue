<template>
    <div class="relative" >
        <section class="bg-white">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div class="flex flex-wrap">
                    <div class="md:basis-full lg:basis-1/2">
                        <h1 class="text-6xl font-bold text-left mb-7" >Meet Je<span class="text-background-primary" >SICA</span>, Your</h1>
                        <h1 class="text-6xl font-bold text-left mb-7" >AI Assistant</h1>
                        <h1 class="text-6xl font-bold text-left" mb-7 >Companion</h1>
                        <p class="mt-10 text-left text-xl font-normal text-f-second" >
                            Are you tired of waiting for answers or need instant assistant? Jessica is here to save the day! As an AI Assistant, she's designed to provide fast and accurate responses to all your inquiries about Telkomsigma's products and services.
                        </p>

                        <div class="flex mt-10">
                            <Button title="Learn More ->" background="bg-background-secondary text-t-secondary border border-b-secondary" />
                            <Button title="Try Full Version" background="bg-background-primary text-t-primary content-start" />
                        </div>

                    </div>
                    <div class="hidden md:hidden md:mb-5 lg:basis-1/2 lg:block">
                        <!-- <div class="bg-pattern h-80"></div> -->
                        <div class="img-banner relative h-64 md:h-80 lg:h-96">
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent to-white"></div>
                            <img class="object-cover w-full h-full" src="/assets/img/chat-ss.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div class="flex flex-wrap justify-between">
                        <Card
                            title="Ask Away"
                            content="Type your questions or concerns in the chatbox, and Jessica will swiftly analyze and generate the best possible answers." 
                            stylee="basis-full  md:basis-2/7 md:mb-0 mb-28"
                            styleeChild="sm:w-1/2 md:w-full" />
                        <Card
                            title="Discover Solutions"
                            content="Whether it's technical support, product information, or general inquiries, Jessica has you covered with reliable answers." 
                            stylee="basis-full  md:basis-2/7 md:mb-0 mb-28"
                            styleeChild="sm:w-1/2 md:w-full" />
                        <Card 
                            title="Discover Solutions" 
                            content="Whether it's technical support, product information, or general inquiries, Jessica has you covered with reliable answers." 
                            stylee="basis-full  md:basis-2/7 md:mb-0 mb-28"
                            styleeChild="sm:w-1/2 md:w-full" />
                    </div>
                </div>
            </div>
        </section>

        <Avatar class="fixed bottom-5 right-5 shadow-lg shadow-gray-600 cursor-pointer" width="w-12" online="true" @click="showModal = true" />

        <Popup v-show="showModal" @close-modal="showModal=false"/>
    </div>
</template>

<script>
    definePageMeta({
        layout : "navbar"
    })

    export default {
        data(){
            return {
                showModal : false
            }
        }
    }

</script>

<style>

</style>