<template>
    <Head>
        <Title>
            JeSICA - Forgot Password
        </Title>
    </Head>
    <div class="relative section-jsc h-screen"> 
        <div class="flex flex-wrap">
            <div class="basis-full md:basis-7/12 relative">        
                <section class=" w-3/4 mx-auto">
                    <div class="py-4 mx-auto text-center lg:py-3">
                        <div class="content py-16 text-left">
                            <div class=" font-bold font-nunito text-3xl mb-3">{{ $t('forgot_password_change_password') }}</div>
                            <div class="text-base text-[#475467] dark:text-gray-400" >
                                {{ $t('forgot_password_change_password_description') }}
                            </div>
                            <form class="mt-7" action="">
                                <Form
                                    name="email"
                                    title="Email*"   
                                    type="text"
                                    :placeholder="$t('login_page__placeholder_email')"
                                    icon="user"
                                    password="false"
                                    @log-in="send_email"
                                    @togle-hide="doTest"
                                    @user-entry="onUserEmail"
                                    @emit-validate="focus"
                                    @emit-blur="blur"
                                />
                                <div class="h-5 mb-3" >
                                    <div class="-mt-5" >
                                        <span v-if="email_validate" class="text-red-600" >{{ $t('login_page__validator_email') }}</span>
                                    </div>
                                </div>
    

                                <Button 
                                @click="send_email"
                                 :title="`${$t('forgot_password__send')}`"
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

    //variable
    const loadLogin = ref("false")
    const email = ref("")
    const email_validate = ref(false)

    // function
    const send_email = () => {
        loadLogin.value = "true"
    }
    // / validation
    const focus = () => {
        email_validate.value = false
    }
    const blur = () => {
        if(email.value == "") {
            email_validate.value = true
        }else {
            email_validate.value = false
        }
    }

    const onUserEmail = (val) => {
        email.value = val
        console.log(val);
    }
</script>

<style scoped>

</style>