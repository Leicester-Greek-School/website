<template>
  <div class="home">
    <section class="container my-5">
      <h2 class="page-title">Welcome to our website!!!</h2>

      <p class="lead-text">
        Saint Nicholas and Xenophon Greek School is located in Leicester and was founded in the 1980's
        by the Greek and Cypriot Community. The curriculum followed by our school is provided by the
        <a href="http://kea.schools.ac.cy/" target="_blank" rel="noopener noreferrer" class="external-link">Cyprus Educational Mission in the UK</a>.
      </p>

      <h3 class="section-title">The aim of the school is to teach:</h3>

      <ul class="aims-list">
        <li>the Modern Greek language,</li>
        <li>a variety of Greek and Cypriot music and dancing,</li>
        <li>the history of Greece and Cyprus as well as their culture.</li>
      </ul>

      <p class="text-justify">
        Various events of national and educational content are being organised by the school and are
        directed towards the cultivation of national consciousness and the strengthening of the
        expatriates' identity. The teaching staff consists of Greek native speakers with University
        degrees in education, many years of teaching experience and enthusiasm for what they do.
      </p>

      <p class="text-justify">
        We accept children from the age of 4 to our Nursery.
      </p>

      <p class="text-justify">
        For more information on opening days and hours as well as prices, please check our
        <router-link to="/about" class="internal-link">information page</router-link>.
      </p>

      <p class="join-text">Join us to learn Modern Greek!!!</p>

      <hr class="my-5">

      <h2 class="page-title greek-text">Καλωσορίσατε στην ιστοσελίδα μας!!!</h2>

      <p class="text-justify">
        Το Ελληνικό Παροικιακό Σχολείο Αγίου Νικολάου και Ξενοφώντος στο Leicester ιδρύθηκε το 1980
        από την Ελληνοκυπριακή κοινότητα. Το Αναλυτικό Πρόγραμμα του σχολείου είναι καθορισμένο από
        την <a href="http://kea.schools.ac.cy/" target="_blank" rel="noopener noreferrer" class="external-link">Κυπριακή Εκπαιδευτική Αποστολή (ΚΕΑ)</a>
        στο Ηνωμένο Βασίλειο.
      </p>

      <hr class="my-5">

      <h2 class="page-title">Our Sponsors</h2>
      <p class="text-justify">
        We would like to thank our sponsors for their generous support:
      </p>

      <div class="row mt-4 mb-5">
        <div class="col-md-6 mb-4">
          <div class="card sponsor-card h-100">
            <div class="card-body text-center">
              <h5 class="card-title sponsor-name">A.D</h5>
              <p class="card-text sponsor-description">Painting, Decorating & Wood Floor</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <div class="card sponsor-card h-100">
            <div class="card-body text-center">
              <h5 class="card-title sponsor-name">Hellenic Supplies LTD</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
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
  margin: 1.5rem 0 1rem 0;
  font-weight: 600;
}

.lead-text {
  text-align: justify;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: var(--text-dark);
  font-size: 15px;
}

.text-justify {
  text-align: justify;
  margin-bottom: 1rem;
  line-height: 1.8;
  color: var(--text-dark);
}

.aims-list {
  margin-left: 2rem;
  margin-bottom: 1.5rem;
  background-color: var(--background-cream);
  padding: 1.5rem;
  border-left: 4px solid var(--primary-color);
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(11, 94, 215, 0.08);
}

.aims-list li {
  margin-bottom: 0.75rem;
  line-height: 1.8;
  color: var(--text-dark);
  position: relative;
  padding-left: 1.5rem;
}

.aims-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.external-link {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px dotted var(--secondary-color);
  transition: all 0.2s ease;
}

.external-link:hover,
.external-link:focus {
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
  text-decoration: none;
}

.internal-link {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px dotted var(--secondary-color);
  transition: all 0.2s ease;
}

.internal-link:hover,
.internal-link:focus {
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
  text-decoration: none;
}

.join-text {
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
  font-size: 18px;
  text-align: center;
  padding: 1rem;
  background-color: var(--background-cream);
  border: 2px solid var(--accent-gold);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(11, 94, 215, 0.08);
}

.greek-text {
  font-style: normal;
}

hr {
  border: 0;
  border-top: 2px solid var(--border-color);
  opacity: 0.5;
}

.sponsor-card {
  border: 2px solid var(--accent-gold);
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(11, 94, 215, 0.08);
}

.sponsor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(11, 94, 215, 0.15);
  border-color: var(--primary-color);
}

.sponsor-name {
  color: var(--primary-color);
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 0.75rem;
}

.sponsor-description {
  color: var(--text-dark);
  font-size: 16px;
  margin-bottom: 0;
  line-height: 1.6;
}
</style>
