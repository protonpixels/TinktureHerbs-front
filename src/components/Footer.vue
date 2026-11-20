<template>
  <footer class="footer">
    <div class="container">
      <div class="top">
        <div class="brand-col">
          <h2 class="name">Tinkture<span>Herbs</span></h2>
          <p>
            Attar perfume oils, blended in small batches in Tillson, NY by a practicing herbalist.
            Alcohol-free. Plant-derived. Worn close to the skin.
          </p>
        </div>

        <div class="links-col">
          <h4>Attars</h4>
          <router-link to="/product/attar-frankincense-myrrh">Frankincense &amp; Myrrh</router-link>
          <router-link to="/product/attar-rose-oud">Rose &amp; Oud</router-link>
          <router-link to="/product/attar-neroli-herb">Neroli &amp; Herb</router-link>
          <router-link to="/shop">All attars</router-link>
        </div>

        <div class="links-col">
          <h4>Studio</h4>
          <router-link to="/about">About</router-link>
          <router-link to="/journal">Journal</router-link>
          <router-link to="/contact">Visit &amp; contact</router-link>
        </div>

        <div class="links-col">
          <h4>Policies</h4>
          <router-link to="/shipping">Shipping</router-link>
          <router-link to="/returns">Returns</router-link>
          <router-link to="/privacy">Privacy</router-link>
        </div>
      </div>
      <div class="bottom">
        <p>© {{ new Date().getFullYear() }} TinktureHerbs. All rights reserved.</p>
        <p>Made with care in the Hudson Valley.</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  background: #000;
  color: $cream;
  padding: 72px 0 28px;
}
.top {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 40px;
}
.name {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 14px;
  span {
    color: $pink;
  }
}
.brand-col p {
  font-size: 15px;
  line-height: 1.65;
  color: rgba($cream, 0.65);
  max-width: 340px;
}
.links-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
  h4 {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: rgba($cream, 0.5);
    margin-bottom: 8px;
  }
  a {
    font-size: 15px;
    color: rgba($cream, 0.85);
    &:hover {
      color: $amber;
    }
  }
}
.bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid rgba($cream, 0.12);
  font-size: 13px;
  color: rgba($cream, 0.5);
}
@media (max-width: 800px) {
  .top {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 520px) {
  .top {
    grid-template-columns: 1fr;
  }
}
</style>
