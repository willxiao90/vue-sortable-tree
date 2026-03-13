<script setup lang="ts">
import Example1 from "./Example1.vue";
import Example2 from "./Example2.vue";
import Example3 from "./Example3.vue";
import Example4 from "./Example4.vue";
</script>

<template>
  <div class="demo-container">
    <h1>SortableTree Demo</h1>

    <Example1 />
    <Example2 />
    <Example3 />
    <Example4 />
  </div>
</template>

<style scoped>
.demo-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
  color: #34495e;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
}

:deep(.demo-section) {
  margin-bottom: 48px;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;
}

:deep(.demo-description) {
  color: #6c757d;
  margin-bottom: 16px;
  font-size: 0.95em;
}

:deep(.demo-controls) {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

:deep(.demo-controls button) {
  padding: 8px 16px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background 0.2s ease;
}

:deep(.demo-controls button:hover) {
  background: #2980b9;
}
</style>
