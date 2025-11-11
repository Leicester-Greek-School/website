<template>
  <div class="announcements" role="main" aria-labelledby="announcementsTitle">
    <div class="container my-5">
      <h2 id="announcementsTitle" class="page-title">Announcements</h2>
      <p class="lead" v-if="announcements.length === 0">No announcements at this time. Please check back soon.</p>
      <ul v-else class="announcement-list" aria-label="Latest announcements">
        <li v-for="(a, i) in announcements" :key="i" class="announcement-item">
          <article :aria-labelledby="`a-title-` + i">
            <h3 :id="`a-title-` + i" class="announcement-title">{{ a.title }}</h3>
            <p class="announcement-meta">
              <time :datetime="a.dateISO">{{ a.dateDisplay }}</time>
            </p>
            <p class="announcement-body">{{ a.body }}</p>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Announcements',
  data() {
    return {
      announcements: [
        // Example placeholder item; replace with real data or fetch from API later
        {
          title: 'Welcome Back to the New Term',
            body: 'Classes resume this Saturday. We look forward to seeing all students and welcoming new families.',
          dateISO: '2025-09-06',
          dateDisplay: '6 Sep 2025'
        }
      ]
    };
  }
};
</script>

<style scoped>
.announcements { background-color: var(--white); min-height: 60vh; }
.page-title { font-size: 28px; color: var(--primary-color); font-family: Georgia, "Times New Roman", Times, serif; font-weight: bold; border-bottom: 3px solid var(--accent-gold); padding-bottom: 0.5rem; display: inline-block; }
.announcement-list { list-style: none; margin: 2rem 0 0 0; padding: 0; }
.announcement-item { background: var(--background-cream); border: 1px solid var(--border-color); border-left: 4px solid var(--primary-color); border-radius: 6px; padding: 1.25rem 1.25rem 1rem; margin-bottom: 1rem; box-shadow: 0 2px 6px rgba(11,94,215,0.08); }
.announcement-title { margin: 0 0 0.25rem 0; font-size: 20px; }
.announcement-meta { font-size: 0.8rem; color: var(--text-medium); margin: 0 0 0.75rem 0; }
.announcement-body { margin: 0; line-height: 1.6; color: var(--text-dark); }
</style>
