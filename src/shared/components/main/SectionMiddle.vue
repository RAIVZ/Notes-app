<script setup>

</script>

<template>
  <section :class="$style.middle">
    <div class="container">
      <div :class="$style.middleContainer">
              <!-- Заголовок раздела -->
              <h2 id="title">Все ресурсы для вашего обучения</h2>
              <!-- Список -->
              <ul :class="$style.list">
                <li :class="$style.item">
                  <h3 :class="$style.h3">Удобные заметки</h3>
                  <p>Организованные заметки по программированию в одном месте.</p>
                </li>
                <li :class="$style.item">
                  <h3 :class="$style.h3">Обучающие материалы</h3>
                  <p>
                    Доступ к полезным урокам и документациям для разных языков программирования.
                  </p>
                </li>
                <li :class="$style.item">
                  <h3 :class="$style.h3">База знаний</h3>
                  <p>
                    Доступ к актуальным знаниям и материалам для повышения уровня программирования.
                  </p>
                </li>
              </ul>
      </div>
    </div>
  </section>
</template>

<style module>
.middle {
  width: 100%;
  display: flex;
  min-height: 30vh;
  align-items: center;
  justify-content: center;
}
.middleContainer {
  height: 100%;
  width: 100%;
}
.list {

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none; /* Убираем маркеры ul */
  gap: 15px;
  margin: 0;
  padding: 0;
}
.item {
  background: #004280;
  border: 1px solid #011226;
  border-radius: 5px;
  padding: 1.8rem;
  width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 15px;
}
.item p {
  font-family: 'Manrope';
  font-size: 1.3rem;
  line-height: 1.2;
  font-weight: 400;
  color: rgb(192, 192, 192);
  text-align: left;
  max-width: 310px;
}
@media (max-width: 1200px) {
  .item p {
    font-size: 1.1rem;
  }
  .item {
    width: 450px;
  }
  @media (max-width: 769px) {
  .list {
    flex-direction: column;
    align-items: center;
  }
  .item {
    width: 400px;
  }
  @media (max-width: 480px) {
    .item {
      width: 100%;
    }
      @media (max-width: 369px) {
    .item {
      gap: 10px;
      overflow: hidden;
      overflow-wrap: anywhere;
      height: 100%;
      width: 100%;
    }
      .item p {
    font-size: 1rem;
  }
  }
  }

}
}


</style>
