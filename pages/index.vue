<template>
    <div class="relative" >
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div class="flex flex-wrap">
                    <div class="basis-1/2">
                        <h1 class="text-6xl font-bold text-left mb-7" >Meet Je<span class="text-background-primary" >SICA</span>, Your</h1>
                        <h1 class="text-6xl font-bold text-left mb-7" >Intelegence Chat Bot</h1>
                        <h1 class="text-6xl font-bold text-left" mb-7 >Companion</h1>
                        <p class="mt-10 text-left text-xl font-normal text-f-second" >
                            Are you tired of waiting for answers or need instant assistance? Jessica is here to save the day! As an AI-driven chat bot, she's designed to provide fast and accurate responses to all your inquiries about Telkomsigma's products and services.
                        </p>

                        <div class="flex mt-10">
                            <Button title="Learn More ->" background="bg-background-secondary text-t-secondary border border-b-secondary" />
                            <Button title="Try Full Version" background="bg-background-primary text-t-primary content-start" />
                        </div>

                    </div>
                    <div class="basis-1/2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore totam sapiente nam itaque accusamus sint sit amet cupiditate nihil impedit enim laborum aliquam iusto, eaque rem ipsum iste voluptatum aperiam?</p>
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
                            content="Type your questions or concerns in the chatbox, and Jessica will swiftly analyze and generate the best possible answers." />
                        <Card
                            tile="Discover Solutions"
                            content="Whether it's technical support, product information, or general inquiries, Jessica has you covered with reliable answers." />

                        <Card 
                            title="Discover Solutions" 
                            content="Whether it's technical support, product information, or general inquiries, Jessica has you covered with reliable answers." />
                    </div>
                </div>
            </div>
        </section>

        <Popup />
    </div>
</template>

<script setup>
    definePageMeta({
        layout : "navbar"
    })

</script>

<style>

</style>