<template>
<div class="Buttons">
<button
v-for="filter in filters"
:key="filter"
@click="$emit('filter-changed', filter)"
>
{{ filter }}

</button>

</div>

</template>


<script lang="ts">
export default
{
    name: "FilterChips",
    props: {
        filters: {
            type: Array,
            required: true,
        }
    }
};

</script>


<style scoped>
.filter-chips {
display: flex;
gap: 8px;
}

button {
padding: 8px 16px;
border: 1px solid #ccc;
border-radius: 16px;
background-color: #f5f5f5;
cursor: pointer;
}

button:hover {
background-color: #ddd;
}
</style>