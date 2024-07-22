<script setup>
const show = Boolean
const prop1 = false
const prop2 = true
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>

        <div class="modal-body">
          <slot name="body">Your Quiz wizard !</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            API
            <button class="modal-default-button" @click="$emit('closew', prop1)">
              No. Resume.
            </button>
            <button class="modal-default-button" @click="$emit('closew', prop2)">Yes</button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-background-soft);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 400px;
  margin: auto;
  padding: 20px 30px;
  background-color: var(--color-background);
  /* border: 2px solid var(--color-border-hover);*/
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #000000;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  padding: 3px 6px;
  border: 2px solid var(--color-border-hover);
  border-radius: 5px;
  background-color: rgba(193, 193, 193, 0.8);
  color: rgb(0, 0, 0);
  z-index: 20;
  padding-left: 5px;
  margin-left: 10px;
  cursor: pointer;
}

.modal-default-button:hover {
  background-color: rgba(135, 134, 134, 0.8);
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.5);
  transform: scale(1.5);
}
</style>
