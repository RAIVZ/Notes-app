<script setup>
import Hero from '@/shared/components/main/SectionHero.vue'
import Middle from '@/shared/components/main/SectionMiddle.vue'
import Bottom from '@/shared/components/main/SectionBottom.vue'
</script>

<template>
  <div :class="$style.MainContent">
    <Hero />
    <Middle />
    <Bottom />
  </div>
</template>

<style module>
.MainContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
</style>
