import axios from 'axios';

export const fetchArticles = async (category: string) => {
  const response = await axios.get('http://localhost:3000/api/articles', {
    params: { filter: category },
  });
  return response.data;
};
