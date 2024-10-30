<template>
  <header>
    <h1>VueDataUi</h1>
    <nav class="nav">
      <router-link to="/vueuixy" class="nav__link">VueUiXy</router-link>
      <router-link to="/vueuiheatmap" class="nav__link">VueUiHeatmap</router-link>
      <router-link to="/vueuiquickchart" class="nav__link">VueUiQuickChart</router-link>
      <router-link to="/vueuipie" class="nav__link">VueUiPie</router-link>
      <router-link to="/vueuisparkstack" class="nav__link">VueUiSparkStack</router-link>
    </nav>
  </header>

  <section>
    <router-view></router-view>
  </section>
</template>

<script setup></script>

<style lang="css" scoped>
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
