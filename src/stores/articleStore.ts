// This is a pinia store. It's just a compact way to store data and logic
// that might be used by many components in an app. It lets us avoid passing
// around too many props or functions.

import { ref } from 'vue'
import { defineStore } from 'pinia'
// We import the ArticlesAPI class here, so that the store can interact with remote server.
// It's good to keep the store and API separate, as that allows us to modify the API only
// if there is a change on the server, without having to change any logic here.
import ArticlesAPI from '@/api/ArticlesAPI'

export const useArticleStore = defineStore('articleStore', () => {
  // refs are used as state holders throughout vue. The argument within ref()
  // is the default value when the app starts, but can be changed.
  const filters = ref<string[]>([
    'ALL',
    'Acquisition',
    'Communication',
    'Engineering',
    'Education',
    'Productivity',
    'Training',
    'Workplace',
  ])
  const currentFilter = ref<string>('ALL')
  const articles = ref<ArticleData[]>([])

  // I removed several of your bookmark related api functions.
  // The article data on the server already indicates if an article is bookmarked,
  // so let's just use that field for simplicity.
  async function fetchArticles() {
    // the fetch function places article data into the articles ref.
    articles.value = await ArticlesAPI.get(currentFilter.value)
  }

  async function toggleBookmark(article: ArticleData) {
    article.bookmarked = !article.bookmarked
    await ArticlesAPI.put(article)
    // after sending along the bookmark change, let's pull in fresh data.
    await fetchArticles()
  }

  // an initialize function is a good idea in a store, to easily fill it with data when the app starts.
  // call the initialize function at the first time the store is needed.
  function initialize() {
    fetchArticles()
  }

  // Pinia stores need to return all the refs and functions that you want available throughout the app.
  return { initialize, filters, currentFilter, fetchArticles, articles, toggleBookmark }
})

// Declare the type of an article.
interface ArticleData {
  id: number
  name: string
  category: string
  bookmarked: boolean
}
