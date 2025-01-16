// Typescript doesn't like this kind of file being here, so let's make it shutup.
/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let articles = [
	{ id: 1, name: 'Article 1', category: 'Acquisition', bookmarked: false },
	{ id: 2, name: 'Article 2', category: 'Communication', bookmarked: false },
	{ id: 3, name: 'Article 3', category: 'Engineering', bookmarked: false },
	{ id: 4, name: 'Article 4', category: 'Education', bookmarked: false },
	{ id: 5, name: 'Article 5', category: 'Productivity', bookmarked: false },
	{ id: 6, name: 'Article 6', category: 'Training', bookmarked: false },
	{ id: 7, name: 'Article 7', category: 'Workplace', bookmarked: false },
	{ id: 8, name: 'Article 8', category: 'ALL', bookmarked: false },
];

app.get('/api/articles', (req, res) => {
	const { filter } = req.query;

	const filteredArticles =
		filter && filter !== 'ALL' ? articles.filter((article) => article.category === filter) : articles;

	res.json(filteredArticles);
});

app.put('/api/articles', (req, res) => {
	let updatedArticle = req.body;
	articles[updatedArticle.id - 1] = updatedArticle;
	res.json({ message: 'Bookmarks saved successfully!' });
});

app.listen(3000, () => {
	console.log('Backend running on http://localhost:3000');
});
