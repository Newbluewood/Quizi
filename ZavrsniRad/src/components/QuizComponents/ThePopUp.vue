<script setup>
const show = Boolean
</script>

<template>
  <Transition name="popup">
    <div class="popup-mask" v-if="show">
      <div class="popup-container">
        <div class="popup-header">
          <slot name="header"></slot>
        </div>

        <div class="popup-body">
          <slot name="body">Your Quiz wizard !</slot>
        </div>

        <div class="popup-footer">
          <slot name="footer">
            API
            <button class="popup-default-button" @click="$emit('closep')">OK</button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.popup-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: opacity 0.3s ease;
}

.popup-container {
  width: 400px;
  margin: auto;
  padding: 20px 30px;
  background-color: var(--color-background);
  /* border: 2px solid var(--color-border-hover);*/
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 1s ease;
  animation: popup 0.2s ease-in-out 3 forwards;
}

.popup-header h3 {
  margin-top: 0;
  color: #000000;
}

.popup-body {
  margin: 20px 0;
}

.popup-default-button {
  float: right;
  padding: 3px 6px;
  border: 2px solid var(--color-border-hover);
  border-radius: 5px;
  background-color: var(--color-background-soft);
  color: rgb(0, 0, 0);
  z-index: 20;
  padding-left: 5px;
  margin-left: 10px;
  cursor: pointer;
}

.popup-default-button:hover {
  background-color: rgba(135, 134, 134, 0.8);
}
.popup-enter-from {
  opacity: 0;
}

.popup-leave-to {
  opacity: 0;
}

.popup-enter-from .popup-container,
.popup-leave-to .popup-container {
  transform: opacity(0);
  transform: opacity(0);
}
@keyframes popup {
  0% {
    transform: rotate(-15deg);
  }
  33% {
    transform: rotate(-0deg);
  }
  66% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(-0deg);
  }
}
</style>
