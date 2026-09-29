<template>
  <div class="teaching" role="main" :aria-labelledby="titleId">
    <div class="breadcrumb-section">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb-nav">
          <ol class="breadcrumb-list">
            <li><router-link to="/">Home</router-link></li>
            <li class="active" aria-current="page">{{ labels.breadcrumb }}</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container my-5">
      <h2 :id="titleId" class="page-title">{{ pageTitle }}</h2>

      <div class="info-section">
        <h3 class="section-title">{{ labels.introductionTitle }}</h3>
        <p class="text-justify">
          {{ labels.introductionBody }}
        </p>

        <h3 class="section-title">{{ labels.leadershipTitle }}</h3>
        <div class="staff-table-wrapper">
          <table class="staff-table">
            <thead>
              <tr>
                <th scope="col">{{ labels.roleColumn }}</th>
                <th scope="col">{{ labels.nameColumn }}</th>
                <th scope="col">{{ labels.responsibilityColumn }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ headteacher.title }}</td>
                <td>{{ headteacher.name }}</td>
                <td>{{ headteacher.role }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="section-title">{{ labels.classroomTitle }}</h3>
        <div class="staff-table-wrapper">
          <table class="staff-table">
            <thead>
              <tr>
                <th scope="col">{{ labels.teacherColumn }}</th>
                <th scope="col">{{ labels.classColumn }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="group in classroomTeachers" :key="group.id">
                <td>{{ group.teacher }}</td>
                <td>{{ group.role }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="section-title">{{ labels.assistantTitle }}</h3>
        <div class="staff-table-wrapper">
          <table class="staff-table">
            <thead>
              <tr>
                <th scope="col">{{ labels.assistantColumn }}</th>
                <th scope="col">{{ labels.classColumn }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="assistant in assistantTeachers" :key="assistant.id">
                <td>{{ assistant.assistant }}</td>
                <td>{{ assistant.role }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="section-title">{{ labels.onlineTitle }}</h3>
        <div class="staff-table-wrapper">
          <table class="staff-table">
            <thead>
              <tr>
                <th scope="col">{{ labels.teacherColumn }}</th>
                <th scope="col">{{ labels.classColumn }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="group in groupsOnlineList" :key="group.id">
                <td>{{ group.teacher }}</td>
                <td>{{ group.role }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PAGE_TITLES, TEACHING_GROUPS, TEACHING_GROUPS_ONLINE } from '@/data/staff';
import { localeStore } from '@/stores/locale';
import { injectJsonLd, removeJsonLd, breadcrumbSchema } from '@/utils/seo';

export default {
  name: 'Teaching',
  mounted() {
    injectJsonLd('breadcrumb-teaching', breadcrumbSchema([
      { name: 'Home', url: 'https://leicestergreekschool.com/' },
      { name: 'Teaching Staff', url: 'https://leicestergreekschool.com/teaching' }
    ]));
  },
  beforeUnmount() {
    removeJsonLd('breadcrumb-teaching');
  },
  data() {
    return {
      titleId: 'teachingTitle'
    };
  },
  computed: {
    selectedLocale() {
      return localeStore.locale;
    },
    labels() {
      return this.selectedLocale === 'el'
        ? {
          breadcrumb: 'Διδασκαλία',
          introductionTitle: 'Διδακτικό Προσωπικό',
          introductionBody: 'Το διδακτικό προσωπικό του Leicester Greek School υποστηρίζει τους μαθητές σε κάθε στάδιο της εκπαιδευτικής τους πορείας, με διδασκαλία στην τάξη, υποστηρικτικό προσωπικό και διαδικτυακά μαθήματα. Οι παρακάτω πίνακες παρουσιάζουν με σαφήνεια τις τάξεις και τους εκπαιδευτικούς που τις αναλαμβάνουν.',
          leadershipTitle: 'Σχολική Ηγεσία',
          classroomTitle: 'Διδασκαλία στην Τάξη',
          assistantTitle: 'Βοηθοί Δασκάλων',
          onlineTitle: 'Διαδικτυακή Διδασκαλία',
          roleColumn: 'Ρόλος',
          nameColumn: 'Όνομα',
          responsibilityColumn: 'Αρμοδιότητα',
          classColumn: 'Τάξη / Τομέας',
          teacherColumn: 'Εκπαιδευτικός',
          assistantColumn: 'Βοηθός'
        }
        : {
          breadcrumb: 'Teaching',
          introductionTitle: 'Teaching Staff',
          introductionBody: 'The teaching team at Leicester Greek School supports pupils at every stage of their learning journey through classroom teaching, assistant support, and online provision. The tables below set out each class and the member of staff responsible for it.',
          leadershipTitle: 'School Leadership',
          classroomTitle: 'Classroom Teaching',
          assistantTitle: 'Assistant Teachers',
          onlineTitle: 'Online Teaching',
          roleColumn: 'Role',
          nameColumn: 'Name',
          responsibilityColumn: 'Responsibility',
          classColumn: 'Class / Area',
          teacherColumn: 'Teacher',
          assistantColumn: 'Assistant Teacher'
        };
    },
    pageTitle() {
      const map = PAGE_TITLES.teaching || {};
      return map[this.selectedLocale] || map.en || 'The Teaching Staff (2026-2027)';
    },
    headteacher() {
      return {
        name: this.selectedLocale === 'el' ? 'Μαρία Συμεωνίδου' : 'Μαρία Συμεωνίδου',
        title: this.selectedLocale === 'el' ? 'Διευθύντρια' : 'Headteacher',
        role: this.selectedLocale === 'el' ? 'Διοίκηση & Συντονισμός' : 'Administration & Coordination'
      };
    },
    classroomTeachers() {
      return TEACHING_GROUPS
        .filter(g => g.teacher && g.id !== 'support')
        .map(g => ({
          id: g.id,
          role: this.selectedLocale === 'el' ? g.role_el : g.role_en,
          teacher: g.teacher
        }));
    },
    assistantTeachers() {
      return TEACHING_GROUPS
        .filter(g => g.assistant)
        .map(g => ({
          id: g.id + '_assistant',
          role: this.selectedLocale === 'el' ? g.role_el : g.role_en,
          assistant: g.assistant
        }));
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
}

/* Breadcrumb Navigation */
.breadcrumb-section {
  background: linear-gradient(135deg, var(--primary-light) 0%, rgba(212, 165, 116, 0.05) 100%);
  border-bottom: 2px solid var(--border-color);
  padding: 1.5rem 0;
  margin-bottom: 2rem;
}

.breadcrumb-nav {
  display: flex;
  align-items: center;
}

.breadcrumb-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
}

.breadcrumb-list li {
  display: flex;
  align-items: center;
}

.breadcrumb-list li:not(:last-child)::after {
  content: '›';
  margin-left: 0.75rem;
  color: var(--text-light);
  font-weight: 600;
  font-size: 1.25rem;
}

.breadcrumb-list a {
  color: var(--link-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: var(--transition-smooth);
  border-bottom: 2px solid transparent;
}

.breadcrumb-list a:hover {
  color: var(--link-hover);
  border-bottom: 2px solid var(--link-hover);
}

.breadcrumb-list li.active {
  color: var(--text-dark);
  font-weight: 600;
  font-size: 0.95rem;
}

.page-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: var(--primary-color);
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-bottom: 2rem;
  font-weight: 700;
  padding-bottom: 1rem;
  border-bottom: 3px solid var(--accent-gold);
  display: inline-block;
  letter-spacing: -0.5px;
}

.section-title {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  color: var(--primary-color);
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 2rem 0 1.25rem 0;
  font-weight: 700;
  position: relative;
  padding-left: 1.25rem;
  letter-spacing: 0.3px;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 1.5rem;
  background: linear-gradient(180deg, var(--primary-color), var(--secondary-color));
  border-radius: 2.5px;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.info-section {
  margin-bottom: 3rem;
  background: linear-gradient(135deg, var(--primary-light) 0%, #f8fbff 100%);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  border: 2px solid var(--border-color);
  animation: slideInUp 0.8s ease-out;
}

.text-justify {
  text-align: justify;
  margin-bottom: 1.5rem;
  line-height: 1.9;
  color: var(--text-dark);
  font-size: 1rem;
  letter-spacing: 0.2px;
}

.staff-table-wrapper {
  margin: 1.5rem 0 2rem;
  background: var(--white);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  overflow-x: auto;
  box-shadow: var(--shadow-md);
}

.staff-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 520px;
}

.staff-table th,
.staff-table td {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border-color);
  text-align: left;
  vertical-align: top;
}

.staff-table thead th {
  background: linear-gradient(135deg, var(--primary-light) 0%, rgba(212, 165, 116, 0.1) 100%);
  color: var(--primary-color);
  font-weight: 700;
  letter-spacing: 0.2px;
}

.staff-table tbody tr:last-child td {
  border-bottom: none;
}

.staff-table tbody tr:hover {
  background-color: var(--primary-light);
}

.staff-table td {
  color: var(--text-dark);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .info-section {
    padding: 1.5rem;
  }
}

@media (max-width: 600px) {
  .page-title {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 1.1rem;
  }

  .staff-table th,
  .staff-table td {
    padding: 0.9rem 1rem;
  }
}
</style>
