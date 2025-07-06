<script setup>

</script>

<template>
  <section :class="$style.hero">
    <div :class="$style.container">
      <h1 :class="$style.h1">Programmer’s Notebook</h1>
      <p :class="$style.desc">
        Ваш цифровой помощник в изучении программирования
      </p>
    </div>
  </section>
</template>

<style module>
.hero {
  display: flex;
  min-height: 80vh;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
}
.desc {
  font-family: "Manrope", sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
  color: rgb(192, 192, 192);
}

</style>
