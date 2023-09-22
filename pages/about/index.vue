<template>
    <div class="w-screen mb-16" >  
        <div class="banner-page relative">
            <div class="absolute left-40 bottom-24 w-full" >
                <div class="border-l-2 border-l-red-800 w-1/3 box-border px-6" >
                    <div class=" box-border text-[#e72f29] font-bold text-3xl mb-5" >
                        About Us
                    </div>
                    <div class=" text-warning-25 font-semibold text-4xl" >
                        <p class="mb-3">Get to Know More About</p>
                        <p>JeSiCa</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="w-3/4 mx-auto" v-if="load_data">
        <div class="image overflow-hidden w-full rounded-lg bg-dark-hover mb-10">
            <img class="w-full" src="@/img/main-img-content.jpg" alt="">
        </div>

        <!-- title -->
        <div class="text-3xl font-extrabold mb-5" >
            {{ content.about_us_title }}
        </div>

        <!-- description -->
        <div class="text-md mb-10" >
            <p v-html="content.about_us_description">
            </p>
        </div>

        <div class="w-full rounded-lg bg-[#f5f5f5] dark:bg-[#00000055] p-10 mb-10" >
            <h2 class="text-2xl font-bold mb-5" >Vision</h2>
            <h3 class="text-lg font-bold" >
                The Preferred Digital Transformation Partner
            </h3>
            <br>
            <hr>
            <br>
            <h2 class="text-2xl font-bold mb-5" >Mission</h2>
            <ul class="list-disc" >
                <li>Enhancing internal capabilities to gain value as a leading trusted premium IT services in Indonesia</li>
                <li>Focusing on service quality, customer engagement, to determine long term partnership with enterprises</li>
                <li>Establishing digital business platform to leverage digital transformation initiative in many enterprises </li>
            </ul>
        </div>

        <div class="w-full" >
            <h2 class="text-2xl font-semibold mb-5 text-center" >Core Value BUMN</h2>
            <div class="w-1/2 mx-auto" >
                <img class="w-full" src="@/img/core-value.jpg" alt="">
            </div>
        </div>

    </section> 

    <section v-else >

    </section>

</template>

<script setup>
definePageMeta({
    layout : "navbar"
})

import { useMenuStore } from '~/stores/menus';

const $menu = useMenuStore()

const load_data = ref(false)

const content = ref(null)

const get_data = () => {
    $menu.getAbout()
        .then((resp)=>{
            console.log(resp.data.data.about_us[0]);
            content.value = resp.data.data.about_us[0]
            load_data.value = true
        })
}

onMounted(() => {
    get_data()
})



</script>

<style scoped>

</style>