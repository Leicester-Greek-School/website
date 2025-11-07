<template>
  <div class="greek-adults" role="main" aria-labelledby="greekAdultsTitle">
    <div class="container my-5">
      <h2 id="greekAdultsTitle" class="page-title">Greek for Adults</h2>
      <!-- Intro Section -->
      <div class="info-section" aria-labelledby="learnGreekHeading">
        <h3 id="learnGreekHeading" class="section-title">Learn Greek at Any Age</h3>
        <p class="text-justify">
          Our adult Greek language classes are designed for learners of all levels, from complete
          beginners to advanced speakers. Whether you want to connect with your heritage, prepare for
          travel, or simply enjoy learning a new language, we welcome you!
        </p>
      </div>
      <!-- Schedule & Levels -->
      <div class="row mb-4" aria-label="Class schedule and levels">
        <div class="col-md-6">
          <div class="feature-box" aria-labelledby="classScheduleTitle">
            <h4 id="classScheduleTitle" class="feature-title">Class Schedule</h4>
            <ul class="feature-list">
              <li><strong>Wednesday:</strong> Evening classes</li>
              <li><strong>Saturday:</strong> Morning/afternoon classes</li>
              <li>Flexible timing to suit working adults</li>
              <li>2-3 hours per session</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <div class="feature-box" aria-labelledby="classLevelsTitle">
            <h4 id="classLevelsTitle" class="feature-title">Class Levels</h4>
            <ul class="feature-list">
              <li>Beginner (A1-A2)</li>
              <li>Intermediate (B1-B2)</li>
              <li>Advanced (C1-C2)</li>
              <li>Conversation practice groups</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Curriculum -->
      <div class="info-section" aria-labelledby="curriculumHeading">
        <h3 id="curriculumHeading" class="section-title">What You'll Learn</h3>
        <p class="text-justify">
          Our comprehensive curriculum covers all aspects of the Greek language, tailored for adult learners:
        </p>
        <div class="row">
          <div class="col-md-6">
            <div class="learning-box" aria-labelledby="languageSkillsTitle">
              <h4 id="languageSkillsTitle" class="subsection-title">Language Skills</h4>
              <ul class="learning-list">
                <li>Modern Greek alphabet and pronunciation</li>
                <li>Grammar and sentence structure</li>
                <li>Everyday conversation</li>
                <li>Reading and writing skills</li>
                <li>Listening comprehension</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="learning-box" aria-labelledby="culturalContextTitle">
              <h4 id="culturalContextTitle" class="subsection-title">Cultural Context</h4>
              <ul class="learning-list">
                <li>Greek customs and traditions</li>
                <li>Contemporary Greek culture</li>
                <li>Greek history and civilization</li>
                <li>Travel and practical language</li>
                <li>Greek music and literature</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Benefits -->
      <div class="info-section" aria-labelledby="benefitsHeading">
        <h3 id="benefitsHeading" class="section-title">Why Learn Greek with Us?</h3>
        <div class="benefits-grid">
          <div class="benefit-item" aria-label="Small Classes">
            <span class="benefit-icon" aria-hidden="true">👥</span>
            <h5>Small Classes</h5>
            <p>Personalized attention in small, friendly groups</p>
          </div>
          <div class="benefit-item" aria-label="Native Teachers">
            <span class="benefit-icon" aria-hidden="true">🎓</span>
            <h5>Native Teachers</h5>
            <p>Learn from experienced Greek native speakers</p>
          </div>
            <div class="benefit-item" aria-label="Quality Materials">
            <span class="benefit-icon" aria-hidden="true">📚</span>
            <h5>Quality Materials</h5>
            <p>Curriculum from Cyprus Educational Mission</p>
          </div>
          <div class="benefit-item" aria-label="Cultural Immersion">
            <span class="benefit-icon" aria-hidden="true">🌍</span>
            <h5>Cultural Immersion</h5>
            <p>Experience Greek culture and community</p>
          </div>
        </div>
      </div>
      <!-- Testimonials -->
      <div class="info-section" aria-labelledby="testimonialsHeading">
        <h3 id="testimonialsHeading" class="section-title">Testimonials</h3>
        <div class="testimonial" aria-label="Testimonial from adult student">
          <p class="testimonial-text">
            "I started learning Greek to connect with my Cypriot heritage. The teachers are wonderful
            and the classes are engaging. I can now have conversations with my relatives!"
          </p>
          <p class="testimonial-author">- Adult Student</p>
        </div>
        <div class="testimonial" aria-label="Testimonial from beginner student">
          <p class="testimonial-text">
            "As a complete beginner, I was nervous about learning Greek. The supportive environment
            and patient teaching made all the difference. Highly recommended!"
          </p>
          <p class="testimonial-author">- Adult Student</p>
        </div>
      </div>
      <!-- Call to Action -->
      <div class="cta-box" aria-labelledby="ctaHeading">
        <h3 id="ctaHeading" class="cta-title">Ready to Start Your Greek Journey?</h3>
        <p class="text-center mb-3">
          Join our welcoming community of adult learners. Classes are open to everyone, regardless of
          background or experience level.
        </p>
        <div class="text-center" role="group" aria-label="Registration and contact actions">
          <router-link to="/register" class="btn btn-primary custom-btn me-3">Register Now</router-link>
          <router-link to="/contact" class="btn btn-outline-primary custom-btn-outline">Contact Us</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GreekForAdults'
};
</script>

<style scoped>
.greek-adults {
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

.subsection-title {
  font-size: 18px;
  color: #591434;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin: 0 0 1rem 0;
  font-weight: 600;
}

.feature-title {
  font-size: 18px;
  color: #591434;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
}

.info-section {
  margin-bottom: 2rem;
  background-color: #faf7f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(89, 20, 52, 0.1);
  border: 1px solid #d4b5c4;
}

.feature-box {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #d4b5c4;
  height: 100%;
  box-shadow: 0 2px 8px rgba(89, 20, 52, 0.08);
}

.learning-box {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 6px;
  border: 1px solid #d4b5c4;
  margin-bottom: 1rem;
}

.text-justify {
  text-align: justify;
  margin-bottom: 1rem;
  line-height: 1.8;
  color: #2d1a22;
}

.feature-list,
.learning-list {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}

.feature-list li,
.learning-list li {
  margin-bottom: 0.75rem;
  line-height: 1.8;
  color: #2d1a22;
  position: relative;
  padding-left: 1.8rem;
}

.feature-list li::before,
.learning-list li::before {
  content: '●';
  position: absolute;
  left: 0;
  color: #591434;
  font-size: 1.2em;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.benefit-item {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #d4b5c4;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(89, 20, 52, 0.15);
}

.benefit-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

.benefit-item h5 {
  color: #591434;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.benefit-item p {
  color: #2d1a22;
  margin-bottom: 0;
  line-height: 1.6;
}

.testimonial {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 6px;
  border-left: 4px solid #591434;
  margin-bottom: 1.5rem;
}

.testimonial:last-child {
  margin-bottom: 0;
}

.testimonial-text {
  font-style: italic;
  color: #2d1a22;
  margin-bottom: 0.75rem;
  line-height: 1.8;
}

.testimonial-author {
  color: #591434;
  font-weight: 600;
  text-align: right;
  margin-bottom: 0;
}

.cta-box {
  background: linear-gradient(135deg, #faf7f9 0%, #f5e6ed 100%);
  padding: 2.5rem;
  border-radius: 8px;
  border: 2px solid #d4a574;
  box-shadow: 0 6px 16px rgba(89, 20, 52, 0.15);
  margin-top: 2rem;
}

.cta-title {
  font-size: 24px;
  color: #591434;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
}

.custom-btn {
  background: linear-gradient(135deg, #591434 0%, #7a2448 100%);
  border: none;
  color: #ffffff;
  padding: 0.75rem 2rem;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(89, 20, 52, 0.3);
  text-decoration: none;
  display: inline-block;
}

.custom-btn:hover {
  background: linear-gradient(135deg, #7a2448 0%, #591434 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(89, 20, 52, 0.4);
  color: #ffffff;
}

.custom-btn-outline {
  background: transparent;
  border: 2px solid #591434;
  color: #591434;
  padding: 0.75rem 2rem;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.custom-btn-outline:hover {
  background-color: #591434;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(89, 20, 52, 0.3);
}
</style>
