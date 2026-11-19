<template>
  <div class="home">
    <HeroSection />

    <!-- Featured products -->
    <section class="featured">
      <div class="container">
        <h2 class="section-title">Bestsellers</h2>
        <p class="section-sub">The products customers come back for.</p>
        <div class="grid">
          <ProductCard v-for="p in featured" :key="p.id" :product="p" />
        </div>
        <div class="center">
          <router-link to="/shop" class="btn-secondary">View all products</router-link>
        </div>
      </div>
    </section>

    <!-- Founder strip -->
    <section class="founder">
      <div class="container grid2">
        <!-- <img src="/images/founder.jpg" alt="The founder in her Hudson Valley studio" /> -->
        <div>
          <h2 class="section-title">Biologist. Herbalist. Neighbor.</h2>
          <p class="section-sub">
            TinktureHerbs is built on two kinds of training: a degree in biology and years of
            traditional herbal practice. Every formula starts with what the plant actually does—and
            ends with what feels good on your skin.
          </p>
          <router-link to="/about" class="btn-secondary">Read the full story</router-link>
        </div>
      </div>
    </section>

    <EmailCapture />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import ProductCard from '../components/ProductCard.vue'
import EmailCapture from '../components/EmailCapture.vue'
import { products } from '../data/products'
const featured = products.slice(0, 3)
</script>

<style lang="scss" scoped>
.featured {
  padding: 88px 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-bottom: 40px;
}
.center {
  text-align: center;
}
.founder {
  padding: 88px 0;
  background: #fff;
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
  img {
    width: 100%;
    border-radius: 16px;
    aspect-ratio: 4 / 5;
    object-fit: cover;
  }
}
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
  .grid2 {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 560px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
