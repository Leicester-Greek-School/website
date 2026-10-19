<template>
  <section class="announcement-gallery" aria-label="Article photos">
    <h2>Photos</h2>
    <p class="gallery-hint">Select a photo to enlarge it.</p>
    <div class="gallery-grid">
      <a v-for="(image, index) in images" :key="image.full" :href="image.full" target="_blank" rel="noopener noreferrer"
         :aria-label="`Enlarge photo: ${image.alt}`" @click.prevent="open(index)">
        <img :src="image.thumbnail" :alt="image.alt" width="640" height="480" loading="lazy" decoding="async" />
      </a>
    </div>
    <dialog ref="viewer" class="photo-viewer" aria-label="Photo viewer" @click="closeOnBackdrop" @close="activeIndex = -1"
            @keydown.left.prevent="move(-1)" @keydown.right.prevent="move(1)">
      <button type="button" class="photo-close" autofocus @click="$refs.viewer.close()">Close photo <span aria-hidden="true">×</span></button>
      <template v-if="activeImage">
        <div class="photo-stage"><img :src="activeImage.full" :alt="activeImage.alt" /></div>
        <nav v-if="images.length > 1" class="photo-navigation" aria-label="Photo navigation">
          <button type="button" class="photo-control" aria-label="Previous photo" :disabled="activeIndex === 0" @click="move(-1)"><span aria-hidden="true">←</span> Previous</button>
          <span class="photo-count" role="status" aria-live="polite" aria-atomic="true">Photo {{ activeIndex + 1 }} of {{ images.length }}</span>
          <button type="button" class="photo-control" aria-label="Next photo" @click="move(1)">Next <span aria-hidden="true">→</span></button>
        </nav>
        <p>{{ activeImage.alt }}</p>
      </template>
    </dialog>
  </section>
</template>

<script>
export default {
  name: 'AnnouncementGallery',
  props: { images: { type: Array, required: true } },
  data() { return { activeIndex: -1 }; },
  computed: {
    activeImage() { return this.images[this.activeIndex] || null; }
  },
  methods: {
    open(index) {
      this.activeIndex = index;
      this.$nextTick(() => this.$refs.viewer.showModal());
    },
    move(direction) {
      if (this.activeIndex < 0 || this.images.length < 2) return;
      if (direction < 0 && this.activeIndex === 0) return;
      this.activeIndex = (this.activeIndex + direction + this.images.length) % this.images.length;
    },
    closeOnBackdrop(event) {
      if (event.target !== this.$refs.viewer) return;
      const rect = event.target.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
        this.$refs.viewer.close();
      }
    }
  }
};
</script>

<style scoped>
.announcement-gallery { margin-top: 2.5rem; }
.announcement-gallery h2 { font-size: 1.5rem; }
.gallery-hint { color: var(--text-medium); }
.gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap: 1rem; }
.gallery-grid a { display: block; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden; background: var(--primary-light); }
.gallery-grid img { display: block; width: 100%; height: auto; aspect-ratio: 4 / 3; object-fit: contain; }
.photo-viewer { width: min(95vw, 1200px); max-width: 95vw; height: min(92dvh, 900px); max-height: 95dvh; border: 0; border-radius: 12px; padding: 1rem; color: var(--text-dark); overscroll-behavior: contain; }
.photo-viewer[open] { display: grid; grid-template-rows: auto minmax(0, 1fr) auto auto; gap: 0.75rem; }
.photo-viewer::backdrop { background: rgba(0, 0, 0, 0.8); }
.photo-stage { min-height: 0; display: flex; align-items: center; justify-content: center; }
.photo-viewer img { display: block; max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; }
.photo-viewer p { max-width: 65ch; max-height: 22dvh; overflow-y: auto; overflow-wrap: anywhere; margin: 0; font-size: 0.95rem; line-height: 1.4; }
.photo-close, .photo-control { min-height: 44px; padding: 0.5rem 0.75rem; border: 1px solid var(--primary-color); border-radius: 6px; background: var(--white); color: var(--primary-color); font-weight: 600; }
.photo-close { display: block; justify-self: end; margin: 0; }
.photo-control { padding: 0.5rem; white-space: nowrap; }
.photo-control:disabled { opacity: 0.45; cursor: not-allowed; }
.photo-close:focus-visible, .photo-control:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 3px; }
.photo-navigation { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 0.5rem; }
.photo-control:first-child { justify-self: start; }
.photo-control:last-child { justify-self: end; }
.photo-count { font-size: 0.9rem; text-align: center; }

@media (max-width: 576px) {
  .photo-viewer { padding: 0.75rem; }
}
</style>
