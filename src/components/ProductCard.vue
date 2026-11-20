<template>
  <router-link :to="`/product/${product.id}`" class="product-card">
    <div class="img-wrap">
      <img :src="product.image" :alt="product.name" loading="lazy" />
      <span class="number">{{ product.number }}</span>
    </div>
    <div class="meta">
      <h3 class="name">{{ product.name }}</h3>
      <p class="notes">{{ product.notes }}</p>
      <p class="short">{{ product.short }}</p>
      <div class="bottom-row">
        <p class="price">${{ product.price }}</p>
        <span class="size">{{ product.size }}</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({ product: { type: Object, required: true } })
</script>

<style lang="scss" scoped>
.product-card {
  display: block;
  background: #181818;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid $ink;
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    border-color 0.2s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba($brown, 0.12);
    border-color: $amber;
  }
}
.img-wrap {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #f1ece4;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .number {
    position: absolute;
    top: 14px;
    left: 14px;
    background: rgba($ink, 0.85);
    color: $cream;
    font-size: 11px;
    letter-spacing: 0.14em;
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 999px;
  }
}
.meta {
  padding: 22px 22px 24px;
  .name {
    font-size: 20px;
    color: white;
    margin-bottom: 6px;
    font-weight: 700;
  }
  .notes {
    font-size: 13px;
    color: $amber;
    font-weight: 600;
    letter-spacing: 0.02em;
    margin-bottom: 8px;
  }
  .short {
    font-size: 14px;
    color: $amber;
    margin-bottom: 18px;
    line-height: 1.5;
  }
}
.bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  .price {
    font-size: 18px;
    font-weight: 700;
    color: $green;
  }
  .size {
    font-size: 13px;
    color: $muted;
  }
}
</style>
