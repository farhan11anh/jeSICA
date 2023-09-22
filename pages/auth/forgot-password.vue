<template>
  <Head>
    <Title> JeSiCa - Forgot Password </Title>
  </Head>
  <div class="relative section-jsc h-screen">
    <div class="flex flex-wrap">
      <div class="basis-full md:basis-7/12 relative">
        <section class="w-3/4 mx-auto">
          <div class="py-4 mx-auto text-center lg:py-3">
            <div class="content py-16 text-left">
              <div class="font-bold font-nunito text-3xl mb-3">
                {{ $t('forgot_password_change_password') }}
              </div>
              <div class="text-base text-[#475467] dark:text-gray-400">
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
                <div class="h-5 mb-3">
                  <div class="-mt-5">
                    <span v-if="email_validate" class="text-red-600">{{
                      email_error_message
                    }}</span>
                  </div>
                </div>

                <Button
                  @click="openModal"
                  :title="`${$t('forgot_password__send')}`"
                  :loadLogin="loadLogin"
                  background="bg-background-primary text-t-primary w-full h-16"
                  class="hover:bg-background-hover-primary hover:text-t-hover-primary"
                  :class="loadLogin == 'true' ? 'disabled not-allowed' : ''"
                />
              </form>
            </div>
          </div>
        </section>
      </div>
      <div
        class="hidden md:block basis-5/12 bg-bg-login dark:bg-none h-screen overflow-hidden"
      ></div>
    </div>

    <ModalsConfirm
      v-show="show_confirmation"
      title="Kirim Email"
      description="Apakah kamu yakin untuk mengirim ke email?"
      button_yes="Kirim"
      button_no="Batal"
      @send-to="send_email"
      @close-confirm="show_confirmation = false"
    />

    <ModalsError
      :title="error_title"
      :description="error_description"
      v-show="show_error"
      @close-confirm="show_error = false"
    />

    <ModalsSuccess
      title="success"
      description="Berhasil kirim email, silahkan periksa email anda!"
      v-show="show_success"
      @go-to="go_to"
    />
  </div>
</template>

<script setup>
import { useOtherStore } from '~/stores/other';
import { useAuthStore } from '~/stores/auth';
definePageMeta({
  layout: 'auth',
});

//variable
const $data = useOtherStore();
const $auth = useAuthStore();

const loadLogin = ref('false');
const email = ref('');
const email_validate = ref(false);
const email_error_message = ref('');
const show_confirmation = ref(false);
const error_title = ref("")
const error_description = ref('');
const show_error = ref(false);
const show_success = ref(false);

// function
const send_email = () => {
 
    $auth
      .send_email_forgot_password(email.value)
      .then((data) => {
        console.log(data);
        show_success.value = true
      })
      .catch((err) => {
        error_title.value = "error"
        error_description.value = "gagal kirim email"
        show_error.value = true
      });
 
};
// / validation
const focus = () => {
  email_validate.value = false;
};
const blur = () => {
  if (email.value == '') {
    email_error_message.value = 'Email tidak boleh kosong';
    email_validate.value = true;
  } else {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value)) {
      email_error_message.value = 'Masukan dengan format email';
      email_validate.value = true;
    } else {
      email_validate.value = false;
    }
  }
};

// function
const openModal = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email == '' || !emailRegex.test(email.value)) {
    error_title.value = "error"
    error_description.value = 'Periksa kembali email yang anda masukan';
    show_error.value = true;
  } else {
    show_confirmation.value = true;
  }
};

const onUserEmail = (val) => {
  email.value = val;
  console.log(val);
};

const go_to = () => {
  navigateTo("/")
}
</script>

<style scoped></style>
