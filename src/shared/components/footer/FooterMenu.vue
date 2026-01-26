<script setup>

</script>
<template>
  <div :class="$style.nav">
    <nav :class="$style.navMenu">
      <ul :class="$style.navList">
        <li :class="$style.footerNavItem">
          <router-link to="/privacy" :class="$style.link">Политика конфиденциальности</router-link>
        </li>
        <li :class="$style.footerNavItem">
            <!-- <router-link to="/help" :class="$style.link">Помощь</router-link> -->
        </li>
      </ul>
    </nav>
  </div>
</template>
<style module>
.nav {
  display: flex;
  position: static;
  align-items: center;
  gap: 20px;
}
.navMenu {
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.navList {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
.link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: #2d9cdb;
  transition: all 0.3s ease;
}

.link:hover {
  color: #2d9cdb;
}

.link:hover::after {
  left: 0;
  width: 100%;
}

.link {
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  transition: color 0.3s ease;
}
</style>
