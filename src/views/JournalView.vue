<template>
  <div class="journal">
    <div class="container">
      <h1 class="section-title">Journal</h1>
      <p class="section-sub">Notes on herbs, formulation, and life in the Hudson Valley.</p>

      <div class="grid">
        <article v-for="post in posts" :key="post.slug" class="post">
          <div class="img" :style="{ backgroundImage: `url(${post.image})` }"></div>
          <div class="body">
            <p class="date">{{ post.date }}</p>
            <h2>{{ post.title }}</h2>
            <p class="excerpt">{{ post.excerpt }}</p>
            <span class="read">Read →</span>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    slug: 'why-oil-perfume',
    title: 'Why we make oil-based perfume',
    date: 'May 2026',
    excerpt:
      'Alcohol-based fragrance is loud and fast. Oil-based perfume blooms slowly, stays close, and is gentler on skin. Here is the biology behind the choice.',
    image: '/images/journal-perfume.jpg',
  },
  {
    slug: 'hudson-valley-herbs',
    title: 'Five herbs we grow in the Hudson Valley',
    date: 'April 2026',
    excerpt:
      'Nettle, calendula, lemon balm, sage, and yarrow—why they grow well here, and what we do with them.',
    image: '/images/journal-herbs.jpg',
  },
  {
    slug: 'small-batch-soap',
    title: 'What "small-batch" actually means',
    date: 'March 2026',
    excerpt:
      'A cold-process soap batch is 40 bars. Here is why we make them that way, and why it matters for your skin.',
    image: '/images/journal-soap.jpg',
  },
]
</script>

<style lang="scss" scoped>
.journal {
  padding: 64px 0 96px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 28px;
}
.post {
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(#000, 0.05);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-3px);
  }
}
.img {
  aspect-ratio: 16 / 10;
  background-size: cover;
  background-position: center;
  background-color: #f1ece4;
}
.body {
  padding: 20px 22px 24px;
}
.date {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: $pink;
  font-weight: 700;
  margin-bottom: 8px;
}
h2 {
  font-size: 19px;
  color: #1f1f1f;
  margin-bottom: 8px;
  line-height: 1.3;
}
.excerpt {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 12px;
}
.read {
  font-size: 14px;
  font-weight: 700;
  color: $pink;
}
@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 560px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
