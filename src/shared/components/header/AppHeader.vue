<script setup>
import Logo from '../../assets/Header-assets/BlokLogo.vue'
import Menu from './HeaderMenu.vue'
</script>
<template>
    <header :class="$style.header">
      <div :class="$style.HeadContent">
        <Logo />
        <Menu />
      </div>
    </header>
</template>

<style module>
header {
  display: flex;
  background-color: #23252b;
  flex-direction: column;
  width: 250px;
  height: 100vh;
  z-index: 10;
  top: 0;
  left: 0;
  align-items: start;
  margin: 0 auto;
}
.HeadContent {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
