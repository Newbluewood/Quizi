<script setup></script>

<template>
  <div class="info">
    <AppLink to="/" class="logolink"
      ><img src="/public/data/Quiz_logo.png" alt="QuizLlogo" width="50px" class="logo" /> </AppLink
    ><b> QUIZ</b>i
  </div>
</template>

<style scoped>
.info {
  font-size: 30px;
  font-weight: 600;
  border: 2px solid rgba(151, 151, 151, 0.2);
  border-radius: 1rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: start;
}
.logo {
  background-color: transparent;
}
.logolink {
  background-color: transparent;
}
.router-link-active,
.a:hover {
  border-radius: 2rem;
  background-color: transparent;
  color: var(--color-background-soft);
  font-weight: 500;
}
</style>
