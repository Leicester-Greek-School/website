<template>
  <div class="teaching" role="main" aria-labelledby="teachingTitle">
    <div class="container my-5">
      <h2 id="teachingTitle" class="page-title">The Teaching Staff</h2>

      <div class="info-section" aria-label="Teaching staff list">
        <ul class="staff-list" aria-describedby="staffNote">
          <li v-for="(item, idx) in staff" :key="idx">
            <span class="role">{{ item.role }}:</span>
            <span class="name">{{ item.name }}</span>
          </li>
        </ul>
        <p id="staffNote" class="visually-hidden">Teaching staff by class and level.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Teaching',
  data() {
    return {
      staff: [
        { role: 'Nursery / Pre-School', name: 'Christina Kalintzeou' },
        { role: 'Year 1', name: 'Chara Orthodoxou' },
        { role: 'Year 1+', name: 'Maria Karatzia' },
        { role: 'Year 2/3', name: 'Mikaella Makri' },
        { role: 'Year 4/5/6', name: 'Mikaella Makri' },
        { role: 'GCSE 1/2', name: 'Chara Orthodoxou' },
        { role: 'A level', name: 'Panayiota Serghi' },
        { role: 'Adults Level 1', name: 'Roumpini – Danai Zakopoulou' },
        { role: 'Adults Level 2', name: 'Roumpini -Danai Zakopoulou' }
      ]
    };
  }
};
</script>

<style scoped>
.teaching {
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

.info-section {
  margin-bottom: 2rem;
  background-color: #faf7f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(89, 20, 52, 0.1);
  border: 1px solid #d4b5c4;
}

.staff-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.staff-list li {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: baseline;
  padding: 0.75rem 1rem;
  background-color: #ffffff;
  border: 1px solid #d4b5c4;
  border-left: 4px solid #591434;
  border-radius: 6px;
  margin-bottom: 0.75rem;
}

.role {
  font-weight: 700;
  color: #591434;
}

.name {
  color: #2d1a22;
}

/* Visually hidden utility for screen readers */
.visually-hidden {
  position: absolute !important;
  height: 1px; width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}
</style>
