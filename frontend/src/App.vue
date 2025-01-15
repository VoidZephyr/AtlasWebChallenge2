<template>
  <div id="app">
    <h1>Welcome to My Website</h1>
    <div>
      <FilterChips :filters="filters" @filter-changed="fetchFilteredItems"/>
      <p>Selected Filter: {{ currentFilter }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import FilterChips from '/root/AtlasWebChallenge2/frontend/src/FilterChips.vue';
import {fetchItems} from '/root/AtlasWebChallenge2/frontend/src/services/api.js'

export default {
  name: 'App',
  components:{
    FilterChips,
  },
  data () {
    return {
      filters: ["ALL", "Acquisition", "Communication", "Engineering", "Education", "Productivity", "Training", "Workplace"],
      currentFilter: "ALL",
      items: [],
    };
  },
  methods:{
    async fetchFilteredItems(filter: string) {
      this.currentFilter = filter;
      this.items = await fetchItems(filter);
    },
  },
  async mounted() {
    this.items = await fetchItems('ALL');
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
