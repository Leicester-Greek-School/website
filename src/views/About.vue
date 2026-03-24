<template>
  <div class="about">
    <div class="container my-5">
      <h2 class="page-title">Information</h2>

      <div class="info-section">
        <h3 class="section-title">About Leicester Greek School</h3>
        <p class="text-justify">
          Leicester Greek School (Saint Nicholas and Xenophon) has been serving the local Greek and
          Cypriot community since the 1980s. We provide high-quality Greek language education and
          promote Greek culture and traditions.
        </p>

        <h3 class="section-title">Opening Hours</h3>
        <p class="text-justify">
          Lessons for children take place every Saturday, from 11:00 until 15:30.
        </p>
        <p class="text-justify">
          Lessons for adults run twice a week, on Wednesday and Saturday.
        </p>

        <h3 class="section-title">What We Offer</h3>
        <ul class="info-list">
          <li>Modern Greek language lessons for all ages</li>
          <li>GCSE Greek preparation</li>
          <li>Greek and Cypriot traditional dance classes</li>
          <li>Greek music and cultural activities</li>
          <li>Nursery classes for children from age 4</li>
        </ul>

        <h3 class="section-title">Our Teaching Staff</h3>
        <p class="text-justify">
          The teaching staff consists of Greek native speakers with University degrees in education,
          many years of teaching experience and enthusiasm for what they do. All our teachers are
          highly qualified and dedicated to preserving Greek language and culture.
        </p>

        <h3 class="section-title">Curriculum</h3>
        <p class="text-justify">
          The curriculum followed by our school is provided by the
          <a href="http://kea.schools.ac.cy/" target="_blank" rel="noopener noreferrer" class="external-link">Cyprus Educational Mission in the UK</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  background-color: var(--white);
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
  margin-bottom: 2rem;
  background: var(--white);
  padding: 2rem;
  border-radius: 10px;
  list-style: none;
  border-left: 5px solid var(--accent-gold);
  box-shadow: var(--shadow-sm);
  display: grid;
  gap: 1rem;
}

.info-list li {
  line-height: 1.8;
  color: var(--text-dark);
  position: relative;
  padding-left: 2.25rem;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.2px;
}

.info-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-size: 1.3em;
  font-weight: 700;
  line-height: 1;
}

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

@media (max-width: 768px) {
  .info-section {
    padding: 1.5rem;
  }

  .info-list {
    padding: 1.5rem;
  }

  .section-title::before {
    height: 1.25rem;
  }
}

@media (max-width: 576px) {
  .page-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .section-title {
    font-size: 1.1rem;
    margin: 1.5rem 0 1rem 0;
  }

  .info-list li {
    font-size: 0.95rem;
  }
}
</style>
