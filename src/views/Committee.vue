<template>
  <div class="committee">
    <!-- Breadcrumb Navigation -->
    <div class="breadcrumb-section">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb-nav">
          <ol class="breadcrumb-list">
            <li><router-link to="/">Home</router-link></li>
            <li class="active" aria-current="page">Committee</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container my-5">
      <h2 class="page-title">Committee Members</h2>

      <div class="info-section">
        <h3 class="section-title">School Committee</h3>
        <p class="text-justify">
          Leicester Greek School is managed by a dedicated committee of volunteers from the Greek and
          Cypriot community. The committee works tirelessly to ensure the smooth operation of the school
          and to promote Greek language and culture in Leicester.
        </p>

        <h3 class="section-title">Committee Roles and Responsibilities</h3>
        <p class="text-justify">
          Our committee members contribute their time, expertise, and passion to support the school's
          mission. They handle administrative tasks, organize cultural events, manage finances, and
          maintain communication with parents and the wider community.
        </p>

        <!-- Added detailed committee members list -->
        <h3 class="section-title" id="committeeMembersHeading">Current Committee (2025-2027)</h3>
        <ul class="members-list" aria-labelledby="committeeMembersHeading">
          <li>
            <span class="member-role">Chair:</span>
            <span class="member-name">Antonios Pavlakis</span>
            <a href="mailto:chair@leicestergreekschool.com" class="member-email" aria-label="Email Chair">chair@leicestergreekschool.com</a>
          </li>
          <li>
            <span class="member-role">Vice Chair:</span>
            <span class="member-name">Chrysa Avdellidou</span>
            <a href="mailto:vc@leicestergreekschool.com" class="member-email" aria-label="Email Vice Chair">vc@leicestergreekschool.com</a>
          </li>
          <li>
            <span class="member-role">Treasurer:</span>
            <span class="member-name">Gregoris Tzokatziou</span>
            <a href="mailto:treasurer@leicestergreekschool.com" class="member-email" aria-label="Email Treasurer">treasurer@leicestergreekschool.com</a>
          </li>
          <li>
            <span class="member-role">Vice Treasurer:</span>
            <span class="member-name">Sofia Thodi</span>
            <a href="mailto:secretary@leicestergreekschool.com" class="member-email" aria-label="Email Vice Treasurer">secretary@leicestergreekschool.com</a>
          </li>
          <li>
            <span class="member-role">Health and Safety:</span>
            <span class="member-name">George Anastasakis</span>
            <a href="mailto:safety@leicestergreekschool.com" class="member-email" aria-label="Email Health and Safety">safety@leicestergreekschool.com</a>
          </li>
          <li>
            <span class="member-role">Secretary:</span>
            <span class="member-name">Sofia Thodi</span>
            <a href="mailto:secretary@leicestergreekschool.com" class="member-email" aria-label="Email Secretary">secretary@leicestergreekschool.com</a>
          </li>
          <li>
            <span class="member-role">Committee Member:</span>
            <span class="member-name">Esmeralda Toskaj</span>
          </li>
            <li>
            <span class="member-role">Committee Member:</span>
            <span class="member-name">Katerina Selvi</span>
          </li>
        </ul>

        <h3 class="section-title">Get Involved</h3>
        <p class="text-justify">
          We welcome parents and community members who are interested in contributing to the school.
          If you would like to join our committee or help with school activities, please
          <router-link to="/contact" class="internal-link">contact us</router-link>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { injectJsonLd, removeJsonLd, breadcrumbSchema } from '@/utils/seo';

export default {
  name: 'Committee',
  mounted() {
    injectJsonLd('breadcrumb-committee', breadcrumbSchema([
      { name: 'Home', url: 'https://leicestergreekschool.com/' },
      { name: 'Committee', url: 'https://leicestergreekschool.com/committee' }
    ]));
  },
  beforeUnmount() {
    removeJsonLd('breadcrumb-committee');
  }
};
</script>

<style scoped>
.committee {
  background-color: var(--white);
}

/* Breadcrumb */
.breadcrumb-section {
  background: linear-gradient(135deg, var(--primary-light) 0%, rgba(212, 165, 116, 0.05) 100%);
  border-bottom: 2px solid var(--border-color);
  padding: 1.5rem 0;
  margin-bottom: 2rem;
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

.subsection-title {
  font-size: 1.25rem;
  color: var(--primary-color);
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 1.5rem 0 1rem 0;
  font-weight: 700;
  letter-spacing: 0.2px;
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

.committee-info {
  background: var(--white);
  padding: 2rem;
  border-radius: 10px;
  border-left: 5px solid var(--accent-gold);
  margin-top: 2rem;
  box-shadow: var(--shadow-sm);
}

.text-justify {
  text-align: justify;
  margin-bottom: 1.5rem;
  line-height: 1.9;
  color: var(--text-dark);
  font-size: 1rem;
  letter-spacing: 0.2px;
}

.info-list {
  margin-left: 0;
  margin-bottom: 1.5rem;
  background-color: var(--white);
  padding: 2rem;
  border-radius: 10px;
  list-style: none;
  border-left: 5px solid var(--primary-color);
  box-shadow: var(--shadow-sm);
  display: grid;
  gap: 1rem;
}

.info-list li {
  line-height: 1.8;
  color: var(--text-dark);
  position: relative;
  padding-left: 2rem;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.2px;
}

.info-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: 700;
  font-size: 1.2rem;
}

.internal-link {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 700;
  border-bottom: 2px solid var(--secondary-color);
  transition: var(--transition-smooth);
}

.internal-link:hover,
.internal-link:focus {
  color: var(--primary-color);
  border-bottom: 3px solid var(--primary-color);
}

.members-list {
  list-style: none;
  margin: 2rem 0;
  padding: 0;
  background: var(--white);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.members-list li {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: baseline;
  padding: 1.25rem 1.75rem;
  border-bottom: 1px solid var(--border-color);
  transition: var(--transition-smooth);
}

.members-list li:hover {
  background-color: var(--primary-light);
}

.members-list li:last-child {
  border-bottom: none;
}

.member-role {
  font-weight: 700;
  color: var(--primary-color);
  min-width: 120px;
  letter-spacing: 0.3px;
}

.member-name {
  color: var(--text-dark);
  font-weight: 600;
  letter-spacing: 0.2px;
}

.member-email {
  margin-left: auto;
  color: var(--secondary-color);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: var(--transition-smooth);
  letter-spacing: 0.1px;
}

.member-email:hover,
.member-email:focus {
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
}

@media (max-width: 768px) {
  .info-section {
    padding: 1.5rem;
  }

  .committee-info {
    padding: 1.5rem;
  }

  .members-list li {
    padding: 1rem 1.25rem;
  }
}

@media (max-width: 600px) {
  .page-title {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 1.1rem;
  }

  .member-email {
    width: 100%;
    margin-left: 0;
    margin-top: 0.5rem;
  }

  .members-list li {
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }

  .member-role {
    min-width: auto;
  }
}
</style>

