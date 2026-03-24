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
  margin: 1.5rem 0 1.25rem 0;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.info-title {
  font-size: 1.25rem;
  color: var(--primary-color);
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: 0.2px;
}

.text-justify {
  text-align: justify;
  margin-bottom: 1.5rem;
  line-height: 1.9;
  color: var(--text-dark);
  font-size: 1rem;
  letter-spacing: 0.2px;
}

.contact-info {
  background: linear-gradient(135deg, var(--primary-light) 0%, #f8fbff 100%);
  border: 2px solid var(--border-color);
  border-left: 5px solid var(--primary-color);
  padding: 2rem;
  margin-top: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  animation: slideInUp 0.8s ease-out 0.2s both;
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

address {
  font-style: normal;
  color: var(--text-dark);
  line-height: 1.8;
  font-weight: 500;
  letter-spacing: 0.2px;
}

.contact-list {
  padding: 0;
  margin: 0;
}

.contact-list li {
  margin-bottom: 1.25rem;
  padding: 0;
  color: var(--text-dark);
  line-height: 1.8;
  font-weight: 500;
  letter-spacing: 0.2px;
}

.contact-list li strong {
  display: block;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.contact-link {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 700;
  border-bottom: 2px solid var(--secondary-color);
  transition: var(--transition-smooth);
  display: inline-block;
}

.contact-link:hover,
.contact-link:focus {
  color: var(--primary-color);
  border-bottom: 3px solid var(--primary-color);
}

address .d-block {
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .contact-info {
    padding: 1.5rem;
  }

  .contact-list li {
    margin-bottom: 1rem;
  }
}

@media (max-width: 576px) {
  .page-title {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 1.1rem;
  }

  .contact-info {
    padding: 1.25rem;
  }

  address {
    font-size: 0.95rem;
  }

  .contact-list li {
    font-size: 0.95rem;
  }
}
</style>
