<script setup>
import TheQuiz from '@/components/TheQuiz.vue'
</script>

<template>
  <div class="Quiz">
    <h1>Le Quiz</h1>
    <TheQuiz />
  </div>
</template>

<style scoped>
.Quiz {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>
