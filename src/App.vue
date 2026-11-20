<template>
  <NavBar />
  <main id="main-content">
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import NavBar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ChatBot from './components/ChatBot.vue'
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: 'Helvetica Neue', sans-serif;
  color: #fff;
}

a,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: none;
}

#app,
body {
  max-width: 100vw;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  background-color: #111111;
  padding: 0;
}
main#main-content {
  padding-top: $navheight;
}
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.btn-primary {
  display: inline-block;
  background-color: $pink;
  color: #fff !important;
  font-weight: 700;
  padding: 14px 26px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition:
    transform 0.16s,
    box-shadow 0.16s;
  box-shadow: 0 6px 18px rgba($pink, 0.35);
  &:hover {
    transform: translateY(2px);
    box-shadow: 0 6px 55px 1px rgba($pink, 0.35);
  }
}
.btn-secondary {
  display: inline-block;
  background: transparent;
  color: $green !important;
  font-weight: 700;
  padding: 14px 22px;
  border-radius: 10px;
  border: 2px solid $green;
  cursor: pointer;
  font-size: 16px;
}
.section-title {
  font-size: clamp(28px, 4vw, 40px);
  color: #fff;
  margin-bottom: 12px;
}
.section-sub {
  font-size: 18px;
  color: $subtitle;
  line-height: 1.6;
  margin-bottom: 32px;
}
</style>
