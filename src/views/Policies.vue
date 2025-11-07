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
          <li>Classes run every Saturday from 11:00 to 15:30 for children</li>
          <li>Adult classes run on Wednesday and Saturday</li>
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
  background-color: #ffffff;
  min-height: 70vh;
}

.page-title {
  font-size: 28px;
  color: #591434;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-bottom: 1.5rem;
  font-weight: bold;
  border-bottom: 3px solid #d4a574;
  padding-bottom: 0.5rem;
  display: inline-block;
}

.section-title {
  font-size: 20px;
  color: #591434;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin: 0 0 1rem 0;
  font-weight: 600;
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
  height: 100%;
  background-color: #591434;
}

.info-section {
  margin-bottom: 2rem;
  background-color: #faf7f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(89, 20, 52, 0.1);
  border: 1px solid #d4b5c4;
}

.text-justify {
  text-align: justify;
  margin-bottom: 1rem;
  line-height: 1.8;
  color: #2d1a22;
}

.policy-list {
  margin-left: 2rem;
  margin-bottom: 0;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 6px;
  list-style: none;
  border: 1px solid #d4b5c4;
}

.policy-list li {
  margin-bottom: 0.75rem;
  line-height: 1.8;
  color: #2d1a22;
  position: relative;
  padding-left: 1.8rem;
}

.policy-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #591434;
  font-weight: bold;
  font-size: 1.1em;
}

.procedure-list {
  margin-left: 2rem;
  margin-bottom: 0;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 6px;
  border: 1px solid #d4b5c4;
  color: #2d1a22;
  line-height: 1.8;
}

.procedure-list li {
  margin-bottom: 0.75rem;
}

.contact-box {
  background-color: #faf7f9;
  border: 2px solid #d4a574;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.internal-link {
  color: #7a2448;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px dotted #7a2448;
  transition: all 0.2s ease;
}

.internal-link:hover,
.internal-link:focus {
  color: #591434;
  border-bottom: 2px solid #591434;
  text-decoration: none;
}
</style>

