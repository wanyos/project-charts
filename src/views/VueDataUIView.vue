<template>
  <h1>vue-data-ui</h1>
  <nav class="nav">
    <router-link to="/vueuixy" class="nav__link">VueUiXy</router-link>
    <router-link to="/vueuiheatmap" class="nav__link">VueUiHeatmap</router-link>
    <router-link to="/vueuiquickchart" class="nav__link">VueUiQuickChart</router-link>
  </nav>

  <section>
    <router-view></router-view>
  </section>
</template>

<script setup></script>

<style lang="css" scoped>
.nav {
  border: 1px solid black;
  border-radius: 15px;
  padding: 25px;
  display: flex;
  justify-content: center;
}

.nav__link {
  text-decoration: none;
  border: 1px solid black;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 20px;
  margin: 0 10px;
}

.nav__link:hover {
  background-color: rgb(234, 236, 244);
}
</style>
