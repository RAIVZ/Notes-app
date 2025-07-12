<script setup></script>
<template>
    <section :class="$style.Privacy">
    <div class="container">
      <div :class="$style.PrivacyContainer">
      <h1 id="title" :class="$style.h1">Политика конфиденциальности</h1>
      <div :class="$style.TextPrivacy"></div>
      </div>
    </div>
  </section>
</template>


<style module>
.Privacy{
  width: 100%;
  display: flex;
  min-height: 70vh;
  align-items: center;
  justify-content: center;
}
.PrivacyContainer {
  height: 100%;
  max-width: 1200px;
}
</style>
