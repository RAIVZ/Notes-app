<template>
  <div :class="$style.TableСontainer">
    <div v-if="loading" :class="$style.loading">Загрузка данных...</div>
    
    <div v-else :class="$style.tables">
      
      <!-- ТАБЛИЦА 1: Драгметаллы -->
      <div :class="$style.tableWrapper">
        <h3 :class="$style.tableTitle">💰 Драгметаллы</h3>
        <table :class="$style.table">
          <thead>
            <tr>
              <th>Металл</th>
              <th>За унцию ($)</th>
              <th>За грамм (₽)</th>
              <th>За грамм ($)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Золото</strong></td>
              <td>{{ formatNumber(metals['pax-gold']?.usd) }} $</td>
              <td>{{ formatNumber(metals['pax-gold']?.rub / 31.1035) }} ₽</td>
              <td>{{ formatNumber(metals['pax-gold']?.usd / 31.1035) }} $</td>
            </tr>
            <tr>
              <td><strong>Серебро</strong></td>
              <td>{{ formatNumber(31.2) }} $</td>
              <td>{{ formatNumber(31.2 * currencies?.RUB / 31.1035) }} ₽</td>
              <td>{{ formatNumber(31.2 / 31.1035) }} $</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ТАБЛИЦА 2: Курсы валют -->
      <div :class="$style.tableWrapper">
        <h3 :class="$style.tableTitle">💱 Курсы валют к RUB</h3>
        <table :class="$style.table">
          <thead>
            <tr>
              <th>Валюта</th>
              <th>Курс</th>
              <th>1000 единиц в ₽</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>USD 🇺🇸</strong></td>
              <td>{{ formatNumber(currencies?.RUB) }} ₽</td>
              <td>{{ formatNumber(currencies?.RUB * 1000) }} ₽</td>
            </tr>
            <tr>
              <td><strong>EUR 🇪🇺</strong></td>
              <td>{{ formatNumber(currencies?.EUR * currencies?.RUB) }} ₽</td>
              <td>{{ formatNumber(currencies?.EUR * currencies?.RUB * 1000) }} ₽</td>
            </tr>
            <tr>
              <td><strong>GBP 🇬🇧</strong></td>
              <td>{{ formatNumber(currencies?.GBP * currencies?.RUB) }} ₽</td>
              <td>{{ formatNumber(currencies?.GBP * currencies?.RUB * 1000) }} ₽</td>
            </tr>
            <tr>
              <td><strong>CNY 🇨🇳</strong></td>
              <td>{{ formatNumber(currencies?.CNY * currencies?.RUB) }} ₽</td>
              <td>{{ formatNumber(currencies?.CNY * currencies?.RUB * 1000) }} ₽</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ТАБЛИЦА 3: Покупательная способность -->
      <div :class="$style.tableWrapper">
        <h3 :class="$style.tableTitle">📊 Что можно купить?</h3>
        <table :class="$style.table">
          <thead>
            <tr>
              <th>Сумма</th>
              <th>Золото (грамм)</th>
              <th>Серебро (грамм)</th>
              <th>В USD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>10,000 ₽</strong></td>
              <td>{{ formatNumber(10000 / (metals['pax-gold']?.rub / 31.1035)) }} г</td>
              <td>{{ formatNumber(10000 / (31.2 * currencies?.RUB / 31.1035)) }} г</td>
              <td>{{ formatNumber(10000 / currencies?.RUB) }} $</td>
            </tr>
            <tr>
              <td><strong>100,000 ₽</strong></td>
              <td>{{ formatNumber(100000 / (metals['pax-gold']?.rub / 31.1035)) }} г</td>
              <td>{{ formatNumber(100000 / (31.2 * currencies?.RUB / 31.1035)) }} г</td>
              <td>{{ formatNumber(100000 / currencies?.RUB) }} $</td>
            </tr>
            <tr>
              <td><strong>1,000,000 ₽</strong></td>
              <td>{{ formatNumber(1000000 / (metals['pax-gold']?.rub / 31.1035)) }} г</td>
              <td>{{ formatNumber(1000000 / (31.2 * currencies?.RUB / 31.1035)) }} г</td>
              <td>{{ formatNumber(1000000 / currencies?.RUB) }} $</td>
            </tr>
            <tr>
              <td><strong>$1,000</strong></td>
              <td>{{ formatNumber(1000 / (metals['pax-gold']?.usd / 31.1035)) }} г</td>
              <td>{{ formatNumber(1000 / (31.2 / 31.1035)) }} г</td>
              <td>1,000 $</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    
    <div :class="$style.lastUpdate">
      Последнее обновление: {{ new Date().toLocaleTimeString('ru-RU') }}
    </div>
  </div>
</template>

<script setup>
import { useMarketData } from '@/shared/components/main/page/DashboardPage/useDashboardData/useDashboardData'
const { metals, currencies, loading } = useMarketData();
const formatNumber = (num) => {
  if (!num || isNaN(num)) return '—'
  return Number(num).toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}
</script>

<style module>
.TableСontainer {
  display: flex;
  flex-direction: column;
}

.title {
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
  font-size: 28px;
}

.loading {
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #7f8c8d;
}

.tables {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;
  margin-bottom: 20px;
}

.tableWrapper {
  background: #23252b;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ffffff1e;
}

.tableTitle {
  background: #15417e;
  color: white;
  padding: 15px 20px;
  margin: 0;
  font-size: 18px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  color: #F6F0DE;
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ffffff2d;
}

.table th {
  font-family: 'Manrope';
  background: #23252b;
  font-weight: 500;
  font-size: 14px;
  color: #F6F0DE;
}

.table tbody tr:hover {
  background-color: #f8f9fa27;
}

.table td:last-child {
  text-align: right;
  font-weight: 400;
}

.lastUpdate {
  text-align: center;
  color: #7f8c8d;
  font-size: 14px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .tables {
    grid-template-columns: 1fr;
  }
  
  .table th,
  .table td {
    padding: 8px 10px;
    font-size: 14px;
  }
}
</style>