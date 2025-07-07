<script setup>

</script>

<template>
  <section :class="$style.middle">
    <div class="container">
              <!-- Заголовок раздела -->
              <h2 id="title">Как начать общение</h2>
              <!-- Список -->
              <ul :class="$style.list">
                <li :class="$style.item">
                  <h3 :class="$style.h3">Удобные заметки</h3>
                  <p>Организованные заметки по программированию в одном месте.</p>
                </li>
                <li :class="$style.item">
                  <h3 :class="$style.h3">Обучающие материалы</h3>
                  <p>
                    Доступ к полезным урокам и гайдам для разных языков программирования.
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
  </section>
</template>

<style module>
.middle {
  display: flex;
  min-height: 30vh;
  align-items: center;
  justify-content: center;
}
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  list-style: none; /* Убираем маркеры ul */
  margin: 0;
  padding: 0;
}
.item {
  background: #004280;
  border-radius: 8px;
  padding: 1.5rem;
  width: 300px;
  box-shadow: 0 0px 4px #4ea9ff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 15px;
}
.item p {
  text-align: left;
  max-width: 230px;
}
@media (max-width: 768px) {
  .list {
    flex-direction: column;
    align-items: center;
  }
  .item {
    width: 100%;
    max-width: 400px;
  }
}
</style>
