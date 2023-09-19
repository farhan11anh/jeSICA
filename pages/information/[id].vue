<template>
    <div class="w-screen mb-16" >  
        <div class="banner-page-base banner-bg relative">
            <div class="absolute left-40 bottom-24 w-full" >
                <div class="border-l-2 border-l-red-800 w-1/2 box-border px-6" >
                    <div class=" box-border text-[#e72f29] font-bold text-3xl mb-5" >
                        Information
                    </div>
                    <div class=" text-black font-semibold text-4xl" >
                        <p class="mb-3">
                            Stay up to date with the latest corporate strategic initiatives and achievement of Telkomsigma 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="w-3/4 mx-auto" v-if="load_data">
        <div class="image overflow-hidden w-full rounded-lg mb-10 relative">
            <img class="w-full" src="@/img/first-news.jpg" alt="">
        </div>

        <div class="flex flex-row" >
            <div class="basis-1/3" >
                <div class="w-full pr-3 box-border border-r border-gray-300" >
                    <h2 class=" font-bold text-red-700 text-xl" >
                        NEWS
                    </h2>
                    <h2 class=" font-bold text-black text-xl  mt-3">
                        {{ detail.information_title }}
                    </h2>
                    <p class="mt-3" >
                        {{ detail.information_created_at }} - by : {{ detail.information_created_by }}
                    </p>
                </div>
            </div>
            <div class="basis-2/3" >
                <div class="w-full pl-3" >
                    <p v-html="detail.information_description" >
                    </p>
                </div>
            </div>
        </div>


        <!-- other -->
        <h2 class=" font-bold text-black text-xl text-center my-10">
            Other News
        </h2>
        <div class="flex gap-y-7 justify-between flex-wrap" >
            <div v-for="(item, index) in content" :key="index" class="basis-1/3">
                <div class="w-[350px] mx-auto shadow-2xl drop-shadow-2xl text-black cursor-pointer hover:text-red-600 h-[470px]">
                    <div class="img overflow-hidden rounded-t-lg h-60">
                        <img class="image-news w-full h-full" src="@/img/second-news.jpg" alt="">
                    </div>
                    <div class="card-body p-5 relative" >
                        <h3 class=" text-red-600 font-bold text-xl">
                            NEWS
                        </h3>
                        <div class=" font-semibold text-lg mb-5" >
                            {{ item.information_title }}
                        </div>
                        <span class="absolute bottom-[1px]">
                            {{ item.information_created_at }} - by {{ item.information_created_by }} 
                        </span>
                    </div>
                </div>
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

const $menu = useMenuStore();
const route = useRoute();

const detail = ref(null)
const content = ref([])
const load_data = ref(false)

const get_information = () => {
    const id = route.params.id
    $menu.getDetail(id)
        .then((response) => {
            console.log(response.data.data);
            detail.value = response.data.data.detail_information
            content.value = response.data.data.other_information

            load_data.value = true
        })
}

onMounted(() => {
    get_information()
})


</script>

<style scoped>
    .banner-bg {
        background-image: url('@/img/banner-information.jpg');
    }

  
</style>