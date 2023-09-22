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

              <form class="mt-7" action="">
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
                <div class="h-5 mb-3">
                  <div class="-mt-5">
                    <span v-if="password_validate" class="text-red-600">
                      {{ password_error_message }}
                    </span>
                  </div>
                </div>
                <Form
                  name="passwordC"
                  :title="$t('change_password__confirmation_password')"
                  type="password"
                  :placeholder="
                    $t('change_password__placeholder_confirmation_password')
                  "
                  icon="password"
                  password="true"
                  @log-in="submit"
                  @togle-hide="doTest"
                  @user-entry="on_password_confirmation"
                  @emit-validate="focus('pwc')"
                  @emit-blur="blur('pwc')"
                />
                <div class="h-5 mb-3">
                  <div class="-mt-5">
                    <span
                      v-if="password_confirmation_validate"
                      class="text-red-600"
                    >
                      {{ password_confirmation_error_message }}
                    </span>
                  </div>
                </div>
                <Button
                  @click="open_modal"
                  :title="`${$t('change_password__button')}`"
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
      title="Ubah Password"
      description="Apakah kamu yakin untuk mengubah password ?"
      button_yes="Lanjutkan"
      button_no="Batal"
      @send-to="submit"
      @close-confirm="show_confirmation = false"
    />

    <ModalsError
      title="Error"
      :description="error_description"
      v-show="show_error"
      @close-confirm="show_error = false"
    />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth',
});
import { useAuthStore } from '~/stores/auth';
const route = useRoute();

const $auth = useAuthStore()

// variable
const password = ref('');
const password_confirmation = ref('');
const password_validate = ref(false);
const password_confirmation_validate = ref(false);

const password_error_message = ref('');
const password_confirmation_error_message = ref('');

// / error modal
const show_error = ref(false);
const error_description = ref('');

// / confirm modal
const show_confirmation = ref(false);

onMounted(() => {
  // console.log(route.params.generate);
  validate_url()

});

// function

const open_modal = () => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  const test = regex.test(password.value);
  if (
    password.value == '' ||
    !test ||
    password_confirmation == '' ||
    password.value !== password_confirmation.value
  ) {
    error_description.value = 'Pastikan data yang anda masukan benar';
    show_error.value = true;
  } else {
    show_confirmation.value = true;
  }
};

const submit = () => {
    const url = route.params.generate
    const data = {
        "code" : url,
        "new_password" : password.value
    }
    $auth.send_forgot_password(data)
        .then((response)=>{
          navigateTo({
            path : "/"
          })
        })
        .catch((error)=>{
            console.log('err');
            show_confirmation.value = false
            error_description.value = "server tidak merespon"
            show_error.value = true
        })

};

const on_password = (val) => {
  password.value = val;
};
const on_password_confirmation = (val) => {
  password_confirmation.value = val;
};

const validate_url = () => {
    const url = route.params.generate
    try {
        $auth.check_url(url)
    } catch (error) {
        navigateTo("/auth/forgot-password")
    }
}

// / validation
const focus = (val) => {
  if (val == 'pw') {
    password_validate.value = false;
  } else {
    password_confirmation_validate.value = false;
  }
};

const blur = (val) => {
  if (val == 'pw') {
    if (password.value == '') {
      password_error_message.value = 'password tidak boleh kosong';
      password_validate.value = true;
    } else {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      const test = regex.test(password.value);
      if (!test) {
        password_validate.value = true;
        password_error_message.value =
          'pastikan password sudah berisi huruf besar huruf kecil karakter spesial dan juga minimal 8 karakter';
      } else {
        password_validate.value = false;
      }
    }
  } else if (val == 'pwc') {
    if (password_confirmation.value == '') {
      password_confirmation_error_message.value = 'password tidak boleh kosong';
      password_confirmation_validate.value = true;
    } else {
      if (password.value !== password_confirmation.value) {
        password_confirmation_error_message.value =
          'password baru dan konfirmasi password harus sama';
        password_confirmation_validate.value = true;
      } else {
        password_confirmation_validate.value = false;
      }
    }
  }
};
</script>

<style scoped></style>
