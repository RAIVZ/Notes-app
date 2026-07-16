<script setup>
import Logo from '@/shared/assets/Header-assets/logo.png'
</script>
<template>
  <div :class="$style.logoBlock">
    <a href="/" :class="$style.logo">
      <span :class="$style.logoText">DashView</span>
      <img :src="Logo" alt="Лого" :class="$style.logoImage" width="40" />
    </a>
  </div>
</template>

<style module>
.logoBlock {
  display: flex;
  padding: 16px 14px 16px 14px;
  border-bottom: 1px solid #ffffff2d; 
}
.logo {
  display: inline-flex;
  align-items: flex-end;
  text-decoration: none;
  gap: 5px;
  
}
.logoText {
  font-family: "HeliosExt", cursive;
  font-weight: 700;
  font-size: 16px;
  color: #c9c9c9;
  user-select: none;
}
/* .logoImage {
  display: block;
} */
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
