<script setup>
import { ref } from "vue";
const message1 = " Hello !";
const message2 = " Wellcome, and enjoy the Quiz...";
const alfa = ref("");
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    ispisSlova(message1);
  }, 500);

  alfa.value = "";

  let a = 0;
  let interval = setInterval(function () {
    if (a < 5) {
      setTimeout(() => {
        ispisSlova(message2);
      }, 500);
      alfa.value = "";
    } else {
      clearInterval(interval);
    }
    a++;
  }, 10000);
});

function ispisSlova(message) {
  const tekst = message;
  let i = 0;

  let interval = setInterval(function () {
    if (i < tekst.length) {
      alfa.value += tekst.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 50);
}
</script>
<template>
  <div class="Hero">
    <div class="DivText">
      <span class="SpanText">{{ alfa }}</span>
    </div>
  </div>
</template>
<style scoped>
.DivText {
  width: 80vw;
  height: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}
.SpanText {
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 30px;
}
</style>
