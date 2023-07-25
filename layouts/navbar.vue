<template>
    <div>
        <nav class="bg-white border-gray-200 fixed w-full top-0 left-0 z-20">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center">
                    <img src="/assets/img/logo.png" class="h-8 mr-3" alt="Telkomsigma Logo" />
                </a>

                <div class="flex md:order-last">
                    <Button @click="goTo" background="bg-background-secondary text-t-secondary border border-b-secondary" title="Login" />
                    <Button background="bg-background-primary text-t-primary" title="Sign Up" />
                </div>

                <div class="flex md:order-2">
                    
                    <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto mx-auto" id="navbar-cta">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <NuxtLink to="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Product & Services</NuxtLink>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About Us</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Information</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Career</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="h-16" ></div>
        
        
        <slot />
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                url : ""
            }
        },
        created(){
            // this.$nuxt.$on('get-path', ($event)=>this.getData($event))
        },  
        mounted(){
            this.getPath()
        },
        methods : {
            goTo(){
                navigateTo({
                    path : '/login'
                })
            },
            getPath(){
                this.url = this.$route.name
                console.log(this.url);
            },
            getData(e){
                console.log(e);
            }
        }
    }
</script>