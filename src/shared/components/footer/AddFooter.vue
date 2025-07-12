<script setup>
import FooterLogo from '@/shared/assets/Header-assets/BlokLogo.vue'
import FooterMenu from '@/shared/components/footer/FooterMenu.vue'
</script>

<template>
    <footer :class="$style.footer">
      <div :class="$style.footerContent">
        <FooterLogo />
        <FooterMenu />
      </div>
    </footer>
</template>

<style module>
footer {
  display: flex;
  background-color: #004280;
  height: 50px;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
}
.footerContent {
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

