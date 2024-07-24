<script setup>
//import { ref } from 'vue'
import { ref } from 'vue'
import { RouterView } from 'vue-router'

import SwitchButton from '../src/components/SwitchButton.vue'
import MainNav from '../src/components/MainNav.vue'
import AudioPlayer from './components/Audio.player/AudioPlayer.vue'
import LoginBoard from './components/LoginBoard.vue'
import Info from './components/InfoW.vue'

const isVisible = ref(false)

function toggleShow() {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <div class="wrapper0" id="top">
    <div class="public">
      <div class="gitH link">
        <AppLink to="https://github.com/newbluewood"
          >Github <img src="./assets/GitHub.png" alt="Github" width="40px"
        /></AppLink>
      </div>
      <div class="LinkedIn link">
        <AppLink to="https://www.linkedin.com/in/nebojsa-simovic-68258612/?originalSubdomain=rs"
          >LinkedIn <img src="./assets/Linkedin.png" alt="LinkedIn" width="40px"
        /></AppLink>
      </div>
      <div class="LinkedIn link">
        <AppLink to="https://www.instagram.com/newbluewood/"
          >Instagram <img src="./assets/Insta.png" alt="Github" width="40px"
        /></AppLink>
      </div>
    </div>
  </div>
  <div class="App">
    <div class="info">
      <info />
    </div>
    <div class="LoginBoard">
      <LoginBoard />
    </div>
    <header class="header">
      <div class="logo"></div>
      <div class="switchButton">
        <SwitchButton />
      </div>
    </header>

    <nav>
      <MainNav />
    </nav>

    <div class="wrapper2">
      <RouterView v-slot="{ Component }">
        <Transition name="slide" mode="out-in">
          <KeepAlive exclude="BoardView">
            <component :is="Component" :key="$route.path"></component>
          </KeepAlive>
        </Transition>
      </RouterView>
    </div>
    <div class="backtotop"><a href="#top" class="icon-left-open-1 arrow"></a></div>
  </div>

  <div class="AudioPlayer">
    <button @click="toggleShow" class="button-main showAP icon-music" v-show="!isVisible">
      Show Player
    </button>
    <div class="playerWrapper" v-show="isVisible">
      <AudioPlayer @close="toggleShow" />
    </div>
  </div>
</template>

<style scoped>
.public {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 1rem;
  z-index: 100;
  transform: scale(0.8);
}
img {
  border-radius: 2rem;
}
.link {
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
}
.router-link-active,
.a:hover {
  border-radius: 2rem;
  background-color: transparent;
  color: var(--color-background-soft);
  font-weight: 500;
}
.App {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
}
.info {
  position: fixed;
  top: 5px;
  left: 0px;
  width: 12rem;
  height: 4.5rem;
  z-index: 9999;
}
a:hover {
  background-color: transparent;
  border-radius: 2rem;
}
.backtotop,
.arrow {
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 4px solid var(--color-border);
  border-radius: 99rem;
  position: fixed;
  right: 25px;
  bottom: 15px;
  cursor: pointer;
  font-size: 20px;
  z-index: 9998;
}
.arrow:hover {
  transform: rotate(90deg);
  transition: all 0.5 s;
}
.LoginBoard {
  position: fixed;
  top: 6px;
  right: 10px;
  z-index: 9999;
}
.showAP {
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 300;
}
.playerWrapper {
  background-color: black;
  width: 350px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 150;
}
.logo {
  padding: 0.25rem 1rem;
}
.switchButton {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 1rem;
}

header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  line-height: 1.5;
  background-color: rgba(193, 181, 163, 0.936);
  width: 100%;
  height: 4vh;
  z-index: 50;
}
i {
  color: var(--color-text);
}
nav {
  width: 100%;
  background-color: var(--color-background-mute);
  z-index: 10;
}

.themeButton {
  display: flex;
  align-items: center;
  z-index: 9998;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper0 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(193, 181, 163, 0.743);
  width: 100%;
  height: 8vh;
}
.wrapper1 {
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(91, 92, 91, 0.38);
  background-color: rgba(255, 255, 255, 0.178);
  width: 100%;
  height: 5vh;
}
.wrapper2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /*border: 1px solid rgba(51, 51, 51, 0.277);*/
  height: 70vh;
  width: 100%;
}

@media (min-width: 1024px) {
  .info {
    top: 5px;
    left: 240px;
    width: 12rem;
    height: 4.5rem;
    z-index: 500;
  }
  .LoginBoard {
    position: fixed;
    top: 6px;
    right: 240px;
    z-index: 500;
  }
}
@media (max-width: 740px) {
  .public {
    top: 40px;
    transform: scale(0.8);
    z-index: 300;
  }
  header {
    position: sticky;
    top: 5px;
  }
  nav {
    position: sticky;
    top: 65px;
  }
}
@media (min-width: 740px) {
  header {
    position: sticky;
    top: 5px;
  }
  nav {
    position: sticky;
    top: 65px;
  }
}
@media (max-width: 380px) {
  .info {
    transform: scale(0.9);
    top: 0px;
    left: -10px;
  }
  .LoginBoard {
    transform: scale(0.9);
    right: -20px;
    top: 0px;
  }
  .showAP {
    left: 100px;
  }
  .public {
    top: 20px;
    transform: scale(0.5);
    z-index: 300;
    left: -60px;
  }
  header {
    position: sticky;
    top: 5px;
  }
  nav {
    position: sticky;
    top: 65px;
  }
}
.slide-default-button:hover {
  background-color: rgba(135, 134, 134, 0.8);
}

.slide-leave-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
