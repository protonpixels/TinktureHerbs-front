<template>
  <nav class="navbar" :class="{ scrolled }">
    <div class="container">
      <router-link to="/" class="brand">
        <img src="@/assets/tinkture.png" alt="" class="logo" />
      </router-link>

      <button class="menu-toggle" @click="open = !open" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>

      <div class="nav-list" :class="{ open }">
        <router-link to="/shop" class="nav-link" @click="open = false">Perfumes</router-link>
        <router-link to="/about" class="nav-link" @click="open = false"
          >Herbalist Services</router-link
        >
        <router-link to="/cart" class="cart-btn" @click="open = false">
          Cart <span class="cart-count" v-if="count">{{ count }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCart } from '../stores/cart'

const { count } = useCart()
const open = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss" scoped>
.navbar {
  height: $navheight;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background: none;
  backdrop-filter: blur(0px);
  background-color: hsl(343, 0%, 8.4%);
  box-shadow: 0 0px 12px 1px rgba($color: #000000, $alpha: 0.33);
  -webkit-backdrop-filter: blur(0px);
  transition:
    background-color 0.35s ease,
    backdrop-filter 0.35s ease,
    box-shadow 0.35s ease;

  &.scrolled {
    // dark, desaturated: a muted charcoal with a hint of warm brown
    background-color: rgba(darken($blue, 24.9%), 0.86);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 6px 21px rgba(#000, 0.16);

    .logo {
      filter: hue-rotate(8deg) brightness(1.9);
    }

    .nav-link {
      color: #000;
    }
  }
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 34px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 15px;
  .logo {
    height: calc($navheight * 0.618);
    border-radius: 15px;
    filter: hue-rotate(343deg) brightness(2.33);
    transition: filter 0.35s ease;

    &:hover {
      filter: hue-rotate(343deg) brightness(1.832);
    }
  }
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 16px;
  .nav-link {
    font-weight: 800;
    color: lighten($amber-muted, 16.7%);
    transition: color 0.2s ease;
    &:hover {
      color: lighten($amber, 8.4%);
    }
    &.router-link-active {
      color: $brown;
    }
  }
}

.cart-btn {
  font-weight: 800;
  color: #fff;
  padding: 8px 21px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: darken($amber, 8.4%);
  box-shadow: inset 0 0 15px 1px rgba(lighten($amber, 33.4%), 0);

  transition: all 0.16s;
  &:hover {
    background-color: $amber-pop;
    box-shadow: inset 0 0 13px 1px darken($amber-muted, 16.7%);
  }
}

.cart-count {
  background: lighten($amber, 38.2%);
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
    background: lighten($amber-pop, 33.4%);
    transition: background 0.35s ease;
  }
}

/* When scrolled, links/logo need lighter text to stay legible on the dark bar */
.navbar.scrolled {
  .nav-link {
    color: lighten($amber, 30%);
    &:hover {
      color: lighten($amber, 40%);
    }
    &.router-link-active {
      color: lighten($amber, 38%);
    }
  }
  .cart-btn {
    background-color: lighten($brown, 4%);
    border-color: lighten($brown, 26%);
    color: #fff;
  }
  .cart-count {
    background: lighten($amber, 20%);
    color: #1c1a17;
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
  /* On mobile, when the menu is closed, keep the bar transparent/scrolled look;
     when the dropdown is open it uses the cream panel above */
  .navbar.scrolled .nav-list {
    background: $cream;
  }
}
</style>
