<template>
  <div class="home">
    <HeroSection />

    <!-- Attar collection -->
    <section class="collection">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">The Attar Collection</p>
          <h2 class="section-title">Three scents to begin with.</h2>
          <p class="section-sub">
            Each attar is built on a jojoba and sweet almond base, blended with essential oils and
            absolutes. No alcohol, no synthetic fixatives.
          </p>
        </div>
        <div class="grid">
          <ProductCard v-for="p in attars" :key="p.id" :product="p" />
        </div>
        <div class="center">
          <router-link to="/shop" class="btn-secondary">View all attars</router-link>
        </div>
      </div>
    </section>

    <!-- Why oil-based -->
    <section class="why">
      <div class="container grid2">
        <div class="why-text">
          <p class="eyebrow">Why oil-based</p>
          <h2 class="section-title">Alcohol-free, so the scent stays close.</h2>
          <p class="section-sub">
            Alcohol-based perfume is loud and fast — it projects across a room, then fades.
            Oil-based attar is slower. It blooms on your skin's warmth and is gentler on sensitive
            skin. We formulate each blend from simple pure ingredients.
          </p>
        </div>
        <div class="why-stats">
          <div class="stat">
            <span class="stat-num">0%</span>
            <span class="stat-label">Alcohol</span>
          </div>
          <div class="stat">
            <span class="stat-num">6–8 hr</span>
            <span class="stat-label">Wear time on skin</span>
          </div>
          <div class="stat">
            <span class="stat-num">100%</span>
            <span class="stat-label">Plant-derived scent</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder strip 
    <section class="founder">
      <div class="container grid2">
         <img src="/images/founder.jpg" alt="The founder in her Hudson Valley studio" />
        <div>
          <p class="eyebrow">The maker</p>
          <h2 class="section-title">Herbalist.</h2>
          <p class="section-sub">
            TinktureHerbs is built on two kinds of training: a degree in biology and years of
            traditional herbal practice. Every attar starts with what the plant actually does — and
            ends with what feels good on your skin. The myrrh in our first blend comes from the same
            resin traditions my mother's family has known for generations.
          </p>
          <router-link to="/about" class="btn-secondary">Read the full story</router-link>
        </div>
      </div>
    </section>  <EmailCapture />
    
    -->
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import ProductCard from '../components/ProductCard.vue'
import EmailCapture from '../components/EmailCapture.vue'
import { products } from '../data/products'

const attars = products.filter(p => p.category === 'Attar').slice(0, 3)
</script>

<style lang="scss" scoped>
.collection {
  padding: 104px 0;
  background: #111111;
}
.section-head {
  max-width: 640px;
  margin-bottom: 44px;
}
.eyebrow {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: $amber;
  font-weight: 700;
  margin-bottom: 12px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-bottom: 44px;
}
.center {
  text-align: center;
}
.why {
  padding: 104px 0;
  background: #111;
}
.grid2 {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 64px;
  align-items: center;
  img {
    width: 100%;
    border-radius: 16px;
    aspect-ratio: 4 / 5;
    object-fit: cover;
  }
}
.why-stats {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}
.stat {
  background: #fff;
  border-radius: 14px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 6px 20px rgba($brown, 0.08);
  border-left: 4px solid $amber;
  .stat-num {
    font-size: 32px;
    font-weight: 800;
    color: $brown;
  }
  .stat-label {
    font-size: 14px;
    color: $muted;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
  }
}
.founder {
  padding: 104px 0;
  background: #fff;
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
