<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>
          Attar perfume oils,
          <span>rooted in resin and ritual.</span>
        </h1>
        <p class="subhead">
          Alcohol-free attars blended by a practicing herbalist in the so-called Hudson Valley
          (occupied Haudenosaunee territory). Authentic & creative herbal delicacies.
        </p>

        <div class="hero-actions">
          <router-link to="/shop" class="btn-primary">Shop The Attars</router-link>
          <router-link to="/about" class="btn-secondary">About Us</router-link>
        </div>
        <!-- <p class="location-note">
          <span class="pin">📍</span>
          Visit the studio in Tillson, NY —
          <router-link to="/contact">get directions</router-link>
        </p> -->
        <p class="eyebrow">Hudson Valley · Oil-based · Herbalist Formulated</p>
      </div>
      <div class="hero-image-wrap">
        <img
          class="hero-image"
          src="@/assets/hero-image-2.png"
          alt="Amber glass attar bottle with resin and dried botanicals"
        />
        <!-- <div class="hero-badge">
        <span class="badge-label">No. 01</span>
          <span class="badge-name">Frankincense &amp; Myrrh</span>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.hero {
  position: relative;
  overflow: hidden;
  max-height: calc(100vh - $navheight);
  height: 100vh;
  background: radial-gradient(rgba($blue, 0.382) -61.8%, hsl(188, 84%, 2%) 61.8%);
  padding-top: calc($navheight * 1.382);
}

.hero-content {
  padding: 34px 21px;
  border-radius: 13px;
}
.container {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 144px;
  align-items: center;
  z-index: 10;
}
.eyebrow {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  border-radius: 34px;
  font-weight: 700;
  margin-top: 34px;
}
h1 {
  font-size: clamp(40px, 5.4vw, 64px);
  line-height: 1.05;
  color: lighten($green, 8%);
  font-weight: 300;
  letter-spacing: -0.01em;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  span {
    color: $amber;
    font-style: italic;
    font-weight: 400;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
}
.subhead {
  font-size: 19px;
  line-height: 1.65;
  color: hsl(36, 100%, 84%);
  max-width: 540px;
  margin-top: 24px;
}
.hero-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 34px;
  margin-top: 34px;
  a {
    width: 100% !important;
    text-align: center;
  }
  @media (max-width: 900px) {
    a {
      font-size: 12px;
    }
  }
}
.location-note {
  font-size: 15px;
  color: $muted;
  margin-top: 30px;
  a {
    color: $brown;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .pin {
    margin-right: 4px;
  }
}
.hero-image-wrap {
  position: relative;

  @media (max-width: 900px) {
    display: flex;
    .hero-image {
      width: 80%;
      margin: 0 auto;
    }
  }
}
.hero-image {
  width: 100%;
  object-fit: cover;
  filter: brightness(2);
}
.hero-badge {
  position: absolute;
  bottom: -22px;
  left: -22px;
  background: white;
  color: #fff;
  padding: 16px 22px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 12px 30px rgba(#000, 0.18);
  .badge-label {
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: $amber;
    font-weight: 700;
  }
  .badge-name {
    font-size: 15px;
    font-weight: 700;
  }
}
@media (max-width: 900px) {
  .hero {
    padding-top: calc($navheight * 0.618);
    max-height: fit-content;
    height: fit-content;
  }
  .container {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .hero-image {
  }
  .hero-badge {
    left: 16px;
    bottom: 16px;
  }
}
</style>
