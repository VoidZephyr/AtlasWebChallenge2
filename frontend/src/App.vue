<template>
  <div id="app">
    <h1>Welcome to My Website</h1>
    <router-view />
    <div>
      <FilterChips :filters="filters" @filter-changed="currentFilter = $event"/>
      <p>Selected Filter: {{ currentFilter }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import FilterChips from '/root/AtlasWebChallenge2/frontend/src/FilterChips.vue';

export default {
  name: 'App',
  components:{
    FilterChips,
  },
  data () {
    return {
      filters: ["ALL", "Acquisition", "Communication", "Engineering", "Education", "Productivity", "Training", "Workplace"],
      currentFilter: "ALL",
    };
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}
</style>
