import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Teaching from '../views/Teaching.vue';
import Committee from '../views/Committee.vue';
import Register from '../views/Register.vue';
import Policies from '../views/Policies.vue';
import Announcements from '../views/Announcements.vue';
import SchoolCalendar from '../views/Calendar.vue';
import { calendarSeoDescription } from '../data/calendar';
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
      title: 'School Committee 2026–2027 & PA Constitution | Leicester Greek School',
      description: 'Meet Leicester Greek School’s 2026-2027 volunteer committee, chaired by George Anastasakis, and download the Parents Association (PA) Constitution (PDF).',
      keywords: 'Leicester Greek School committee, PA constitution PDF, Greek school constitution PDF, Leicester Greek School governance, George Anastasakis, Greek community Leicester'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register for Greek Classes in Leicester & Online | Leicester Greek School',
      description: 'Register for in-person Greek classes in Leicester for children, teenagers and adults, or online lessons. Access online Google registration forms for children and adults.',
      keywords: 'Register Greek school Leicester, Greek classes registration, adult Greek classes Leicester registration form, Greek lessons children Leicester, online Greek lessons registration, Leicester Greek School forms'
    }
  },
  {
    path: '/policies',
    name: 'Policies',
    component: Policies,
    meta: {
      title: 'School Policies & Procedures | Leicester Greek School',
      description: 'Leicester Greek School policies covering registration, class placement, health and safety, attendance, mobile phones, visitor access, fees, data protection and complaints.',
      keywords: 'Leicester Greek School policies, Greek school registration policy, school health and safety Leicester, school complaints procedure, Greek school privacy policy'
    }
  },
  {
    path: '/calendar',
    alias: '/calendar/',
    name: 'SchoolCalendar',
    component: SchoolCalendar,
    meta: {
      title: 'School Calendar 2026–2027 | Term Dates & Celebrations | Leicester Greek School',
      description: calendarSeoDescription,
      keywords: 'Leicester Greek School calendar 2026 2027, Greek school term dates Leicester, half term, Greek Easter, Christmas celebration Leicester, school celebrations, AGM Leicester Greek School'
    }
  },
  {
    path: '/announcements',
    name: 'Announcements',
    component: Announcements,
    meta: {
      title: 'News & Announcements | Leicester Greek School',
      description: 'Latest news and announcements from Leicester Greek School, including the 28th October celebration event and poster, school updates, and term dates.',
      keywords: 'Leicester Greek School announcements, 28 October celebration Leicester Greek School, Greek school events, Greek community Leicester announcements, Oxi Day celebration Leicester'
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
  if (ogUrl) ogUrl.setAttribute('content', `https://leicestergreekschool.com${to.path === '/calendar' || to.path === '/calendar/' ? '/calendar/' : to.path}`);

  // Update canonical
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', `https://leicestergreekschool.com${to.path === '/calendar' || to.path === '/calendar/' ? '/calendar/' : to.path}`);
});

export default router;
