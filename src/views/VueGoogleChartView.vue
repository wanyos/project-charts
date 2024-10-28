<template>
  <header>
    <h1>VueGoogleChart</h1>
    <nav class="nav">
      <router-link to="googlebar" class="nav__link">GoogleBar</router-link>
      <router-link to="googleline" class="nav__link">GoogleLine</router-link>
      <router-link to="googleheatmap" class="nav__link">GoogleHeatmap</router-link>
      <router-link to="googlearea" class="nav__link">GoogleArea</router-link>
      <router-link to="googlepie" class="nav__link">GooglePie</router-link>
      <router-link to="googlebubble" class="nav__link">GoogleBubble</router-link>
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
