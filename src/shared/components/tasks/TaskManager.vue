<script setup>
import { ref } from 'vue';
const myText = ref('');
</script>

<template>
  <div>
    <h2>Мои задачи</h2>
    <input v-model="myText" type="text" placeholder="Что нужно сделать?">
    
    <p>Проверка связи: {{ myText }}</p>
  </div>
</template>

<style module>
/* Пока оставляем стили пустыми, чтобы не мешать твоей верстке */
</style>