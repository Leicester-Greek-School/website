<template>
  <div class="support-us">
    <!-- Breadcrumb Navigation -->
    <div class="breadcrumb-section">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb-nav">
          <ol class="breadcrumb-list">
            <li><router-link to="/">Home</router-link></li>
            <li class="active" aria-current="page">Support Us</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Fundraising Section -->
    <section class="container my-5 py-3">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2 class="page-title mb-4">Help Us Fundraise</h2>
          <p class="text-justify sponsor-intro">
            Our school relies on the generosity of our community to keep running. You can help us raise funds at no extra cost to yourself by donating directly or shopping through easyfundraising:
          </p>

          <div class="row mt-4 mb-5 g-4">
            <div class="col-md-6">
              <div class="card sponsor-card h-100 shadow-md">
                <div class="card-body text-center">
                  <div class="sponsor-icon"><i class="bi bi-heart-fill"></i></div>
                  <h5 class="card-title sponsor-name">GoFundMe</h5>
                  <p class="card-text sponsor-description">Support the Greek School of Leicester with a donation.</p>
                  <a href="https://www.gofundme.com/f/help-the-greek-school-of-leicester" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm mt-2">
                    <span>Donate Now</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card sponsor-card h-100 shadow-md">
                <div class="card-body text-center">
                  <div class="sponsor-icon"><i class="bi bi-bag-heart-fill"></i></div>
                  <h5 class="card-title sponsor-name">easyfundraising</h5>
                  <p class="card-text sponsor-description">Raise free donations for our school every time you shop online.</p>
                  <a href="https://www.easyfundraising.org.uk/causes/greekschoolofleicesterstnicholasandxenophon" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm mt-2">
                    <span>Shop &amp; Raise Funds</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr class="accent my-5">

    <!-- Sponsors Section -->
    <section class="container my-5 py-3">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2 class="page-title mb-4">Our Sponsors</h2>
          <p class="text-justify sponsor-intro">
            We would like to extend our heartfelt gratitude to our sponsors for their generous support and commitment to our community:
          </p>

          <div class="row mt-4 mb-5 g-4">
            <div class="col-md-6">
              <div class="card sponsor-card h-100 shadow-md">
                <div class="card-body text-center">
                  <div class="sponsor-icon"><i class="bi bi-building-fill"></i></div>
                  <h5 class="card-title sponsor-name">A.D</h5>
                  <p class="card-text sponsor-description">Painting, Decorating & Wood Floor</p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card sponsor-card h-100 shadow-md">
                <div class="card-body text-center">
                  <div class="sponsor-icon"><i class="bi bi-shop"></i></div>
                  <h5 class="card-title sponsor-name">Hellenic Supplies LTD</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { injectJsonLd, removeJsonLd, breadcrumbSchema } from '@/utils/seo';

export default {
  name: 'SupportUs',
  mounted() {
    injectJsonLd('breadcrumb-support-us', breadcrumbSchema([
      { name: 'Home', url: 'https://leicestergreekschool.com/' },
      { name: 'Support Us', url: 'https://leicestergreekschool.com/support-us' }
    ]));
  },
  beforeUnmount() {
    removeJsonLd('breadcrumb-support-us');
  }
};
</script>

<style scoped>
.support-us {
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

.sponsor-intro {
  font-size: 1.05rem;
  color: var(--text-medium);
  margin-bottom: 2.5rem;
  line-height: 1.8;
}

.text-justify {
  text-align: justify;
  line-height: 1.9;
}

.sponsor-card {
  border: 2px solid var(--border-color);
  border-radius: 12px;
  transition: var(--transition-smooth);
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--white) 0%, var(--primary-light) 100%);
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sponsor-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-gold));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.sponsor-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary-color);
  box-shadow: var(--shadow-lg);
}

.sponsor-card:hover::before {
  opacity: 1;
}

.sponsor-icon {
  font-size: 2.5rem;
  color: var(--accent-gold-dark);
  margin-bottom: 1rem;
  display: inline-block;
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

.sponsor-name {
  color: var(--primary-color);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
  letter-spacing: 0.3px;
}

.sponsor-description {
  color: var(--text-medium);
  font-size: 0.95rem;
  margin-bottom: 0;
  line-height: 1.6;
  letter-spacing: 0.2px;
  font-weight: 500;
}

@media (max-width: 600px) {
  .page-title {
    font-size: 1.5rem;
  }
}
</style>
