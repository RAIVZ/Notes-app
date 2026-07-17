<script setup>

</script>
<template>
  <div :class="$style.nav">
    <nav :class="$style.navMenu">
      <ul :class="$style.navList">
        <li :class="$style.navItem">
          <router-link to="/" :class="$style.link">Дашборд</router-link>
        </li>
        <li :class="$style.navItem">
          <router-link to="/analytics" :class="$style.link">Аналитика</router-link>
        </li>
        <li :class="$style.navItem">
          <router-link to="/reports" :class="$style.link">Отчеты</router-link>
        </li>
        <li :class="$style.navItem">
          <router-link to="/" :class="$style.link">Виджеты</router-link>
        </li>
        <li :class="$style.navItem">
          <router-link to="/" :class="$style.link">Настройки</router-link>
        </li>
        <li :class="$style.navItem">
          <router-link to="/" :class="$style.link">Документация</router-link>
        </li>
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
  cursor: pointer;
  background-color: #535353;
}
.link {
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
.link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: #c9c9c9;
  transition: all 0.3s ease;
}

.navItem:hover .link::after {
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
