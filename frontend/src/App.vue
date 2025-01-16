<template>
  <div id="app">
    <h1>Welcome to My Website</h1>
    <FilterChips :filters="filters" @filter-changed="fetchFilteredArticles" />
    <p>Selected Filter: {{ currentFilter }}</p>
    <h2>Items List</h2>
    <ul>
      <li v-for="article in articles" :key="article.id">
        {{ article.name }} ({{ article.category }})
        <button @click="toggleBookmark(article)">
          {{ article.bookmarked ? 'Unbookmark' : 'Bookmark' }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import FilterChips from '/src/FilterChips.vue';
import { fetchArticles } from './services/api';

export default {
  name: 'App',
  components: { FilterChips },
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
    toggleBookmark(article) {
      article.bookmarked = !article.bookmarked;
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
