<template>
  <div class="app">
    <Nav></Nav>
    <Site></Site>
    <Hero></Hero>
    <Main></Main>
    <site-footer></site-footer>
    <site-info></site-info>
    <tool-bar></tool-bar>
  </div>
</template>

<script setup>
import Nav from "./components/nav.vue";
import Site from "./components/site.vue";
import Hero from "./components/hero.vue";
import Main from "./components/main.vue";
import siteFooter from "./components/siteFooter.vue";
import siteInfo from "./components/siteInfo.vue";
import toolBar from "./components/toolBar.vue";

console.log(import.meta.env.BASE_URL);
</script>

<style scoped lang="scss">
.app {
  //   min-height: 401vh;
}
</style>
