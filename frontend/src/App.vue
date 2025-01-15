<template>
  <div id="app">
    <h1>Welcome to My Website</h1>
    <router-view />
    <div>
      <FilterChips />
    </div>
  </div>
</template>

<script lang="ts">
import FilterChips from '/src/FilterChips.vue';

export default {
  name: 'App',
  components:{
    FilterChips,
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}
</style>
