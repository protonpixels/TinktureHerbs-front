<template>
  <div class="about">
    <div class="container narrow">
      <p class="eyebrow">Our story</p>
      <h1>Botanical care, rooted in two traditions.</h1>

      <div class="intro grid2">
        <!-- <img src="/images/founder.jpg" alt="Founder portrait" /> -->
        <div>
          <p>
            TinktureHerbs began in a Hudson Valley kitchen with a biology degree, a shelf of dried
            herbs, and a question: what if skincare and scent were made the way medicine used to
            be—slowly, by hand, with plants you can name?
          </p>
          <p>
            Our founder is a biologist and practicing herbalist, trained in both clinical and
            traditional herbalism. That dual training shapes every formula: we ask what the plant
            actually does, then we ask what feels good on your skin.
          </p>
        </div>
      </div>

      <h2>What we make</h2>
      <p>
        Oil-based perfumes, facial creams, cold-process soaps, hand-poured candles, and loose-leaf
        herbal teas—all small-batch, all made in Tillson, NY.
      </p>

      <h2>What we believe</h2>
      <ul>
        <li>Plants first. Simple formulas. Ingredients you can pronounce.</li>
        <li>Small batches over mass production.</li>
        <li>Honest language. We don't make medical claims we can't back up.</li>
        <li>Local roots. Hudson Valley ingredients where we can.</li>
      </ul>

      <h2>Visit</h2>
      <p>
        The studio is in Tillson, NY. Come by for a scent, a soap, or a conversation about herbs.
        <router-link to="/contact">Get directions →</router-link>
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.about {
  padding: 64px 0 96px;
}
.narrow {
  max-width: 860px;
}
.eyebrow {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: $pink;
  font-weight: 700;
  margin-bottom: 14px;
}
h1 {
  font-size: clamp(30px, 5vw, 48px);
  color: #1f1f1f;
  margin-bottom: 36px;
  line-height: 1.15;
}
h2 {
  font-size: 24px;
  color: #1f1f1f;
  margin: 40px 0 12px;
}
p,
li {
  font-size: 17px;
  line-height: 1.75;
  color: #444;
  margin-bottom: 14px;
}
ul {
  padding-left: 22px;
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 40px;
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
  color: $pink;
  text-decoration: underline;
}
@media (max-width: 760px) {
  .grid2 {
    grid-template-columns: 1fr;
  }
}
</style>
