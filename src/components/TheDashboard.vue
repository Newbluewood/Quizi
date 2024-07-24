<script setup>
import { ref } from 'vue'
import UserResult from '../components/UserResults.vue'

const sirina = ref(0)

function fillBar(prop) {
  let i = 0
  let interval = setInterval(function () {
    if (i < prop) {
      sirina.value = i + 2
      i += 2
    } else {
      clearInterval(interval)
    }
  }, 20)
}
</script>
<template>
  <div class="Dashboard">
    <span> - Average - </span><span class="points">{{ sirina.toFixed(0) }} %</span>
    <div class="bar">
      <div class="progres" :style="{ width: sirina + '%' }"></div>
    </div>
    <UserResult @score="fillBar" />
  </div>
</template>
<style scoped>
.bar {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 800px;
  height: 2rem;
  border: 4px solid grey;
  border-radius: 1rem;
  overflow: hidden;
}
.progres {
  background-color: aqua;
  width: 0;
  height: 100%;
  border-radius: 1rem 0 0 1rem;
}
.points {
  color: aqua;
  font-size: 1.5rem;
}
@media (min-width: 381px) and (max-width: 739px) {
  .Dashboard {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 380px;
  }
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 380px;
  }
  .dashboard {
    width: 500px;
  }
  .bar {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 500px;
    height: 2rem;
    border: 4px solid grey;
    border-radius: 1rem;
    overflow: hidden;
  }
  .progres {
    background-color: aqua;
    width: 0;
    height: 100%;
    border-radius: 1rem 0 0 1rem;
  }
  .points {
    color: aqua;
    font-size: 1.5rem;
  }
}

@media (max-width: 380px) {
  .Dashboard {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 380px;
  }
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 380px;
  }
  .dashboard {
    width: 380px;
  }
  .bar {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 330px;
    height: 2rem;
    border: 2px solid grey;
    border-radius: 1rem;
    overflow: hidden;
  }
  .progres {
    background-color: aqua;
    width: 0;
    height: 100%;
    border-radius: 1rem 0 0 1rem;
  }
  .points {
    color: aqua;
    font-size: 1.5rem;
  }
}
</style>
