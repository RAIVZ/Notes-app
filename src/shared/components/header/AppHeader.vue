<script setup>
import Logo from './HeaderLogo.vue'
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
  background-color: #004280;
  height: 50px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  margin: 0 auto;
}
.HeadContent {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
}
</style>
