<template>
  <div>
    <div class="top-header border-top-primary">
      <div class="container py-3">
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <h1 class="school-title mb-0">
              <router-link to="/" class="text-decoration-none" aria-label="Leicester Greek School - Home">
                Leicester Greek School
              </router-link>
            </h1>
            <p class="school-subtitle mb-0">Saint Nicholas and Xenophon</p>
          </div>
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
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light" aria-label="Main navigation">
      <div class="container">
        <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/" aria-current="page">Homepage</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">Information</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/teaching">Teaching</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/committee">Committee</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/policies">Policies</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/announcements">Announcements</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact Us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { LOCALES } from '@/data/staff';
import { localeStore, setLocale } from '@/stores/locale';

export default {
  name: 'Navbar',
  data() {
    return {
      locales: LOCALES
    };
  },
  computed: {
    selectedLocale() {
      return localeStore.locale;
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
.top-header {
  background: linear-gradient(135deg, var(--background-cream) 0%, var(--primary-light) 100%);
  border-top: 5px solid var(--primary-color);
  box-shadow: 0 2px 4px rgba(11, 94, 215, 0.1);
}

.school-title {
  font-size: 32px;
  font-family: Georgia, "Times New Roman", Times, serif;
  line-height: 1.2;
  margin: 0;
  color: var(--primary-color);
}

.school-title a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.school-title a:hover,
.school-title a:focus {
  color: var(--secondary-color);
  text-decoration: none;
}

.school-subtitle {
  font-size: 14px;
  color: var(--text-medium);
  font-style: italic;
  margin-top: 0.25rem;
}

.locale-switch {
  display: flex;
  gap: 0.5rem;
}

.btn-locale {
  background: var(--white);
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.35rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
  line-height: 1;
  transition: all 0.25s ease;
}

.btn-locale:hover, .btn-locale:focus {
  background: var(--primary-color);
  color: var(--white);
  box-shadow: 0 0 0 3px rgba(11, 94, 215, 0.25);
  outline: none;
}

.btn-locale.active {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: var(--white);
  border-color: var(--primary-color);
  box-shadow: 0 2px 6px rgba(11, 94, 215, 0.35);
}

.navbar {
  background: linear-gradient(to bottom, var(--primary-light) 0%, #f3f8ff 100%);
  border-bottom: 2px solid var(--border-color);
  box-shadow: 0 2px 8px rgba(11, 94, 215, 0.08);
}

.custom-toggler {
  border-color: var(--secondary-color);
}

.custom-toggler:focus {
  box-shadow: 0 0 0 0.25rem rgba(11, 94, 215, 0.25);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%230b5ed7' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.nav-link {
  color: var(--text-dark) !important;
  font-size: 14px;
  font-weight: 500;
  padding: 0.6rem 1.2rem !important;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;
}

.nav-link:hover,
.nav-link:focus {
  color: var(--primary-color) !important;
  background-color: rgba(11, 94, 215, 0.08);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 80%;
}

.router-link-active {
  font-weight: bold;
  color: var(--primary-color) !important;
  background-color: rgba(11, 94, 215, 0.1);
}

.router-link-active::after {
  width: 80%;
}

@media (max-width: 991px) {
  .navbar-nav {
    padding: 1rem 0;
  }

  .nav-link {
    margin: 0.25rem 0;
  }
}
</style>
