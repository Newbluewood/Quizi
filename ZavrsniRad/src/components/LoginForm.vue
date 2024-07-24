<script setup>
import { ref, computed, watch } from "vue";
import { useUsersStore } from "@/stores/User";
import { useQuizStore } from "@/stores/Quiz";
import { useRouter } from "vue-router";

const usersStore = useUsersStore();
const quizState = useQuizStore();
const router = useRouter();

const username = ref("");
const password = ref("");
const message = ref("");

const trimUsername = computed(() => username.value.trim());
const trimPassword = computed(() => password.value.trim());

watch(
  () => usersStore.isLoggedIn,
  () => {
    if (usersStore.isLoggedIn === false) {
      usersStore.UserName = "Log in";
      usersStore.UserId = 0;
      quizState.getOut();
    } else {
      router.push({ path: "/board" });
      message.value = "";
      quizState.getOut();
    }
  }
);
watch(
  () => usersStore.msg,
  () => {
    if (usersStore.isLoggedIn === false) {
      message.value = usersStore.msg;
      setTimeout(() => {
        usersStore.msg = "";
      }, 1500);
    } else {
      message.value = "";
    }
  }
);

function logs() {
  usersStore.isLoggedIn = false;
  usersStore.checkUserData(trimUsername.value, trimPassword.value);
}
</script>

<template>
  <div>
    <div class="login">
      <form action="" class="form" @submit.prevent="logs">
        <span>{{ message }}</span>
        <h3>Log in</h3>
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          class="input"
          v-model="username"
          placeholder="enter username"
        />
        <label for="password">Ppassword</label>
        <input
          type="password"
          name="password"
          class="input"
          v-model="password"
          placeholder="*******"
        />
        <button class="button-main" v-show="!usersStore.isLoggedIn">
          Log in
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login {
  font-size: 24px;
  border: 2px solid rgba(151, 151, 151, 0.2);
  border-radius: 1rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  caret-color: transparent;
  padding-right: 1rem;
  background-color: var(--color-background-soft);
  margin-bottom: 1rem;
}
.form,
.login {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 40px;
  width: fit-content;
  padding: 1rem;
}
.input,
label {
  font-size: 16px;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    sans-serif;
  border: 2px solid rgba(151, 151, 151, 0.2);
  border-radius: 1rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  caret-color: transparent;
  padding-right: 1rem;
  margin-bottom: 0.5rem;
}
span {
  padding: 5px;
  border: 1px solid var(--color-background-smute);
  border-radius: 1rem;
  text-align: center;
  width: 70%;
  font-size: 15px;
  color: brown;
}
h3 {
  margin-bottom: 1rem;
}
</style>
