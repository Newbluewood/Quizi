<script setup>
import LoginForm from '../components/LoginForm.vue'
</script>

<template>
  <div class="Login">
    <h1>LOGIN</h1>
    <LoginForm />
  </div>
</template>
<style scoped>
.Login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>
