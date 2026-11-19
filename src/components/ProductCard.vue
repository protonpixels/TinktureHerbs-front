<template>
  <router-link :to="`/product/${product.id}`" class="product-card">
    <div class="img-wrap">
      <img :src="product.image" :alt="product.name" loading="lazy" />
    </div>
    <div class="meta">
      <p class="category">{{ product.category }}</p>
      <h3 class="name">{{ product.name }}</h3>
      <p class="short">{{ product.short }}</p>
      <p class="price">${{ product.price }}</p>
    </div>
  </router-link>
</template>

<script setup>
defineProps({ product: { type: Object, required: true } })
</script>

<style lang="scss" scoped>
.product-card {
  display: block;
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  box-shadow: 0 4px 16px rgba(#000, 0.05);
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 32px rgba(#000, 0.09);
  }
}
.img-wrap {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #f1ece4;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.meta {
  padding: 18px 20px 22px;
  .category {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: $pink;
    font-weight: 700;
    margin-bottom: 6px;
  }
  .name {
    font-size: 18px;
    color: #1f1f1f;
    margin-bottom: 6px;
  }
  .short {
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
  }
  .price {
    font-size: 17px;
    font-weight: 700;
    color: #1f1f1f;
  }
}
</style>
