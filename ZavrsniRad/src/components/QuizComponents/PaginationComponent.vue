<script setup>
import { useQuizStore } from '@/stores/Quiz'

const useQuiz = useQuizStore()
</script>

<template>
  <div class="pagination">
    <div
      class="question"
      @click="useQuiz.showQuestion(index)"
      v-for="(ch, index) in useQuiz.isChecked"
      :key="index"
      :class="{ isChecked: ch != null }"
    >
      {{ index + 1 }}
    </div>
  </div>
  <div class="pagination">
    <a
      :href="'#' + index + 'a'"
      class="question"
      @click="useQuiz.showQuestion(index)"
      v-for="(ch, index) in useQuiz.isChecked"
      :key="index"
      :class="{
        isChecked: ch != null,
        inFocus: useQuiz.isFocused,
        All: !useQuiz.isFocused
      }"
    >
      {{ index + 1 }}
    </a>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin: 1rem 0;
}

.pagination > a {
  text-decoration: none;
}
.question {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 35px;
  border: 2px solid rgb(157, 153, 153);
  background-color: rgba(177, 190, 186, 0.4);
  font-size: 1.4rem;
  font-weight: bolder;
  color: black;
  display: none;
  cursor: pointer;
}
.question:hover {
  background-color: rgba(122, 123, 123, 0.4);
}
.question.isChecked {
  border: 2px solid rgba(10, 105, 77, 0.7);
  background-color: rgba(28, 52, 44, 0.4);
}
.question.inFocus {
  display: none;
}
.question.inFocus {
  display: flex;
}
@media screen and (max-width: 780px) {
  .question.All {
    display: flex;
  }
  .question.inFocus {
    display: flex;
  }
  .pagination {
    flex-direction: column;
    position: absolute;
    position: fixed;
    right: 0;
    top: 150px;
    transition: right 1s;
  }
}
@media screen and (max-width: 1024px) {
  .question.All {
    display: flex;
  }
  .question.inFocus {
    display: flex;
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media screen and (max-width: 360px) {
  .question.All {
    display: flex;
  }
  .question.inFocus {
    display: flex;
  }
  .pagination {
    flex-direction: column;
    position: absolute;
    position: fixed;
    right: -30px;
    top: 150px;
    transition: right 1s;
  }
  .pagination:hover {
    right: 5px;
    transition: right 0.7s;
  }
}
</style>
