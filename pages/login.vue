<template>
    <div class="flex relative"> 
        <div class=" basis-7/12 relative">
                        
            <section class="bg-white">
                <div class="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-3">
                    <div class="content py-16 px-24 text-left">
                        <div class=" font-bold font-nunito text-3xl mb-3">Welcome Back!</div>
                        <div class="text-base text-[#475467]" >
                            Login now to access internal data!
                        </div>

                        <form class="mt-7" action="">
                            <Form
                                name="email"
                                title="NIK Telkom*"   
                                type="email"  
                                placeholder="Enter your NIK Telkom"
                                icon="user"
                                password="false"

                                @togle-hide="doTest"

                                @user-entry="onUserEntry"
                            />

                            <Form
                                name="password"
                                title="Password*"   
                                type="password"  
                                placeholder="Enter your Password"
                                icon="password"
                                password="true"

                                @toggle-hide="doTest"

                                @user-entry="onUserPw"
                            />


                            <Button @click="login" title="Login" background="bg-background-primary text-t-primary w-full h-16" />
                        </form>
                    </div>
                </div>
            </section>

        </div>
        <div class="basis-5/12 bg-bg-login h-screen overflow-hidden">
        </div>
        
        <ConfirmationLogin v-show="showConfirm" @close-confirm="closeConfirm"/>
    </div>
</template>

<script>
    definePageMeta({
        layout : "navbar"
    })
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
                }
            }
        },
        mounted() {
            this.getpath()
        },  
        methods : {
            doTest(){
                // 
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
            login(){
                // alert(this.nik);
                // alert(this.password);

                //validate form cant empty
                if(this.nik !== "" && this.password !== ""){
                    this.showConfirm  = true
                } else {
                    alert('nik dan password tidak boleh kosong!!')
                }
            }
        }
    }
</script>

<style scoped>

</style>