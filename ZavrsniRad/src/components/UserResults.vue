<script setup>
import { ref, watch, defineEmits } from 'vue'
import { useUsersStore } from '@/stores/User'
//import { useQuizStore } from '@/stores/Quiz'
const usersStore = useUsersStore()
const results = ref(usersStore.getRESOULTS())

const UserResults = ref([])
const UserQuizes = ref(null)
const Quizes = ref()
const pros = ref(0)
const OthersResults = ref([])
const OtherQuzes = ref([])
const UserId = usersStore.getUserId()
const emit = defineEmits(['score'])

function getResultsFromData() {
  const rezultatiLokal = JSON.parse(localStorage.getItem('QuestionsAll'))
  let pr = 0
  for (let result of rezultatiLokal) {
    if (result.id === UserId.value) {
      UserResults.value.push(result)
      UserQuizes.value = result.quizes
      for (let quiz in UserQuizes.value) {
        const sc = UserQuizes.value[quiz].score
        pr += sc
      }
      pr = pr / UserQuizes.value.length
      pros.value = pr
      Quizes.value = UserQuizes.value.length
    } else {
      OthersResults.value.push(result)
      OtherQuzes.value.push(result.quizes)
    }
  }

  emit('score', pros.value)
}
function fillBar(sc) {
  let i = 0
  let interval = setInterval(function () {
    if (i < sc) {
      // wth.value = i + 2
      i += 2
    } else {
      clearInterval(interval)
    }
  }, 20)
}
watch(
  () => UserResults.value,
  () => {
    console.log(UserId)
  }
)
watch(
  () => usersStore.RESOULTS,
  () => {
    results.value = usersStore.getRESOULTS()
    console.log('haha', usersStore.getRESOULTS())
  }
)
</script>
<template>
  <div class="Results">
    <div class="header">
      <div class="left-side">
        <h1>Hi {{ usersStore.UserName }}</h1>
        <h2>Welcome back !</h2>
        <br />
        <p>Let's see how you've progressed :</p>
        <button class="button-main" @click="getResultsFromData">Let's take a look</button>
        <span> You take {{ Quizes }} quizes</span>
        <br />
      </div>
      <div class="right-side">
        <div>
          <button class="button-main">Want to see others ?</button>
        </div>
        <div>
          <div><span>person 1</span><span> Resoults:</span></div>
          <div><span>person 2</span><span> Resoults:</span></div>
        </div>
      </div>
    </div>
    <div class="dashboard">
      <div class="bars" v-for="results of UserQuizes" :key="results.no">
        <span class="span-score">{{ results.score }} % </span>
        <span class="span-date">Taken: {{ results.date }} </span>
        <div class="bar">
          <div
            class="fill"
            @load="fillBar(results.score[inex])"
            :style="{ width: results.score + '%' }"
          ></div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>
<style scoped>
.bar {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 600px;
  height: 1rem;
  border: 4px solid grey;
  border-radius: 1rem;
  overflow: hidden;
  margin: 1rem 0.5rem;
}
.header {
  display: flex;
}
.left-side {
  width: 50%;
}
.right-side {
  display: flex;
  display: none;

  margin: 3rem 0 0 6rem;
  border: 1px solid red;
  width: 100%;
  height: 100%;
}
.dashboard {
  margin-top: 2rem;
}
.span-score {
  color: cadetblue;
}
.span-date {
  color: black;
}
.fill {
  background-color: rgb(166, 188, 162);
  width: 0;
  height: 100%;
  border-radius: 1rem 0 0 1rem;
}
@media (min-width: 381px) and (max-width: 739px) {
  .Results {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 500px;
  }
  .bar {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 400px;
    height: 1rem;
    border: 4px solid grey;
    border-radius: 1rem;
    overflow: hidden;
    margin: 0.5rem 0.5rem;
  }
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 380px;
  }
  .span-date,
  .span-score {
    margin-left: 0.5rem;
  }
  .dashboard {
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 380px;
  }
  .left-side {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  .right-side {
    display: none;
  }
}

@media (max-width: 380px) {
  .Results {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 380px;
  }
  .bar {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 250px;
    height: 1rem;
    border: 4px solid grey;
    border-radius: 1rem;
    overflow: hidden;
    margin: 0.5rem 1.5rem;
  }
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 380px;
  }
  .span-date,
  .span-score {
    margin-left: 1.5rem;
  }
  .dashboard {
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 380px;
  }
  .left-side {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  .right-side {
    display: none;
  }
}
</style>
