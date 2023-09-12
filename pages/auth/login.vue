<template>
    <Head>
        <Title>
            JeSICA
        </Title>
    </Head>
    <div class="relative section-jsc h-screen"> 
        <div class="flex flex-wrap">
            <div class="basis-full md:basis-7/12 relative">        
                <section class=" w-3/4 mx-auto">
                    <div class="py-4 mx-auto text-center lg:py-3">
                        <div class="content py-16 text-left">
                            <div class=" font-bold font-nunito text-3xl mb-3">{{ $t('login_page__welcome_back') }}</div>
                            <div class="text-base text-[#475467] dark:text-gray-400" >
                                {{ $t('login_page__login_now') }}
                            </div>
    
                            <form class="mt-7" action="">
                                <Form
                                    name="email"
                                    title="Email*"   
                                    type="text"
                                    :placeholder="$t('login_page__placeholder_email')"
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
                                        <span v-if="nikVal" class="text-red-600" >{{ $t('login_page__validator_email') }}</span>
                                    </div>
                                </div>
    
                                <Form
                                    name="password"
                                    title="Password*"   
                                    type="password"  
                                    :placeholder="$t('login_page__placeholder_password')"
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
                                        <span v-if="pwVal" class="text-red-600" >{{ $t('login_page__validator_password') }}</span>
                                    </div>
                                </div>

                                <Button @click="login"
                                 title="Login"
                                :loadLogin="loadLogin" 
                                 background="bg-background-primary text-t-primary w-full h-16" 
                                 class="hover:bg-background-hover-primary hover:text-t-hover-primary" 
                                 :class="this.loadLogin == 'true' ? 'disabled not-allowed' : ''" />
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
            @send-to="goTo('chats')" 
            @close-confirm="closeConfirm"/>

        <ModalsError 
            :title="errorTitle"
            :description="errorDescription"
            v-show="showError"
            @close-confirm="showError = false"
        />
    </div>
</template>

<script>
    definePageMeta({
        layout : 'auth'
    })
    import { useLoginStore } from '@/stores/login'
    import { useAuthStore } from '@/stores/auth';
    import { useI18n } from 'vue-i18n'
    // const { t } = useI18n()

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

                showError : false,
                errorTitle : null,
                errorDescription : null,
                t : useI18n()

            }
        },
        mounted() {
            this.getpath()
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
                        // console.log(response.data.data.access_token);
                        const token = response.data.data.access_token
                        this.authStore.verificationToken(token)
                            .then((response)=>{
                                // console.log(response);
                                const data = JSON.stringify(response)
                                localStorage.setItem('user_data', data)
                                localStorage.setItem('token', token)

                                this.showConfirm  = true
                            })
                            .catch((err)=>{
                                // console.log(err);
                                throw err
                            })
                    })
                } catch (error) {
                    // alert('salah nik / login') 
                    // console.log(error);
                    if(error.response.data.error == 'Email atau password salah'){
                        this.errorTitle = this.t.t("login_page__modal_error_title");
                        this.errorDescription = this.t.t("login_page__modal_error_description");
                        this.showError = true
                    } else {
                        this.errorTitle = "Error";
                        this.errorDescription = "Server tidak meresponse";
                        this.showError = true
                    }
                    this.loadLogin = 'false'
                }
            },
            goTo(url){
                this.$router.push({
                    // w/ otp 
                    // path : `/${url}`,
                    // query : {email : this.nik},
                    // hash : "#login"
                    path : `/${url}`
                })
            }
   
        }
    }
</script>

<style scoped>

</style>