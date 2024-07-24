<script setup>
import LoginForm from '../components/LoginForm.vue'
import { watch, ref } from 'vue'
import { useUsersStore } from '@/stores/User'
import { useRouter } from 'vue-router'

const usersStore = useUsersStore()
const router = useRouter()
const show = ref(true)

function Logout() {
  usersStore.isLoggedIn = false
  router.push({ path: '/' })
  usersStore.avatar = 'Avatar_N.png'
  show.value = false
}

watch(
  () => usersStore.isLoggedIn,
  () => {
    router.push({ path: '/' })
  }
)
</script>

<template>
  <div class="Login">
    <h1>LOGIN</h1>
    <button @click="Logout" class="button-main" v-show="show">Log out</button>
    <LoginForm />
  </div>
</template>
<style scoped>
.Login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.button-main {
  margin-bottom: 2rem;
}
</style>
