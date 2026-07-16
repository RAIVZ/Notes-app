<script setup>

</script>

<template>
<main :class="$style.main">
  
  <div :class="$style.MainContent">
    <router-view />
  </div>
</main>
</template>

<style module>
main {
  display: block;
  flex-grow: 1;
  background-color: #1a1b1f;
}
.MainContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    }

</style>
