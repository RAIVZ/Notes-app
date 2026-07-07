<script setup>

</script>

<template>
  <section :class="$style.hero">
    <div class="container">
      <div :class="$style.heroContainer">
        
      </div>
    </div>
  </section>
</template>

<style module>
.hero {
  width: 100%;
  display: flex;
  min-height: 55vh;
  align-items: center;
  justify-content: center;
}
.heroContainer {
  height: 100%;
  width: 100%;
  overflow-wrap: break-word;
}

@media (max-width: 480px) {
  .desc {
    font-size: 0.9rem;
  }
  @media (max-width: 360px) {
    .hero {
      min-height: 50vh;
    }
  }

}

</style>
