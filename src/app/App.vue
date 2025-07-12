<script setup>
import Header from '@/shared/components/header/AppHeader.vue';
import Footer from '@/shared/components/footer/AddFooter.vue'
</script>

<template>
  <div class="wrapper">
    <Header />
    <main :class="$style.main">
      <router-view />
    </main>
    <Footer />
  </div>

</template>

<style module>
main {
  display: block;
  flex-grow: 1;
  background-color: #011226;
}
</style>
<script>

</script>
