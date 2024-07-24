<script setup>
import { watch, ref } from 'vue'
import { useUsersStore } from '../stores/User'
import { useRouter } from 'vue-router'
import LoginForm from './LoginForm.vue'

const router = useRouter()
const usersStore = useUsersStore()
const show = ref(false)

function toggleShow() {
  show.value = !show.value
}

function Logout() {
  usersStore.isLoggedIn = false
  router.push({ path: '/' })
  usersStore.avatar = 'Avatar_N.png'
}

watch(
  () => usersStore.isLoggedIn,
  () => {
    router.push({ path: '/' })
    show.value = false
  }
)
</script>

<template>
  <div class="wrapper">
    <div class="loginBoard" @click="toggleShow">
      <h3>{{ usersStore.UserName }}</h3>
      <span>
        <img
          v-bind:src="'../data/' + usersStore.avatar"
          alt="avatar"
          width="55px"
          style="margin: 0 5px"
        />
      </span>
    </div>
    <div class="showPanel" v-show="show">
      <LoginForm />
      <div>
        <button class="button-main" @click="Logout">Log out</button>
        <button class="button-main icon-cancel" @click="toggleShow">Close</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loginBoard {
  font-size: 24px;
  border: 2px solid rgba(151, 151, 151, 0.2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  caret-color: transparent;
  width: fit-content;
  margin-left: 8rem;
}
.showPanel {
  margin-top: 1rem;
  border: 2px solid rgba(151, 151, 151, 0.2);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  padding: 1rem;

  background-color: var(--color-background-soft);
}
span {
  padding: 0 0rem;
}
.wrapper {
  display: flex;
  flex-direction: column;
}
h3 {
  padding: 0 0.5rem;
}
</style>
