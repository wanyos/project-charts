<template>
  <header>
    <h1>VueChartKick</h1>
    <nav class="nav">
      <router-link to="bubblechart" class="nav__link">BubbleChartKick</router-link>
      <router-link to="scatterchart" class="nav__link">ScatterChartKick</router-link>
      <router-link to="linechart" class="nav__link">LineChartKick</router-link>
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
