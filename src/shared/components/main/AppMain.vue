<script setup>
import Hero from '@/shared/components/main/SectionHero.vue'
import Middle from '@/shared/components/main/SectionMiddle.vue'
import Bottom from '@/shared/components/main/SectionBottom.vue'
</script>

<template>
<main :class="$style.main">
  
  <div :class="$style.MainContent">
    <Hero />
    <Middle />
    <Bottom />
  </div>
</main>
</template>

<style module>
main {
  display: block;
  flex-grow: 1;
  background-color: #F2F3F7;
}
.MainContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1a1b1f;
    }

</style>
