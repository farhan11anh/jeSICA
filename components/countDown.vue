<template>
    <div>
      <p>Send OTP code in: <strong ref="timer" class="text-black" >
        {{ minutes }}:{{ seconds }}
      </strong></p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const minutes = ref(5);
  const seconds = ref(0);
  let intervalId;
  
  onMounted(() => {
    startCountdown();
  });
  
  const startCountdown = () => {
    intervalId = setInterval(() => {
      if (seconds.value > 0) {
        seconds.value--;
      } else {
        if (minutes.value > 0) {
          minutes.value--;
          seconds.value = 59;
        } else {
            alert('waktu telah habis')
          clearInterval(intervalId);
        }
      }
    }, 1000);
  };
  </script>
  