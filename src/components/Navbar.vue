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
  box-shadow: var(--shadow-md);
  padding: 1rem 0;
}

.school-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-family: Georgia, 'Times New Roman', Times, serif;
  line-height: 1.2;
  margin: 0;
  color: var(--primary-color);
  font-weight: 700;
}

.school-title a {
  color: var(--primary-color);
  text-decoration: none;
  border-bottom: none;
  transition: var(--transition-smooth);
  display: inline-block;
}

.school-title a:hover,
.school-title a:focus {
  color: var(--secondary-color);
  text-decoration: none;
  transform: translateX(2px);
}

.school-subtitle {
  font-size: clamp(0.875rem, 2vw, 1rem);
  color: var(--accent-gold);
  font-style: italic;
  font-weight: 500;
  margin-top: 0.25rem;
  letter-spacing: 0.5px;
}

.locale-switch {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
}

.btn-locale {
  background: var(--white);
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 25px;
  cursor: pointer;
  line-height: 1;
  transition: var(--transition-smooth);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: var(--shadow-sm);
}

.btn-locale:hover, .btn-locale:focus {
  background: var(--primary-color);
  color: var(--white);
  box-shadow: var(--shadow-md);
  outline: none;
  transform: translateY(-2px);
}

.btn-locale.active {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: var(--white);
  border-color: transparent;
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.navbar {
  background: linear-gradient(to bottom, var(--primary-light) 0%, #f5f9ff 100%);
  border-bottom: 3px solid var(--border-color);
  box-shadow: var(--shadow-md);
  padding: 0 !important;
}

.navbar .container {
  padding: 0 1rem;
}

.custom-toggler {
  border-color: var(--primary-color);
  padding: 0.6rem 0.8rem;
  transition: var(--transition-smooth);
}

.custom-toggler:hover,
.custom-toggler:focus {
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 0.25rem rgba(11, 94, 215, 0.15);
}

.custom-toggler:focus-visible {
  outline-offset: 0;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%230b5ed7' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2.5' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
}

.navbar-nav {
  padding: 0.5rem 0;
  gap: 0.25rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: var(--text-dark) !important;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem !important;
  border-radius: 6px;
  transition: var(--transition-smooth);
  position: relative;
  letter-spacing: 0.3px;
}

.nav-link:hover,
.nav-link:focus {
  color: var(--primary-color) !important;
  background-color: rgba(11, 94, 215, 0.1);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 50%;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);
  border-radius: 1.5px;
}

.nav-link:hover::after {
  width: 70%;
}

.router-link-active {
  font-weight: 700;
  color: var(--primary-color) !important;
  background-color: rgba(11, 94, 215, 0.12);
}

.router-link-active::after {
  width: 70%;
  background: var(--primary-color);
}

@media (max-width: 991px) {
  .navbar-nav {
    padding: 1rem 0;
  }

  .nav-link {
    padding: 0.75rem 1.5rem !important;
    margin: 0.25rem 0;
    border-radius: 8px;
  }

  .nav-link::after {
    display: none;
  }

  .router-link-active::after {
    display: none;
  }

  .router-link-active {
    background-color: rgba(11, 94, 215, 0.15) !important;
    border-left: 4px solid var(--primary-color);
    padding-left: calc(1.5rem - 4px) !important;
  }
}

@media (max-width: 576px) {
  .school-title {
    font-size: 1.5rem;
  }

  .school-subtitle {
    font-size: 0.8rem;
  }

  .locale-switch {
    gap: 0.5rem;
  }

  .btn-locale {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
}
</style>
