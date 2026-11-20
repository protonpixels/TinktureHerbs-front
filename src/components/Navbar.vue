<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="brand">
        <img src="@/assets/tinkture.png" alt="" class="logo" />
        <!-- <h1 class="name">Tinkture<span>Herbs</span></h1> -->
      </router-link>

      <button class="menu-toggle" @click="open = !open" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>

      <div class="nav-list" :class="{ open }">
        <router-link to="/shop" class="nav-link" @click="open = false">Attars</router-link>
        <router-link to="/about" class="nav-link" @click="open = false">About</router-link>
        <!-- <router-link to="/journal" class="nav-link" @click="open = false">Journal</router-link> -->
        <!-- <router-link to="/contact" class="nav-link" @click="open = false">Visit</router-link> -->
        <router-link to="/cart" class="cart-btn" @click="open = false">
          Cart <span class="cart-count" v-if="count">{{ count }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useCart } from '../stores/cart'
const { count } = useCart()
const open = ref(false)
</script>

<style lang="scss" scoped>
.navbar {
  height: $navheight;
  box-shadow: 0 0 21px 1px rgba(#000, 0.06);
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: rgba(#000, 0.7);
  backdrop-filter: blur(10px);
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.brand {
  display: flex;
  align-items: center;
  gap: 15px;
  .logo {
    height: calc($navheight * 0.618);
    border-radius: 15px;
    filter: brightness(100);
  }
  .name {
    font-size: 26px;
    font-weight: 800;
    letter-spacing: -0.01em;
    color: $ink;
    span {
      color: $pink;
    }
  }
}
.nav-list {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 16px;
  letter-spacing: 3px;
  .nav-link {
    font-weight: 800;
    color: lighten($blue, 30%);
    &:hover {
      color: darken($blue, 20%);
    }
    &.router-link-active {
      color: $brown;
    }
  }
}
.cart-btn {
  font-weight: 700;
  background-color: white;
  color: $cream;
  padding: 8px 21px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: darken($blue, 20%);
  transition: transform 0.16s;
  font-weight: 800;
  &:hover {
    transform: translateY(2px);
  }
}
.cart-count {
  background: lighten($blue, 38.2%);
  color: $ink;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  padding: 2px 7px;
}
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  span {
    width: 34px;
    border-radius: 5px;
    height: 5px;
    background: white;
  }
}
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
    justify-content: center;
  }
  .nav-list {
    display: none;
    position: absolute;
    top: $navheight;
    left: 0;
    right: 0;
    background: $cream;
    flex-direction: column;
    align-items: center;
    padding: 20px 24px;
    gap: 13px;
    box-shadow: 0 8px 21px rgba(#000, 0.08);
    .nav-link {
      padding: 8px 0;
      border-radius: 34px;
      border: 1px solid $ink;
      width: 100%;
      text-align: center;
      color: $ink;
    }
    .cart-btn {
      width: 100%;
      justify-content: center;
    }
    &.open {
      display: flex;
    }
  }
}
</style>
