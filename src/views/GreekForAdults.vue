<template>
  <div class="greek-for-adults">
    <!-- Breadcrumb Navigation -->
    <div class="breadcrumb-section">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb-nav">
          <ol class="breadcrumb-list">
            <li><router-link to="/">Home</router-link></li>
            <li class="active" aria-current="page">Greek for Adults</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Hero Banner -->
    <div class="adults-hero">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h1 class="adults-hero-title">Greek Lessons for Adults in Leicester</h1>
            <p class="adults-hero-subtitle">
              Beginner to advanced Modern Greek classes in Leicester and Leicestershire.
              Wednesday evenings &amp; Saturday mornings.
            </p>
            <router-link to="/register" class="btn btn-primary btn-lg mt-3">
              Register Now
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">

          <!-- Intro -->
          <section class="info-section mb-5" aria-labelledby="adults-intro">
            <h2 id="adults-intro" class="page-title">Learn Modern Greek in Leicester</h2>
            <p class="lead-text">
              Whether you are a complete beginner wanting to connect with your heritage, a parent who
              wants to learn alongside your child, or someone planning a trip to Greece or Cyprus —
              Leicester Greek School welcomes adult learners of all levels.
            </p>
            <p class="text-justify">
              Our adult Greek language classes are held in Leicester at
              <strong>2A Sawday Street, Leicester, LE2 7JW</strong>, and are open to residents across
              <strong>Leicester, Leicestershire and the wider East Midlands</strong>. We use the
              curriculum provided by the
              <a href="http://kea.schools.ac.cy/" target="_blank" rel="noopener noreferrer" class="external-link">Cyprus Educational Mission (KEA)</a>,
              the same accredited programme used in Greek schools across the UK.
            </p>
          </section>

          <!-- Class Schedule -->
          <section class="info-section mb-5" aria-labelledby="adults-schedule">
            <h2 id="adults-schedule" class="section-title">Class Schedule</h2>
            <div class="schedule-grid">
              <div class="schedule-card">
                <div class="schedule-icon">📅</div>
                <h3 class="schedule-day">Wednesday Evenings</h3>
                <p class="schedule-detail">Adult Greek language classes — times confirmed on enrolment.</p>
              </div>
              <div class="schedule-card">
                <div class="schedule-icon">🏫</div>
                <h3 class="schedule-day">Saturday Mornings</h3>
                <p class="schedule-detail">Classes run alongside the children's programme from 11:00 at our Leicester school.</p>
              </div>
            </div>
          </section>

          <!-- What You Will Learn -->
          <section class="info-section mb-5" aria-labelledby="adults-curriculum">
            <h2 id="adults-curriculum" class="section-title">What You Will Learn</h2>
            <p class="text-justify">
              Our adult Greek language programme covers all aspects of Modern Greek — the language spoken
              in Greece and Cyprus today. Classes are taught by <strong>qualified native Greek speakers</strong>
              with university degrees in education and years of teaching experience.
            </p>
            <div class="curriculum-grid">
              <div class="curriculum-item">
                <span class="curriculum-icon">🗣️</span>
                <div>
                  <h4 class="curriculum-title">Speaking &amp; Listening</h4>
                  <p>Conversational Greek for everyday situations — greetings, travel, shopping and social interactions.</p>
                </div>
              </div>
              <div class="curriculum-item">
                <span class="curriculum-icon">✍️</span>
                <div>
                  <h4 class="curriculum-title">Reading &amp; Writing</h4>
                  <p>Learn the Greek alphabet and develop reading and writing skills from scratch or build on existing knowledge.</p>
                </div>
              </div>
              <div class="curriculum-item">
                <span class="curriculum-icon">📖</span>
                <div>
                  <h4 class="curriculum-title">Grammar &amp; Vocabulary</h4>
                  <p>Structured grammar lessons with a growing vocabulary covering topics from daily life to Greek history and culture.</p>
                </div>
              </div>
              <div class="curriculum-item">
                <span class="curriculum-icon">🏛️</span>
                <div>
                  <h4 class="curriculum-title">Culture &amp; Heritage</h4>
                  <p>Explore Greek and Cypriot traditions, history, music, dance and cultural identity alongside your language studies.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Who It Is For -->
          <section class="info-section mb-5" aria-labelledby="adults-who">
            <h2 id="adults-who" class="section-title">Who Are Classes For?</h2>
            <ul class="info-list">
              <li>Complete beginners with no prior knowledge of Greek</li>
              <li>Heritage speakers wanting to improve or formalise their Greek</li>
              <li>Parents learning alongside their children at our Leicester school</li>
              <li>Professionals needing Greek for work or travel</li>
              <li>Anyone in Leicestershire or the East Midlands interested in Greek language and culture</li>
            </ul>
            <p class="text-justify mt-3">
              There are no age restrictions for adult classes — we welcome learners of all ages and backgrounds.
              <strong>Online learning options</strong> are also available for students who cannot attend
              in-person sessions in Leicester, through our partnership with the Cyprus Educational Mission.
            </p>
          </section>

          <!-- Location -->
          <section class="info-section mb-5" aria-labelledby="adults-location">
            <h2 id="adults-location" class="section-title">Location</h2>
            <address class="location-address">
              <strong>Leicester Greek School</strong><br>
              2A Sawday Street<br>
              Leicester<br>
              LE2 7JW<br>
              United Kingdom
            </address>
            <p class="text-justify mt-3">
              Conveniently located in central Leicester, our school is accessible from across
              Leicestershire including Oadby, Wigston, Blaby, Hinckley, Loughborough and beyond.
            </p>
          </section>

          <!-- CTA -->
          <div class="cta-box">
            <h2 class="cta-title">Ready to Start Learning Greek?</h2>
            <p class="cta-text">
              Join our community of adult learners in Leicester. Contact us to find out about current
              availability, fees, and start dates.
            </p>
            <div class="cta-buttons">
              <router-link to="/register" class="btn btn-primary btn-lg">Register Online</router-link>
              <router-link to="/contact" class="btn btn-outline-light btn-lg">Contact Us</router-link>
            </div>
            <div class="cta-contact-details mt-4">
              <p class="mb-1">
                <strong>📞</strong>
                <a href="tel:+447784957591" class="cta-link">07784 957591</a>
              </p>
              <p class="mb-0">
                <strong>✉️</strong>
                <a href="mailto:headteacher@leicestergreekschool.com" class="cta-link">headteacher@leicestergreekschool.com</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { injectJsonLd, removeJsonLd, breadcrumbSchema } from '@/utils/seo';

export default {
  name: 'GreekForAdults',
  mounted() {
    injectJsonLd('breadcrumb-greek-for-adults', breadcrumbSchema([
      { name: 'Home', url: 'https://leicestergreekschool.com/' },
      { name: 'Greek for Adults', url: 'https://leicestergreekschool.com/greek-for-adults' }
    ]));
  },
  beforeUnmount() {
    removeJsonLd('breadcrumb-greek-for-adults');
  }
};
</script>

<style scoped>
.greek-for-adults {
  background-color: var(--white);
}

/* Breadcrumb */
.breadcrumb-section {
  background: linear-gradient(135deg, var(--primary-light) 0%, rgba(212, 165, 116, 0.05) 100%);
  border-bottom: 2px solid var(--border-color);
  padding: 1.5rem 0;
  margin-bottom: 0;
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

/* Hero */
.adults-hero {
  background: linear-gradient(135deg, #590f32 0%, #753856 50%, #3d0a23 100%);
  padding: 4rem 0;
  border-bottom: 5px solid var(--accent-gold);
}

.adults-hero-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: var(--white);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 1px 2px 6px rgba(0,0,0,0.3);
  margin-bottom: 1rem;
}

.adults-hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--accent-gold);
  font-weight: 500;
  line-height: 1.7;
}

/* Page sections */
.page-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: var(--primary-color);
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-bottom: 1.5rem;
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
  margin: 0 0 1.25rem 0;
  font-weight: 700;
  position: relative;
  padding-left: 1.25rem;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 1.5rem;
  background: linear-gradient(180deg, var(--primary-color), var(--accent-gold));
  border-radius: 3px;
}

.info-section {
  padding: 2.5rem;
  background: linear-gradient(135deg, var(--primary-light) 0%, #f8fbff 100%);
  border-radius: 12px;
  border: 2px solid var(--border-color);
  box-shadow: var(--shadow-md);
}

.lead-text {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--text-dark);
  margin-bottom: 1.25rem;
}

.text-justify {
  text-align: justify;
  line-height: 1.9;
  color: var(--text-medium);
  margin-bottom: 1rem;
  font-size: 1rem;
}

.external-link {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 700;
  border-bottom: 2px solid var(--secondary-color);
  transition: var(--transition-smooth);
}

.external-link:hover {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}

/* Schedule */
.schedule-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.schedule-card {
  background: var(--white);
  border: 2px solid var(--border-color);
  border-top: 5px solid var(--primary-color);
  border-radius: 10px;
  padding: 1.75rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.schedule-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.schedule-day {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary-color);
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-bottom: 0.5rem;
}

.schedule-detail {
  font-size: 0.95rem;
  color: var(--text-medium);
  line-height: 1.7;
  margin: 0;
}

/* Curriculum */
.curriculum-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.curriculum-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: var(--white);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
}

.curriculum-icon {
  font-size: 2rem;
  min-width: 2.5rem;
  text-align: center;
}

.curriculum-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.4rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.curriculum-item p {
  font-size: 0.9rem;
  color: var(--text-medium);
  line-height: 1.7;
  margin: 0;
}

/* Info list */
.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
}

.info-list li {
  padding-left: 2rem;
  position: relative;
  color: var(--text-dark);
  font-weight: 500;
  line-height: 1.8;
}

.info-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: 700;
}

/* Location address */
.location-address {
  font-style: normal;
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--text-dark);
  background: var(--white);
  display: inline-block;
  padding: 1.25rem 1.75rem;
  border-left: 5px solid var(--accent-gold);
  border-radius: 6px;
  box-shadow: var(--shadow-sm);
}

/* CTA Box */
.cta-box {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: var(--white);
  padding: 3rem;
  border-radius: 14px;
  text-align: center;
  box-shadow: var(--shadow-lg);
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.cta-title {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-bottom: 1rem;
}

.cta-text {
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1.75rem;
  opacity: 0.95;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.cta-buttons .btn-primary {
  background: var(--white);
  color: var(--primary-color);
  border-color: var(--white);
  font-weight: 700;
}

.cta-buttons .btn-primary:hover {
  background: var(--accent-gold);
  color: var(--white);
  border-color: var(--accent-gold);
}

.cta-contact-details {
  font-size: 0.95rem;
}

.cta-link {
  color: var(--accent-gold);
  font-weight: 600;
  text-decoration: none;
  margin-left: 0.5rem;
  border-bottom: 1px solid var(--accent-gold);
}

.cta-link:hover {
  color: var(--white);
  border-bottom-color: var(--white);
}

@media (max-width: 768px) {
  .info-section {
    padding: 1.5rem;
  }

  .cta-box {
    padding: 2rem 1.5rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-buttons .btn {
    width: 100%;
    max-width: 280px;
  }
}
</style>

