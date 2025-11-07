<template>
  <div class="committee">
    <div class="container my-5">
      <h2 class="page-title">Committee Members</h2>

      <div class="info-section">
        <h3 class="section-title">School Committee</h3>
        <p class="text-justify">
          Leicester Greek School is managed by a dedicated committee of volunteers from the Greek and
          Cypriot community. The committee works tirelessly to ensure the smooth operation of the school
          and to promote Greek language and culture in Leicester.
        </p>

        <h3 class="section-title">Committee Roles and Responsibilities</h3>
        <p class="text-justify">
          Our committee members contribute their time, expertise, and passion to support the school's
          mission. They handle administrative tasks, organize cultural events, manage finances, and
          maintain communication with parents and the wider community.
        </p>

        <div class="committee-info">
          <h4 class="subsection-title">Committee Structure</h4>
          <ul class="info-list">
            <li>Chairperson - Leads the committee and oversees school operations</li>
            <li>Vice Chairperson - Supports the chairperson and deputizes when needed</li>
            <li>Secretary - Manages communications and documentation</li>
            <li>Treasurer - Handles financial matters and budgeting</li>
            <li>Committee Members - Support various aspects of school management</li>
          </ul>
        </div>

        <h3 class="section-title">Get Involved</h3>
        <p class="text-justify">
          We welcome parents and community members who are interested in contributing to the school.
          If you would like to join our committee or help with school activities, please
          <router-link to="/contact" class="internal-link">contact us</router-link>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.committee {
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

.subsection-title {
  font-size: 18px;
  color: #591434;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin: 1.5rem 0 1rem 0;
  font-weight: 600;
}

.info-section {
  margin-bottom: 2rem;
  background-color: #faf7f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(89, 20, 52, 0.1);
  border: 1px solid #d4b5c4;
}

.committee-info {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 6px;
  border: 1px solid #d4b5c4;
  margin-top: 1.5rem;
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

.internal-link {
  color: #7a2448;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px dotted #7a2448;
  transition: all 0.2s ease;
}

.internal-link:hover,
.internal-link:focus {
  color: #591434;
  border-bottom: 2px solid #591434;
  text-decoration: none;
}
</style>

