<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <p class="eyebrow">Hudson Valley · Small-batch · Biologist-formulated</p>
        <h1>
          Botanical skincare, scents, and home goods
          <span>made by an herbalist.</span>
        </h1>
        <p class="subhead">
          Plant-powered perfumes, facial creams, soaps, and candles—crafted in Tillson, NY by a
          biologist and practicing herbalist.
        </p>
        <div class="hero-actions">
          <router-link to="/shop" class="btn-primary">Shop the collection</router-link>
          <router-link to="/about" class="btn-secondary">Meet the maker</router-link>
        </div>
        <p class="location-note">
          <span class="pin">📍</span>
          Visit the studio in Tillson, NY —
          <router-link to="/contact">get directions</router-link>
        </p>
      </div>
      <div class="hero-image-wrap">
        <!-- <img
          class="hero-image"
          src="/images/hero.jpg"
          alt="Herbalist pouring oil perfume by a window in the Hudson Valley"
        /> -->
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.hero {
  padding: 80px 0 96px;
}
.container {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 56px;
  align-items: center;
}
.eyebrow {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: $pink;
  font-weight: 700;
  margin-bottom: 20px;
}
h1 {
  font-size: clamp(38px, 5.5vw, 60px);
  line-height: 1.08;
  color: #1f1f1f;
  font-weight: 800;
  span {
    color: $pink;
  }
}
.subhead {
  font-size: 19px;
  line-height: 1.65;
  color: #4a4a4a;
  max-width: 540px;
  margin-top: 22px;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}
.location-note {
  font-size: 15px;
  color: #5a5a5a;
  margin-top: 28px;
  a {
    color: $pink;
    text-decoration: underline;
  }
  .pin {
    margin-right: 4px;
  }
}
.hero-image {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  aspect-ratio: 4 / 5;
  box-shadow: 0 20px 50px rgba(#1f4a52, 0.18);
}
@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .hero-image {
    aspect-ratio: 16 / 10;
  }
}
</style>
