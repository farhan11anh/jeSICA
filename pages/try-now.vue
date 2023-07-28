<template>
    <div class=""><br>
        <div class="">What do you want to try ?</div>
        <button v-if="loading" @click="load" class=" rounded-xl bg-background-hover-primary text-white h-10 px-5" >LOAD THIS PAGE</button>

        <div v-if="!loading" >
            <p>회사 자체는 매우 성공적인 회사입니다. 그가 그들이나 편리한 사람을 찾게 하십시오, 그들은 그들이 제공한 것에 대해 그들을 고발할 줄 모르고 빚을 지게 되지만, 아무도 통찰력이 없습니다. 여기에서 그들은 자신의 수고를 알지 못하지만 그것을 가정하기 위해 거친 쾌락에서 도망치거나 유연하게 가장 쉬운 이유를 싫어합니다. 이러한 고통 중 가장 작은 것이 즐겁고 일부 문제가 발생하지만 다른 더 큰 고통이 종종 그를 따르며 그는 마음의 상태에 있어야 합니다. 그것을 거부하는 것에 대해 많은 비판을 받는 사람이 있습니까? 필요없이 태어난 사람들을 위해. 우리는 그들을 무지하고 우리가 축복받은 환난의 즐거움과 유사하다고 비난합니까?</p>


      
            <input type="text" v-model="find" placeholder="" >
            <button class=" bg-background-primary text-white p-2 rounded-lg" @click="testing"> SEND > </button>
            <!-- <p>{{find}}</p> -->

            <p v-if="isValid" class=" text-red-600">
                text tidak boleh kosong !!!
            </p>
            <p v-if="longText" class=" text-red-600">
                text terlalu panjang !!!
            </p>


            

        </div>


        <div v-else-if="loading == 'load'" >
            <div class="text-center">
                <div role="status">
                    <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>

        <div class="container">
            <input type="text" v-model="jajal" :class="jajalOke ? 'border-red-600 shadow shadow-black': ''"  @focus="focusInput" @blur="exitInput">
            <div class="h-10" >
                <p v-if="jaValid" >Masukan teks !!!</p>
            </div>
            <p>{{ jajalOke }}</p>
        </div>

        <!-- <p>{{ form.email }}</p> -->
        <input type="email" 
                v-model="form.email"
                placeholder="masukan email !" 
                class="bg-t-second hover:outline-dashed hover:outline-yellow-300 text-white rounded-lg focus:border-blue-200" >

                <p>{{ validatorz }}</p>

                <!-- <p>{{ form.email }}</p> -->

                <p v-if="!v$.form.email.required">Email is required.</p>


        <!-- <div v-if="!$v.email.required">Email is required.</div>
        <div v-if="!$v.email.email">Invalid email format.</div> -->
 

    </div>
</template>

<script>
    import { minLength, required, email } from '@vuelidate/validators';
    import { useVuelidate } from '@vuelidate/core';
    import { reactive } from '@vue/composition-api';

    definePageMeta({
        layout : "navbar"
    })

    export default {
        setup() {   
            const form = reactive({
                email:null
            })

            const validations = {
                form : {
                    email : {
                        required,
                        email
                    }
                }
            }

            const v$ = useVuelidate(validations, form);

            return {
                form,
                v$,
            };
        },
        data(){
            return{
                jajal : "",
                jaValid : false,
                find : "",
                loading : true,

                // email : ""
            }
        },
        methods : {

            focusInput(){
                if(this.jajal == '') {
                    this.jaValid = true
                } else {
                    this.jaValid = false
                }
            },
            exitInput(){
                if(this.jajal == '') {
                    this.jaValid = true
                } else {
                    this.jaValid = false
                }
            },

            load(){
                this.loading = 'load'
                setTimeout(()=>{
                    this.loading = !true
                }, 5000)
            },

            test(){
                console.log(this.v$.form.email);
            },
            validateEmail(){
                this.v$.form.email.required
            },

            validJajal(){
                return this.jajal.length == 0
            },

            deviceDetect(){
                return console.log(navigator.appVersion)
            }
        },
        computed : {
            isValid(){
                return this.find == ""
            },
            longText(){
                return this.find.length > 10
            },
            validatorz(){
                return this.v$.form.email.$error
            },
            validate111(){
                this.validateEmail()
            },

            // jajalOke(){
            //     if(this.jajal.length == 0){
            //         this.jaValid = true
            //     } else {
            //         this.jaValid = false
            //     }
            // },
        },
        mounted() {
            this.test()
            this.deviceDetect()
        },

        watch : {
            'form.email' : function(){
                this.validateEmail()
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>