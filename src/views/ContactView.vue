<template>
  <div class="contact">
    <div class="container grid2">
      <div>
        <p class="eyebrow">Visit & contact</p>
        <h1>Come by the studio.</h1>
        <p class="lead">
          The TinktureHerbs studio is in Tillson, NY. Stop by for a scent, a soap, or a conversation
          about herbs.
        </p>

        <div class="block">
          <h3>Address</h3>
          <p>Tillson, NY 12486<br />(exact address sent with appointment confirmation)</p>
        </div>

        <div class="block">
          <h3>Email</h3>
          <p><a href="mailto:hello@tinktureherbs.com">hello@tinktureherbs.com</a></p>
        </div>

        <div class="block">
          <h3>Instagram</h3>
          <p>
            <a href="https://instagram.com/tinktureherbs" target="_blank" rel="noopener"
              >@tinktureherbs</a
            >
          </p>
        </div>
      </div>

      <div class="form-card">
        <h3>Send a message</h3>
        <form @submit.prevent="send">
          <label>Name<input v-model="name" required /></label>
          <label>Email<input v-model="email" type="email" required /></label>
          <label>Message<textarea v-model="message" rows="5" required></textarea></label>
          <button class="btn-primary" type="submit">Send</button>
          <p v-if="sent" class="sent">Thanks—we'll be in touch.</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('')
const email = ref('')
const message = ref('')
const sent = ref(false)

function send() {
  // Wire to Formspree / your API / email service
  sent.value = true
  name.value = email.value = message.value = ''
}
</script>

<style lang="scss" scoped>
.contact {
  padding: 64px 0 96px;
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
}
.eyebrow {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: $pink;
  font-weight: 700;
  margin-bottom: 14px;
}
h1 {
  font-size: clamp(30px, 4.5vw, 44px);
  color: #1f1f1f;
  margin-bottom: 16px;
}
.lead {
  font-size: 18px;
  line-height: 1.65;
  color: #444;
  margin-bottom: 28px;
}
.block {
  margin-bottom: 22px;
  h3 {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #888;
    margin-bottom: 6px;
  }
  p {
    font-size: 16px;
    color: #333;
    line-height: 1.6;
  }
  a {
    color: $pink;
    text-decoration: underline;
  }
}
.form-card {
  background: #fff;
  border-radius: 14px;
  padding: 28px;
  box-shadow: 0 4px 16px rgba(#000, 0.06);
  h3 {
    font-size: 20px;
    margin-bottom: 18px;
  }
  label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #333;
    margin-bottom: 16px;
  }
  input,
  textarea {
    width: 100%;
    margin-top: 6px;
    padding: 12px 14px;
    border: 1.5px solid #d6d0c4;
    border-radius: 10px;
    font-size: 15px;
    font-family: inherit;
    &:focus {
      border-color: $pink;
    }
  }
  button {
    width: 100%;
    margin-top: 6px;
  }
}
.sent {
  color: #1c7a4a;
  font-weight: 600;
  margin-top: 12px;
  font-size: 15px;
}
@media (max-width: 800px) {
  .grid2 {
    grid-template-columns: 1fr;
  }
}
</style>
