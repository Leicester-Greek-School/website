import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Teaching from '../views/Teaching.vue';
import Committee from '../views/Committee.vue';
import Register from '../views/Register.vue';
import Policies from '../views/Policies.vue';
import Announcements from '../views/Announcements.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';

const BASE_TITLE = 'Leicester Greek School';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Leicester Greek School - Greek Language Classes in Leicester & Leicestershire',
      description: 'Leicester Greek School (Saint Nicholas and Xenophon) offers Modern Greek language classes for children from age 4 and adults in Leicester and Leicestershire. GCSE Greek, dance, music and culture.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Us & School Information | Leicester Greek School',
      description: 'Learn about Leicester Greek School — our history, opening hours, curriculum, teaching staff and what we offer for children and adults in Leicester and Leicestershire.'
    }
  },
  {
    path: '/teaching',
    name: 'Teaching',
    component: Teaching,
    meta: {
      title: 'Teaching Staff | Leicester Greek School',
      description: 'Meet the qualified native Greek-speaking teaching staff at Leicester Greek School. Our teachers hold university degrees in education and are passionate about the Greek language and culture.'
    }
  },
  {
    path: '/committee',
    name: 'Committee',
    component: Committee,
    meta: {
      title: 'School Committee | Leicester Greek School',
      description: 'The volunteer committee at Leicester Greek School who manage the school and support the Greek and Cypriot community in Leicester and Leicestershire.'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register for Greek Classes in Leicester | Leicester Greek School',
      description: 'Register your child or yourself for Greek language classes at Leicester Greek School. We accept children from age 4 and adults of all levels. Saturday and midweek classes available.'
    }
  },
  {
    path: '/policies',
    name: 'Policies',
    component: Policies,
    meta: {
      title: 'School Policies | Leicester Greek School',
      description: 'School policies for Leicester Greek School including safeguarding, behaviour, and GDPR policies.'
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
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact Us | Leicester Greek School',
      description: 'Get in touch with Leicester Greek School. Address: 2A Sawday Street, Leicester, LE2 7JW. Phone: 07784 957591. Email: headteacher@leicestergreekschool.com.'
    }
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta: {
      title: 'Privacy Policy | Leicester Greek School',
      description: 'Privacy policy for leicestergreekschool.com — how we collect, use and protect your personal data.'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Update document title and meta description on every navigation
router.afterEach((to) => {
  const title = to.meta?.title || BASE_TITLE;
  document.title = title;

  // Update meta description
  const descriptionEl = document.querySelector('meta[name="description"]');
  if (descriptionEl && to.meta?.description) {
    descriptionEl.setAttribute('content', to.meta.description);
  }

  // Update og:title
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  // Update og:description
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && to.meta?.description) ogDesc.setAttribute('content', to.meta.description);

  // Update og:url
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', `https://leicestergreekschool.com${to.path}`);

  // Update canonical
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', `https://leicestergreekschool.com${to.path}`);
});

export default router;
