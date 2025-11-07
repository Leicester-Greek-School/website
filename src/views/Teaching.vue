<template>
  <div class="teaching" role="main" :aria-labelledby="titleId">
    <div class="container my-5">
      <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
        <h2 :id="titleId" class="page-title mb-0">{{ pageTitle }}</h2>
        <div class="locale-switch" role="group" aria-label="Language selection">
          <button
            v-for="loc in locales"
            :key="loc"
            type="button"
            class="btn-locale"
            :class="{ active: loc === selectedLocale }"
            @click="onSetLocale(loc)"
          >
            {{ loc === 'en' ? 'English' : 'Ελληνικά' }}
          </button>
        </div>
      </div>

      <div class="info-section" aria-label="Teaching staff list">
        <ul class="staff-list" aria-describedby="staffNote">
          <li v-for="(item, idx) in staffList" :key="idx">
            <span class="role">{{ item.role }}:</span>
            <span class="name" v-if="item.teachers.length === 1">{{ item.teachers[0] }}</span>
            <span class="name" v-else>
              <span v-for="(t, i) in item.teachers" :key="i">
                {{ t }}<span v-if="i < item.teachers.length - 1">, </span>
              </span>
            </span>
          </li>
        </ul>
        <p id="staffNote" class="visually-hidden">Teaching staff by class and level.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { STAFF, LOCALES, PAGE_TITLES } from '@/data/staff';
import { localeStore, setLocale } from '@/stores/locale';

export default {
  name: 'Teaching',
  data() {
    return {
      locales: LOCALES,
      titleId: 'teachingTitle'
    };
  },
  computed: {
    selectedLocale() {
      return localeStore.locale;
    },
    staffList() {
      return STAFF[this.selectedLocale] || STAFF.en;
    },
    pageTitle() {
      const map = PAGE_TITLES.teaching || {};
      return map[this.selectedLocale] || map.en || 'The Teaching Staff';
    }
  },
  methods: {
    onSetLocale(loc) {
      setLocale(loc);
    }
  }
};
</script>

<style scoped>
.teaching {
  background-color: #ffffff;
  min-height: 70vh;
}

.page-title {
  font-size: 28px;
  color: #591434;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  border-bottom: 3px solid #d4a574;
  padding-bottom: 0.5rem;
  display: inline-block;
}

.info-section {
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: #faf7f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(89, 20, 52, 0.1);
  border: 1px solid #d4b5c4;
}

.staff-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.staff-list li {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: baseline;
  padding: 0.75rem 1rem;
  background-color: #ffffff;
  border: 1px solid #d4b5c4;
  border-left: 4px solid #591434;
  border-radius: 6px;
  margin-bottom: 0.75rem;
}

.role {
  font-weight: 700;
  color: #591434;
}

.name {
  color: #2d1a22;
}

/* Visually hidden utility for screen readers */
.visually-hidden {
  position: absolute !important;
  height: 1px; width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}

.locale-switch {
  display: flex;
  gap: 0.5rem;
}

.btn-locale {
  background: #ffffff;
  border: 2px solid #591434;
  color: #591434;
  padding: 0.4rem 0.9rem;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
  line-height: 1;
  transition: all 0.25s ease;
}

.btn-locale:hover, .btn-locale:focus {
  background: #591434;
  color: #ffffff;
  box-shadow: 0 0 0 3px rgba(89, 20, 52, 0.25);
  outline: none;
}

.btn-locale.active {
  background: linear-gradient(135deg, #591434 0%, #7a2448 100%);
  color: #ffffff;
  border-color: #591434;
  box-shadow: 0 2px 6px rgba(89, 20, 52, 0.35);
}

@media (prefers-reduced-motion: reduce) {
  .btn-locale {
    transition: none;
  }
}
</style>
