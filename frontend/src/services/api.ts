import axios from 'axios';

export const fetchArticles = async (category: string) => {
  const response = await axios.get('http://localhost:3000/api/articles', {
    params: { category },
  });
  return response.data;
};

export const saveBookmarks = async (bookmarks) => {
  await axios.post('http://localhost:3000/api/bookmarks', bookmarks);
};

export const loadBookmarks = async () => {
  const response = await axios.get('http://localhost:3000/api/bookmarks');
  return response.data;
};