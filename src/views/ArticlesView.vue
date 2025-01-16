<script setup lang="ts">
// Note the 'setup' above. This is a format for vue called composition API,
// which is much easier to use and more streamlined.
import { onMounted } from 'vue';
import FilterChips from '@/components/FilterChips.vue';

// This is how you link a store into a vue component.
// Note: the '@' in the path is a clue to vue to look at 'src/' first.
// Otherwise the paths can get crazy like ../../../../../stores/etc for deeply nested files.
import { useArticleStore } from '@/stores/articleStore';
const articleStore = useArticleStore();
// Because this view is the highest level that needs the store,
// let's also initialize it when the component mounts.
onMounted(() => {
	articleStore.initialize();
});

function handleChange(filter: string) {
	articleStore.currentFilter = filter;
	articleStore.fetchArticles();
}
</script>

<template>
	<h2>Article List</h2>
	<RouterLink to="sample">Go to Sample Page</RouterLink>
	<FilterChips
		:currentFilter="articleStore.currentFilter"
		:filters="articleStore.filters"
		@filter-changed="handleChange"
	/>
	<div class="articles-container">
		<div class="article-box" v-for="article in articleStore.articles" :key="article.id">
			<h3>{{ article.name }}</h3>
			<p>({{ article.category }})</p>
			<button @click="articleStore.toggleBookmark(article)">
				{{ article.bookmarked ? 'Unbookmark' : 'Bookmark' }}
			</button>
		</div>
	</div>
</template>

<style scoped>
.articles-container {
	display: flex;
	flex-direction: column;
	flex-grow: 0;
	height: 500px;

	flex-wrap: wrap;
	gap: 16px;
	justify-content: flex-start;
	margin-top: 20px;
}

.article-box {
	border: 1px solid grey;
	border-radius: 8px;
	padding: 16px;
	width: 250px;
	text-align: left;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

	/* CSS has a new trick to make grouping classes like this more compact.
  You can basically imagine the '&' as a placeholder for the parent class.
  The space after the '&' means something different when present or absent. */
	& h3 {
		/* Identical to '.article-box h3 {...}'  */
		margin-top: 0;
	}
	& button {
		padding: 8px 12px;
		border: none;
		border-radius: 4px;
		background-color: rgb(65, 186, 226);
		color: white;
		cursor: pointer;
		/* Identical to 'button:hover {...}'  */
		&:hover {
			background-color: #1c7adf;
		}
	}
}
</style>
