<script setup>
import Logo from '@/shared/assets/Header-assets/logo.png'
</script>
<template>
  <div :class="$style.logoBlock">
    <a href="/" :class="$style.logo">
      <img :src="Logo" alt="Лого" :class="$style.logoImage" width="65" />
      <span :class="$style.logoText">dashboard</span>
    </a>
  </div>
</template>

<style module>
.logo {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: 5px;
}
.logoText {
  font-family: "HeliosExt", cursive;
  font-weight: 700;
  font-size: 16px;
  color: rgb(255, 255, 255);
  user-select: none;
}
.logoImage {
  display: block;
}
@media (max-width: 640px) {
  .logo img {
    width: 20px;
    gap: 5px;
  }
  .logoText {
    font-size: 14px;
  }
}
</style>
