<template>
  <header>
    <h1>VueApexCharts</h1>
    <nav class="nav">
      <router-link to="apexchartheatmap" class="nav__link">Heatmap</router-link>
      <router-link to="apexchartarea" class="nav__link">AreaChart</router-link>
      <router-link to="apexchartbar" class="nav__link">BarChart</router-link>
      <router-link to="apexchartdonnut" class="nav__link">DonnutChart</router-link>
    </nav>
  </header>

  <section>
    <router-view></router-view>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.nav {
  display: flex;
  justify-content: center;
}

.nav__link {
  text-decoration: none;
  border: 1px solid black;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 15px;
  margin: 0 10px;
}

.nav__link:hover {
  background-color: rgb(234, 236, 244);
}
</style>
