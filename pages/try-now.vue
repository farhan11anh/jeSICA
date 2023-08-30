<template>
    <div class="flex flex-col items-center py-8">
      <h1 class="text-2xl font-semibold mb-4">OTP Verification</h1>
      <div class="flex space-x-2">
        <input
          v-for="(digit, index) in otpDigits"
          :key="index"
          :ref="'digit' + index"
          class="border p-2 w-12 text-center"
          type="text"
          maxlength="1"
          @input="focusNextInput(index)"
        />
      </div>
      <button
        @click="verifyOTP"
        class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-opacity-75"
      >
        Verify OTP
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';

  import axios from 'axios';
  
  const otpDigits = 4;
  const otpValues = Array.from({ length: otpDigits }, () => ref(''));
  
  const focusNextInput = (currentIndex) => {
    const input = otpValues[currentIndex];
    if (input.value.length === 1) {
      const nextIndex = currentIndex + 1;
      if (nextIndex < otpDigits) {
        const nextInput = otpValues[nextIndex];
        if (nextInput) {
          // Assuming you want to focus the next input
          nextInput.value.focus();
        }
      }
    }
  };
  
  const verifyOTP = () => {
    const enteredOTP = otpValues.map(input => input.value).join('');
    // Perform OTP verification logic here
    // For example, you can compare `enteredOTP` with the expected OTP
    // and take appropriate actions based on the result.
  };

  const testHash = async () => {
    const config = useRuntimeConfig()
    const url = config.public.apiBase
    await axios.get(`${url}/testHash`)
    .response((data)=>{
      console.log(data);
    })
  }

  const { isMobile, isDesktop, isAndroid, isChrome, isCrawler, isFirefox, isWindows, isApple, isDesktopOrTablet, isIos } = useDevice();
  
  onMounted(() => {
    const hola = $fetch(`${import.meta.env.NUXT_PUBLIC_API_BASE}/`)
    const base_url = import.meta.env.NUXT_PUBLIC_API_BASE
    console.log(base_url);
    console.log(isMobile);
    console.log(isDesktop);
    console.log(isAndroid);
    console.log(isChrome);
    console.log(isFirefox);

  // testHash()

    // console.log(this.$isMobile());
    // const firstInput = otpValues[0];
    // if (firstInput) {
    //   // Assuming you want to focus the first input on mount
    //   firstInput.value.focus();
    // }
  });
  </script>