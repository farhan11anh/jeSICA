<template>
  <div :class="width" class="img rounded-full box-border">
    <div class="relative">
      <img class="w-full rounded-full" src="@/img/avatar.jpeg" alt="" />
      <div
        v-if="online == 'true'"
        class="bg-[#17B26A] shadow-sm shadow-gray-600 rounded-full absolute w-3 h-3 bottom-1 right-0 border-white border-2"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['online', 'width'],
};
</script>
