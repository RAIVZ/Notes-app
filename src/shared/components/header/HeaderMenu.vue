<script setup>

</script>
<template>
  <div :class="$style.nav">
    <nav :class="$style.navMenu">
      <ul :class="$style.navList">
        <li :class="$style.navItem">
          <router-link to="/" :class="$style.link">Главная</router-link>
        </li>
        <li :class="$style.navItem">
          <router-link to="/" :class="$style.link">Документации</router-link>
        </li>
        <li :class="$style.navItem">
          <router-link to="/" :class="$style.link">Контакты</router-link>
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
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: #BE1593;
  transition: all 0.3s ease;
}

.link:hover {
  color: #BE1593;
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
@media (max-width: 640px) {
  .nav {
    display: none;
  }
}
</style>
