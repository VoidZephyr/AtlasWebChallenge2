<template>
  <div id="app">
    <h1>Welcome to My Website</h1>
    <p>This is the starting point of our website!</p>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}
</style>
