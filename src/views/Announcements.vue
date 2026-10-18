<template>
  <div class="announcements" aria-labelledby="announcementsTitle">
    <div class="breadcrumb-section">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb-nav">
          <ol class="breadcrumb-list">
            <li><router-link to="/">Home</router-link></li>
            <li v-if="isDetail"><router-link to="/news">News &amp; Announcements</router-link></li>
            <li class="active" aria-current="page" :lang="selected?.language || 'en-GB'">{{ isDetail ? (selected?.title || 'Announcement not found') : 'News & Announcements' }}</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container my-5">
      <template v-if="!isDetail">
        <h1 id="announcementsTitle" ref="pageTitle" tabindex="-1" class="page-title">News &amp; Announcements</h1>
        <p class="lead">Looking for dates? See the <router-link to="/calendar">2026–2027 school calendar</router-link> for terms, breaks and celebrations.</p>
        <p class="lead" v-if="announcements.length === 0">No announcements at this time. Please check back soon.</p>
        <ul v-else class="announcement-list" aria-label="Latest announcements">
          <li v-for="a in announcements" :key="a.id" class="announcement-item">
            <article :aria-labelledby="`a-title-${a.id}`">
              <h2 :id="`a-title-${a.id}`" class="announcement-title" :lang="a.language || 'en-GB'">
                <router-link v-if="hasDetail(a)" :to="announcementPath(a)">{{ a.title }}</router-link>
                <template v-else>{{ a.title }}</template>
              </h2>
              <p class="announcement-meta"><time :datetime="a.dateISO">{{ formatDate(a.dateISO) }}</time></p>
              <p class="announcement-body" :lang="a.language || 'en-GB'">{{ a.body }}</p>
              <div v-if="a.image" class="announcement-media">
                <a :href="a.image" target="_blank" rel="noopener noreferrer" class="announcement-image-link" aria-label="View full size poster (opens in a new tab)">
                  <img :src="a.image" :alt="a.imageAlt || a.title" class="announcement-image" loading="lazy" />
                </a>
              </div>
              <router-link v-if="hasDetail(a)" :to="announcementPath(a)" class="read-more">
                Read More<span class="visually-hidden" :lang="a.language || 'en-GB'">: {{ a.title }}</span><span aria-hidden="true"> →</span>
              </router-link>
            </article>
          </li>
        </ul>
      </template>

      <article v-else-if="selected" class="announcement-detail" aria-labelledby="announcementsTitle">
        <h1 id="announcementsTitle" ref="pageTitle" tabindex="-1" class="page-title" :lang="selected.language || 'en-GB'">{{ selected.title }}</h1>
        <p class="announcement-meta">Published <time :datetime="selected.dateISO">{{ formatDate(selected.dateISO) }}</time></p>
        <div class="announcement-copy" :lang="selected.language || 'en-GB'">
          <p>{{ selected.body }}</p>
        </div>
        <dl v-if="selected.event" class="event-details" lang="en-GB">
          <div v-for="detail in eventDetails(selected.event)" :key="detail.label">
            <dt>{{ detail.label }}</dt><dd>{{ detail.value }}</dd>
          </div>
        </dl>
        <div v-if="selected.image" class="announcement-media">
          <a :href="selected.image" target="_blank" rel="noopener noreferrer" class="announcement-image-link" aria-label="View full size poster (opens in a new tab)">
            <img :src="selected.image" :alt="selected.imageAlt || selected.title" class="announcement-image" />
          </a>
        </div>
        <p class="back-link"><router-link to="/news">← Back to News &amp; Announcements</router-link></p>
      </article>
      <template v-else>
        <h1 id="announcementsTitle" ref="pageTitle" tabindex="-1" class="page-title">Announcement not found</h1>
        <p>This announcement is unavailable or the link is incorrect.</p>
        <router-link to="/news">Back to News &amp; Announcements</router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { injectJsonLd, removeJsonLd } from '@/utils/seo';
import { announcements, hasDetail, announcementPath, getAnnouncement, formatDate, eventDetails, announcementSchema } from '@/data/announcements';

export default {
  name: 'Announcements',
  props: { slug: { type: String, default: null } },
  data() { return { announcements }; },
  computed: {
    isDetail() { return this.slug !== null; },
    selected() { return getAnnouncement(this.slug); }
  },
  watch: {
    slug: {
      immediate: true,
      handler(value, previous) {
        removeJsonLd('news-data');
        if (!this.isDetail || this.selected) injectJsonLd('news-data', announcementSchema(this.selected));
        if (previous !== undefined) this.$nextTick(() => this.$refs.pageTitle?.focus({ preventScroll: true }));
      }
    }
  },
  beforeUnmount() { removeJsonLd('news-data'); },
  methods: { hasDetail, announcementPath, formatDate, eventDetails }
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

.announcement-media {
  margin-top: 1.5rem;
}

.announcement-image-link {
  display: inline-block;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-smooth);
}

.announcement-image-link:hover,
.announcement-image-link:focus {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-color);
}

.announcement-image {
  display: block;
  max-width: 100%;
  width: auto;
  max-height: 520px;
  height: auto;
  object-fit: contain;
}

.read-more {
  display: inline-block;
  margin-top: 1.25rem;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.announcement-title a { color: inherit; text-decoration: underline; text-underline-offset: 4px; }
.announcement-detail { max-width: 850px; margin: 0 auto; }
.announcement-copy { line-height: 1.8; font-size: 1.05rem; }
.event-details { background: var(--primary-light); padding: 1.5rem; border-radius: 12px; }
.event-details > div { margin-bottom: 1rem; }
.event-details > div:last-child, .event-details dd { margin-bottom: 0; }
.back-link { margin-top: 2rem; }
.back-link a { text-decoration: underline; }

@media (prefers-reduced-motion: reduce) {
  .announcement-item { animation: none; transition: none; }
  .announcement-item:hover { transform: none; }
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
