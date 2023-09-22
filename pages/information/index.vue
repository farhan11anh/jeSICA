<template>
    <Head>
        <Title> JeSiCa </Title>
      </Head>
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
            <div class="absolute w-full top-0 bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-[#0000008a]" >
                <div class="absolute flex text-warning-25 bottom-0 w-full px-16 py-10">
                    <div class="basis-5/6">
                        <h2 class=" font-bold text-2xl" >
                            {{ firstContent.information_title }}
                        </h2>
                        <p>{{ firstContent.information_created_at }} - by {{ firstContent.information_created_by }}</p>
                    </div>
                    <div class="basis-1/6">
                        <Button @click="goTo(firstContent.information_id)" 
                        background="bg-background-primary !mb-0 !mr-0 text-t-primary" 
                        class="hover:bg-background-hover-primary hover:text-t-hover-primary" 
                        title="Read" />
                    </div>
                </div>
            </div>
        </div>

        <!-- other -->
        <div class="flex gap-y-7 justify-between flex-wrap" >
            <div v-for="(item, index) in content" 
                :key="index" 
                class="basis-1/3"
                @click="goTo(item.information_id)"
                >
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

const $menu = useMenuStore()
const router = useRouter()

const firstContent = ref(null)
const content = ref([])
const load_data = ref(false)

const get_information = () => {
    $menu.getInformation()
        .then((response)=> {
            firstContent.value = response.data.data.information[0]
            response.data.data.information.forEach((item, index) => {
                if(index != 0 ) {
                    content.value.push(item)
                }
            });
            load_data.value = true
            console.log(content.value);
        })
}

onMounted(() => {
    get_information()
})

const goTo = (url) => {
    console.log(url);
    navigateTo({ path : `/information/${url}`})
}


</script>

<style scoped>
    .banner-bg {
        background-image: url('@/img/banner-information.jpg');
    }

  
</style>