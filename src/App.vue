<template>
  <nav class="nav">
    <router-link to="vue-charts" class="nav__link">VueCharts</router-link>
    <router-link to="vue-data-ui" class="nav__link">VueDataUI</router-link>
    <router-link to="vue-lightweight" class="nav__link">VueLightWeight</router-link>
    <router-link to="vue-apexchart" class="nav__link">VueApexChart</router-link>
    <router-link to="vue-chart-js" class="nav__link">VueChartJs</router-link>
  </nav>

  <section>
    <router-view></router-view>
  </section>
</template>

<script setup></script>

<style scoped>
* {
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}

.nav {
  width: 60%;
  margin: 0 auto;
  border-bottom: 3px solid black;
  padding: 15px;
  display: flex;
  justify-content: center;
}

.nav__link {
  text-decoration: none;
  border: 1px solid black;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 18px;
  margin: 0 10px;
}

.nav__link:hover {
  background-color: rgb(234, 236, 244);
}
</style>
