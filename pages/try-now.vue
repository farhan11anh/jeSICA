<template>


    <div>
        <br>
        <button @click="login" 
        class=" px-5 h-8 bg-red-600 mb-5 text-white rounded-md" >
            TEST
        </button>
        <br>

        <button 
            @click="cek" 
            class="px-5 h-8 mb-5 bg-yellow-600 rounded-md"
        >cek</button>
        <br>
        <button 
            @click="refresh" 
            class="px-5 h-8 mb-5 bg-yellow-100 rounded-md"
        >refresh</button> <br>
        <button 
            @click="isLogin" 
            class="px-5 h-8 mb-5 bg-yellow-100 rounded-md"
        >IS LOGIN</button> <br>
        <button 
            @click="logOut" 
            class="px-5 h-8 mb-5 bg-red-600 rounded-md"
        >LOGOUT</button> <br>
    </div>
</template>

<script>
    import { minLength, required, email } from '@vuelidate/validators';
    import { useVuelidate } from '@vuelidate/core';
    import { reactive } from '@vue/composition-api';

    import { useTaskStore } from './../stores/index'

    import { useAuthStore } from '@/stores/auth';

    definePageMeta({
        layout : "navbar"
    })

    export default {
        middleware: ['auth'],

        // env : {
        //     apiBaseUrl: process.env.API_BASE_URL,
        //     debugMode: process.env.DEBUG_MODE === 'true'
        // },

        setup(){
            const authStore = useAuthStore()
            const login = async () => {
                try {
                    const token = await authStore.login({
                        nik: "john@mail.com",
                        password: "changeme"
                    })

                    if (token) {
                        // Redirect or perform other actions
                        console.log(token);
                    }
                } catch (error) {
                    console.error(error)
                }
            }

            const cek = () => {
                const a = authStore.token
                // const b = authStore.refreshToken
                console.log(a);
                // console.log(b);
            }

            const refresh = async () => {
                try {
                    let token = await authStore.refreshTokenn()
                    if(token){
                        console.log(token);
                    }
                } catch (error) {
                    console.error(error)
                }

            }

            const isLogin = () => {
                const a = authStore.isLogin()
                console.log(a);
            }

            function logOut() {
                authStore.logOut()
                alert('berhasil logout')
            }

            return { login, cek, refresh, isLogin, logOut }
        },

        // setup() {   
        //     const form = reactive({
        //         email:null
        //     })

        //     const validations = {
        //         form : {
        //             email : {
        //                 required,
        //                 email
        //             }
        //         }
        //     }

        //     const v$ = useVuelidate(validations, form);

        //     return {
        //         form,
        //         v$,
        //         tasksStore : useTaskStore()
        //     };
        // },
        // data(){
        //     return{
        //         jajal : "",
        //         jaValid : false,
        //         find : "",
        //         loading : true,

        //         // task input 
        //         task : ''


        //         ,msg : "",
        //         answer : "",

        //         config : useRuntimeConfig(),
        //         // authStore : useAuthStore()
                
                
        //         // email : ""
        //     }
        // },
        // methods : {
        //     // async login(){
        //     //     const nik = "bagus"
        //     //     const pw = "bagus"
        //     //     try {
        //     //         const token = await this.authStore.login({
        //     //             nik: nik,
        //     //             password: pw
        //     //         })

        //     //         if (token) {
        //     //             alert('success login')
        //     //         }
        //     //     } catch (error) {
        //     //         console.error(error)
        //     //     }
        //     // },

        //     async sendMessage(msg){
        //         const data = {
        //             "text" : msg
        //         }

        //         try {
        //             const resp = await $fetch( 'http://192.168.1.45:8000/sendChat', {
        //                 method: 'POST',
        //                 body: data
        //             } );

        //             console.log(resp.textResponse);

        //             this.answer = resp.textResponse
        //             // if (!resp.ok) {
        //             //     throw new Error('Network response was not ok');
        //             // }

        //             // const dd = await resp.json()
        //             // console.log(dd);
        //         } catch (error) {
        //             console.error('Fetch error:', error);
        //             alert('error')
        //         }

        //         // console.log(dd);
        //     },

        //     focusInput(){
        //         if(this.jajal == '') {
        //             this.jaValid = true
        //         } else {
        //             this.jaValid = false
        //         }
        //     },
        //     exitInput(){
        //         if(this.jajal == '') {
        //             this.jaValid = true
        //         } else {
        //             this.jaValid = false
        //         }
        //     },

        //     load(){
        //         this.loading = 'load'
        //         setTimeout(()=>{
        //             this.loading = !true
        //         }, 5000)
        //     },

        //     test(){
        //         console.log(this.v$.form.email);
        //         console.log(this.config.public.apiBase);
        //     },
        //     validateEmail(){
        //         this.v$.form.email.required
        //     },

        //     validJajal(){
        //         return this.jajal.length == 0
        //     },

        //     deviceDetect(){
        //         return console.log(navigator.appVersion)
        //     },
        //     addTask(){
        //         this.tasksStore.add(this.task)
        //         this.task = ""
        //     }
        // },
        // computed : {
        //     isValid(){
        //         return this.find == ""
        //     },
        //     longText(){
        //         return this.find.length > 10
        //     },
        //     validatorz(){
        //         return this.v$.form.email.$error
        //     },
        //     validate111(){
        //         this.validateEmail()
        //     }
        // },
        // mounted() {
        //     this.test()
        //     this.deviceDetect()
        //     // this.getTask()
        // },

        // watch : {
        //     'form.email' : function(){
        //         this.validateEmail()
        //     }
        // }
        
    }
</script>

<style lang="scss" scoped>

</style>