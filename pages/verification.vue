<template>
    <div class="flex relative"> 
        <div class=" basis-7/12 relative">
            <section class="bg-white">
                <div class="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-3">
                    <div class="content py-16 px-24 text-left">
                        <div class=" font-bold font-nunito text-3xl mb-3">Verify your email</div>
                        <div class="text-base text-[#475467]" >
                            Your NIK is {{ $route.query.nik }}
                            Please enter the OTP code sent to {{ email }}
                        </div>
                        <div class="flex gap-5 justify-between flex-wrap mt-5">
                            <div class=" grow">
                                <div class="w-full h-28 border border-gray-300 relative box-border rounded-lg input-group">
                                    <input class="otp absolute w-full top-1/2 -translate-y-1/2 text-center text-4xl h-full rounded-lg" type="text" maxlength="1" v-model="input1" @input="moveToNextInput($event, 2)">
                                </div>
                            </div>
                            <div class=" grow">
                                <div class="w-full h-28 border border-gray-300 relative box-border rounded-lg input-group">
                                    <input class="otp absolute w-full top-1/2 -translate-y-1/2 text-center text-4xl h-full rounded-lg" type="text" maxlength="1" v-model="input2" @input="moveToNextInput($event, 3)">
                                </div>
                            </div>
                            <div class=" grow">
                                <div class="w-full h-28 border border-gray-300 relative box-border rounded-lg input-group">
                                    <input class="otp absolute w-full top-1/2 -translate-y-1/2 text-center text-4xl h-full rounded-lg" type="text" maxlength="1" v-model="input3" @input="moveToNextInput($event, 4)">
                                </div>
                            </div>
                            <div class=" grow">
                                <div class="w-full h-28 border border-gray-300 relative box-border rounded-lg input-group">
                                    <input class="otp absolute w-full top-1/2 -translate-y-1/2 text-center text-4xl h-full rounded-lg" type="text" maxlength="1" v-model="input4" @input="moveToNextInput($event, 5)">
                                </div>
                            </div>
  

                        </div>

                        <div class="text-center text-[#475467] mt-5 mb-5" >
                            <countDown />
                        </div>

                        <Button
                        @click="send()"
                         title="Verify Code"
                          background="bg-background-primary text-t-primary w-full" />

                    </div>
                </div>
            </section>

            <ConfirmationLogin backButton="false" v-show="showConfirm" 
                @send-to="goTo('verification')" 
                @close-confirm="closeConfirm"/>

        </div>
        <div class="basis-5/12 bg-bg-login h-screen overflow-hidden">
        </div>
        
    </div>
</template>

<script>
    import {ref} from 'vue'
    definePageMeta({
        layout : "navbar"
    })

    const timer = ref(null)
    export default {
        data(){
            return{
                min : "1", sec : "1",
                input1 : "",
                input2 : "",
                input3 : "",
                input4 : "",
                showConfirm : false ,
                email : "",
                users : [
                    {
                        nik : '11111111',
                        email : "Suzume@sigma.co.id"
                    },
                    {
                        nik : '22222222',
                        email : "Aqua@sigma.co.id"
                    },
                    {
                        nik : '33333333',
                        email : "Rizukey@sigma.co.id"
                    },
                    {
                        nik : 'bagus',
                        email : "bagos31@sigma.co.id"
                    }
                ],

               
            }
        },
        mounted(){
            // console.log(this.$route.query.nik);
            this.findEmailWithNIK(this.$route.query.nik)
            this.startTimer(60*5)

            // this.$refs['timer'].innerHTML= 1

        },
        methods : {
            findEmailWithNIK(nik){
                const user = this.users.find(val=>val.nik == nik)
                this.email = user.email
            },

            moveToNextInput(event, nextIndex) {
                const maxLength = parseInt(event.target.getAttribute("maxlength"));
                const currentLength = event.target.value.length;

                if (currentLength === maxLength) {
                    // Cari input berikutnya berdasarkan index
                    const nextInput = this.$el.querySelector(
                        `.grow:nth-child(${nextIndex}) .input-group .otp`)

                    // console.log(this.$el.querySelector(`.grow:nth-child(${nextIndex}) .input-group .otp`));


                    // Jika input berikutnya ditemukan, beri fokus ke input tersebut
                    if (nextInput) {
                        nextInput.focus();
                    }
                }
            },

            // timer 

            startTimer(duration) {
                var timer = duration, minutes, seconds;
                setInterval(function () {
                    minutes = parseInt(timer / 60, 10);
                    seconds = parseInt(timer % 60, 10);

                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;

                    // display.textContent = minutes + ":" + seconds;
                    this.min = minutes
                    this.sec = seconds

                    // console.log(this.min + ':' + this.sec);


                    if (--timer < 0) {
                        timer = duration;
                    }
                }, 1000);
            },

            send(){
                const otp = '1111'
                const context = this.input1 + this.input2 + this.input3 + this.input4

                console.log(context);
                if(otp == context) {
                    this.showConfirm = true 
                } else {
                    alert('kode otp yang anda masukan salah')
                }

            },

            goTo(){
                this.$router.push({
                    path : "/chatPage"
                })
            }
        }, 

        computed : {
            
            countDown(){
                return this.showConfirm
            }
        }
    }
</script>

<style scoped>
    .otp {
       border-color: #D0D5DD;
    }
    .otp:focus {
        border: none;
        outline-color: #D0D5DD;
    }
</style>