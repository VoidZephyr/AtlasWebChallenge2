import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchItems = async (filter: string) => {
    const response = await apiClient.get('/items', {
    params: { filter },
    });
    return response.data;
};
