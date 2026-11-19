<template>
  <div class="cart">
    <div class="container">
      <h1 class="section-title">Your cart</h1>

      <p v-if="state.items.length === 0" class="empty">
        Your cart is empty. <router-link to="/shop">Browse the shop →</router-link>
      </p>

      <div v-else class="layout">
        <div class="items">
          <div v-for="item in state.items" :key="item.id" class="item">
            <img :src="item.image" :alt="item.name" />
            <div class="meta">
              <h3>{{ item.name }}</h3>
              <p>${{ item.price }}</p>
              <div class="qty">
                <button @click="updateQty(item.id, item.qty - 1)">−</button>
                <span>{{ item.qty }}</span>
                <button @click="updateQty(item.id, item.qty + 1)">+</button>
              </div>
            </div>
            <button class="remove" @click="remove(item.id)">Remove</button>
          </div>
        </div>

        <aside class="summary">
          <h3>Order summary</h3>
          <div class="row">
            <span>Subtotal</span>
            <span>${{ total.toFixed(2) }}</span>
          </div>
          <div class="row">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <button class="btn-primary full" @click="checkout">Checkout</button>
          <p class="note">Secure checkout via Stripe. Shipping within the US.</p>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from '../stores/cart'
const { state, remove, updateQty, total } = useCart()

function checkout() {
  // Wire to Stripe Checkout Session or your own endpoint later.
  alert('Checkout flow coming soon. For now, email hello@tinktureherbs.com to order.')
}
</script>

<style lang="scss" scoped>
.cart {
  padding: 64px 0 96px;
}
.empty {
  font-size: 17px;
  color: #555;
  a {
    color: $pink;
    text-decoration: underline;
  }
}
.layout {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 40px;
  margin-top: 28px;
}
.item {
  display: grid;
  grid-template-columns: 90px 1fr auto;
  gap: 18px;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid #e6e1d7;
  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 10px;
  }
  h3 {
    font-size: 17px;
    margin-bottom: 4px;
  }
  p {
    font-size: 15px;
    color: #666;
    margin-bottom: 8px;
  }
}
.qty {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  button {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    border: 1.5px solid #d6d0c4;
    background: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
  }
}
.remove {
  background: none;
  border: none;
  color: #b3261e;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
}
.summary {
  background: #fff;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(#000, 0.06);
  align-self: start;
  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }
}
.row {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: #444;
  padding: 8px 0;
}
.full {
  width: 100%;
  margin-top: 16px;
}
.note {
  font-size: 13px;
  color: #777;
  margin-top: 12px;
  line-height: 1.5;
}
@media (max-width: 800px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
