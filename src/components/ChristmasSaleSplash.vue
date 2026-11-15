<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { getAnnouncement, announcementImage, announcementPath } from '@/data/announcements';

const sale = getAnnouncement('christmas-sale-2026');
const dialog = ref(null);
let previousOverflow;

function restoreScroll() {
  if (previousOverflow !== undefined) {
    document.documentElement.style.overflow = previousOverflow;
    previousOverflow = undefined;
  }
}

function close() {
  dialog.value?.close();
  restoreScroll();
}

function closeOnBackdrop(event) {
  if (event.target !== dialog.value) return;
  const bounds = dialog.value.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) close();
}

onMounted(() => {
  if (!sale) return;
  dialog.value.showModal();
  previousOverflow = document.documentElement.style.overflow;
  document.documentElement.style.overflow = 'hidden';
});

onBeforeUnmount(() => {
  close();
});
</script>

<template>
  <dialog v-if="sale" ref="dialog" class="christmas-splash" aria-labelledby="christmas-sale-title"
          aria-describedby="christmas-sale-description" @close="restoreScroll" @click="closeOnBackdrop">
    <div class="snowfall" aria-hidden="true">
      <span v-for="flake in 18" :key="flake" class="snowflake"
            :style="{ '--left': `${(flake * 37) % 100}%`, '--delay': `${-flake * 0.7}s`, '--duration': `${7 + flake % 5}s`, '--size': `${0.7 + (flake % 3) * 0.4}rem` }">❄</span>
    </div>
    <header class="splash-header">
      <span>With love, for our school</span>
      <button type="button" class="splash-close" autofocus @click="close">Close <span aria-hidden="true">×</span></button>
    </header>
    <div class="splash-layout">
      <router-link :to="announcementPath(sale)" class="splash-poster" aria-label="Read about the Christmas sale" @click="close">
        <img :src="announcementImage(sale)" :alt="sale.imageAlt" width="1199" height="1312" fetchpriority="high" />
      </router-link>
      <div class="splash-copy">
        <p class="splash-eyebrow">A festive fundraiser · 2026</p>
        <h2 id="christmas-sale-title">A little sweetness. <br />A lot of support.</h2>
        <p id="christmas-sale-description">Our Christmas Sale is here! Enjoy traditional Greek treats and help support Leicester Greek School and our children.</p>
        <router-link :to="announcementPath(sale)" class="splash-link" @click="close">Christmas sale &amp; how to order <span aria-hidden="true">→</span></router-link>
        <p class="splash-thanks">Every purchase makes a difference.</p>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.christmas-splash {
  width: min(960px, calc(100vw - 2rem));
  max-width: none;
  max-height: 92vh;
  max-height: 92dvh;
  padding: 0 1.25rem 1.25rem;
  border: 1px solid #d5b877;
  border-radius: 18px;
  background: #103e32;
  color: #fff9ed;
  box-shadow: 0 24px 80px #0006;
  overscroll-behavior: contain;
}
.christmas-splash::backdrop { background: #061c18d9; backdrop-filter: blur(5px); }
.splash-header { position: sticky; top: 0; z-index: 2; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 0.75rem 0; background: #103e32; }
.splash-header > span { font-family: Georgia, serif; font-style: italic; color: #f2d89c; }
.splash-close { min-height: 44px; padding: 0.4rem 0.75rem; border: 1px solid #c3d1c9; border-radius: 8px; background: #103e32; color: #fff9ed; }
.splash-close span { margin-left: 0.5rem; font-size: 1.3rem; }
.splash-layout { position: relative; z-index: 1; display: grid; grid-template-columns: 1.15fr 1fr; align-items: center; gap: 2rem; }
.splash-poster { display: block; min-width: 0; border-radius: 10px; overflow: hidden; }
.splash-poster img { display: block; width: 100%; height: auto; }
.splash-copy { padding: 1rem 1rem 1rem 0; }
.splash-eyebrow { color: #f2d89c; text-transform: uppercase; letter-spacing: 0.12em; font-size: 0.75rem; font-weight: 700; }
.splash-copy h2 { margin: 1rem 0 1.25rem; color: #fff9ed; font-family: Georgia, serif; font-size: clamp(1.8rem, 3.8vw, 2.75rem); line-height: 1.15; }
.splash-copy p { line-height: 1.65; }
.splash-link { display: inline-flex; align-items: center; justify-content: center; gap: 0.75rem; min-height: 48px; margin-top: 0.75rem; padding: 0.85rem 1rem; border-radius: 8px; background: #f2d89c; color: #103e32; text-decoration: none; font-weight: 700; line-height: 1.4; }
.splash-link:hover { background: #fff0c9; color: #103e32; }
.splash-thanks { margin: 1rem 0 0; font-size: 0.85rem; color: #f2d89c; }
.christmas-splash :focus-visible { outline: 3px solid #fff9ed; outline-offset: 3px; }
.snowfall { position: absolute; inset: 0; overflow: hidden; pointer-events: none; border-radius: inherit; }
.snowflake { position: absolute; top: -2rem; left: var(--left); font-size: var(--size); color: #fff; opacity: 0.35; animation: christmas-snow var(--duration) var(--delay) linear infinite; }
@keyframes christmas-snow { from { transform: translate3d(-10px, -2rem, 0) rotate(0); } to { transform: translate3d(15px, 95vh, 0) rotate(160deg); } }
@media (max-width: 640px) {
  .christmas-splash { width: calc(100vw - 1rem); padding: 0 0.75rem 1rem; border-radius: 12px; }
  .splash-header { font-size: 0.85rem; }
  .splash-layout { grid-template-columns: 1fr; gap: 0; }
  .splash-poster { justify-self: center; }
  .splash-poster img { width: auto; max-width: 100%; height: auto; max-height: 43vh; max-height: 43dvh; object-fit: contain; }
  .splash-copy { padding: 1rem 0.5rem 0; text-align: center; }
  .splash-eyebrow { margin-bottom: 0.5rem; }
  .splash-copy h2 { margin: 0.5rem 0 0.75rem; font-size: 1.75rem; }
  .splash-copy h2 br { display: none; }
  .splash-copy p { margin-bottom: 0.5rem; }
  .splash-link { width: 100%; margin-top: 0.5rem; }
}
@media (prefers-reduced-motion: reduce) { .snowflake { animation: none; top: calc(var(--left) / 2); } }
</style>
