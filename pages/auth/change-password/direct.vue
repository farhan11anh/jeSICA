<template>
    <Head>
        <Title>
            JeSICA - Change Password
        </Title>
    </Head>
    <div class="relative section-jsc h-screen"> 
        <div class="flex flex-wrap">
            <div class="basis-full md:basis-7/12 relative">        
                <section class=" w-3/4 mx-auto">
                    <div class="py-4 mx-auto text-center lg:py-3">
                        <div class="content py-16 text-left">
                            <div class=" font-bold font-nunito text-3xl mb-3">{{ $t('forgot_password_change_password') }}</div>
                       
                            <form class="mt-7" action="">
                                <Form
                                    name="password"
                                    :title="$t('change_password__old_password')"   
                                    type="password"
                                    :placeholder="$t('change_password__placeholder_old_password')"
                                    icon="password"
                                    password="true"
                                    @log-in="submit"
                                    @togle-hide="doTest"
                                    @user-entry="on_password_old"
                                    @emit-validate="focus('pwo')"
                                    @emit-blur="blur('pwo')"
                                />

                                <div class="h-5 mb-3" >
                                    <div class="-mt-5" >
                                        <span v-if="password_old_validate" class="text-red-600" >
                                            {{ password_old_error_message }} 
                                        </span>
                                    </div>
                                </div>

                                <Form
                                    name="password"
                                    :title="$t('change_password__new_password')"   
                                    type="password"
                                    :placeholder="$t('change_password__placeholder_password')"
                                    icon="password"
                                    password="true"
                                    @log-in="submit"
                                    @togle-hide="doTest"
                                    @user-entry="on_password"
                                    @emit-validate="focus('pw')"
                                    @emit-blur="blur('pw')"
                                />
                                <div class="h-5 mb-3" >
                                    <div class="-mt-5" >
                                        <span v-if="password_validate" class="text-red-600" >
                                            {{ password_error_message }}
                                        </span>
                                    </div>
                                </div>

        
                                <Form
                                    name="passwordC"
                                    :title="$t('change_password__confirmation_password')"     
                                    type="password"
                                    :placeholder="$t('change_password__placeholder_confirmation_password')"
                                    icon="password"
                                    password="true"
                                    @log-in="submit"
                                    @togle-hide="doTest"
                                    @user-entry="on_password_confirmation"
                                    @emit-validate="focus('pwc')"
                                    @emit-blur="blur('pwc')"
                                />
                                <div class="h-5 mb-3" >
                                    <div class="-mt-5" >
                                        <span v-if="password_confirmation_validate" class="text-red-600" >
                                            {{ password_confirmation_error_message }}
                                        </span>
                                    </div>
                                </div>
    
                                    
                                <Button 
                                @click="submit"
                                 :title="`${$t('change_password__button')}`"
                                :loadLogin="loadLogin" 
                                 background="bg-background-primary text-t-primary w-full h-16" 
                                 class="hover:bg-background-hover-primary hover:text-t-hover-primary" 
                                 :class="loadLogin == 'true' ? 'disabled not-allowed' : ''" />

                            </form>
                        </div>
                    </div>
                </section>
    
            </div>
            <div class="hidden md:block basis-5/12 bg-bg-login dark:bg-none h-screen overflow-hidden">
            </div>
        </div>

        
        <!-- <ConfirmationLogin 
            backButton="true" 
            v-show="showConfirm" 
            @send-to="goTo('chats')" 
            @close-confirm="closeConfirm"/>

        <ModalsError 
            :title="errorTitle"
            :description="errorDescription"
            v-show="showError"
            @close-confirm="showError = false"
        /> -->
    </div>
</template>

<script setup>
    definePageMeta({
        layout:'auth'
    })
    const route = useRoute();

    // variable
    const password = ref('')
    const password_old = ref('')
    const password_confirmation = ref('')
    const password_validate = ref(false)
    const password_old_validate = ref(false)
    const password_confirmation_validate = ref(false)

    const password_error_message = ref('')
    const password_old_error_message = ref('')
    const password_confirmation_error_message = ref('')

    onMounted(() => {
        // console.log(route.params.generate);
    })

    // function

    const submit = () => {

    }
    const on_password = (val) => {
        password.value = val
    }

    const on_password_old = (val) => {
        password_old.value = val
    }
    const on_password_confirmation = (val) => {
        password_confirmation.value = val
    }

    // / validation
    const focus = (val) => {
        if(val == 'pw') {
            password_validate.value = false
        } else if(val == 'pwo'){
            password_old_validate.value = false
        } else {
            password_confirmation_validate.value = false
        }
    }

    const blur = (val) => {
        if(val == 'pw') {
            if(password.value != password_confirmation.value) {
                password_error_message.value = 'password baru dan konfirmasi password harus sama'
                password_validate.value = true
            } else if(password.value == '') {
                password_confirmation_error_message.value = 'password tidak boleh kosong'
                password_confirmation.value = true

            }
        }else if(val == 'pwc') {
            if(password_confirmation.value != password.value) {
                password_confirmation_error_message.value = 'password baru dan konfirmasi password harus sama'
                password_confirmation_validate.value = true
            } else if(password_confirmation.value == '') {
                password_confirmation_error_message.value = 'password tidak boleh kosong'
                password_confirmation_validate.value = true
            }
        }else if(val == 'pwo') {
            if(password_old.value == ""){
                password_old_error_message.value = 'password lama tidak boleh kosong'
                password_old_validate.value = true
            }
        }
    }

    watch([password, password_confirmation], (val) => {
        var password = val[0]
        var password_confirmation = val[1]

        switch (password !== password_confirmation) {
            case true:
                password_error_message.value = "password dan konfirmasi password harus sama"
                password_confirmation_error_message.value = password_error_message.value
                password_validate.value = true
                password_confirmation_validate.value = true
                break;
            case false:
                password_validate.value = false
                password_confirmation_validate.value = false
                break;
        }

        switch ("") {
            case password:
                password_error_message.value = 'password tidak boleh kosong'
                password_validate.value = true
                break;
            case password_confirmation:
                password_confirmation_error_message.value = 'passowrd konfirmasi tidak boleh kossong'
                password_confirmation_validate.value = true
                break;
            
            default:
                break;
        }
    })

</script>

<style scoped>

</style>