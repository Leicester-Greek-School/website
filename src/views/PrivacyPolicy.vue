<template>
  <div class="privacy-policy">
    <div class="container my-5">
      <h2 class="page-title">Privacy Policy</h2>

      <div class="policy-section">
        <p class="last-updated">
          <strong>Last Updated:</strong> November 2025
        </p>

        <h3 class="section-title">Introduction</h3>
        <p class="text-justify">
          Leicester Greek School (Saint Nicholas and Xenophon) is committed to protecting the privacy
          and security of your personal information. This privacy policy describes how we collect, use,
          and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR)
          and the Data Protection Act 2018.
        </p>

        <h3 class="section-title">Information We Collect</h3>
        <p class="text-justify">
          We collect and process the following types of personal information:
        </p>
        <ul class="policy-list">
          <li>Student names, dates of birth, and contact details</li>
          <li>Parent/guardian names and contact information</li>
          <li>Emergency contact details</li>
          <li>Medical information relevant to student care</li>
          <li>Academic progress and attendance records</li>
          <li>Photographs and videos for educational and promotional purposes (with consent)</li>
          <li>Payment and financial information for fee processing</li>
        </ul>

        <h3 class="section-title">How We Use Your Information</h3>
        <p class="text-justify">
          We use your personal information for the following purposes:
        </p>
        <ul class="policy-list">
          <li>To provide educational services to students</li>
          <li>To communicate with parents/guardians about school matters</li>
          <li>To ensure the safety and wellbeing of students</li>
          <li>To process payments and maintain financial records</li>
          <li>To comply with legal and regulatory requirements</li>
          <li>To improve our services and educational programs</li>
          <li>To send newsletters and updates about school activities</li>
        </ul>

        <h3 class="section-title">Data Sharing and Disclosure</h3>
        <p class="text-justify">
          We may share your information with:
        </p>
        <ul class="policy-list">
          <li>The Cyprus Educational Mission (KEA) in the UK for curriculum and educational purposes</li>
          <li>Educational authorities when required by law</li>
          <li>Third-party service providers who assist with our operations (e.g., payment processors)</li>
          <li>Emergency services if necessary for student safety</li>
        </ul>
        <p class="text-justify">
          We do not sell or rent your personal information to third parties for marketing purposes.
        </p>

        <h3 class="section-title">Data Security</h3>
        <p class="text-justify">
          We implement appropriate technical and organizational measures to protect your personal data
          against unauthorized access, alteration, disclosure, or destruction. This includes:
        </p>
        <ul class="policy-list">
          <li>Secure storage of physical and electronic records</li>
          <li>Limited access to personal data on a need-to-know basis</li>
          <li>Regular staff training on data protection</li>
          <li>Secure disposal of data when no longer required</li>
        </ul>

        <h3 class="section-title">Data Retention</h3>
        <p class="text-justify">
          We retain personal data only for as long as necessary to fulfill the purposes for which it
          was collected, or as required by law. Student records are typically retained for a period of
          time after a student leaves the school, in accordance with educational record-keeping requirements.
        </p>

        <h3 class="section-title">Your Rights</h3>
        <p class="text-justify">
          Under UK GDPR, you have the following rights:
        </p>
        <ul class="policy-list">
          <li><strong>Right of access:</strong> You can request a copy of the personal data we hold about you</li>
          <li><strong>Right to rectification:</strong> You can request that we correct inaccurate data</li>
          <li><strong>Right to erasure:</strong> You can request deletion of your data in certain circumstances</li>
          <li><strong>Right to restrict processing:</strong> You can request that we limit how we use your data</li>
          <li><strong>Right to data portability:</strong> You can request your data in a portable format</li>
          <li><strong>Right to object:</strong> You can object to certain types of processing</li>
          <li><strong>Right to withdraw consent:</strong> Where processing is based on consent, you can withdraw it at any time</li>
        </ul>

        <h3 class="section-title">Cookies and Website Usage</h3>
        <p class="text-justify">
          Our website may use cookies to improve user experience. Cookies are small text files stored
          on your device. We use essential cookies for website functionality. You can control cookie
          settings through your browser preferences.
        </p>

        <h3 class="section-title">Children's Privacy</h3>
        <p class="text-justify">
          As an educational institution working with children, we take extra care in protecting children's
          personal data. Consent for processing children's data is obtained from parents or legal guardians
          where required.
        </p>

        <h3 class="section-title">Changes to This Policy</h3>
        <p class="text-justify">
          We may update this privacy policy from time to time. Any changes will be posted on this page
          with an updated revision date. We encourage you to review this policy periodically.
        </p>

        <h3 class="section-title">School Privacy Policy Document</h3>
        <p class="text-justify">
          For our complete and detailed Privacy Policy document, including specific procedures and contact
          information for data protection inquiries, please download our full policy document:
        </p>
        <div class="policy-download">
          <a href="/documents/Leicester_Greek_School_Privacy_Policy.pdf" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-file-pdf"></i> Download Full Privacy Policy (PDF)
          </a>
        </div>

        <h3 class="section-title">Contact Us</h3>
        <p class="text-justify">
          If you have any questions about this privacy policy or wish to exercise your data protection
          rights, please contact us:
        </p>
        <div class="contact-box">
          <p><strong>Leicester Greek School</strong><br>
          Saint Nicholas and Xenophon<br>
          Email: <a href="mailto:info@leicestergreekschool.org">info@leicestergreekschool.org</a></p>
          <p>
            You also have the right to lodge a complaint with the Information Commissioner's Office (ICO)
            if you believe your data protection rights have been violated.
          </p>
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


.policy-download {
  margin: 2rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, var(--primary-light) 0%, #f8fbff 100%);
  border-radius: 12px;
  border: 2px solid var(--border-color);
  text-align: center;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border: none;
  color: var(--white);
  padding: 0.85rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition-smooth);
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  text-decoration: none;
}

.btn-primary i {
  margin-right: 0.25rem;
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

