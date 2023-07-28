<template>
    <nav class="bg-bg-login bg-no-repeat bg-center bg-cover md:bg-none md:bg-white border-gray-200 fixed w-full top-0 -left-2 z-20">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-between mx-auto p-4">
            <NuxtLink to="/" class="flex items-center">
                <img src="/assets/img/logo.png" class="h-12 mr-3" alt="Telkomsigma Logo" />
            </NuxtLink>
        </div>
    </nav>
    <div class="relative"> 
        <div class="flex flex-wrap">
            <div class="basis-full md:basis-7/12 relative">        
                <section class="bg-white">
                    <div class="py-4 px-12 mx-auto max-w-screen-xl text-center lg:py-3">
                        <div class="content py-16 px-24 text-left">
                            <div class=" font-bold font-nunito text-3xl mb-3">Welcome Back!</div>
                            <div class="text-base text-[#475467]" >
                                Login now to access internal data!
                            </div>
    
                            <form class="mt-7" action="">
                                <Form
                                    name="email"
                                    title="NIK Telkom*"   
                                    type="text"
                                    placeholder="Enter your NIK Telkom"
                                    icon="user"
                                    password="false"
                                    @log-in="login"
                                    @togle-hide="doTest"
                                    @user-entry="onUserEntry"
                                    @emit-validate="focusNik"
                                    @emit-blur="blurNik"
                                />
                                <div class="h-5 mb-3" >
                                    <div class="-mt-5" >
                                        <span v-if="nikVal" class="text-red-600" >NIK tidak boleh kosong!!!</span>
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

                                    @emit-validate="focusPw"
                                    @emit-blur="blurPW"
                                />

                                <div class="h-5 mb-3" >
                                    <div class="-mt-5" >
                                        <span v-if="pwVal" class="text-red-600" >Password tidak boleh kosong!!!</span>
                                    </div>
                                </div>

    
    
                                <Button @click="login" title="Login" background="bg-background-primary text-t-primary w-full h-16" class="hover:bg-background-hover-primary hover:text-t-hover-primary" />
                            </form>
                        </div>
                    </div>
                </section>
    
            </div>
            <div class="hidden md:block basis-5/12 bg-bg-login h-screen overflow-hidden">
            </div>
        </div>

        
        <ConfirmationLogin backButton="true" 
            v-show="showConfirm" 
            @send-to="goTo('verification')" 
            @close-confirm="closeConfirm"/>
    </div>
</template>

<script>
    // definePageMeta({
    //     layout : "navbar"
    // })
    export default {
        data(){
            return{
                path : "",
                showConfirm : false,
                nik : "",
                password : "",
                form : {
                    nik : "",
                    password : ""
                },
                users : [],

                nikVal : false,
                pwVal : false

            }
        },
        mounted() {
            this.getpath()
            this.getUsers()
        },  
        methods : {
            async getUsers(){
                try {
                    const res = await fetch('/static/user.json')
                    // if (!res.ok) {
                    //     throw new Error('Network response was not ok');
                    // }
                    const data = await res.json()
                    this.users = data.users
                    // console.log(this.users);

                }catch (error){
                    this.users = []
                    console.log(error);
                }
            },
            doTest(){
                // console.log('berhasil');
            },
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

            focusNik(){
                if(this.nik == ""){
                    this.nikVal = true
                } else {
                    this.nikVal = false
                }

            },
            blurNik(){
                if(this.nik == ""){
                    this.nikVal = true
                } else {
                    this.nikVal = false
                }
            },

            focusPw(){
                if(this.password == ""){
                    this.pwVal = true
                } else {
                    this.pwVal = false
                }
            },
            blurPW(){
                if(this.password == ""){
                    this.pwVal = true
                } else {
                    this.pwVal = false
                }
            },

            login(){
                //validate form can't empty
                if(this.nik !== "" && this.password !== ""){
                    const user  = this.users.find(user=>user.nik == this.nik)
                    if (user == undefined || this.password !== user.password){
                        alert('nik tidak terdaftar atau password salah')
                    } else {
                        this.showConfirm  = true
                    }
                } else {
                    alert('nik dan password tidak boleh kosong!!')
                }
            },
            goTo(url){
                this.$router.push({
                    path : `/${url}`,
                    query : {nik : this.nik}
                })
            }
   
        }
    }
</script>

<style scoped>

</style>