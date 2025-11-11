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

        <!-- Added detailed committee members list -->
        <h3 class="section-title" id="committeeMembersHeading">Current Committee</h3>
        <ul class="members-list" aria-labelledby="committeeMembersHeading">
          <li>
            <span class="member-role">Chair:</span>
            <span class="member-name">Antonios Pavlakis</span>
            <a href="mailto:chair@leicestergreekschool.com" class="member-email" aria-label="Email Chair">chair@leicestergreekschool.com</a>
          </li>
          <li>
            <span class="member-role">Vice Chair:</span>
            <span class="member-name">Chrysa Avdellidou</span>
            <a href="mailto:vc@leicestergreekschool.com" class="member-email" aria-label="Email Vice Chair">vc@leicestergreekschool.com</a>
          </li>
          <li>
            <span class="member-role">Treasurer:</span>
            <span class="member-name">Gregoris Tzokatziou</span>
            <a href="mailto:treasurer@leicestergreekschool.com" class="member-email" aria-label="Email Treasurer">treasurer@leicestergreekschool.com</a>
          </li>
          <li>
            <span class="member-role">Vice Treasurer:</span>
            <span class="member-name">Sofia Thodi</span>
            <a href="mailto:secretary@leicestergreekschool.com" class="member-email" aria-label="Email Vice Treasurer">secretary@leicestergreekschool.com</a>
          </li>
          <li>
            <span class="member-role">Health and Safety:</span>
            <span class="member-name">George Anastasakis</span>
            <a href="mailto:safety@leicestergreekschool.com" class="member-email" aria-label="Email Health and Safety">safety@leicestergreekschool.com</a>
          </li>
          <li>
            <span class="member-role">Secretary:</span>
            <span class="member-name">Sofia Thodi</span>
            <a href="mailto:secretary@leicestergreekschool.com" class="member-email" aria-label="Email Secretary">secretary@leicestergreekschool.com</a>
          </li>
          <li>
            <span class="member-role">Committee Member:</span>
            <span class="member-name">Esmeralda Toskaj</span>
          </li>
            <li>
            <span class="member-role">Committee Member:</span>
            <span class="member-name">Katerina Selvi</span>
          </li>
        </ul>

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
  background-color: var(--white);
  min-height: 70vh;
}

.page-title {
  font-size: 28px;
  color: var(--primary-dark);
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-bottom: 1.5rem;
  font-weight: bold;
  border-bottom: 3px solid var(--accent-gold);
  padding-bottom: 0.5rem;
  display: inline-block;
}

.section-title {
  font-size: 20px;
  color: var(--primary-dark);
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
  background-color: var(--primary-color);
}

.subsection-title {
  font-size: 18px;
  color: var(--primary-dark);
  font-family: Georgia, "Times New Roman", Times, serif;
  margin: 1.5rem 0 1rem 0;
  font-weight: 600;
}

.info-section {
  margin-bottom: 2rem;
  background-color: var(--background-cream);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(11,94,215,0.06);
  border: 1px solid var(--border-color);
}

.committee-info {
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  margin-top: 1.5rem;
}

.text-justify {
  text-align: justify;
  margin-bottom: 1rem;
  line-height: 1.8;
  color: var(--text-medium);
}

.info-list {
  margin-left: 2rem;
  margin-bottom: 1.5rem;
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 6px;
  list-style: none;
  border: 1px solid var(--border-color);
}

.info-list li {
  margin-bottom: 0.75rem;
  line-height: 1.8;
  color: var(--text-medium);
  position: relative;
  padding-left: 1.8rem;
}

.info-list li::before {
  content: '●';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-size: 1.2em;
}

.internal-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px dotted var(--primary-color);
  transition: all 0.2s ease;
}

.internal-link:hover,
.internal-link:focus {
  color: var(--primary-dark);
  border-bottom: 2px solid var(--primary-dark);
  text-decoration: none;
}

.members-list {
  list-style: none;
  margin: 1rem 0 2rem 0;
  padding: 0;
  background-color: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 6px;
}
.members-list li {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: baseline;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;
}
.members-list li:last-child { border-bottom: none; }
.member-role { font-weight: 700; color: var(--primary-dark); }
.member-name { color: var(--text-dark); }
.member-email { margin-left: auto; color: var(--primary-color); text-decoration: none; font-size: 0.9rem; }
.member-email:hover, .member-email:focus { color: var(--primary-dark); text-decoration: underline; }
@media (max-width: 600px) {
  .member-email { width: 100%; margin-left: 0; }
}
</style>
