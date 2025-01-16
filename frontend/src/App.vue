<template>
  <div id="app">
    <h1>Welcome to My Website</h1>
    <div>
      <FilterChips :filters="filters" @filter-changed="fetchFilteredArticles" />
      <p>Selected Filter: {{ currentFilter }}</p>
      <h2>Items List</h2>
      <ul>
        <li v-for="article in articles" :key="article.id">{{ article.title }} ({{ article.category }})</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import FilterChips from '/root/AtlasWebChallenge2/frontend/src/FilterChips.vue';
import { fetchArticles } from '/src/services/api.ts';


export default {
  name: 'App',
  components: {
    FilterChips,
  },
  data() {
    return {
      filters: ["ALL", "Acquisition", "Communication", "Engineering", "Education", "Productivity", "Training", "Workplace"],
      currentFilter: "ALL",
      articles: [],
    };
  },
  methods: {
    async fetchFilteredArticles(filter: string) {
      this.currentFilter = filter;
      this.articles = await fetchArticles(filter);
    },
    async loadArticles() {
      this.articles = await fetchArticles('ALL');
    },
  },
  mounted() {
    this.loadArticles();
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
