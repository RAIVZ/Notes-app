<script setup>
import Hero from '@/shared/components/main/SectionHero.vue'
</script>

<template>
  <main :class="$style.main">
    <Hero />
  </main>
</template>

<style module>
main {
  flex-grow: 1;
  background-color: rgb(31, 31, 31);
}
</style>
