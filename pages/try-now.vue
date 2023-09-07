<template>
  <div>
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
    <p>
      <h1>{{ $t('hello_from_localazy') }}</h1>
      {{ $t('description') }}
    </p>
  </div>
</template>

<script setup>
    const langs = ref(['en', 'id'])
</script>

<style lang="scss" scoped>


</style>