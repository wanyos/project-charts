<template>
  <header>
    <h1>VueLightWeight</h1>
    <nav class="nav">
      <router-link to="/vuelightlw" class="nav__link">VueLightLw</router-link>
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
