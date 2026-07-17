<script setup>
import { FetchMetrics } from '@/shared/components/main/page/DashboardPage/useDashboardData/useDashboardData'
const { usdRate, gold } = FetchMetrics();
</script>
<template>
  <div :class="$style.GridMetrics">
    <div :class="$style.USDetrics">
      <div :class="$style.label">💵 Курс USD:</div>
      <div :class="$style.value">{{ usdRate?.toFixed(2) }} ₽</div>
    </div>
    <div :class="$style.GoldMetrics">
        <div :class="$style.label">🥇 Золото (гр):</div>
        <div :class="$style.value">{{ (gold?.rub / 31.1035).toFixed(0) }} ₽</div>
    </div>
    <div :class="$style.GoldMetrics">
      <div :class="$style.label">🥇 Золото (унц):</div>
      <div :class="$style.value">{{ gold?.usd }} $</div>
    </div>
    <!-- <div :class="$style.UsersMetrics">
        <div :class="$style.value"></div>
        <div :class="$style.label">Пользователи</div>
    </div> -->
  </div>
</template>



<style module>
.GridMetrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;
}
.USDetrics {
  background: #23252b;
  border: 1px solid #ffffff1e;
  overflow: hidden;
  display: flex;
  border-radius: 10px;
  height: auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;

}
.value {
  user-select: none;
  font-family: 'Manrope';
  width: 100%;
  font-weight: 400;
  font-size: 18px;
   color: #F6F0DE;
  padding: 15px;
}

.label {
  display: flex;
  border-bottom: 1px solid #ffffff2d; 
  width: 100%;
  background: #15417e;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #F6F0DE;
  flex-direction: column;
  padding: 15px;
}
.GoldMetrics {
  background: #23252b;
  border-radius: 10px;
  border: 1px solid #ffffff1e;
  overflow: hidden;
  display: flex;
  height: auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

</style>