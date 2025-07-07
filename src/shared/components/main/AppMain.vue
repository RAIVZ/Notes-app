<script setup>
import Hero from '@/shared/components/main/SectionHero.vue'
import Middle from '@/shared/components/main/SectionMiddle.vue'
</script>

<template>
  <main :class="$style.main">
    <Hero />
    <Middle />
  </main>
</template>

<style module>
main {
  flex-grow: 1;
  background-color: #011226;
}
</style>
