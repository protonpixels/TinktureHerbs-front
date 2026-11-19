<template>
  <div class="shop">
    <div class="container">
      <h1 class="section-title">Shop</h1>
      <p class="section-sub">Small-batch, plant-powered, made in the Hudson Valley.</p>

      <div class="filters">
        <button
          v-for="c in categories"
          :key="c"
          class="chip"
          :class="{ active: active === c }"
          @click="active = c"
        >
          {{ c }}
        </button>
      </div>

      <div class="grid">
        <ProductCard v-for="p in filtered" :key="p.id" :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import { products } from '../data/products'

const route = useRoute()
const active = ref(route.query.c || 'All')
const categories = ['All', ...new Set(products.map(p => p.category))]
const filtered = computed(() =>
  active.value === 'All' ? products : products.filter(p => p.category === active.value)
)
</script>

<style lang="scss" scoped>
.shop {
  padding: 64px 0 96px;
}
.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 24px 0 36px;
}
.chip {
  border: 1.5px solid #d6d0c4;
  background: #fff;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &.active {
    background: $pink;
    color: #fff;
    border-color: $pink;
  }
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 560px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
