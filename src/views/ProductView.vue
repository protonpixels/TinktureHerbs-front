<template>
  <div class="product" v-if="product">
    <div class="container grid2">
      <div class="img-wrap">
        <img :src="product.image" :alt="product.name" />
      </div>
      <div class="info">
        <p class="category">{{ product.category }}</p>
        <h1>{{ product.name }}</h1>
        <p class="price">${{ product.price }}</p>
        <p class="desc">{{ product.description }}</p>

        <div class="qty">
          <label>Qty</label>
          <input type="number" min="1" v-model.number="qty" />
        </div>

        <button class="btn-primary" @click="addToCart">Add to cart</button>
        <p class="added" v-if="added">Added to cart ✓</p>

        <details>
          <summary>Ingredients</summary>
          <p>{{ product.ingredients }}</p>
        </details>
        <details>
          <summary>How to use</summary>
          <p>{{ product.use }}</p>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products'
import { useCart } from '../stores/cart'

const route = useRoute()
const { add } = useCart()
const product = computed(() => products.find(p => p.id === route.params.id))
const qty = ref(1)
const added = ref(false)

function addToCart() {
  if (!product.value) return
  add(product.value, qty.value)
  added.value = true
  setTimeout(() => (added.value = false), 2000)
}
</script>

<style lang="scss" scoped>
.product {
  padding: 64px 0 96px;
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
}
.img-wrap img {
  width: 100%;
  border-radius: 16px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
.category {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: $pink;
  font-weight: 700;
  margin-bottom: 8px;
}
h1 {
  font-size: clamp(28px, 4vw, 40px);
  color: #1f1f1f;
  margin-bottom: 10px;
}
.price {
  font-size: 22px;
  font-weight: 700;
  color: #1f1f1f;
  margin-bottom: 18px;
}
.desc {
  font-size: 17px;
  line-height: 1.65;
  color: #4a4a4a;
  margin-bottom: 24px;
}
.qty {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
  input {
    width: 70px;
    padding: 10px;
    border: 1.5px solid #d6d0c4;
    border-radius: 8px;
    font-size: 16px;
  }
  label {
    font-weight: 600;
    font-size: 15px;
  }
}
.added {
  color: #1c7a4a;
  font-weight: 600;
  margin-top: 10px;
}
details {
  margin-top: 18px;
  border-top: 1px solid #e6e1d7;
  padding-top: 14px;
  summary {
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;
  }
  p {
    margin-top: 8px;
    font-size: 15px;
    color: #555;
    line-height: 1.6;
  }
}
@media (max-width: 800px) {
  .grid2 {
    grid-template-columns: 1fr;
  }
}
</style>
