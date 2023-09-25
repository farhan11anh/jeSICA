<template>
    <Head>
        <Title> JeSiCa </Title>
    </Head>
    <div class="w-screen mb-16" >  
        <div class="banner-page-base banner-bg overflow-hidden relative">
            <div class="absolute left-40 bottom-24 w-full" >
                <div class="border-l-2 border-l-red-800 w-1/2 box-border px-6" >
                    <div class=" box-border text-[#e72f29] text-base font-bold lg:text-3xl mb-5" >
                        Information
                    </div>
                    <div class=" text-white text-base font-semibold lg:text-4xl" >
                        <p class="mb-3">
                            End-to-end IT Services Solution to Optimize Your Business
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-3/4 mx-auto mt-10" >
            As leading Indonesia’s ICT company supported by certified professionals, reliable infrastructures, and experience in developing software, application, and IT services for more than 30 years, Telkomsigma comes as the preferred digital transformation partner that is committed to continuously encouraging the industry’s business growth with the most relevance and reliable IT-based technology. 
        </div>
    </div>

    <section class="w-3/4 mx-auto" v-if="load_data == 'true'">
        <h2 class=" text-center font-bold text-2xl" >At this time, Telkomsigma IT Services capability are including</h2>

        <div
        v-for="item in sub_category">
            <div 
            class="flex-row flex items-center justify-between w-full my-16">
                <div class="flex gap-10 items-center flex-row" >
                        <img class="w-40 rounded-lg" src="@/img/it-implementation.jpg" alt="">
                        <h2 class="font-bold text-2xl" >{{ item.sub_category_title }}</h2>  
                </div>
                <div class="flex flex-row border border-red-500 rounded-full cursor-pointer" >
                    <div class="px-4 py-1 border-r border-red-500 text-red-500" >
                        +
                    </div>
                    <div @click="item.isOpen=!item.isOpen" class="px-4 py-1 text-red-500" >
                        Expand
                    </div>
                </div>
            </div>
            <transition mode="out-in" >
                <div class="p-10 rounded-xl border border-gray-200" v-if="item.isOpen" >
                    <p v-html="item.sub_category_description" >
                        
                    </p>
                </div>
            </transition>

        </div>
    </section>

    <section class="w-3/4 mx-auto" v-else-if="load_data == 'error'" >
        <UtilsFailedLoad />
    </section>

    <section class="bg-blur w-full py-16" v-if="load_data == 'true'">
        <h2 class=" text-center font-bold text-2xl text-warning-25 mb-16" >
            Check Out Our Product Line-Up in IT Services Portfolio:
        </h2>
        <div class="w-3/4 mx-auto bg-[#f5f5f5] dark:bg-[#00000055] box-border rounded-xl overflow-hidden" >
            <table class="w-full">
                <tr>
                    <th>
                        Financial & Banking Slolution
                    </th>
                    <th>Software</th>
                    <th>Hardware</th>
                    <th>Services Solution</th>
                </tr>
                <tr>
                    <td>

                        {{ table[0].product_description }}

                        <hr>

                        {{ table[0].product_title }} :

                        <ul class=" text-left font-bold list-disc" >
                            <li v-for="(item, index) in table[0].sub_product" :key="index" >
                                {{ item }}
                            </li>
                        </ul>
                    </td>
                    <td>
                        {{ table[1].product_description }}

                        <hr>

                        {{ table[1].product_title }} :

                        <ul class=" text-left font-bold list-disc" >
                            <li v-for="(item, index) in table[1].sub_product" :key="index" >
                                {{ item }}
                            </li>
                        </ul>
                    </td>
                    <td>
                        {{ table[2].product_description }}

                        <hr>

                        {{ table[2].product_title }} :

                        <ul class=" text-left font-bold list-disc" >
                            <li v-for="(item, index) in table[2].sub_product" :key="index" >
                                {{ item }}
                            </li>
                        </ul>
                    </td>
                    <td>
                        {{ table[3].product_description }}

                        <hr>

                        {{ table[3].product_title }} :

                        <ul class=" text-left font-bold list-disc" >
                            <li v-for="(item, index) in table[3].sub_product" :key="index" >
                                {{ item }}
                            </li>
                        </ul>
                    </td>

         
                </tr>
            </table>
        </div>
    </section>

    <ModalsPageLoading v-show="load_data == 'false'" />

</template>

<script setup>
import { useMenuStore } from '~/stores/menus';
definePageMeta({
    layout : "navbar"
})
const $menu = useMenuStore()

const sub_category = ref([])

const load_data = ref('false')

const table = ref([])

onMounted(() => {
    get_products()
})

const get_products = () => {
    $menu.getProducts()
        .then((response)=> {
            sub_category.value = response.data.data.sub_category.map((data)=>{
                data.isOpen = false
                return data
            })

            table.value = response.data.data.product
            load_data.value = 'true'
        })
        .catch((err)=>{
            load_data.value = 'error'

        })
}

</script>

<style scoped>
    .banner-bg {
        background-image: url('@/img/banner-it-services.jpg');
    }

    .bg-blur {
        background-image: url('@/img/bg-blur.png');
        background-repeat: no-repeat;
        background-size: cover;
    }

    th {
        @apply border border-gray-300 h-5 text-center w-1/4 font-bold text-xl p-4
    }
    td {
        @apply border border-gray-300 h-5 w-1/4 p-6 align-text-top
    }
  
</style>