<template>
  <div>Hello</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

onMounted(() => {
  console.log(t('popup__greeting'));
});
</script>

<style></style>
