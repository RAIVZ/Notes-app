<script setup>
import DashboardHeader from '@/shared/components/main/page/DashboardPage/DashboardComponents/DashboardHeader.vue'
import DashboardMetrics from '@/shared/components/main/page/DashboardPage/DashboardComponents/DashboardMetrics.vue'
import DashboardCharts from '@/shared/components/main/page/DashboardPage/DashboardComponents/DashboardCharts.vue'
import DashboardTable from '@/shared/components/main/page/DashboardPage/DashboardComponents/DashboardTable.vue'
</script>

<template>
  <section :class="$style.Dashboard">
    <div class="container">
      <DashboardHeader />
      <DashboardMetrics />
      <DashboardCharts />
      <DashboardTable />
    </div>
  </section>
</template>

<style module>
.Dashboard {
  display: flex;
  min-height: 70vh;
  align-items: center;
  justify-content: center;
}
</style>
