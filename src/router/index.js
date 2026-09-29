import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Teaching from '../views/Teaching.vue';
import Committee from '../views/Committee.vue';
import Register from '../views/Register.vue';
import Policies from '../views/Policies.vue';
import Announcements from '../views/Announcements.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';
import SupportUs from '../views/SupportUs.vue';

const BASE_TITLE = 'Leicester Greek School';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Greek School in Leicester | In-Person Greek Classes for Children & Teens',
      description: 'Leicester Greek School offers in-person Modern Greek teaching from Nursery through A-Level, adult classes and online lessons. GCSE preparation is supported by teachers who also serve as GCSE examiners.',
      keywords: 'Greek school Leicester, Greek classes Leicester, Greek lessons for children Leicester, Greek lessons for teenagers Leicester, online Greek lessons children, online Greek lessons adults, GCSE Greek Leicester, GCSE Greek examiners'
    }
  },
  {
    path: '/teaching',
    name: 'Teaching',
    component: Teaching,
    meta: {
      title: 'Teaching Staff | Greek Teachers in Leicester & Online',
      description: 'Meet the qualified native Greek-speaking teachers behind Leicester Greek School’s in-person classes for children and teenagers and online Greek lessons for children and adults.'
    }
  },
  {
    path: '/committee',
    name: 'Committee',
    component: Committee,
    meta: {
      title: 'School Committee 2026-2027 | Leicester Greek School',
      description: 'Meet Leicester Greek School’s 2026-2027 volunteer committee, chaired by George Anastasakis, supporting the school and Greek and Cypriot community.'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register for Greek Classes in Leicester & Online | Leicester Greek School',
      description: 'Register for in-person Greek classes in Leicester for children and teenagers, adult Greek classes, or online Greek lessons for children and adults at Leicester Greek School.'
    }
  },
  {
    path: '/policies',
    name: 'Policies',
    component: Policies,
    meta: {
      title: 'School Policies & Procedures | Leicester Greek School',
      description: 'Leicester Greek School policies covering registration, class placement, health and safety, withdrawal, attendance times, class structure, allergies, mobile phones, visitors, privacy and complaints.',
      keywords: 'Leicester Greek School policies, Greek school registration policy, school health and safety Leicester, school allergy policy, school complaints procedure, Greek school privacy policy'
    }
  },
  {
    path: '/announcements',
    name: 'Announcements',
    component: Announcements,
    meta: {
      title: 'News & Announcements | Leicester Greek School',
      description: 'Latest news and announcements from Leicester Greek School. Term dates, events, cultural activities and school updates for the Greek and Cypriot community in Leicester.'
    }
  },
  {
    path: '/support-us',
    name: 'SupportUs',
    component: SupportUs,
    meta: {
      title: 'Support Us | Leicester Greek School',
      description: 'Support Leicester Greek School through fundraising and sponsorship — donate via GoFundMe, raise funds with easyfundraising, or become a sponsor of our community school.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact Leicester Greek School | Admissions for In-Person & Online Lessons',
      description: 'Contact Leicester Greek School about in-person Greek classes in Leicester for children and teenagers, adult classes, and online Greek lessons for children and adults.'
    }
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta: {
      title: 'Privacy & Data Protection Policy | Leicester Greek School',
      description: 'How Leicester Greek School collects, uses, stores, shares and retains personal data for pupils, families, employees and suppliers. Updated 29 September 2026.',
      keywords: 'Leicester Greek School privacy policy, data protection policy, pupil data privacy, UK GDPR Greek school Leicester'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0 };
  }
});

// Update document title and meta description on every navigation
router.afterEach((to) => {
  const title = to.meta?.title || BASE_TITLE;
  document.title = title;

  const titleEl = document.querySelector('meta[name="title"]');
  if (titleEl) {
    titleEl.setAttribute('content', title);
  }

  // Update meta description
  const descriptionEl = document.querySelector('meta[name="description"]');
  if (descriptionEl && to.meta?.description) {
    descriptionEl.setAttribute('content', to.meta.description);
  }

  const keywordsEl = document.querySelector('meta[name="keywords"]');
  if (keywordsEl && to.meta?.keywords) {
    keywordsEl.setAttribute('content', to.meta.keywords);
  }

  // Update og:title
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  // Update og:description
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && to.meta?.description) ogDesc.setAttribute('content', to.meta.description);

  // Update twitter:title
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute('content', title);

  // Update twitter:description
  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc && to.meta?.description) twitterDesc.setAttribute('content', to.meta.description);

  // Update og:url
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', `https://leicestergreekschool.com${to.path}`);

  // Update canonical
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', `https://leicestergreekschool.com${to.path}`);
});

export default router;
