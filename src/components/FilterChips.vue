<template>
  <div class="Buttons">
    <button
      v-for="(filter, index) in filters"
      :key="index"
      @click="$emit('filter-changed', filter)"
      :class="{ selected: filter === currentFilter }"
    >
      {{ filter }}
    </button>
  </div>
</template>

<script setup lang="ts">
// With typescript, there's an interesting method to easily define props.
interface Props {
  // With this prop passed in, we can toggle a class on the buttons above
  // to make them show when they represent the current filter.
  currentFilter: string
  filters: string[]
}
defineProps<Props>()
</script>

<style scoped>
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
.selected {
  background-color: #7e7e7e;
  &:hover {
    background-color: #7e7e7e;
  }
}
</style>
