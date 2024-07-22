<script setup>
import { ref } from 'vue'

let isDark = ref(false)

function switchButon() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.querySelector(':root').classList.add('dark')
  } else {
    document.querySelector(':root').classList.remove('dark')
  }
}
</script>

<template>
  <i class="icons icon-sun"></i>
  <div class="SwitchButton" @click="switchButon()">
    <div class="circle" :class="{ isOn: isDark }"></div>
  </div>
  <i class="icons icon-moon"></i>
</template>

<style scoped>
.SwitchButton {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin: 0.1rem;
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  height: 1rem;
  width: 2.2rem;
  background-color: var(--color-background-mute);
  position: relative;
}
.icons {
  font-size: 1.2rem;
}
.circle {
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  height: 1.2rem;
  width: 1.2rem;
  background-color: var(--color-text);
  position: absolute;
  left: -0.1rem;
  transition: left 0.2s ease-in-out;
}
.circle.isOn {
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  height: 1.2rem;
  width: 1.2rem;
  background-color: var(--color-text);
  position: absolute;
  left: 1rem;
  transition: left 0.2s ease-in-out;
}
</style>
