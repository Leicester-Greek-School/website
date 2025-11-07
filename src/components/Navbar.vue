<template>
  <div>
    <div class="top-header border-top-primary">
      <div class="container py-3">
        <h1 class="school-title mb-0">
          <router-link to="/" class="text-decoration-none" aria-label="Leicester Greek School - Home">
            Leicester Greek School
          </router-link>
        </h1>
        <p class="school-subtitle mb-0">Saint Nicholas and Xenophon</p>
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
              <router-link class="nav-link" to="/contact">Contact Us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.top-header {
  background: linear-gradient(135deg, #faf7f9 0%, #f5e6ed 100%);
  border-top: 5px solid #591434;
  box-shadow: 0 2px 4px rgba(89, 20, 52, 0.1);
}

.school-title {
  font-size: 32px;
  font-family: Georgia, "Times New Roman", Times, serif;
  line-height: 1.2;
  margin: 0;
  color: #591434;
}

.school-title a {
  color: #591434;
  text-decoration: none;
  transition: color 0.3s ease;
}

.school-title a:hover,
.school-title a:focus {
  color: #7a2448;
  text-decoration: none;
}

.school-subtitle {
  font-size: 14px;
  color: #5a4450;
  font-style: italic;
  margin-top: 0.25rem;
}

.navbar {
  background: linear-gradient(to bottom, #f5e6ed 0%, #ede0e7 100%);
  border-bottom: 2px solid #d4b5c4;
  box-shadow: 0 2px 8px rgba(89, 20, 52, 0.08);
}

.custom-toggler {
  border-color: #8b3a5d;
}

.custom-toggler:focus {
  box-shadow: 0 0 0 0.25rem rgba(89, 20, 52, 0.25);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23591434' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.nav-link {
  color: #2d1a22 !important;
  font-size: 14px;
  font-weight: 500;
  padding: 0.6rem 1.2rem !important;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;
}

.nav-link:hover,
.nav-link:focus {
  color: #591434 !important;
  background-color: rgba(89, 20, 52, 0.08);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #591434;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 80%;
}

.router-link-active {
  font-weight: bold;
  color: #591434 !important;
  background-color: rgba(89, 20, 52, 0.1);
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

