<template>
  <div class="teaching" role="main" :aria-labelledby="titleId">
    <div class="container my-5">
      <div class="mb-3">
        <h2 :id="titleId" class="page-title mb-0">{{ pageTitle }}</h2>
      </div>

      <!-- Replaced list with accessible bilingual table -->
      <div class="info-section" aria-label="Teaching staff groups">
        <table class="table table-sm align-middle" role="table">
          <caption class="visually-hidden">{{ pageTitle }}</caption>
          <thead>
            <tr>
              <th scope="col">{{ selectedLocale === 'el' ? 'Τάξη / Ομάδα' : 'Class / Group' }}</th>
              <th scope="col">{{ selectedLocale === 'el' ? 'Δασκάλα' : 'Teacher' }}</th>
              <th scope="col">{{ selectedLocale === 'el' ? 'Βοηθός' : 'Assistant' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="group in groupsList" :key="group.id">
              <th scope="row" class="group-role">{{ group.role }}</th>
              <td class="group-teacher" :data-label="selectedLocale === 'el' ? 'Δασκάλα' : 'Teacher'">{{ group.teacher }}</td>
              <td class="group-assistant" :data-label="selectedLocale === 'el' ? 'Βοηθός' : 'Assistant'">{{ group.assistant || '—' }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Online classes section -->
      <div class="mb-3 mt-5">
        <h3 class="section-title mb-0">{{ onlineSectionTitle }}</h3>
      </div>
      <div class="info-section" :aria-label="selectedLocale === 'el' ? 'Δασκάλες – Online Τάξεις' : 'Teachers – Online Classes'">
        <table class="table table-sm align-middle" role="table">
          <caption class="visually-hidden">{{ onlineSectionTitle }}</caption>
          <thead>
            <tr>
              <th scope="col">{{ selectedLocale === 'el' ? 'Τάξη / Ομάδα' : 'Class / Group' }}</th>
              <th scope="col">{{ selectedLocale === 'el' ? 'Δασκάλα' : 'Teacher' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="group in groupsOnlineList" :key="group.id">
              <th scope="row" class="group-role">{{ group.role }}</th>
              <td class="group-teacher" :data-label="selectedLocale === 'el' ? 'Δασκάλα' : 'Teacher'">{{ group.teacher }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { PAGE_TITLES, TEACHING_GROUPS, TEACHING_GROUPS_ONLINE } from '@/data/staff';
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
    pageTitle() {
      const map = PAGE_TITLES.teaching || {};
      return map[this.selectedLocale] || map.en || 'The Teaching Staff';
    },
    groupsList() {
      return TEACHING_GROUPS.map(g => ({
        id: g.id,
        role: this.selectedLocale === 'el' ? g.role_el : g.role_en,
        teacher: g.teacher,
        assistant: g.assistant
      }));
    },
    onlineSectionTitle() {
      return this.selectedLocale === 'el' ? 'Δασκάλες – Online Τάξεις' : 'Teachers – Online Classes';
    },
    groupsOnlineList() {
      return TEACHING_GROUPS_ONLINE.map(g => ({
        id: g.id,
        role: this.selectedLocale === 'el' ? g.role_el : g.role_en,
        teacher: g.teacher
      }));
    }
  }
};
</script>

<style scoped>
.teaching {
  background-color: var(--white);
  min-height: 70vh;
}

.page-title {
  font-size: 28px;
  color: var(--primary-color);
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  border-bottom: 3px solid var(--accent-gold);
  padding-bottom: 0.5rem;
  display: inline-block;
}

.section-title {
  font-size: 22px;
  color: var(--primary-color);
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  border-bottom: 2px solid var(--accent-gold);
  padding-bottom: 0.35rem;
  display: inline-block;
}

.info-section {
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: var(--background-cream);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(11, 94, 215, 0.08);
  border: 1px solid var(--border-color);
}

.table {
  width: 100%;
  background-color: var(--white);
}

.table thead th {
  background-color: var(--primary-color);
  color: var(--white);
  font-weight: 600;
}

.table tbody tr {
  background-color: var(--white);
}

.table tbody tr:nth-child(even) {
  background-color: var(--primary-light);
}

.group-role {
  font-weight: 600;
}

.group-teacher,
.group-assistant {
  color: var(--text-dark);
}

/* Visually hidden utility for screen readers */
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}

@media (max-width: 640px) {
  .table thead {
    display: none;
  }

  .table tbody tr {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0.75rem 0.5rem;
  }

  .table tbody td,
  .table tbody th {
    display: flex;
    justify-content: space-between;
    padding: 0.35rem 0.5rem;
  }

  .group-role {
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 0.5rem;
  }

  .group-teacher::before,
  .group-assistant::before {
    content: attr(data-label);
    font-weight: 600;
    margin-right: 0.5rem;
  }
}
</style>
