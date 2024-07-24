<script setup>
import { ref, watch, defineEmits } from 'vue'
import { useUsersStore } from '@/stores/User'
//import { useQuizStore } from '@/stores/Quiz'
const usersStore = useUsersStore()
const results = ref(usersStore.getRESOULTS())

const UserResults = ref([])
const UserQuizes = ref(null)
const loaded = ref(false)
const Quizes = ref()
const pros = ref(0)
const OthersResults = ref([])
const OtherQuzes = ref([])
const UserId = usersStore.getUserId()
const isAdm = usersStore.isAdmin
const OthersPanel = ref(false)
const emit = defineEmits(['score'])
const peek = ref(false)
const see = ref(false)

function getOthersResults() {
  /* let rezultatiLokal = JSON.parse(localStorage.getItem('AllResults'))
  if (rezultatiLokal == null) {
    rezultatiLokal = results.value
  } */
  OtherQuzes.value = []

  for (let result of OthersResults.value) {
    const someOtherUsers = []
    const otherUser = {}
    otherUser.id = result.id
    otherUser.nickname = result.nickname
    let resNo = 0
    let subScr = 0
    for (let quizes of result.quizes) {
      resNo++
      subScr += quizes.score
      someOtherUsers.push(quizes.score.length)
    }
    otherUser.No = resNo
    otherUser.pros = subScr / resNo
    OtherQuzes.value.push(otherUser)
  }
  peek.value = !peek.value
}

function getResultsFromData() {
  let rezultatiLokal = JSON.parse(localStorage.getItem('AllResults'))
  if (rezultatiLokal == null) {
    rezultatiLokal = results.value
  }
  let forMediana = 0
  for (let result of rezultatiLokal) {
    if (result.id === UserId.value) {
      UserResults.value.push(result)
      UserQuizes.value = result.quizes
      for (let quiz in UserQuizes.value) {
        const score = UserQuizes.value[quiz].score
        forMediana += score
      }
      forMediana = forMediana / UserQuizes.value.length
      pros.value = forMediana
      Quizes.value = UserQuizes.value.length
    } else {
      OthersResults.value.push(result)
    }
  }

  emit('score', pros.value)
  OthersPanel.value = true
  loaded.value = true
  see.value = true
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
      <div class="userboard">
        <h1>Hi {{ usersStore.UserName }}</h1>
        <h2>Welcome back !</h2>
        <br />
        <p>Let's see how you've progressed :</p>
        <button class="button-main" @click="getResultsFromData" v-show="!loaded">
          Let's take a look !
        </button>
        <button class="button-main" @click="see = !see" v-show="loaded">
          {{ see ? ' Hide !' : " Let's take a look !" }}
        </button>
        <span v-show="see"> You take {{ Quizes != null ? Quizes : '0' }} quizes</span>
        <br />
      </div>
    </div>
    <div class="dashboard" v-show="see">
      <div v-show="UserQuizes === null">
        <div>
          <h3>{{ usersStore.UserName }}!</h3>
          <p>
            You haven't completed any Quiz yet! No Problem. Try to do some, then come back and see
            what's new. Good luck !
          </p>
        </div>
      </div>
      <div class="bars" v-for="results of UserQuizes" :key="results.no">
        <span class="span-score">{{ results.score }} % </span>
        <span class="span-date">Taken: {{ results.date }} </span>
        <div class="bar">
          <div class="fill" :style="{ width: results.score + '%' }"></div>
        </div>
      </div>
      <br />
    </div>
    <div class="othersboard" v-if="isAdm && OthersPanel">
      <div>
        <button class="button-main" @click="getOthersResults">
          {{ peek ? ' Hide !' : ' Peek !' }}
        </button>
        <span> How others are doing ???</span>
      </div>

      <div>
        <div class="othersResults" v-show="peek">
          <div v-for="other of OtherQuzes" :key="other.id">
            <span class="therm">User: {{ other.nickname }}</span>
            <span class="therm">Quizes: {{ other.No }}</span>
            <span class="therm">Pros: {{ other.pros.toFixed(0) }} %</span>
            <span class="therm"
              ><div class="outlin">
                <div class="lin" :style="{ width: other.pros + '%' }"></div></div
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.othersResults {
  display: flex;
  flex-direction: column;
}
.therm {
  margin: 0 1rem;
}
.outlin {
  height: 8px;
  width: 250px;
  border: 2px solid grey;
  border-radius: 10px;
}
.lin {
  height: 100%;
  background-color: rgb(236, 184, 136);
}
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
.userboard {
  width: 50%;
}
.othersboard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;

  border: 3px solid var(--color-border);
  border-radius: 1rem;
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
  .userboard {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  .othersboard {
    display: flex;
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
  .userboard {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
}
</style>
