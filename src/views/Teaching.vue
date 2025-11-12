<template>
  <div class="teaching" role="main" :aria-labelledby="titleId">
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

export default {
  name: 'Teaching',
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
      return map[this.selectedLocale] || map.en || 'The Teaching Staff';
    },
    headteacher() {
      return {
        name: this.selectedLocale === 'el' ? 'Μαρία Συμεωνίδου' : 'Maria Symeonidou',
        title: this.selectedLocale === 'el' ? 'Διευθύντρια' : 'Headteacher (interim)',
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

/* Headteacher Section */
.headteacher-section {
  position: relative;
  padding: 2rem 0;
}

.headteacher-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 40px;
  background: linear-gradient(to bottom, var(--accent-gold), transparent);
}

/* Teacher Cards */
.teacher-card {
  border: 2px solid var(--border-color);
  border-radius: 12px;
  transition: all 0.3s ease;
  overflow: hidden;
  background-color: var(--white);
}

.teacher-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(11, 94, 215, 0.15) !important;
  border-color: var(--accent-gold);
}

/* Teacher Photo Styles */
.teacher-photo {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-bottom: 2px solid var(--border-color);
}

/* Photo Placeholder Styles */
.teacher-photo-placeholder {
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--background-cream) 100%);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid var(--border-color);
}

.photo-icon {
  font-size: 80px;
  color: var(--primary-color);
  opacity: 0.3;
}

.photo-icon-small {
  font-size: 60px;
  color: var(--primary-color);
  opacity: 0.3;
}

/* Card Content */
.teacher-name {
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.teacher-title {
  font-weight: 600;
  color: var(--accent-gold);
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
}

.teacher-role {
  color: var(--text-dark);
  font-size: 0.85rem;
  margin-bottom: 0;
}

/* Section Headers */
.section-header {
  position: relative;
}

/* Teaching Structure Layout */
.teaching-structure {
  margin-top: 2rem;
}

/* Responsive adjustments */
@media (max-width: 991px) {
  .headteacher-section::after {
    display: none;
  }

  .teacher-photo-placeholder {
    height: 180px;
  }

  .photo-icon {
    font-size: 70px;
  }

  .photo-icon-small {
    font-size: 50px;
  }
}

@media (max-width: 767px) {
  .teacher-photo-placeholder {
    height: 160px;
  }

  .page-title {
    font-size: 24px;
  }

  .section-title {
    font-size: 20px;
  }
}
</style>
