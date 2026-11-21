<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <p class="eyebrow">Oil-based · Healthy · Herbalst-Formulated</p>
        <h1>
          Attar Perfume Oils,
          <span>Rooted in Resin and Ritual.</span>
        </h1>
        <p class="subhead">
          <i>Alcohol-free Attars</i> blended by a <u>practicing herbalist</u> in the so-called
          Hudson Valley (a.k.a. occupied Haudenosaunee territory) providing authentic & creative
          herbal delicacies.
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
  background: radial-gradient(rgba($amber-muted, 0.5) -61.8%, hsl(0, 0%, 8.4%) 61.8%);
  padding: calc($navheight * 0.5) 0;
}

.hero-content {
  padding-top: calc($navheight * 1.084);
  border-radius: 13px;
}
.container {
  display: grid;
  grid-template-columns: 1fr 0.832fr;
  gap: 120px;
  align-items: center;
  z-index: 10;
}
.eyebrow {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: lighten($pink-pop, 100%);
  background-color: rgba(lighten($blue-muted, 50%), 0.167);
  text-align: center;
  padding: 9px 12px;
  border-radius: 34px;
  font-weight: 900;
  margin-bottom: 30px;

  @media (max-width: 900px) {
    font-size: 9px;
  }
}
h1 {
  font-size: clamp(48px, 4.16vw, 54px);
  background: linear-gradient(
    135deg,
    lighten($amber-pop, 33.3%) 25%,
    lighten($pink-pop, 16.7%) 125%
  );
  line-height: 1.05;
  color: transparent;
  background-clip: text;
  font-weight: 300;
  letter-spacing: -0.01em;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  span {
    font-style: italic;
    font-weight: 400;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
}
.subhead {
  font-size: 21px;
  line-height: 1.65;
  background-clip: text;
  color: lighten($amber, 33.3%);
  max-width: 540px;
  margin-top: 30px;
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
  padding-top: calc($navheight * 1.33);
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
  filter: brightness(1.832);
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
  box-shadow: 0 12px 30px rgba(#000, 0.167);
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
    padding-top: calc($navheight * 0);
    max-height: fit-content;
    height: fit-content;
  }
  .container {
    grid-template-columns: 1fr;
    gap: 0px;
  }
  .hero-image-wrap {
    padding-top: 60px;
  }
  .hero-badge {
    left: 16px;
    bottom: 16px;
  }
}
</style>
