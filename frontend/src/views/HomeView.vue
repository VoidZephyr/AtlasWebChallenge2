<template>
    <div>
        <h1>Items List</h1>
        <ul>
            <li v-for="item in items" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
import { fetchItems } from '/src/services/api.ts';
;

export default {
    data() {
        return {
            items: [],
        };
    },
    mounted() {
        apiClient.get('/items').then((response) => {
            this.items = response.data;
        }).catch((error) => {
            console.error('Error fetching items:', error);
        });
    },
};
</script>
