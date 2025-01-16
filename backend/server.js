const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/articles', (req, res) => {
  const { category } = req.query;
  const articles = [
    { id: 1, name: 'Article 1', category: 'Acquisition', bookmarked: false },
    { id: 2, name: 'Article 2', category: 'Communication', bookmarked: false },
    { id: 3, name: 'Article 3', category: 'Engineering', bookmarked: false },
    { id: 4, name: 'Article 4', category: 'Education', bookmarked: false },
    { id: 5, name: 'Article 5', category: 'Productivity', bookmarked: false },
    { id: 6, name: 'Article 6', category: 'Training', bookmarked: false },
    { id: 7, name: 'Article 7', category: 'Workplace', bookmarked: false },
    { id: 8, name: 'Article 8', category: 'ALL', bookmarked: false },
  ];

  const filteredArticles =
    category && category !== "ALL"
      ? articles.filter((article) => article.category === category)
      : articles;

  res.json(filteredArticles);
});

app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000');
});
