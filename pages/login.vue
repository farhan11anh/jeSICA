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
                                type="text"
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
        
        <ConfirmationLogin backButton="true" v-show="showConfirm" @send-to="goTo('verification')" @close-confirm="closeConfirm"/>
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
                },
                users : []
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