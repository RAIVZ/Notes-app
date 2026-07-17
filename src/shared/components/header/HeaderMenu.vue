<script setup>

</script>
<template>
  <div :class="$style.nav">
    <nav :class="$style.navMenu">
      <ul :class="$style.navList">
        <router-link to="/" :class="$style.navItem">
          <router-link :class="$style.link">Дашборд</router-link>
        </router-link>
        <router-link to="/analytics" :class="$style.navItem">
          <span :class="$style.link">Аналитика</span>
        </router-link>
        <router-link to="/reports" :class="$style.navItem">
          <span :class="$style.link">Отчеты</span>
        </router-link>
        <router-link :class="$style.navItem">
          <span :class="$style.link">Виджеты</span>
        </router-link>
        <router-link :class="$style.navItem">
          <span :class="$style.link">Настройки</span>
        </router-link>
        <router-link :class="$style.navItem">
          <span :class="$style.link">Документация</span>
        </router-link>
      </ul>
    </nav>
  </div>
</template>
<style module>
.nav {
  width: 100%;
  display: flex;
  position: static;
  align-items: center;
}
.navItem {
  padding: 0px 9px;
  border-radius: 5px;
  display: flex;
  height: 40px;
  align-items: center;
}
.navMenu {
  width: 100%;
  display: flex;
  gap: 20px;
  margin: 5px;
  padding: 0;
  list-style: none;
}
.navList {
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-direction: column;
}
.navItem:hover {
  background-color: #535353;
}
.link {
  pointer-events: none;
  user-select: none;
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #c9c9c9;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  transition: color 0.3s ease;
}
/* .link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: #c9c9c9;
  transition: all 0.3s ease;
} */

.navItem:hover {
  cursor: pointer;
  left: 0;
  width: 100%;
}


@media (max-width: 960px) {
  .nav {
    display: none;
  }
}
</style>
