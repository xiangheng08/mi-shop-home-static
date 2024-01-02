<template>
	<div class="app">
		<Nav></Nav>
		<Site></Site>
		<Hero></Hero>
		<Main></Main>
	</div>
</template>

<script setup>
import Nav from './components/nav.vue';
import Site from './components/site.vue';
import Hero from './components/hero.vue';
import Main from './components/main.vue';
</script>

<style scoped lang="scss">
.app {
	min-height: 201vh;
}
</style>
