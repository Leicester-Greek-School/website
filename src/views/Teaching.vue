<template>
  <div class="teaching" role="main" :aria-labelledby="titleId">
    <div class="container my-5">
      <div class="mb-3">
        <h2 :id="titleId" class="page-title mb-0">{{ pageTitle }}</h2>
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
import { STAFF, PAGE_TITLES } from '@/data/staff';
import { localeStore } from '@/stores/locale';

export default {
  name: 'Teaching',
  data() {
    return {
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
</style>
