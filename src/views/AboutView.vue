<template>
  <div class="about">
    <div class="container narrow">
      <p class="eyebrow">Our story</p>
      <h1>Two traditions, one bottle.</h1>

      <div class="intro grid2">
        <!-- <img src="/images/founder.jpg" alt="Founder portrait" /> -->
        <div>
          <p>
            <!-- TinktureHerbs began in a Hudson Valley kitchen with a biology degree, a shelf of dried
            herbs, and a question: what if scent were made the way medicine used to be — slowly, by
            hand, with plants you can name? -->
            TinktureHerbs is a small family-owned herbal medicine company based in the Hudson Valley
            founded by a clinically trained herbalist with 15 years of experience making herbal
            medicine, working directly with clients, and running an herbal apothecary.
          </p>
        </div>
      </div>

      <h2>What we make</h2>
      <p>
        <!-- Attar perfume oils — alcohol-free, oil-based, blended in small batches in Tillson, NY.
        Frankincense, myrrh, rose, neroli, and Hudson Valley botanicals. The line begins with three
        scents; more will follow as the studio grows. -->
        We make traditional herbal products and natural cosmetics that are safe for the whole
        family.
      </p>

      <h2>What we believe</h2>
      <ul>
        <li>The natural world is designed to meet our needs.</li>
        <li>The modern woman is inundated with harmful chemicals in cosmetics.</li>
        <li>
          We find joy in blending authentic Attar perfumes inspired by culture and centuries of
          tradition.
        </li>
      </ul>

      <!-- <h2>Visit</h2>
      <p>
        The studio is in Tillson, NY. Come by for a scent, a bottle, or a conversation about herbs.
        <router-link to="/contact">Get directions →</router-link>
      </p> -->
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.about {
  padding: 72px 0 104px;
  background: $cream;
}
.narrow {
  max-width: 860px;
}
.eyebrow {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: $amber;
  font-weight: 700;
  margin-bottom: 14px;
}
h1 {
  font-size: clamp(32px, 5vw, 52px);
  color: $ink;
  margin-bottom: 40px;
  line-height: 1.1;
  letter-spacing: -0.01em;
}
h2 {
  font-size: 24px;
  color: $ink;
  margin: 44px 0 14px;
}
p,
li {
  font-size: 17px;
  line-height: 1.75;
  color: #3d3730;
  margin-bottom: 14px;
}
ul {
  padding-left: 22px;
  li::marker {
    color: $amber;
  }
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 44px;
  align-items: center;
  margin-bottom: 20px;
  img {
    width: 100%;
    border-radius: 16px;
    aspect-ratio: 4 / 5;
    object-fit: cover;
  }
}
a {
  color: $brown;
  text-decoration: underline;
  text-underline-offset: 3px;
}
@media (max-width: 760px) {
  .grid2 {
    grid-template-columns: 1fr;
  }
}
</style>
