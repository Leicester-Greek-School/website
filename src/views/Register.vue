<template>
  <div class="register">
    <!-- Breadcrumb Navigation -->
    <div class="breadcrumb-section">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb-nav">
          <ol class="breadcrumb-list">
            <li><router-link to="/">Home</router-link></li>
            <li class="active" aria-current="page">Register</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container my-5">
      <h2 class="page-title">Register for Greek Classes in Leicester</h2>

      <div class="info-section mb-4">
        <h3 class="section-title">Enrollment Information</h3>
        <p class="text-justify">
          We welcome new students throughout the year. Leicester Greek School accepts children from age 4
          to our Nursery class, and we offer classes for older children and teenagers including GCSE and A-level.
          We also offer <strong>Greek language classes for adults</strong> on
          <strong>Thursday evenings</strong>
          — open to complete beginners and all levels.
        </p>

        <h4 class="subsection-title">Age Groups &amp; Tuition Fees for the 2026–2027 Academic Year</h4>
        <div class="table-responsive">
          <table class="fees-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Age Group</th>
                <th>Fee per Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nursery &amp; Reception</td>
                <td>From age 4</td>
                <td>£380</td>
              </tr>
              <tr>
                <td>Primary School (Years 1–6)</td>
                <td>Ages 5–11</td>
                <td>£380</td>
              </tr>
              <tr>
                <td>Pre-GCSE</td>
                <td>Ages 11–14</td>
                <td>£400</td>
              </tr>
              <tr>
                <td>GCSE 1 &amp; GCSE 2</td>
                <td>Ages 14–16</td>
                <td>£400</td>
              </tr>
              <tr>
                <td>A Level</td>
                <td>Ages 16–18</td>
                <td>£480</td>
              </tr>
              <tr>
                <td>Adult Classes</td>
                <td>All levels welcome</td>
                <td>£430</td>
              </tr>
              <tr>
                <td>Online Private Lessons</td>
                <td>All ages</td>
                <td>£925</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-justify small-note">
          Adult classes welcome complete beginners, intermediate learners and heritage speakers alike, on
          <strong>Thursday evenings</strong>.
        </p>

        <h4 class="subsection-title">Discounts for Families with Multiple Children Enrolled</h4>
        <ul class="info-list">
          <li>Families with 2 children enrolled — £110 discount per year</li>
          <li>Families with 3 children enrolled — £120 discount per year</li>
        </ul>
      </div>

      <div class="info-section mt-4">
        <h3 class="section-title">How to Register</h3>
        <ol class="registration-steps">
          <li>Complete the Google Registration Form (link below)</li>
          <li>We will contact you to confirm enrollment</li>
          <li>Attend an introductory session</li>
          <li>Get admission to the appropriate class</li>
        </ol>
      </div>

      <div class="registration-online mt-4">
        <h3 class="section-title">2026–27 Φόρμα εγγραφής / Registration form</h3>
        <p class="text-justify">
          (Το όριο εγγραφής στο Νηπιαγωγείο έχει καθοριστεί στα 4 έτη, συμπληρωμένα πριν την έναρξη της σχολικής χρονιάς. /
          Τhe lower age limit for admissions to our Nursery class is set at 4 years old, that is children can start from
          the September following their fourth birthday.)
        </p>
        <div class="d-grid d-sm-inline-flex gap-2">
          <a
            href="https://forms.gle/sP5i7J8aN31s64R96"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary custom-btn"
            aria-label="Open Google Registration Form in a new tab"
          >
            Open Google Registration Form
          </a>
        </div>
        <p class="mt-3 small">
          If the button does not work, copy and paste this link into your browser:
          <br>
          <a href="https://forms.gle/sP5i7J8aN31s64R96" target="_blank" rel="noopener noreferrer">https://forms.gle/sP5i7J8aN31s64R96</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { injectJsonLd, removeJsonLd, breadcrumbSchema } from '@/utils/seo';

export default {
  name: 'Register',
  mounted() {
    injectJsonLd('breadcrumb-register', breadcrumbSchema([
      { name: 'Home', url: 'https://leicestergreekschool.com/' },
      { name: 'Register', url: 'https://leicestergreekschool.com/register' }
    ]));
  },
  beforeUnmount() {
    removeJsonLd('breadcrumb-register');
  }
};
</script>

<style scoped>
.register {
  background-color: var(--white);
}

/* Breadcrumb */
.breadcrumb-section {
  background: linear-gradient(135deg, var(--primary-light) 0%, rgba(212, 165, 116, 0.05) 100%);
  border-bottom: 2px solid var(--border-color);
  padding: 1.5rem 0;
  margin-bottom: 0;
}

.breadcrumb-nav { display: flex; align-items: center; }

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
  border-bottom: 2px solid transparent;
  transition: var(--transition-smooth);
}

.breadcrumb-list a:hover { color: var(--link-hover); border-bottom-color: var(--link-hover); }
.breadcrumb-list li.active { color: var(--text-dark); font-weight: 600; font-size: 0.95rem; }

.internal-link {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 700;
  border-bottom: 2px solid var(--secondary-color);
  transition: var(--transition-smooth);
}

.internal-link:hover {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
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
  letter-spacing: 0.3px;
}

.subsection-title {
  font-size: 1.25rem;
  color: var(--primary-color);
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 1.5rem 0 1rem 0;
  font-weight: 700;
}

.info-section {
  margin-bottom: 2.5rem;
  background: linear-gradient(135deg, var(--primary-light) 0%, #f8fbff 100%);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  border: 2px solid var(--border-color);
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

.text-justify {
  text-align: justify;
  margin-bottom: 1.5rem;
  line-height: 1.9;
  color: var(--text-dark);
  font-size: 1rem;
  letter-spacing: 0.2px;
}

.small-note {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-top: -0.5rem;
}

.info-list {
  margin-left: 0;
  margin-bottom: 1.5rem;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 1rem;
}

.info-list li {
  padding-left: 2rem;
  position: relative;
  color: var(--text-dark);
  font-weight: 500;
  letter-spacing: 0.2px;
  line-height: 1.8;
}

.info-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: 700;
  font-size: 1.2rem;
}

.table-responsive {
  overflow-x: auto;
  margin: 1.5rem 0;
}

.fees-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.fees-table th,
.fees-table td {
  padding: 0.9rem 1.25rem;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.fees-table th {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--white);
  font-weight: 700;
  letter-spacing: 0.3px;
}

.fees-table tbody tr:last-child td {
  border-bottom: none;
}

.fees-table tbody tr:nth-child(even) {
  background-color: var(--primary-light);
}

.fees-table td:last-child {
  font-weight: 700;
  color: var(--primary-color);
}

.registration-steps {
  counter-reset: step-counter;
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.registration-steps li {
  counter-increment: step-counter;
  margin-bottom: 1.5rem;
  padding-left: 3rem;
  position: relative;
  color: var(--text-dark);
  line-height: 1.8;
  font-weight: 500;
  letter-spacing: 0.2px;
}

.registration-steps li::before {
  content: counter(step-counter);
  position: absolute;
  left: 0;
  top: 0;
  width: 2.25rem;
  height: 2.25rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
}

.registration-online {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: var(--white);
  padding: 2.5rem;
  border-radius: 12px;
  margin-top: 2.5rem;
  box-shadow: var(--shadow-lg);
}

.registration-online .section-title {
  color: var(--white);
  margin-top: 0;
  font-size: 1.5rem;
}

.registration-online .text-justify {
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.95rem;
  line-height: 1.8;
}

.registration-online .small {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.85rem;
}

.registration-online a {
  color: var(--accent-gold);
  font-weight: 700;
  border-bottom: 2px solid var(--accent-gold);
}

.registration-online a:hover {
  color: var(--white);
  border-bottom-color: var(--white);
}

.custom-btn {
  background-color: var(--white);
  color: var(--primary-color);
  font-weight: 700;
  border-radius: 8px;
  padding: 0.8rem 2rem;
  transition: var(--transition-smooth);
}

.custom-btn:hover {
  background-color: var(--accent-gold);
  color: var(--white);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

@media (max-width: 768px) {
  .info-section {
    padding: 1.5rem;
  }

  .registration-online {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .page-title {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 1.1rem;
  }

  .registration-steps li {
    padding-left: 2.5rem;
  }

  .registration-steps li::before {
    width: 2rem;
    height: 2rem;
    font-size: 0.9rem;
  }
}
</style>

