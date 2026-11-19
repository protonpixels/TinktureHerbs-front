<template>
  <section class="email-capture">
    <div class="container">
      <div class="box">
        <h2>Join the herbal notes list</h2>
        <p>
          Seasonal product launches, Hudson Valley workshop dates, and 10% off your first order.
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
            {{ status === 'loading' ? 'Joining…' : 'Get 10% off' }}
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
    // Replace with ConvertKit / Mailchimp / your own endpoint
    // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email: email.value }) })
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
  padding: 80px 0;
  background: #ebf4f7;
}
.box {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
  h2 {
    font-size: clamp(26px, 4vw, 36px);
    color: #1f1f1f;
    margin-bottom: 12px;
  }
  p {
    font-size: 17px;
    color: #4a4a4a;
    line-height: 1.6;
    margin-bottom: 26px;
  }
}
.form {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  input {
    flex: 1 1 280px;
    padding: 14px 16px;
    border-radius: 10px;
    border: 1.5px solid #c9d8dd;
    font-size: 16px;
    background: #fff;
    &:focus {
      border-color: $pink;
    }
  }
}
.msg {
  margin-top: 16px;
  font-size: 15px;
  font-weight: 600;
  &.success {
    color: #1c7a4a;
  }
  &.error {
    color: #b3261e;
  }
}
</style>
