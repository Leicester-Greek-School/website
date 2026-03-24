<template>
  <div class="announcements" role="main" aria-labelledby="announcementsTitle">
    <!-- Breadcrumb Navigation -->
    <div class="breadcrumb-section">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb-nav">
          <ol class="breadcrumb-list">
            <li><router-link to="/">Home</router-link></li>
            <li class="active" aria-current="page">Announcements</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container my-5">
      <h2 id="announcementsTitle" class="page-title">News &amp; Announcements</h2>
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
import { injectJsonLd, removeJsonLd, breadcrumbSchema } from '@/utils/seo';

export default {
  name: 'Announcements',
  mounted() {
    injectJsonLd('breadcrumb-announcements', breadcrumbSchema([
      { name: 'Home', url: 'https://leicestergreekschool.com/' },
      { name: 'Announcements', url: 'https://leicestergreekschool.com/announcements' }
    ]));
  },
  beforeUnmount() {
    removeJsonLd('breadcrumb-announcements');
  },
  data() {
    return {
      announcements: [
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
.announcements {
  background-color: var(--white);
}

/* Breadcrumb */
.breadcrumb-section {
  background: linear-gradient(135deg, var(--primary-light) 0%, rgba(212, 165, 116, 0.05) 100%);
  border-bottom: 2px solid var(--border-color);
  padding: 1.5rem 0;
  margin-bottom: 0;
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
  font-weight: 700;
  border-bottom: 3px solid var(--accent-gold);
  padding-bottom: 1rem;
  display: inline-block;
  margin-bottom: 2rem;
  letter-spacing: -0.5px;
}

.lead {
  font-size: 1.1rem;
  color: var(--text-medium);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.announcement-list {
  list-style: none;
  margin: 2rem 0 0 0;
  padding: 0;
  display: grid;
  gap: 1.5rem;
}

.announcement-item {
  background: linear-gradient(135deg, var(--primary-light) 0%, #f8fbff 100%);
  border: 2px solid var(--border-color);
  border-left: 5px solid var(--primary-color);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow-md);
  transition: var(--transition-smooth);
  animation: slideInUp 0.6s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.announcement-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
}

article {
  display: block;
}

.announcement-title {
  margin: 0 0 0.75rem 0;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: var(--primary-color);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 700;
  letter-spacing: -0.3px;
}

.announcement-meta {
  font-size: 0.9rem;
  color: var(--text-medium);
  margin: 0 0 1rem 0;
  font-weight: 600;
  letter-spacing: 0.1px;
}

.announcement-body {
  margin: 0;
  line-height: 1.8;
  color: var(--text-dark);
  font-size: 1rem;
  letter-spacing: 0.2px;
}

@media (max-width: 768px) {
  .announcement-item {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .page-title {
    font-size: 1.5rem;
  }

  .announcement-item {
    padding: 1.25rem;
  }

  .announcement-title {
    font-size: 1.15rem;
  }

  .announcement-body {
    font-size: 0.95rem;
  }
}
</style>
