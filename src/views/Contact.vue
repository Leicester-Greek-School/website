<template>
  <div class="contact" role="main" aria-labelledby="contactTitle">
    <div class="container my-5">
      <h2 id="contactTitle" class="page-title">Contact Us</h2>

      <div class="row">
        <div class="col-12"> <!-- changed from col-md-6 to full width -->
          <h3 class="section-title">Get in Touch</h3>
          <p class="text-justify">
            If you would like more information about Leicester Greek School, please use the contact
            details below. We welcome enquiries from parents, students and the wider community.
          </p>

          <div class="contact-info" aria-labelledby="schoolInfoHeading">
            <h4 id="schoolInfoHeading" class="info-title">Leicester Greek School</h4>
            <address class="mb-3">
              <span class="d-block" aria-label="Address">2A Sawday Street<br>Leicester<br>LE2 7JW<br>United Kingdom</span>
            </address>
            <ul class="list-unstyled contact-list" aria-label="Direct contacts">
              <li>
                <strong>Headteacher Email:</strong>
                <a href="mailto:headteacher@leicestergreekschool.com" class="contact-link">headteacher@leicestergreekschool.com</a>
              </li>
              <li>
                <strong>Telephone:</strong>
                <a href="tel:+447784957591" class="contact-link" aria-label="Telephone number">07784 957591</a>
              </li>
              <li>
                <strong>Facebook:</strong>
                <a href="https://www.facebook.com/Leicester.Greek" target="_blank" rel="noopener noreferrer" class="contact-link" aria-label="Facebook page Leicester Greek School">
                  Leicester Greek School (Αγίου Νικολάου και Ξενοφώντος)
                </a>
              </li>
            </ul>
          </div>

          <div class="mt-4">
            <p class="mb-2">
              <strong>For registration and general enquiries:</strong><br>
              Please reach out via email or telephone. We aim to respond within 2 working days.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
};
</script>

<style scoped>
.contact {
  background-color: var(--white);
  min-height: 70vh;
}

.page-title {
  font-size: 28px;
  color: var(--primary-color);
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-bottom: 1.5rem;
  font-weight: bold;
  border-bottom: 3px solid var(--accent-gold);
  padding-bottom: 0.5rem;
  display: inline-block;
}

.section-title {
  font-size: 20px;
  color: var(--primary-color);
  font-family: Georgia, "Times New Roman", Times, serif;
  margin: 1rem 0 1rem 0;
  font-weight: 600;
}

.info-title {
  font-size: 18px;
  color: var(--primary-color);
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-bottom: 0.75rem;
  font-weight: bold;
}

.text-justify {
  text-align: justify;
  margin-bottom: 1rem;
  line-height: 1.8;
  color: var(--text-dark);
}

.contact-info {
  background-color: var(--background-cream);
  border: 2px solid var(--border-color);
  border-left: 4px solid var(--primary-color);
  padding: 1.5rem;
  margin-top: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(11, 94, 215, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-info:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(11, 94, 215, 0.12);
}

.contact-list li {
  margin-bottom: 0.6rem;
  line-height: 1.6;
}

.contact-link {
  color: var(--secondary-color);
  text-decoration: none;
}

.contact-link:hover,
.contact-link:focus {
  color: var(--primary-color);
  text-decoration: underline;
}
</style>
