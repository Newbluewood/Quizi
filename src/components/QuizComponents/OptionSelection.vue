<script setup>
import { useQuizStore } from '@/stores/Quiz'

const quizStore = useQuizStore()
const options = [
  { name: 'Pick from list', value: [], selected: true },
  { name: 'HTML', value: 'HTML', selected: false },
  { name: 'JavaScript', value: 'JavaScript', selected: false },
  { name: 'PHP', value: 'PHP', selected: false }
]
</script>
<template>
  <div class="OptionSelection">
    <div class="optionsWrapper" v-show="!quizStore.isEnd && !quizStore.isFetched">
      <div>
        <p>Category</p>
        <select name="APIs" id="category" v-model="quizStore.category">
          <option value="" selected>Pick from list ..</option>
          <option value="uncategorized">Uncategorized</option>
          <option value="code">Code</option>
          <option value="linux">Linux</option>
          <option value="bash">Bash</option>
          <option value="sql">SQL</option>
          <option value="cms">CMS</option>
          <option value="docker">Docker</option>
          <option value="devops">DdevOps</option>
        </select>
      </div>
      <div>
        <p>Difficulty</p>
        <select name="APIs" id="difficulty" v-model="quizStore.dificulty">
          <option value="Easy">Easy</option>
          <option value="Medium" v-show="quizStore.tags != 'JavaScript'">Medium</option>
          <option value="Hard" v-show="quizStore.tags != 'JavaScript'">Hard</option>
        </select>
      </div>
      <div v-show="quizStore.category == 'code'">
        <p>Tag</p>
        <select cname="APIs" v-model="quizStore.tags">
          <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
