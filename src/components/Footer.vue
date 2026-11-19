<template>
  <footer class="footer">
    <div class="container">
      <div class="top">
        <div class="brand-col">
          <h2 class="name">Tinkture<span>Herbs</span></h2>
          <p>
            Small-batch botanical skincare, scents, and home goods made in Tillson, NY by a
            biologist and practicing herbalist.
          </p>
        </div>

        <div class="links-col">
          <h4>Shop</h4>
          <router-link to="/shop">All products</router-link>
          <router-link to="/shop?c=Skincare">Skincare</router-link>
          <router-link to="/shop?c=Scents">Scents</router-link>
          <router-link to="/shop?c=Home">Home</router-link>
          <router-link to="/shop?c=Herbs">Herbs</router-link>
        </div>

        <div class="links-col">
          <h4>Company</h4>
          <router-link to="/about">About</router-link>
          <router-link to="/journal">Journal</router-link>
          <router-link to="/contact">Contact & Visit</router-link>
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
  background: #1f2b2e;
  color: #e8eef0;
  padding: 64px 0 28px;
}
.top {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 40px;
}
.name {
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 14px;
  span {
    color: $pink;
  }
}
.brand-col p {
  font-size: 15px;
  line-height: 1.6;
  color: #b9c6c9;
  max-width: 340px;
}
.links-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
  h4 {
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #8fa0a4;
    margin-bottom: 6px;
  }
  a {
    font-size: 15px;
    color: #d8e2e4;
    &:hover {
      color: $pink;
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
  border-top: 1px solid rgba(#fff, 0.1);
  font-size: 13px;
  color: #8fa0a4;
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
