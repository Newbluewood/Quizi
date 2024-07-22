<script setup>
import { useUsersStore } from '@/stores/User'
import { useRouter } from 'vue-router'
import TheDashboard from '../components/TheDashboard.vue'

const router = useRouter()
const users = useUsersStore()

function Logout() {
  users.logout()
  router.push({ path: '/' })
  users.avatar = 'Avatar_N.png'
}
</script>

<template>
  <div class="Test">
    <h1>BOARD PAGE</h1>
    <button @click="Logout" class="button-main">Log out</button>
    <TheDashboard />
  </div>
</template>
<style scoped>
.Test {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>
