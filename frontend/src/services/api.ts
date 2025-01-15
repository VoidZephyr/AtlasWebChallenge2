import axios from 'axios';

export const fetchItems = async (filter: string) => {
  const response = await axios.get('http://localhost:3000/api/items', {
    params: { filter },
  });
  return response.data;
};
