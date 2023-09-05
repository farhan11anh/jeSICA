<template>
    <Head>
        <Title>
            JeSICA
        </Title>
    </Head>
    <nav 
        class="bg-bg-login bg-no-repeat bg-center bg-cover md:bg-none dark:bg-none md:bg-white border-gray-200  fixed w-full p-0 m-0 top-0 -left-2 z-20 dark:md:bg-gray-900 dark:md:text-background-hover-secondary">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-between mx-auto p-4">
            <NuxtLink to="/" class="flex items-center">
                <img src="/assets/img/logo.png" class="h-12 mr-3" alt="Telkomsigma Logo" />
            </NuxtLink>
        </div>
    </nav>
    <div class="relative section-jsc h-screen"> 
        <div class="flex flex-wrap">
            <div class="basis-full md:basis-7/12 relative">        
                <section class="">
                    <div class="py-4 px-0 md:px-12 mx-auto max-w-screen-xl text-center lg:py-3">
                        <div class="content px-10 py-16 md:px-24 text-left">
                            <div class=" font-bold font-nunito text-3xl mb-3">Welcome Back!</div>
                            <div class="text-base text-[#475467] dark:text-gray-400" >
                                Login now to access internal data!
                            </div>
    
                            <form class="mt-7" action="">
                                <Form
                                    name="email"
                                    title="Email*"   
                                    type="text"
                                    placeholder="Enter your email"
                                    icon="user"
                                    password="false"
                                    @log-in="login"
                                    @togle-hide="doTest"
                                    @user-entry="onUserEntry"
                                    @emit-validate="focus('nik')"
                                    @emit-blur="blur('nik')"
                                />
                                <div class="h-5 mb-3" >
                                    <div class="-mt-5" >
                                        <span v-if="nikVal" class="text-red-600" >email tidak boleh kosong!!!</span>
                                    </div>
                                </div>
    
                                <Form
                                    name="password"
                                    title="Password*"   
                                    type="password"  
                                    placeholder="Enter your Password"
                                    icon="password"
                                    password="true"
                                    @log-in="login"
                                    @toggle-hide="doTest"
                                    @user-entry="onUserPw"
                                    @emit-validate="focus('pw')"
                                    @emit-blur="blur('pw')"
                                />

                                <div class="h-5 mb-3" >
                                    <div class="-mt-5" >
                                        <span v-if="pwVal" class="text-red-600" >Password tidak boleh kosong!!!</span>
                                    </div>
                                </div>

                                <Button @click="login" title="Login" :loadLogin="loadLogin" background="bg-background-primary text-t-primary w-full h-16" class="hover:bg-background-hover-primary hover:text-t-hover-primary" :class="this.loadLogin == 'true' ? 'disabled not-allowed' : ''" />
                            </form>
                        </div>
                    </div>
                </section>
    
            </div>
            <div class="hidden md:block basis-5/12 bg-bg-login dark:bg-none h-screen overflow-hidden">
            </div>
        </div>

        
        <ConfirmationLogin 
            backButton="true" 
            v-show="showConfirm" 
            @send-to="goTo('auth/verification')" 
            @close-confirm="closeConfirm"/>

        <ModalsError 
            title="Email / Password anda salah"
            description="Silahkan masukan email dan password yang benar"
            v-show="showError"
            @close-confirm="showError = false"
        />
    </div>
</template>

<script>
    import { useLoginStore } from '@/stores/login'
    import { useAuthStore } from '@/stores/auth';

    export default {
        data(){
            return{
                authStore : useAuthStore() ,
                config : useRuntimeConfig(),
                loginStore : useLoginStore(),
                path : "",
                showConfirm : false,
                nik : "",
                password : "",
                form : {
                    nik : "",
                    password : ""
                },

                nikVal : false,
                pwVal : false,

                loadLogin : 'false',

                showError : false

            }
        },
        mounted() {
            this.getpath()
            // this.getUsers()
        },
        computed : {
            loadLogin(){
                return this.loadLogin
            }
        },
        methods : {
            getpath(){
                this.path = this.$route.name
            },
            closeConfirm(){
                this.showConfirm = false
            },
            
            // login defined
            onUserEntry(val){
                this.nik = val
            },
            onUserPw(val){
                this.password = val
            }, 
            focus(val){
                if(val == 'nik') {
                    this.nikVal = false
                } else if(val == 'pw'){
                    this.pwVal = false
                }
            },
            blur(val){
                if(val == 'nik'){
                    if(this.nik == ""){
                        this.nikVal = true
                    } else {
                        this.nikVal = false
                    }
                } else {
                    if(this.password == ""){
                        this.pwVal = true
                    } else {
                        this.pwVal = false
                    }
                }
            },
            async login(){
                this.loadLogin = 'true'
                const data = {
                    nik : this.nik,
                    password : this.password
                }
                try {
                    await this.authStore.login(data)
                    .then((response)=>{
                        this.loadLogin = 'false'
                        this.showConfirm  = true
                    })
                    .catch((error)=>{
                        throw error
                    })
    
                } catch (error) {
                    // alert('salah nik / login')
                    if(error.response.data.error == 'Password salah'){
                        this.showError = true
                    }
                    this.loadLogin = 'false'
                }
            },
            goTo(url){
                this.$router.push({
                    path : `/${url}`,
                    query : {email : this.nik},
                    hash : "#login"
                })
            }
   
        }
    }
</script>

<style scoped>

</style>