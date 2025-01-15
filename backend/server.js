const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/items', (req, res) => {
const {filter} = req.query;
const allItems = [
    {id:1, name: 'Item 1', category: 'Acquistition'},
    {id:2, name: 'Item 2', category: 'Communication'},
    {id:3, name: 'Item 3', category: 'Engineering'},
    {id:4, name: 'Item 4', category: 'Education'},
    {id:5, name: 'Item 5', category: 'Productivity'},
    {id:6, name: 'Item 6', category: 'Training'},
    {id:7, name: 'Item 7', category: 'Workplace'},
    {id:8, name: 'Item 8', category: 'All'},
];

const filteredItems = filter && filter !=="ALL"
? allItems.filter((item) => item.category === filter)
    : allItems;

  res.json(filteredItems);
});


app.listen(3000, () => {
    console.log('Backend running on http://localhost:3000');
});
