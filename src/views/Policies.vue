<template>
  <div class="policies">
    <div class="container my-5">
      <h2 class="page-title">School Policies</h2>

      <div class="info-section">
        <h3 class="section-title">Attendance Policy</h3>
        <p class="text-justify">
          Regular attendance is essential for student progress. We expect students to attend all scheduled
          classes. If your child is unable to attend, please notify the school in advance.
        </p>
        <ul class="policy-list">
          <li>Classes run every Saturday from 09:30 to 17:00 for children</li>
          <li>Adult classes run on Thursday and Saturday</li>
          <li>Please arrive on time to minimize disruption</li>
          <li>Notify the school of any extended absences</li>
        </ul>
      </div>

      <div class="info-section">
        <h3 class="section-title">Code of Conduct</h3>
        <p class="text-justify">
          Leicester Greek School is committed to providing a safe, respectful, and inclusive learning
          environment for all students, teachers, and parents.
        </p>
        <ul class="policy-list">
          <li>Respect all members of the school community</li>
          <li>Use appropriate language and behavior</li>
          <li>Take care of school property and materials</li>
          <li>Follow teachers' instructions</li>
          <li>Support a positive learning environment</li>
        </ul>
      </div>

      <div class="info-section">
        <h3 class="section-title">Health and Safety</h3>
        <p class="text-justify">
          The safety and wellbeing of our students is our top priority. We maintain high standards of
          health and safety throughout the school.
        </p>
        <ul class="policy-list">
          <li>All teachers and volunteers are DBS checked</li>
          <li>First aid facilities are available on site</li>
          <li>Emergency contact information must be kept up to date</li>
          <li>Students with medical conditions must inform the school</li>
          <li>Fire safety procedures are practiced regularly</li>
        </ul>
      </div>

      <div class="info-section">
        <h3 class="section-title">Payment and Fees</h3>
        <p class="text-justify">
          Tuition fees help cover the costs of teachers, materials, and facilities. Fees are payable
          termly in advance.
        </p>
        <ul class="policy-list">
          <li>Registration fee is required upon enrollment</li>
          <li>Tuition fees are payable at the start of each term</li>
          <li>Please contact us if you experience financial difficulties</li>
          <li>Fees are non-refundable except in exceptional circumstances</li>
        </ul>
      </div>

      <div class="info-section">
        <h3 class="section-title">Data Protection and Privacy</h3>
        <p class="text-justify">
          We are committed to protecting your personal information in accordance with UK data protection
          laws (GDPR).
        </p>
        <ul class="policy-list">
          <li>Personal information is collected only for school purposes</li>
          <li>Data is stored securely and accessed only by authorized personnel</li>
          <li>Information is not shared with third parties without consent</li>
          <li>Parents have the right to request their data</li>
          <li>Photos and videos require parental consent</li>
        </ul>
      </div>

      <div class="info-section">
        <h3 class="section-title">Complaints Procedure</h3>
        <p class="text-justify">
          We welcome feedback and take all concerns seriously. If you have a complaint, please follow
          these steps:
        </p>
        <ol class="procedure-list">
          <li>Speak to your child's teacher</li>
          <li>If unresolved, contact a committee member</li>
          <li>Submit a written complaint to the school committee</li>
          <li>The committee will investigate and respond within 14 days</li>
        </ol>
      </div>

      <div class="contact-box">
        <p class="text-center">
          <strong>For questions about our policies, please <router-link to="/contact" class="internal-link">contact us</router-link>.</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.policies {
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
  margin: 0 0 1.5rem 0;
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

.policy-list {
  margin-left: 0;
  margin-bottom: 0;
  background-color: var(--white);
  padding: 2rem;
  border-radius: 10px;
  list-style: none;
  border-left: 5px solid var(--primary-color);
  box-shadow: var(--shadow-sm);
  display: grid;
  gap: 1rem;
}

.policy-list li {
  line-height: 1.8;
  color: var(--text-dark);
  position: relative;
  padding-left: 2rem;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.2px;
}

.policy-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: 700;
  font-size: 1.2rem;
}

.procedure-list {
  margin-left: 0;
  margin-bottom: 0;
  background-color: var(--white);
  padding: 2rem;
  border-radius: 10px;
  border-left: 5px solid var(--secondary-color);
  box-shadow: var(--shadow-sm);
  color: var(--text-dark);
  line-height: 1.8;
  counter-reset: step;
  list-style: none;
}

.procedure-list li {
  margin-bottom: 1rem;
  padding-left: 2.5rem;
  position: relative;
  counter-increment: step;
}

.procedure-list li::before {
  content: counter(step);
  position: absolute;
  left: 0;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}

.contact-box {
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
  color: var(--white);
  border: none;
  padding: 2rem;
  border-radius: 12px;
  margin-top: 2.5rem;
  box-shadow: var(--shadow-lg);
}

.contact-box p {
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.internal-link {
  color: var(--accent-gold);
  text-decoration: none;
  font-weight: 700;
  border-bottom: 2px solid var(--accent-gold);
  transition: var(--transition-smooth);
}

.internal-link:hover,
.internal-link:focus {
  color: var(--white);
  border-bottom: 3px solid var(--white);
}

@media (max-width: 768px) {
  .info-section {
    padding: 1.5rem;
  }

  .policy-list,
  .procedure-list {
    padding: 1.5rem;
  }

  .contact-box {
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

  .policy-list li,
  .procedure-list li {
    font-size: 0.95rem;
  }

  .procedure-list li::before {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 0.8rem;
  }
}
</style>
