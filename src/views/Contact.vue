<template>
  <div class="contact" role="main" aria-labelledby="contactTitle">
    <!-- Breadcrumb Navigation -->
    <div class="breadcrumb-section">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb-nav">
          <ol class="breadcrumb-list">
            <li><router-link to="/">Home</router-link></li>
            <li class="active" aria-current="page">Contact Us</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container my-5">
      <h2 id="contactTitle" class="page-title">Contact Us</h2>

      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h3 class="section-title">Get in Touch</h3>
          <p class="text-justify">
            If you would like more information about Leicester Greek School, please use the contact
            details below. We welcome enquiries from parents, students and the wider community.
          </p>

          <div class="row g-4 mt-1">
            <div class="col-md-6">
              <div class="contact-card">
                <div class="contact-card-header">
                  <span class="contact-icon"><i class="bi bi-geo-alt-fill"></i></span>
                  <h4 class="contact-card-title">Address</h4>
                </div>
                <address class="contact-card-body">
                  2A Sawday Street<br>
                  Leicester<br>
                  LE2 7JW<br>
                  United Kingdom
                </address>
              </div>
            </div>

            <div class="col-md-6">
              <div class="contact-card">
                <div class="contact-card-header">
                  <span class="contact-icon"><i class="bi bi-clock-fill"></i></span>
                  <h4 class="contact-card-title">Hours</h4>
                </div>
                <div class="contact-card-body">
                  <p class="mb-2"><strong>Saturday Classes:</strong><br>09:30 - 18:00</p>
                  <p class="mb-0"><strong>Wednesday:</strong><br>Adult Classes</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-info mt-4" aria-labelledby="schoolInfoHeading">
            <h4 id="schoolInfoHeading" class="info-title">Direct Contacts</h4>
            <ul class="list-unstyled contact-list" aria-label="Direct contacts">
              <li class="contact-item">
                <span class="contact-method-icon"><i class="bi bi-envelope-fill"></i></span>
                <div class="contact-method-content">
                  <strong>Email:</strong>
                  <a href="mailto:headteacher@leicestergreekschool.com" class="contact-link">headteacher@leicestergreekschool.com</a>
                </div>
              </li>
              <li class="contact-item">
                <span class="contact-method-icon"><i class="bi bi-telephone-fill"></i></span>
                <div class="contact-method-content">
                  <strong>Telephone:</strong>
                  <a href="tel:+447784957591" class="contact-link" aria-label="Telephone number">07784 957591</a>
                </div>
              </li>
              <li class="contact-item">
                <span class="contact-method-icon"><i class="bi bi-facebook"></i></span>
                <div class="contact-method-content">
                  <strong>Facebook:</strong>
                  <a href="https://www.facebook.com/Leicester.Greek" target="_blank" rel="noopener noreferrer" class="contact-link" aria-label="Facebook page Leicester Greek School">
                    Leicester Greek School
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div class="response-time-box">
            <p class="mb-0">
              <strong><i class="bi bi-hourglass-split me-1"></i> Response Time:</strong><br>
              We aim to respond to all enquiries within 2 working days.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { injectJsonLd, removeJsonLd, breadcrumbSchema } from '@/utils/seo';

export default {
  name: 'Contact',
  mounted() {
    injectJsonLd('breadcrumb-contact', breadcrumbSchema([
      { name: 'Home', url: 'https://leicestergreekschool.com/' },
      { name: 'Contact Us', url: 'https://leicestergreekschool.com/contact' }
    ]));
  },
  beforeUnmount() {
    removeJsonLd('breadcrumb-contact');
  }
};
</script>

<style scoped>
.contact {
  background-color: var(--white);
}

/* Breadcrumb Navigation */
.breadcrumb-section {
  background: linear-gradient(135deg, var(--primary-light) 0%, rgba(212, 165, 116, 0.05) 100%);
  border-bottom: 2px solid var(--border-color);
  padding: 1.5rem 0;
  margin-bottom: 2rem;
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

.breadcrumb-list li {
  display: flex;
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

.text-justify {
  text-align: justify;
  line-height: 1.9;
  color: var(--text-medium);
  margin-bottom: 1.5rem;
  font-size: 1rem;
  letter-spacing: 0.2px;
}

/* Contact Cards */
.contact-card {
  background: linear-gradient(135deg, var(--white) 0%, var(--primary-light) 100%);
  border: 2px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  transition: var(--transition-smooth);
  box-shadow: var(--shadow-sm);
  height: 100%;
}

.contact-card:hover {
  transform: translateY(-6px);
  border-color: var(--primary-color);
  box-shadow: var(--shadow-md);
}

.contact-card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-icon {
  font-size: 1.6rem;
  color: var(--white);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  min-height: 48px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 10px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

.contact-card-title {
  font-size: 1.2rem;
  color: var(--primary-color);
  font-weight: 700;
  margin-bottom: 0;
  font-family: Georgia, 'Times New Roman', Times, serif;
  letter-spacing: 0.3px;
}

.contact-card-body {
  color: var(--text-dark);
  line-height: 1.8;
  font-style: normal;
  font-size: 1rem;
  letter-spacing: 0.2px;
}

/* Contact Info Section */
.contact-info {
  background: linear-gradient(135deg, var(--primary-light) 0%, #f8fbff 100%);
  border-radius: 12px;
  padding: 2.5rem;
  border: 2px solid var(--border-color);
  box-shadow: var(--shadow-md);
}

.info-title {
  font-size: 1.4rem;
  color: var(--primary-color);
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-bottom: 1.75rem;
  font-weight: 700;
  position: relative;
  padding-left: 1.25rem;
  letter-spacing: 0.3px;
}

.info-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 1.4rem;
  background: linear-gradient(180deg, var(--primary-color), var(--secondary-color));
  border-radius: 2px;
}

.contact-list {
  padding: 0;
  margin: 0;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.75rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid rgba(89, 15, 50, 0.1);
}

.contact-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.contact-method-icon {
  font-size: 1.2rem;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  background: rgba(89, 15, 50, 0.1);
  border-radius: 8px;
  flex-shrink: 0;
}

.contact-method-content {
  flex: 1;
}

.contact-method-content strong {
  display: block;
  color: var(--primary-color);
  font-weight: 700;
  margin-bottom: 0.35rem;
  letter-spacing: 0.3px;
}

.contact-link {
  color: var(--link-color);
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition-smooth);
  border-bottom: 2px solid transparent;
}

.contact-link:hover,
.contact-link:focus {
  color: var(--link-hover);
  border-bottom: 2px solid var(--link-hover);
}

/* Response Time Box */
.response-time-box {
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
  color: var(--white);
  padding: 2rem;
  border-radius: 12px;
  margin-top: 2.5rem;
  box-shadow: var(--shadow-lg);
  font-size: 1rem;
  line-height: 1.8;
  letter-spacing: 0.2px;
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

/* Response Time Box */
.response-time-box {
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
  color: var(--white);
  padding: 2rem;
  border-radius: 12px;
  margin-top: 2.5rem;
  box-shadow: var(--shadow-lg);
  font-size: 1rem;
  line-height: 1.8;
  letter-spacing: 0.2px;
}

@media (max-width: 768px) {
  .breadcrumb-section {
    padding: 1rem 0;
    margin-bottom: 1.5rem;
  }

  .breadcrumb-list {
    font-size: 0.9rem;
  }

  .contact-card {
    padding: 1.5rem;
  }

  .contact-info {
    padding: 1.5rem;
  }

  .contact-item {
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }
}

@media (max-width: 576px) {
  .page-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .breadcrumb-section {
    padding: 0.75rem 0;
    margin-bottom: 1rem;
  }

  .breadcrumb-list {
    font-size: 0.85rem;
  }

  .contact-card {
    padding: 1.25rem;
  }

  .info-title {
    font-size: 1.1rem;
  }

  .response-time-box {
    padding: 1.5rem;
    font-size: 0.95rem;
  }
}
</style>
