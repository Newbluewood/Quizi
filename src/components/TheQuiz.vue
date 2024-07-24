<script setup>
import PaginationComponent from '@/components/QuizComponents/PaginationComponent.vue'
import QuestionTemplate from '@/components/QuizComponents/QuestionTemplate.vue'
import OptionSelection from '@/components/QuizComponents/OptionSelection.vue'
</script>

<template>
  <div class="TheQuiz">
    <div class="paginationSection">
      <PaginationComponent />
    </div>
    <div class="selectionSection">
      <OptionSelection />
    </div>

    <div class="questionsSection">
      <QuestionTemplate />
    </div>
  </div>
</template>

<style scoped>
.TheQuiz {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.paginationSection {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 50px;
  z-index: 30;
}
.questionsSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
