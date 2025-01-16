<template>
  <div id="app">
    <h1>Welcome to My Website</h1>
    <FilterChips :filters="filters" @filter-changed="fetchFilteredArticles" />
    <p>Selected Filter: {{ currentFilter }}</p>
    <h2>Article List</h2>
    <div class="article-container">
    <ul>
      <div class="article-box" v-for="article in articles" :key="article.id">
        <h3>{{ article.name }}</h3><p> ({{ article.category }})</p>
        <button @click="toggleBookmark(article)">
          {{ article.bookmarked ? 'Unbookmark' : 'Bookmark' }}
        </button>
      </div>
    </ul>
    </div>
  </div>
</template>

<script lang="ts">
import FilterChips from '/src/FilterChips.vue';
import { fetchArticles, saveBookmarks, loadBookmarks } from './services/api';

export default {
  name: 'App',
  components: { FilterChips },
  data() {
    return {
      filters: [
        "ALL",
        "Acquisition",
        "Communication",
        "Engineering",
        "Education",
        "Productivity",
        "Training",
        "Workplace",
      ],
      currentFilter: "ALL",
      articles: [],
    };
  },
  methods: {
    async fetchFilteredArticles(filter: string) {
      this.currentFilter = filter;
      this.articles = await fetchArticles(filter);
      this.loadBookmarks();
    },
    async loadArticles() {
      this.articles = await fetchArticles("ALL");
    },
    async saveBookmarks() {
      const bookmarkedArticles = this.articles.filter(
        (article) => article.bookmarked
      );
      await saveBookmarks(bookmarkedArticles);
    },
    async loadBookmarks() {
      const savedBookmarks = await loadBookmarks();
      this.articles.forEach((article) => {
        article.bookmarked = savedBookmarks.some(
          (saved) => saved.id === article.id
        );
      });
    },
    toggleBookmark(article) {
      article.bookmarked = !article.bookmarked;
      this.saveBookmarks();
    },
  },
  async mounted() {
    await this.loadArticles();
    await this.loadBookmarks();
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

.articles-container {
  display:flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 20px;
}

.article-box {
  border: 1px solid grey;
  border-radius: 8px;
  padding: 16px;
  width: 250px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.article-box h3 {
  margin-top: 0;
}

.article-box button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: rgb(65, 186, 226);
  color: white;
  cursor: pointer;
}

.article-box button:hover {
  background-color: #1c7adf;
}
</style>
