<template>
  <div class="register">
    <div class="container my-5">
      <h2 class="page-title">Register Your Child</h2>

      <div class="info-section mb-4">
        <h3 class="section-title">Enrollment Information</h3>
        <p class="text-justify">
          We welcome new students throughout the year. Leicester Greek School accepts children from age 4
          to our Nursery class. We also offer classes for older children and teenagers, including GCSE
          Greek preparation.
        </p>

        <div class="highlight-box">
          <h4 class="subsection-title">Age Groups</h4>
          <ul class="info-list">
            <li>Nursery - From age 4</li>
            <li>Primary Classes - Ages 5-11</li>
            <li>Secondary Classes - Ages 11-16</li>
            <li>GCSE Preparation - Ages 14-16</li>
          </ul>
        </div>
      </div>

      <div class="info-section mt-4">
        <h3 class="section-title">How to Register</h3>
        <ol class="registration-steps">
          <li>Complete the Google Registration Form (link below)</li>
          <li>We will contact you to confirm enrollment</li>
          <li>Attend an introductory session</li>
          <li>Begin classes on the next scheduled Saturday</li>
        </ol>
      </div>

      <div class="registration-online mt-4">
        <h3 class="section-title">2025–26 Φόρμα εγγραφής / Registration form</h3>
        <p class="text-justify">
          (Το όριο εγγραφής στο Νηπιαγωγείο έχει καθοριστεί στα 4 έτη, συμπληρωμένα πριν την έναρξη της σχολικής χρονιάς. /
          Τhe lower age limit for admissions to our Nursery class is set at 4 years old, that is children can start from
          the September following their fourth birthday.)
        </p>
        <div class="d-grid d-sm-inline-flex gap-2">
          <a
            href="https://forms.gle/sP5i7J8aN31s64R96"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary custom-btn"
            aria-label="Open Google Registration Form in a new tab"
          >
            Open Google Registration Form
          </a>
        </div>
        <p class="mt-3 small">
          If the button does not work, copy and paste this link into your browser:
          <br>
          <a href="https://forms.gle/sP5i7J8aN31s64R96" target="_blank" rel="noopener noreferrer">https://forms.gle/sP5i7J8aN31s64R96</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register'
};
</script>

<style scoped>
.register {
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
  margin: 1.5rem 0 1rem 0;
  font-weight: 600;
}

.subsection-title {
  font-size: 18px;
  color: #591434;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin: 1rem 0 0.75rem 0;
  font-weight: 600;
}

.info-section {
  background-color: #faf7f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(89, 20, 52, 0.1);
  border: 1px solid #d4b5c4;
}

.highlight-box {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 6px;
  border-left: 4px solid #591434;
  margin-top: 1.5rem;
}

.info-box {
  background-color: #faf7f9;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #d4b5c4;
  height: 100%;
}

.text-justify {
  text-align: justify;
  margin-bottom: 1rem;
  line-height: 1.8;
  color: #2d1a22;
}

.info-list {
  margin-left: 1.5rem;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

.info-list li {
  margin-bottom: 0.75rem;
  line-height: 1.8;
  color: #2d1a22;
  position: relative;
  padding-left: 1.8rem;
}

.info-list li::before {
  content: '●';
  position: absolute;
  left: 0;
  color: #591434;
  font-size: 1.2em;
}

.registration-steps {
  margin-left: 1.5rem;
  color: #2d1a22;
  line-height: 1.8;
}

.registration-steps li {
  margin-bottom: 0.75rem;
}

.registration-online {
  background-color: #faf7f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(89, 20, 52, 0.1);
  border: 1px solid #d4b5c4;
}

.custom-btn {
  background: linear-gradient(135deg, #591434 0%, #7a2448 100%);
  border: none;
  color: #ffffff;
  padding: 0.75rem 2.5rem;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(89, 20, 52, 0.3);
}

.custom-btn:hover {
  background: linear-gradient(135deg, #7a2448 0%, #591434 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(89, 20, 52, 0.4);
}

.custom-btn:active {
  transform: translateY(0);
}

.custom-btn:focus {
  outline: 2px solid #591434;
  outline-offset: 3px;
}
</style>
