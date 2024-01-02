<template>
  <div class="app">
    <Nav></Nav>
    <Site></Site>
    <Hero></Hero>
  </div>
</template>

<script setup>
import Nav from "./components/nav.vue";
import Site from "./components/site.vue";
import Hero from "./components/hero.vue";
</script>

<style scoped lang="scss">
.app {
  min-height: 101vh;
}
</style>
