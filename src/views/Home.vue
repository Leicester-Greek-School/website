<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="row justify-content-center py-5">
          <div class="col-lg-8 col-xl-7">
            <div class="hero-text-wrapper">
              <h1 class="hero-title">Welcome to Leicester Greek School</h1>
              <p class="hero-subtitle">Saint Nicholas and Xenophon</p>
              <p class="hero-description">
                Celebrating Greek language and culture in Leicester and Leicestershire since the 1980s. A vibrant community school teaching Modern Greek, dance and music — welcoming children from age 4 and adults of all levels.
              </p>
              <div class="hero-cta-buttons">
                <router-link to="/register" class="btn btn-primary btn-lg">
                  <span>Register Now</span>
                </router-link>
                <router-link to="/about" class="btn btn-outline-primary btn-lg">
                  <span>Learn More</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="container my-5 py-3">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="welcome-card">
            <h2 class="page-title">About Us</h2>

            <p class="lead-text">
              Saint Nicholas and Xenophon Greek School is located in Leicester and was established in the 1980's
              by the Greek and Cypriot Community. Serving families across <strong>Leicester, Leicestershire and the East Midlands</strong>, our curriculum is provided by the
              <a href="http://kea.schools.ac.cy/" target="_blank" rel="noopener noreferrer" class="external-link">Cyprus Educational Mission in the UK</a>.
            </p>

            <h3 class="section-title">What We Teach</h3>

            <div class="aims-list-wrapper">
              <div class="aims-list">
                <div class="aim-item">
                  <span class="aim-icon"><i class="bi bi-chat-square-text-fill"></i></span>
                  <span>Modern Greek language — children &amp; adults</span>
                </div>
                <div class="aim-item">
                  <span class="aim-icon"><i class="bi bi-music-note-beamed"></i></span>
                  <span>Greek and Cypriot music</span>
                </div>
                <div class="aim-item">
                  <span class="aim-icon"><i class="bi bi-book-fill"></i></span>
                  <span>History of Greece and Cyprus, and their culture</span>
                </div>
              </div>
            </div>

            <p class="text-justify">
              Our school organises various events of national and educational significance aimed at cultivating national consciousness and strengthening our community identity in Leicester. Our teaching staff consists of native Greek speakers with university degrees in education, extensive teaching experience, and a genuine passion for education.
            </p>

            <p class="text-justify">
              We welcome children from the age of 4 in our Nursery class and offer programmes for all ages, including <strong>GCSE Greek preparation</strong> and <strong>Greek classes for adults</strong> on Thursday evenings.
            </p>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  background-color: var(--white);
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #590f32 0%, #753856 50%, #3d0a23 100%);
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
  border-bottom: 5px solid var(--accent-gold);
  min-height: 500px;
  display: flex;
  align-items: center;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  animation: driftPattern 25s linear infinite;
}

@keyframes driftPattern {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(89, 15, 50, 0.3) 100%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-text-wrapper {
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

.hero-title {
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: var(--white);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: -1px;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.75rem);
  color: var(--accent-gold);
  font-weight: 600;
  font-style: italic;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
}

.hero-description {
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: var(--white);
  line-height: 1.9;
  margin-bottom: 2.5rem;
  max-width: 650px;
  letter-spacing: 0.4px;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
}

.hero-cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.hero-cta-buttons .btn {
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  transition: var(--transition-smooth);
}


/* Main Content */
.welcome-card {
  background: var(--white);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  padding: 3rem;
  animation: slideInUp 0.8s ease-out 0.2s both;
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
  margin: 2rem 0 1.5rem 0;
  font-weight: 700;
  position: relative;
  padding-left: 1rem;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 1.5rem;
  background: linear-gradient(180deg, var(--primary-color), var(--secondary-color));
  border-radius: 2px;
}

.lead-text {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--text-dark);
  margin-bottom: 2rem;
  letter-spacing: 0.3px;
}

.text-justify {
  text-align: justify;
  line-height: 1.9;
  color: var(--text-medium);
  margin-bottom: 1.5rem;
  font-size: 1rem;
  letter-spacing: 0.2px;
}

/* Aims List */
.aims-list-wrapper {
  background: linear-gradient(135deg, var(--primary-light) 0%, #f5f9ff 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 5px solid var(--primary-color);
  box-shadow: var(--shadow-sm);
}

.aims-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.aim-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  color: var(--text-dark);
  line-height: 1.6;
  font-weight: 500;
  letter-spacing: 0.2px;
}

.aim-icon {
  font-size: 1.4rem;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  min-height: 50px;
  background: var(--white);
  border-radius: 50%;
  box-shadow: var(--shadow-sm);
  flex-shrink: 0;
}

/* External Link */
.external-link {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 700;
  border-bottom: 2px solid var(--secondary-color);
  transition: var(--transition-smooth);
}

.external-link:hover,
.external-link:focus {
  color: var(--primary-color);
  border-bottom: 3px solid var(--primary-color);
}

/* Call to Action Box */
.call-to-action-box {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: var(--white);
  padding: 2.5rem;
  border-radius: 12px;
  margin: 3rem 0;
  box-shadow: var(--shadow-lg);
  animation: slideInUp 0.8s ease-out 0.4s both;
}

.cta-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 0.3px;
}

.cta-text {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  letter-spacing: 0.2px;
}

.call-to-action-box .btn {
  background-color: var(--white);
  color: var(--primary-color);
  font-weight: 700;
  padding: 0.7rem 1.8rem;
}

.call-to-action-box .btn:hover {
  background-color: var(--accent-gold);
  color: var(--white);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 0;
  }

  .welcome-card {
    padding: 1.5rem;
  }

  .aims-list {
    grid-template-columns: 1fr;
  }

  .call-to-action-box {
    padding: 1.5rem;
  }

  .hero-cta-buttons {
    flex-direction: column;
  }

  .hero-cta-buttons .btn {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 1.75rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
  }

  .hero-description {
    font-size: 0.95rem;
  }

  .welcome-card {
    padding: 1.25rem;
  }

  .page-title {
    margin-bottom: 1.5rem;
  }

  .section-title::before {
    width: 3px;
    height: 1.2rem;
  }

  .aims-list-wrapper {
    padding: 1rem;
  }
}
</style>
