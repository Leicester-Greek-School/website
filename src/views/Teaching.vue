<template>
  <div class="teaching" role="main" :aria-labelledby="titleId">
    <!-- Breadcrumb Navigation -->
    <div class="breadcrumb-section">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb-nav">
          <ol class="breadcrumb-list">
            <li><router-link to="/">Home</router-link></li>
            <li class="active" aria-current="page">{{ selectedLocale === 'el' ? 'Διδασκαλία' : 'Teaching' }}</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container my-5">
      <div class="mb-4">
        <h2 :id="titleId" class="page-title mb-0">{{ pageTitle }}</h2>
      </div>

      <!-- Headteacher Section -->
      <div class="headteacher-section mb-5">
        <div class="row justify-content-center">
          <div class="col-md-4 col-lg-3">
            <div class="card teacher-card shadow-sm">
              <img
                v-if="headteacher.image"
                :src="headteacher.image"
                :alt="headteacher.name"
                class="card-img-top teacher-photo"
              />
              <div v-else class="card-img-top teacher-photo-placeholder">
                <div class="photo-icon">
                  <i class="bi bi-person-circle"></i>
                </div>
              </div>
              <div class="card-body text-center">
                <h5 class="card-title teacher-name">{{ headteacher.name }}</h5>
                <p class="card-text teacher-title">{{ headteacher.title }}</p>
                <p class="card-text teacher-role text-muted small">{{ headteacher.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tree Structure: Classroom and Online Sections -->
      <div class="teaching-structure">
        <div class="row">
          <!-- Classroom Section -->
          <div class="col-lg-8 mb-4">
            <div class="section-header mb-4">
              <h3 class="section-title">
                <i class="bi bi-building me-2"></i>{{ selectedLocale === 'el' ? 'Διδασκαλία στην Τάξη' : 'Classroom Teaching' }}
              </h3>
            </div>
            <div class="row g-3">
              <div class="col-md-6 col-lg-4" v-for="group in classroomTeachers" :key="group.id">
                <div class="card teacher-card h-100 shadow-sm">
                  <img
                    v-if="group.image"
                    :src="group.image"
                    :alt="group.teacher"
                    class="card-img-top teacher-photo"
                  />
                  <div v-else class="card-img-top teacher-photo-placeholder">
                    <div class="photo-icon-small">
                      <i class="bi bi-person-circle"></i>
                    </div>
                  </div>
                  <div class="card-body">
                    <h6 class="card-title teacher-name">{{ group.teacher }}</h6>
                    <p class="card-text teacher-role small mb-0">{{ group.role }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Assistant Teachers Section -->
          <div class="col-lg-4 mb-4">
            <div class="section-header mb-4">
              <h3 class="section-title">
                <i class="bi bi-people me-2"></i>{{ selectedLocale === 'el' ? 'Βοηθοί Δασκάλων' : 'Assistant Teachers' }}
              </h3>
            </div>
            <div class="row g-3">
              <div class="col-md-6 col-lg-12" v-for="assistant in assistantTeachers" :key="assistant.id">
                <div class="card teacher-card h-100 shadow-sm">
                  <img
                    v-if="assistant.image"
                    :src="assistant.image"
                    :alt="assistant.assistant"
                    class="card-img-top teacher-photo"
                  />
                  <div v-else class="card-img-top teacher-photo-placeholder">
                    <div class="photo-icon-small">
                      <i class="bi bi-person-circle"></i>
                    </div>
                  </div>
                  <div class="card-body">
                    <h6 class="card-title teacher-name">{{ assistant.assistant }}</h6>
                    <p class="card-text teacher-role small mb-0">{{ assistant.role }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Online Section -->
        <div class="row mt-4">
          <div class="col-12">
            <div class="section-header mb-4">
              <h3 class="section-title">
                <i class="bi bi-laptop me-2"></i>{{ selectedLocale === 'el' ? 'Online Διδασκαλία' : 'Online Teaching' }}
              </h3>
            </div>
            <div class="row g-3">
              <div class="col-md-6 col-lg-3" v-for="group in groupsOnlineList" :key="group.id">
                <div class="card teacher-card h-100 shadow-sm">
                  <div class="card-img-top teacher-photo-placeholder">
                    <div class="photo-icon-small">
                      <i class="bi bi-person-circle"></i>
                    </div>
                  </div>
                  <div class="card-body">
                    <h6 class="card-title teacher-name">{{ group.teacher }}</h6>
                    <p class="card-text teacher-role small mb-0">{{ group.role }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  methods: {
    getTeacherImage(imageName) {
      if (!imageName) return null;
      try {
        return require(`@/assets/images/teachers/${imageName}`);
      } catch (e) {
        return null;
      }
    }
  },
  computed: {
    selectedLocale() {
      return localeStore.locale;
    },
    pageTitle() {
      const map = PAGE_TITLES.teaching || {};
      return map[this.selectedLocale] || map.en || 'The Teaching Staff (2026-2027)';
    },
    headteacher() {
      return {
        name: this.selectedLocale === 'el' ? 'Μαρία Συμεωνίδου' : 'Μαρία Συμεωνίδου',
        title: this.selectedLocale === 'el' ? 'Διευθύντρια' : 'Headteacher',
        role: this.selectedLocale === 'el' ? 'Διοίκηση & Συντονισμός' : 'Administration & Coordination',
        image: this.getTeacherImage('Maria_Symeonidou.jpeg')
      };
    },
    classroomTeachers() {
      return TEACHING_GROUPS
        .filter(g => g.teacher && g.id !== 'support')
        .map(g => ({
          id: g.id,
          role: this.selectedLocale === 'el' ? g.role_el : g.role_en,
          teacher: g.teacher,
          image: this.getTeacherImage(g.teacherImage)
        }));
    },
    assistantTeachers() {
      return TEACHING_GROUPS
        .filter(g => g.assistant)
        .map(g => ({
          id: g.id + '_assistant',
          role: this.selectedLocale === 'el' ? g.role_el : g.role_en,
          assistant: g.assistant,
          image: this.getTeacherImage(g.assistantImage)
        }))
        .concat(
          TEACHING_GROUPS
            .filter(g => g.id === 'support')
            .map(g => ({
              id: g.id,
              role: this.selectedLocale === 'el' ? g.role_el : g.role_en,
              assistant: g.assistant,
              image: null
            }))
        );
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
  font-weight: 700;
  border-bottom: 3px solid var(--accent-gold);
  padding-bottom: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 0.3px;
}

/* Headteacher Section */
.headteacher-section {
  position: relative;
  padding: 3rem 0;
  animation: slideInUp 0.8s ease-out;
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

.headteacher-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 50px;
  background: linear-gradient(to bottom, var(--accent-gold), transparent);
  border-radius: 2px;
}

/* Teacher Cards */
.teacher-card {
  border: 2px solid var(--border-color);
  border-radius: 12px;
  transition: var(--transition-smooth);
  overflow: hidden;
  background-color: var(--white);
  box-shadow: var(--shadow-sm);
  position: relative;
}

.teacher-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-gold));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.teacher-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
}

.teacher-card:hover::before {
  opacity: 1;
}

/* Teacher Photo Styles */
.teacher-photo {
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: center;
  border-bottom: 3px solid var(--border-color);
  transition: transform 0.4s ease;
}

.teacher-card:hover .teacher-photo {
  transform: scale(1.05);
}

/* Photo Placeholder Styles */
.teacher-photo-placeholder {
  background: linear-gradient(135deg, var(--primary-light) 0%, #f5f9ff 100%);
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid var(--border-color);
  position: relative;
  overflow: hidden;
}

.teacher-photo-placeholder::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(11, 94, 215, 0.03) 1px, transparent 1px);
  background-size: 30px 30px;
  animation: driftPattern 15s linear infinite;
}

@keyframes driftPattern {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(30px, 30px);
  }
}

.photo-icon {
  font-size: 80px;
  color: var(--primary-color);
  opacity: 0.15;
  position: relative;
  z-index: 1;
}

.photo-icon-small {
  font-size: 60px;
  color: var(--primary-color);
  opacity: 0.15;
  position: relative;
  z-index: 1;
}

/* Card Content */
.card-body {
  padding: 1.5rem;
}

.teacher-name {
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  letter-spacing: 0.3px;
}

.teacher-title {
  font-weight: 700;
  color: var(--accent-gold);
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  letter-spacing: 0.2px;
}

.teacher-role {
  color: var(--text-medium);
  font-size: 0.9rem;
  margin-bottom: 0;
  letter-spacing: 0.1px;
}

/* Section Headers */
.section-header {
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--border-color);
}

/* Teaching Structure Layout */
.teaching-structure {
  margin-top: 3rem;
}

/* Responsive adjustments */
@media (max-width: 991px) {
  .headteacher-section::after {
    display: none;
  }

  .teacher-photo-placeholder {
    height: 180px;
  }

  .teacher-photo {
    height: 180px;
  }

  .photo-icon {
    font-size: 70px;
  }

  .photo-icon-small {
    font-size: 50px;
  }

  .section-title {
    font-size: 1.4rem;
  }
}

@media (max-width: 767px) {
  .teacher-photo-placeholder {
    height: 160px;
  }

  .teacher-photo {
    height: 160px;
  }

  .page-title {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 1.2rem;
  }

  .card-body {
    padding: 1.25rem;
  }

  .teacher-name {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .teacher-photo {
    height: 140px;
  }

  .teacher-photo-placeholder {
    height: 140px;
  }

  .photo-icon {
    font-size: 50px;
  }

  .photo-icon-small {
    font-size: 40px;
  }
}
</style>
