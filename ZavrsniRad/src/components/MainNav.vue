<script setup>
import { ref } from 'vue'
import AppLink from './AppLink.vue'
const IsVisible = ref(false)

function hideNawbar() {
  IsVisible.value = !IsVisible.value
}
</script>

<template>
  <div class="navWrapper">
    <div class="navBurger icon-th-list" @click="hideNawbar()" v-show="!IsVisible"></div>
    <div class="navBurger icon-cancel" @click="hideNawbar()" v-show="IsVisible"></div>
    <div class="nav mobile" v-show="IsVisible">
      <AppLink to="/">Home</AppLink>
      <AppLink to="/about">About</AppLink>
      <AppLink to="/quiz">Quiz</AppLink>
      <AppLink to="/board">Board</AppLink>
      <AppLink to="https://quizapi.io/api-config">API</AppLink>
      <div class="dots">. . .</div>
      <AppLink to="/Login">Login</AppLink>
    </div>
    <div class="nav wide">
      <AppLink to="/">Home</AppLink>
      <AppLink to="/about">About</AppLink>
      <AppLink to="/quiz">Quiz</AppLink>
      <AppLink to="/board">Board</AppLink>
      <AppLink to="https://quizapi.io/api-config">API</AppLink>
      <div class="dots">. . .</div>
      <AppLink to="/Login">Login</AppLink>
    </div>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0.8rem 1rem;
}
.nav > a {
  border: 1px solid black;
  padding: 0.4rem 2rem;
  text-align: center;
  margin: 2px;
  width: 100%;
  font-size: larger;
}
.navBurger {
  font-size: 1.5rem;
  padding: 0 0.5rem;
}
@media (min-width: 1024px) {
}
@media (min-width: 741px) {
  .navBurger {
    display: none;
  }
  .nav {
    justify-content: space-around;
    flex-direction: row;
    border: none;
    padding: 0;
    width: 200px;
  }
  .nav > a {
    font-size: 1.5rem;

    border: none;
  }
  .nav.mobile {
    display: none;
  }
  .navWrapper {
    display: flex;
    align-items: center;
  }
  .dots {
    display: none;
  }
}
@media (max-width: 740px) {
  .nav.wide {
    display: none;
  }
}
@media (max-width: 380px) {
  .nav.wide {
    display: none;
  }
}
</style>
