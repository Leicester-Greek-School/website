<template>
  <div class="about">
    <div class="container my-5">
      <h2 class="page-title">Information</h2>

      <div class="info-section">
        <h3 class="section-title">About Leicester Greek School</h3>
        <p class="text-justify">
          Leicester Greek School (Saint Nicholas and Xenophon) has been serving the local Greek and
          Cypriot community since the 1980s. We provide high-quality Greek language education and
          promote Greek culture and traditions.
        </p>

        <h3 class="section-title">Opening Hours</h3>
        <p class="text-justify">
          Lessons for children take place every Saturday, from 11:00 until 15:30.
        </p>
        <p class="text-justify">
          Lessons for adults run twice a week, on Wednesday and Saturday.
        </p>

        <h3 class="section-title">What We Offer</h3>
        <ul class="info-list">
          <li>Modern Greek language lessons for all ages</li>
          <li>GCSE Greek preparation</li>
          <li>Greek and Cypriot traditional dance classes</li>
          <li>Greek music and cultural activities</li>
          <li>Nursery classes for children from age 4</li>
        </ul>

        <h3 class="section-title">Our Teaching Staff</h3>
        <p class="text-justify">
          The teaching staff consists of Greek native speakers with University degrees in education,
          many years of teaching experience and enthusiasm for what they do. All our teachers are
          highly qualified and dedicated to preserving Greek language and culture.
        </p>

        <h3 class="section-title">Curriculum</h3>
        <p class="text-justify">
          The curriculum followed by our school is provided by the
          <a href="http://kea.schools.ac.cy/" target="_blank" rel="noopener noreferrer" class="external-link">Cyprus Educational Mission in the UK</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
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
  margin: 2rem 0 1rem 0;
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

.info-list {
  margin-left: 2rem;
  margin-bottom: 1.5rem;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 6px;
  list-style: none;
  border: 1px solid #d4b5c4;
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

.external-link {
  color: #7a2448;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px dotted #7a2448;
  transition: all 0.2s ease;
}

.external-link:hover,
.external-link:focus {
  color: #591434;
  border-bottom: 2px solid #591434;
  text-decoration: none;
}
</style>

