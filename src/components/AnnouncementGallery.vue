<template>
  <section class="announcement-gallery" aria-label="Article photos">
    <h2>Photos</h2>
    <p class="gallery-hint">Select a photo to enlarge it.</p>
    <div class="gallery-grid">
      <a v-for="image in images" :key="image.full" :href="image.full" target="_blank" rel="noopener noreferrer"
         :aria-label="`Enlarge photo: ${image.alt}`" @click.prevent="open(image)">
        <img :src="image.thumbnail" :alt="image.alt" width="640" height="480" loading="lazy" decoding="async" />
      </a>
    </div>
    <dialog ref="viewer" class="photo-viewer" aria-label="Photo viewer" @click="closeOnBackdrop" @close="activeImage = null">
      <button type="button" class="photo-close" autofocus @click="$refs.viewer.close()">Close photo <span aria-hidden="true">×</span></button>
      <template v-if="activeImage">
        <img :src="activeImage.full" :alt="activeImage.alt" />
        <p>{{ activeImage.alt }}</p>
      </template>
    </dialog>
  </section>
</template>

<script>
export default {
  name: 'AnnouncementGallery',
  props: { images: { type: Array, required: true } },
  data() { return { activeImage: null }; },
  methods: {
    open(image) {
      this.activeImage = image;
      this.$nextTick(() => this.$refs.viewer.showModal());
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
.photo-viewer { width: fit-content; max-width: min(95vw, 1200px); max-height: 95dvh; border: 0; border-radius: 12px; padding: 1rem; color: var(--text-dark); }
.photo-viewer::backdrop { background: rgba(0, 0, 0, 0.8); }
.photo-viewer img { display: block; max-width: 100%; max-height: 75dvh; width: auto; height: auto; margin: 0 auto; object-fit: contain; }
.photo-viewer p { max-width: 65ch; margin: 0.75rem 0 0; font-size: 0.95rem; }
.photo-close { display: block; margin: 0 0 1rem auto; padding: 0.5rem 0.75rem; border: 1px solid var(--primary-color); border-radius: 6px; background: var(--white); color: var(--primary-color); font-weight: 600; }
.photo-close:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 3px; }
</style>
