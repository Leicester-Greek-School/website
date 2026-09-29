<template>
  <div class="privacy-policy">
    <div class="container my-5">
      <h2 class="page-title">Privacy Policy</h2>

      <div class="policy-section">
        <p class="last-updated">
          <strong>Last Updated:</strong> 29 September 2026
        </p>

        <h3 class="section-title">Introduction</h3>
        <p class="text-justify">
          Leicester Greek School's data protection policy applies to pupils, parents and guardians,
          employees, and suppliers. It explains how the school uses and protects personal and
          confidential information in accordance with UK data protection requirements.
        </p>

        <h3 class="section-title">Information We Collect</h3>
        <p class="text-justify">
          We collect and process the following types of personal information:
        </p>
        <ul class="policy-list">
          <li>Names, contact details, and dates of birth</li>
          <li>Assessment results and attendance records</li>
          <li>Medical information, allergy details, and safeguarding information</li>
          <li>Emergency contact details</li>
          <li>Photographs and videos</li>
          <li>Information supplied through physical or online enquiry and registration forms</li>
        </ul>

        <h3 class="section-title">How We Use Your Information</h3>
        <p class="text-justify">
          We use your personal information for the following purposes:
        </p>
        <ul class="policy-list">
          <li>To assign pupils to appropriate learning levels</li>
          <li>To monitor medical conditions and allergy information</li>
          <li>To contact parents, guardians, or emergency contacts when required</li>
          <li>To send school updates and information about events</li>
          <li>To communicate about fees and financial matters</li>
          <li>To organise external school activities</li>
        </ul>

        <h3 class="section-title">Storage and Access</h3>
        <p class="text-justify">
          Personal data is stored securely within Leicester Greek School's internal systems. Access
          is limited to the Leicester Greek School Committee and Headteacher.
        </p>

        <h3 class="section-title">Data Sharing and Disclosure</h3>
        <p class="text-justify">
          Personal data is not shared with third parties without consent unless disclosure is legally
          required. In specific situations, relevant information may be shared with:
        </p>
        <ul class="policy-list">
          <li>Local authorities</li>
          <li>Examining bodies</li>
          <li>Service providers supporting the school's activities</li>
        </ul>

        <h3 class="section-title">Data Retention</h3>
        <p class="text-justify">
          Personal data is retained only for as long as necessary to provide Leicester Greek School's
          services, comply with legal obligations, or deal with claims.
        </p>

        <h3 class="section-title">Keeping Information Current</h3>
        <p class="text-justify">
          Parents and guardians must tell the school when contact details, medical information, or
          other registration information changes. The school may ask families to review and update
          their details annually.
        </p>

        <h3 class="section-title">Contact Us</h3>
        <p class="text-justify">
          If you have any questions about how personal data is collected, used, stored, or shared,
          please contact us:
        </p>
        <div class="contact-box">
          <p><strong>Leicester Greek School</strong><br>
          Saint Nicholas and Xenophon<br>
          Headteacher: <a href="mailto:headteacher@leicestergreekschool.com">headteacher@leicestergreekschool.com</a><br>
          Leicester Greek School Committee: <a href="mailto:officers@leicestergreekschool.com">officers@leicestergreekschool.com</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.privacy-policy {
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

.policy-section {
  max-width: 900px;
}

.last-updated {
  background: linear-gradient(135deg, var(--primary-light) 0%, #f8fbff 100%);
  padding: 1rem 1.5rem;
  border-left: 5px solid var(--accent-gold);
  margin-bottom: 2.5rem;
  font-size: 0.95rem;
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  border: 2px solid var(--border-color);
  font-weight: 600;
  color: var(--text-dark);
}

.section-title {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  color: var(--primary-color);
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 2.5rem 0 1.5rem 0;
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
  margin-bottom: 1.5rem;
  padding: 2rem;
  background: var(--white);
  border-radius: 10px;
  border-left: 5px solid var(--primary-color);
  box-shadow: var(--shadow-sm);
  list-style: none;
  line-height: 1.8;
  color: var(--text-dark);
}

.policy-list li {
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;
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

.policy-list li:last-child {
  margin-bottom: 0;
}


.contact-box {
  background: linear-gradient(135deg, var(--primary-light) 0%, #f5f9ff 100%);
  padding: 2rem;
  border-left: 5px solid var(--primary-color);
  border-radius: 12px;
  margin-top: 2rem;
  margin-bottom: 3rem;
  box-shadow: var(--shadow-md);
  border: 2px solid var(--border-color);
}

.contact-box p {
  margin-bottom: 1rem;
  line-height: 1.8;
  color: var(--text-dark);
  font-size: 1rem;
  letter-spacing: 0.2px;
}

.contact-box p:last-child {
  margin-bottom: 0;
  font-size: 0.9rem;
  font-style: italic;
  color: var(--text-medium);
}

.contact-box a {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 700;
  border-bottom: 2px solid var(--secondary-color);
  transition: var(--transition-smooth);
}

.contact-box a:hover {
  color: var(--primary-color);
  border-bottom: 3px solid var(--primary-color);
}
</style>
