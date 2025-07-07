<script setup>

</script>
<template>
  <div :class="$style.nav">
    <nav :class="$style.navMenu">
      <ul :class="$style.navList">
        <li :class="$style.navItem">
          <a href="/">Главная</a>
        </li>
        <li :class="$style.navItem">
          <a href="/">Заметки</a>
        </li>
        <li :class="$style.navItem">
          <a href="/">Контакты</a>
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
.navList a::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: #2d9cdb;
  transition: all 0.3s ease;
}
.navList a:hover {
  color: #2d9cdb;
}
.navList a:hover::after {
  left: 0;
  width: 100%;
}
.navItem a {
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}
</style>
