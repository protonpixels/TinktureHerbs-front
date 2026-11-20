<template>
  <section class="email-capture">
    <div class="container">
      <div class="box">
        <p class="eyebrow">The Attar Letter</p>
        <h2>First access to new scents.</h2>
        <p>
          Small batches sell out. Join the list for early access to each new attar, studio notes
          from the Hudson Valley, and 10% off your first order.
        </p>
        <form @submit.prevent="subscribe" class="form">
          <input
            v-model="email"
            type="email"
            placeholder="your@email.com"
            required
            aria-label="Email address"
          />
          <button type="submit" class="btn-primary" :disabled="status === 'loading'">
            {{ status === 'loading' ? 'Joining…' : 'Join the list' }}
          </button>
        </form>
        <p v-if="status === 'success'" class="msg success">You're in. Check your inbox.</p>
        <p v-if="status === 'error'" class="msg error">Something went wrong. Try again.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
const status = ref('idle')

async function subscribe() {
  status.value = 'loading'
  try {
    await new Promise(r => setTimeout(r, 600))
    status.value = 'success'
    email.value = ''
  } catch {
    status.value = 'error'
  }
}
</script>

<style lang="scss" scoped>
.email-capture {
  padding: 96px 0;
  background: $ink;
  color: $cream;
}
.box {
  max-width: 620px;
  margin: 0 auto;
  text-align: center;
  .eyebrow {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: $amber;
    font-weight: 700;
    margin-bottom: 14px;
  }
  h2 {
    font-size: clamp(28px, 4vw, 40px);
    margin-bottom: 14px;
    color: $cream;
  }
  p {
    font-size: 17px;
    line-height: 1.65;
    color: rgba($cream, 0.75);
    margin-bottom: 28px;
  }
}
.form {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  input {
    flex: 1 1 280px;
    padding: 15px 18px;
    border-radius: 10px;
    border: 1.5px solid rgba($cream, 0.2);
    font-size: 16px;
    background: rgba(#fff, 0.06);
    color: $cream;
    &::placeholder {
      color: rgba($cream, 0.5);
    }
    &:focus {
      border-color: $amber;
    }
  }
}
.msg {
  margin-top: 16px;
  font-size: 15px;
  font-weight: 600;
  &.success {
    color: #a7e3b8;
  }
  &.error {
    color: #ffb4a8;
  }
}
</style>
