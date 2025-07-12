<script setup>

</script>

<template>
  <section :class="$style.hero">
    <div class="container">
      <div :class="$style.heroContainer">
      <h1 id="title" :class="$style.h1">Programmer’s Notebook</h1>
      <p :class="$style.desc">
        Ваш цифровой помощник в изучении программирования
      </p>
      <button id="heroButton" class="button">Документации</button>
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
.desc {
  font-family: "Manrope", sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
  color: rgb(192, 192, 192);
  margin-bottom: 2.2rem;
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
