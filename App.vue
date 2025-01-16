<script setup lang="ts">
// App
// In the App, we usually only put the items that will be available on every page.
// The RouterView uses the router file to determine what to show, based on the current URL.
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Welcome to My Website</h1>
  </header>

  <RouterView />
</template>

<style scoped></style>
