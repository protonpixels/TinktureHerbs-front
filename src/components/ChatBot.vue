<template>
  <div class="chatbot">
    <button class="toggle" @click="open = !open" aria-label="Open help chat">
      {{ open ? '×' : '?' }}
    </button>
    <div v-if="open" class="panel">
      <h4>Product questions?</h4>
      <p class="note">
        I can help with ingredients, shipping, and orders. For health questions, please consult your
        doctor.
      </p>
      <a href="mailto:hello@tinktureherbs.com" class="btn-primary">Email us</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style lang="scss" scoped>
.chatbot {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 90;
}
.toggle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: $pink;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 22px;
  font-weight: 800;
  box-shadow: 0 8px 21px rgba($pink, 0.45);
}
.panel {
  position: absolute;
  right: 0;
  bottom: 64px;
  width: 280px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 14px 40px rgba(#000, 0.15);
  h4 {
    font-size: 16px;
    margin-bottom: 8px;
    color: #1f1f1f;
  }
  .note {
    font-size: 13px;
    color: #666;
    line-height: 1.5;
    margin-bottom: 14px;
  }
  .btn-primary {
    font-size: 14px;
    padding: 10px 14px;
  }
}
</style>
