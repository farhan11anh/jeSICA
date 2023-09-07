<template>
    <Head>
        <Title>
            JeSICA - AI Assistant Companion
        </Title>
    </Head>
    <div class="relative w-screen h-screen" >
        <section class="section-jsc">
            <div class="py-8 px-4 mx-auto lg:py-16">
                <div class="flex flex-wrap">
                    <div class="px-2 md:px-4 lg:px-8 basis-full lg:basis-1/2">
                        <h1 class="text-5xl lg:text-6xl  font-bold text-left mb-7 font-nunito" >{{ $t('landing__meet') }} <span class="text-background-primary font-cardo" >JeSICA</span>,</h1>
                        <h1 class="text-5xl lg:text-4xl  font-bold text-left mb-7 font-nunito" >{{ $t('landing__your_ai_assistant') }}</h1>
                        <p class="mt-10 text-left text-xl font-normal text-f-second" >
                            {{ $t('landing__content') }}
                        </p>

                        <!-- <div class="flex mt-10">
                            <Button title="Learn More ->" background="bg-background-secondary text-t-secondary border border-b-secondary" />
                            <Button title="Try Full Version" background="bg-background-primary text-t-primary content-start" />
                        </div> -->

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
            <div class="section-jsc">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div class="flex flex-wrap justify-between">
                        <Card
                            :title="$t('landing__card_1')"
                            :content="$t('landing__desc_1')" 
                            stylee="basis-full  md:basis-2/7 md:mb-0 mb-28"
                            styleeChild="sm:w-1/2 md:w-full" />

                            <Card
                            :title="$t('landing__card_2')"
                            :content="$t('landing__desc_2')" 
                            stylee="basis-full  md:basis-2/7 md:mb-0 mb-28"
                            styleeChild="sm:w-1/2 md:w-full" />

                            <Card
                            :title="$t('landing__card_3')"
                            :content="$t('landing__desc_3')" 
                            stylee="basis-full  md:basis-2/7 md:mb-0 mb-28"
                            styleeChild="sm:w-1/2 md:w-full" />
                
                    </div>
                </div>
            </div>
        </section>

        <ChatsGreeting v-show="showGreeting" />

        <Avatar class="fixed bottom-5 right-5 shadow-lg shadow-gray-600 cursor-pointer" width="w-12" online="true" @click="showModal = true" />

        <Popup v-show="showModal" @close-modal="showModal=false"/>
    </div>
</template>

<script setup> 
    //import 
    import {Howl, Howler} from 'howler';

    const sound = new Howl({
        src: ['ping.mp3'],
    });
    
    definePageMeta({
        layout : "navbar"
    })

    // variable
    const showModal = ref(false)
    const showGreeting = ref(false)

    // on mounted 
    onMounted(()=>{ 
        // call function will reload on page load
        show_greet()

    })

    // function
    // show greet and hide greet
    const show_greet = () => {
        setTimeout(()=>{
            showGreeting.value = true
            sound.play()
            hide_greet()
        }, 1000)
    }

    const hide_greet = () => {
        setTimeout(()=>{
            showGreeting.value = false
        }, 7000)
    }

    const call_sound = () => {
        sound.play();
    }

</script>

<style>

</style>