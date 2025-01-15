<template>
  <div id="app">
    <h1>Welcome to My Website</h1>
    <div>
      <FilterChips :filters="filters" @filter-changed="fetchFilteredItems" />
      <p>Selected Filter: {{ currentFilter }}</p>
      <h2>Items List</h2>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import FilterChips from '/root/AtlasWebChallenge2/frontend/src/FilterChips.vue';
import { fetchItems } from '/src/services/api.ts';


export default {
  name: 'App',
  components: {
    FilterChips,
  },
  data() {
    return {
      filters: ["ALL", "Acquisition", "Communication", "Engineering", "Education", "Productivity", "Training", "Workplace"],
      currentFilter: "ALL",
      items: [],
    };
  },
  methods: {
    async fetchFilteredItems(filter: string) {
      this.currentFilter = filter;
      this.items = await fetchItems(filter);
    },
    async loadItems() {
      this.items = await fetchItems('ALL');
    },
  },
  mounted() {
    this.loadItems();
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
