<template>
  <div>
    <button @click="play" >play</button>
  </div>
</template>

<script setup>
  import {Howl, Howler} from 'howler';

  var sound = new Howl({
    src: ['ping.mp3']
  });

  const play = () => {
    sound.play();
  }
</script>

<style lang="scss" scoped>

</style>