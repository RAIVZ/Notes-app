<script setup>

</script>

<template>
  <section :class="$style.middle">
    <div class="container">
      <div :class="$style.middleContainer">
              <!-- Заголовок раздела -->
              <h2 id="title">Все ресурсы для вашего обучения</h2>
      </div>
    </div>
  </section>
</template>

<style module>
.middle {
  width: 100%;
  display: flex;
  min-height: 30vh;
  align-items: center;
  justify-content: center;
}
.middleContainer {
  height: 100%;
  width: 100%;
}

</style>
