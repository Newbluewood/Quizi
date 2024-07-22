<script setup>
import { useUsersStore } from '@/stores/User'
import TheHero from '../components/TheHero.vue'
const users = useUsersStore()
</script>

<template>
  <div class="Home">
    <h1>HOME</h1>
    <TheHero />
    <div class="wrapper isrow">
      <div class="box usual">
        <div>
          <h1><RouterLink to="/quiz" class="box usual">Quiz</RouterLink></h1>
        </div>
      </div>
      <div v-if="users.isLoggedIn" class="box isLogged">
        <div>
          <h1><RouterLink to="/board" class="box usual">Board</RouterLink></h1>
        </div>
      </div>
      <div class="box usual">
        <div>
          <h1><RouterLink to="/about" class="box usual">About</RouterLink></h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80vh;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 12vh;
  border: 2px solid darkgrey;
  border-radius: 1rem;
  box-shadow: 5px 5px 10px rgb(100, 100, 100);
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
}

@media (min-width: 1024px) {
}
@media (min-width: 740px) {
  .box {
    margin: 5rem;
  }
}
@media (min-width: 740px) {
  .box {
    width: 20vw;
    height: 25vh;
  }
  .wrapper {
    align-items: center;
  }
  .isrow {
    flex-direction: row;
  }
}
@media (max-width: 380px) {
}
</style>
