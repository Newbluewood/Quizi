<script setup>
/*const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
    const mediaQuery = prefersLightTheme ? '(prefers-color-scheme: light)' : '(prefers-color-scheme: dark)';
    const styleSheet = document.styleSheets[0]; // Pretpostavka da je prvi stilski list vašeg dokumenta*/

import { ref, watch } from 'vue'

const buttons = [
  { id: 'play', ico: 'icon-play', visible: ref(true) },
  { id: 'pause', ico: 'icon-pause', visible: ref(false) },
  { id: 'stop', ico: 'icon-stop', visible: ref(true) },
  { id: 'prew', ico: 'icon-left-open', visible: ref(true) },
  { id: 'rew', ico: 'icon-rewind', visible: ref(true) },
  { id: 'forw', ico: 'icon-fast-fw', visible: ref(true) },
  { id: 'next', ico: 'icon-right-open', visible: ref(true) }
]

const tracks = [
  /* { "id": 0, "artist":"none", "track": "None", "track_url": "../src/assets/audioTracks/badass.mp3", "cover":"../src/assets/covers/Cover10.jpg" },*/
  {
    id: 0,
    artist: 'Benjamin Tissot',
    track: 'Badas',
    track_url: '../src/assets/audioTracks/badass.mp3',
    cover: '../src/assets/covers/Cover1.jpg'
  },
  {
    id: 1,
    artist: 'Benjamin Tissot',
    track: 'Dance',
    track_url: '../src/assets/audioTracks/dance.mp3',
    cover: '../src/assets/covers/Cover2.jpg'
  },
  {
    id: 2,
    artist: 'Benjamin Tissot',
    track: 'Downtown',
    track_url: '../src/assets/audioTracks/downtown.mp3',
    cover: '../src/assets/covers/Cover3.jpg'
  },
  {
    id: 3,
    artist: 'Benjamin Tissot',
    track: 'Dub Step',
    track_url: '../src/assets/audioTracks/dubstep.mp3',
    cover: '../src/assets/covers/Cover4.jpg'
  },
  {
    id: 4,
    artist: 'Benjamin Tissot',
    track: 'Extreme Action',
    track_url: '../src/assets/audioTracks/extremeaction.mp3',
    cover: '../src/assets/covers/Cover6.jpg'
  },
  {
    id: 5,
    artist: 'Benjamin Tissot',
    track: 'Funky Suspense',
    track_url: '../src/assets/audioTracks/funkysuspense.mp3',
    cover: '../src/assets/covers/Cover7.jpg'
  },
  {
    id: 6,
    artist: 'Benjamin Tissot',
    track: 'High Octane',
    track_url: '../src/assets/audioTracks/highoctane.mp3',
    cover: '../src/assets/covers/Cover8.jpg'
  },
  {
    id: 7,
    artist: 'Benjamin Tissot',
    track: 'Moose',
    track_url: '../src/assets/audioTracks/moose.mp3',
    cover: '../src/assets/covers/Cover9.jpg'
  }
]

let totalTrackTime = ref('00:00')
let curentTrackTime = ref('00:00')
let volume = ref(60)
let progresLine = ref(0)
let isPaused = ref(false)
let trackId = ref(0)
let warn = ref('PAUSED !')
let currentTrack = new Audio(tracks[trackId.value].track_url)

addEventListener('DOMContentLoaded', () => {
  changeTrack(trackId.value)
})
let showCover = ref(false)
let showList = ref(false)
let minimizer = ref(true)
let isMuted = ref(false)

function convertSecounds(seconds) {
  let sekunde = Math.round(seconds) % 60
  let minuti = Math.floor(seconds / 60) % 60

  let vreme = (minuti < 10 ? '0' + minuti : minuti) + ':' + (sekunde < 10 ? '0' + sekunde : sekunde)
  return vreme
}

function changeTrack(id) {
  trackId.value = id
  playControls('stop')
  progresLine.value = 0
  currentTrack = new Audio(tracks[id].track_url)
  ////playControls("play")

  watch(
    () => volume.value,
    () => {
      if (!isMuted.value) {
        sessionStorage.setItem('volume', volume.value / 100)
      }
      currentTrack.volume = volume.value / 100
    }
  )

  currentTrack.addEventListener('loadedmetadata', () => {
    const rawTrackTime = currentTrack.duration
    totalTrackTime.value = convertSecounds(rawTrackTime)
  })

  currentTrack.addEventListener('timeupdate', () => {
    let rawTrackTime = 0
    rawTrackTime = currentTrack.currentTime
    curentTrackTime.value = convertSecounds(rawTrackTime)
    progresLine.value = ((currentTrack.currentTime / currentTrack.duration) * 100).toFixed(2) + '%'
    if (currentTrack.currentTime == currentTrack.duration && trackId.value < tracks.length - 1) {
      playControls('stop')
      trackId.value++
      changeTrack(trackId.value)
      playControls('play')
    }
  })
}

function switchPlayButton(isPlay) {
  if (isPlay) {
    buttons[0].visible.value = false
    buttons[1].visible.value = true
    currentTrack.play()
    currentTrack.volume = sessionStorage.getItem('volume')
    isPaused.value = false
  } else {
    buttons[0].visible.value = true
    buttons[1].visible.value = false
    currentTrack.pause()
  }
}

function progresSet(event) {
  console.log('event-k: ', ((event.x - 15) / event.target.getBoundingClientRect().width).toFixed(2))
  console.log('e.target: ', event.layerX, event.target.getBoundingClientRect().width)
  progresLine.value =
    ((event.layerX / event.target.getBoundingClientRect().width) * 100).toFixed(2) + '%'
  currentTrack.currentTime =
    currentTrack.duration * (event.layerX / event.target.getBoundingClientRect().width)
}

function playControls(id) {
  switch (id) {
    case 'play': {
      switchPlayButton(true)
      break
    }
    case 'pause': {
      switchPlayButton(false)
      isPaused.value = true
      break
    }
    case 'stop': {
      switchPlayButton(false)
      isPaused.value = false
      currentTrack.currentTime = 0
      break
    }
    case 'forw': {
      currentTrack.currentTime + 5 > currentTrack.duration
        ? (switchPlayButton(false), (currentTrack.currentTime = 0))
        : (currentTrack.currentTime += 5)
      break
    }
    case 'rew': {
      currentTrack.currentTime < 5
        ? (switchPlayButton(false), (currentTrack.currentTime = 0))
        : (currentTrack.currentTime -= 5)
      break
    }
    case 'prew': {
      if (trackId.value >= 1) {
        changeTrack(trackId.value - 1)
      }
      break
    }
    case 'next': {
      if (trackId.value < tracks.length - 1) {
        changeTrack(trackId.value + 1)
      } else {
        isPaused.value = false
        currentTrack.currentTime = 0
      }
      break
    }
  }
  //console.log("event: ", id)
  //console.log("track.length: ", tracks.length, trackId.value )
  if (currentTrack.currentTime == currentTrack.duration) {
    warn.value = 'End of list'
    // changeTrack(0)
  }
}

function toggleList() {
  showList.value = !showList.value
  showCover.value = false
}
function toggleCover() {
  showCover.value = !showCover.value
  showList.value = false
}
function minimize() {
  showCover.value = false
  showList.value = false
  minimizer.value = !minimizer.value
}
function switchMute() {
  if (!isMuted.value) {
    currentTrack.volume = 0
    volume.value = 0
  } else {
    currentTrack.volume = sessionStorage.getItem('volume')
    volume.value = sessionStorage.getItem('volume') * 100
  }
  isMuted.value = !isMuted.value
}
</script>

<template>
  <div class="AudioPlayer-Wrapper">
    <div class="Phead">
      <div class="minimizer" @click="toggleCover">
        <i class="icon-globe"></i>
      </div>
      <div class="minimizer" @click="(e) => toggleList(e)">
        <i class="icon-list-bullet"></i>
      </div>
      <div class="minimizer" @click="$emit('close')">
        <i class="icon-cancel"></i>
      </div>
      <div class="minimizer" @click="minimize">
        <i class="icon-left-open"></i>
      </div>
    </div>

    <div class="cover" v-show="showCover">
      <Transition name="blinks">
        <img
          :src="tracks[trackId].cover"
          alt="placehold"
          width="260px"
          height="260px"
          v-if="true"
        />
      </Transition>
    </div>

    <div class="curently-play-info" v-show="minimizer">
      <div class="status">
        <Transition name="blinks">
          <div v-if="!isPaused">Curently :</div>
        </Transition>
        <Transition name="blinks">
          <div v-if="isPaused">{{ warn }}</div>
        </Transition>
      </div>
      <div class="curently-play-track-info">
        {{ tracks[trackId].artist }} - - <i>{{ tracks[trackId].track }}</i>
      </div>
    </div>

    <div class="progres_bar" @click="progresSet" v-show="minimizer">
      <div class="progres-activator"></div>
      <div class="progres_line" :style="{ width: progresLine }"></div>
    </div>
    <div class="time-and-volume">
      <div class="progres_time">
        <span class="curent_time">{{ curentTrackTime }}</span> /
        <span class="total_time">{{ totalTrackTime }}</span>
      </div>
      <div class="volume" style="position: relative">
        <i class="icon-sound" @click="switchMute"></i>
        <i
          class="icon-cancel"
          style="position: absolute; left: 0; color: grey"
          @click="switchMute"
          v-show="isMuted"
        ></i>
        <input type="range" id="volume-bar" min="0" max="100" v-model="volume" />
      </div>
    </div>
    <div class="controls">
      <button
        @click="playControls(button.id)"
        v-for="button of buttons"
        :key="button.id"
        v-show="button.visible.value"
        class="player_button"
        :id="button.id"
      >
        <i :class="button.ico"></i>
      </button>
      <audio muted></audio>
    </div>

    <div class="playlist">
      <div
        v-show="showList"
        @click="changeTrack(track.id)"
        class="track_list"
        :class="{ isActive: trackId == track.id }"
        v-for="track of tracks"
        :key="track.id"
      >
        <b class="artist"> - {{ track.artist }}</b> <i class="track_name"> - - {{ track.track }}</i>
      </div>
    </div>
  </div>
</template>

<style>
.AudioPlayer-Wrapper {
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid rgba(239, 158, 7, 0.5);
  padding: 0.5rem;
  background-color: var(--color-background);
}
.controls {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
}
.cover {
  padding: 1rem;
  opacity: 1;
}
.controls_button {
  background-color: transparent;
  outline: none;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 1rem;
  color: var(--color-text);
  padding: 5px;
  color: rgba(139, 148, 148, 0.6);
}
.curently-play-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin-bottom: 1rem;
  color: rgba(141, 201, 201, 0.7);
  position: relative;
}
.Phead {
  display: flex;
  flex-direction: row;
}
.playlist {
  border: 1px solid grey;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  cursor: pointer;
}
.progres_time {
  margin: 0.5rem 2rem;
}
.icon-list-bullet {
  font-size: 1.3rem;
  color: rgba(139, 148, 148, 0.6);
  border: 1px solid rgba(151, 151, 151, 0.35);
  border-radius: 0.3rem;
  cursor: pointer;
}
.minimizer {
  font-size: 1.3rem;
  color: rgba(139, 148, 148, 0.6);
  border: 1px solid rgba(151, 151, 151, 0.35);
  border-radius: 0.3rem;
  cursor: pointer;
  margin-right: 0.5rem;
}

.progres-activator {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 999;
}
.progres_bar {
  border: 1px solid grey;
  width: 100%;
  height: 1.5rem;
  overflow: hidden;
  position: relative;
  z-index: 10;
}
.progres_line {
  background: rgba(92, 95, 95, 0.6);
  background-color: rgba(68, 46, 3, 0.9);
  height: 1.4rem;
  width: 0;
  position: absolute;
  z-index: -10px;
}
.status div {
  position: absolute;
  left: 0;
  top: -1.1rem;
  margin: 0;
  padding: 0;
  color: var(--color-text);
}
.time-and-volume {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.track_list {
  width: 95%;
  margin: 2px;
}
.track_list.isActive {
  color: rgb(79, 193, 193);
}
.track_list:nth-child(2n + 1) {
  width: 99%;
  background-color: rgba(92, 95, 95, 0.2);
  margin: 2px;
}

.show-enter-active,
.show-leave-active {
  transition: opacity 0.5s ease;
}
.show-enter-from,
.show-leave-to {
  opacity: 0;
}

.blinks-enter-active,
.blinks-leave-active {
  transition: opacity 1s ease-in-out;
  /*animation-name: blink;
        animation-duration: 2s;*/
}
.blinks-enter-from,
.blinks-leave-to {
  opacity: 0;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 0.4;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 0.4;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
</style>
