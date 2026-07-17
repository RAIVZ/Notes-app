<script setup>
import DashboardMetrics from '@/shared/components/main/page/DashboardPage/DashboardComponents/DashboardMetrics.vue'
import DashboardCharts from '@/shared/components/main/page/DashboardPage/DashboardComponents/DashboardCharts.vue'
import DashboardTable from '@/shared/components/main/page/DashboardPage/DashboardComponents/DashboardTable.vue'
</script>

<template>
  <div :class="$style.Dashboard">
    <div class="container">
      <DashboardMetrics />
      <DashboardTable />
      <DashboardCharts />
    </div>
  </div>
</template>

<style module>
.Dashboard {
    display: flex;
    width: 100%;
    flex-direction: column;
}
</style>
