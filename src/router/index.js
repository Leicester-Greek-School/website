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

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/teaching',
    name: 'Teaching',
    component: Teaching
  },
  {
    path: '/committee',
    name: 'Committee',
    component: Committee
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/policies',
    name: 'Policies',
    component: Policies
  },
  {
    path: '/announcements',
    name: 'Announcements',
    component: Announcements
  },
  {
    path: '/greek-for-adults',
    redirect: '/announcements'
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
