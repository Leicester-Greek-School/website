<template>
  <div>
    <div class="top-header border-top-primary">
      <div class="container py-3">
        <div class="d-flex justify-content-start align-items-center flex-wrap gap-3">
          <div class="logo-container">
            <img src="@/assets/images/lgs-logo.jpg" alt="Leicester Greek School Logo" class="school-logo" />
          </div>
          <div class="school-info">
            <h1 class="school-title mb-0">
              <router-link to="/" class="text-decoration-none" aria-label="Leicester Greek School - Home">
                Leicester Greek School
              </router-link>
            </h1>
            <p class="school-subtitle mb-0">Saint Nicholas and Xenophon</p>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light main-navbar" aria-label="Main navigation">
      <div class="container">
        <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
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
              <router-link class="nav-link" to="/policies">Policies</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/announcements">Announcements</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/support-us">Support Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact Us</router-link>
            </li>
          </ul>
          <div class="navbar-cta ms-auto d-flex align-items-center gap-2">
            <router-link to="/register" class="btn btn-primary btn-sm navbar-register-btn">
              <span class="btn-icon"><i class="bi bi-check-lg"></i></span> Register Now
            </router-link>
          </div>
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

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.school-logo {
  width: 80px;
  height: auto;
  max-height: 80px;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  transition: var(--transition-smooth);
}

.school-logo:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-lg);
}

.school-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
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


.navbar {
  background: linear-gradient(to bottom, var(--primary-light) 0%, #f5f9ff 100%);
  border-bottom: 3px solid var(--primary-color);
  box-shadow: var(--shadow-md);
  padding: 0 !important;
  position: sticky;
  top: 0;
  z-index: 100;
}

.main-navbar {
  background: linear-gradient(135deg, var(--white) 0%, var(--primary-light) 100%);
}

.navbar .container {
  padding: 0 1rem;
}

.navbar-cta {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar-register-btn {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  border: 2px solid transparent;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.65rem 1.5rem !important;
  border-radius: 8px;
  letter-spacing: 0.4px;
  transition: var(--transition-smooth);
  white-space: nowrap;
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.navbar-register-btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
}

.navbar-register-btn:active {
  transform: translateY(-1px);
}

.btn-icon {
  font-size: 1.1rem;
  font-weight: 800;
}

.custom-toggler {
  border-color: var(--primary-color);
  padding: 0.6rem 0.8rem;
  transition: var(--transition-smooth);
}

.custom-toggler:hover,
.custom-toggler:focus {
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 0.25rem rgba(89, 15, 50, 0.15);
}

.custom-toggler:focus-visible {
  outline-offset: 0;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23590f32' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2.5' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
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
  background-color: rgba(89, 15, 50, 0.1);
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
  background-color: rgba(89, 15, 50, 0.12);
}

.navbar-register-btn.router-link-active {
  color: #fff !important;
  background-color: transparent;
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
    background-color: rgba(89, 15, 50, 0.15) !important;
    border-left: 4px solid var(--primary-color);
    padding-left: calc(1.5rem - 4px) !important;
  }

  .navbar-cta {
    width: 100%;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 2px solid var(--border-color);
    justify-content: flex-start;
  }

  .navbar-register-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .school-logo {
    width: 60px;
    max-height: 60px;
  }

  .school-title {
    font-size: 1.5rem;
  }

  .school-subtitle {
    font-size: 0.8rem;
  }

  .navbar-register-btn {
    padding: 0.6rem 1.2rem !important;
    font-size: 0.85rem;
  }
}
</style>
