<template>
  <footer class="footer-main py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-3 mb-md-0">
          <h5 class="footer-title">Leicester Greek School</h5>
          <p class="footer-subtitle">Saint Nicholas and Xenophon</p>
          <p class="footer-text">Promoting Greek language and culture in Leicester since the 1980s.</p>
        </div>
        <div class="col-md-3 mb-3 mb-md-0">
          <h6 class="footer-heading">About</h6>
          <ul class="footer-links">
            <li><router-link to="/">Homepage</router-link></li>
            <li><router-link to="/about">Information</router-link></li>
            <li><router-link to="/teaching">Teaching Staff</router-link></li>
            <li><router-link to="/committee">Committee</router-link></li>
          </ul>
        </div>
        <div class="col-md-3 mb-3 mb-md-0">
          <h6 class="footer-heading">For Students</h6>
          <ul class="footer-links">
            <li><router-link to="/register">Register</router-link></li>
            <li><router-link to="/announcements">Announcements</router-link></li>
            <li><router-link to="/policies">Policies</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h6 class="footer-heading">Connect</h6>
          <p class="footer-text small">
            Part of the Cyprus Educational Mission (KEA) in the UK
          </p>
          <p class="footer-text small">
            <strong>Saturday Classes:</strong><br>
            09:30 - 18:00
          </p>
        </div>
      </div>
      <hr class="footer-divider">
      <div class="row">
        <div class="col-12 text-center">
          <p class="footer-copyright mb-2">
            <router-link to="/privacy-policy" class="footer-policy-link">Privacy Policy</router-link>
          </p>
          <p class="footer-copyright mb-0">&copy; {{ currentYear }} Leicester Greek School. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.footer-main {
  background: linear-gradient(135deg, var(--primary-darker) 0%, var(--primary-color) 50%, var(--primary-dark) 100%);
  color: var(--primary-light);
  margin-top: 4rem;
  box-shadow: var(--shadow-xl) inset 0 1px 0 rgba(255, 255, 255, 0.1);
  padding: 3rem 0;
}

.footer-main::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  pointer-events: none;
}

.footer-title {
  color: var(--white);
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-bottom: 0.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.footer-subtitle {
  color: var(--accent-gold);
  font-size: 0.9rem;
  font-style: italic;
  margin-bottom: 1rem;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.footer-heading {
  color: var(--accent-gold);
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-heading::before {
  content: '';
  display: inline-block;
  width: 3px;
  height: 1.2rem;
  background: var(--accent-gold);
  border-radius: 1.5px;
}

.footer-text {
  color: var(--primary-light);
  line-height: 1.8;
  font-size: 0.95rem;
  letter-spacing: 0.2px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: var(--primary-light);
  text-decoration: none;
  transition: var(--transition-smooth);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  padding: 0.25rem 0;
  border-bottom: 1px solid transparent;
}

.footer-links a::before {
  content: '→';
  opacity: 0;
  transform: translateX(-5px);
  transition: var(--transition-smooth);
}

.footer-links a:hover,
.footer-links a:focus {
  color: var(--white);
  border-bottom: 1px solid var(--white);
  padding-left: 5px;
}

.footer-links a:hover::before {
  opacity: 1;
  transform: translateX(0);
}

.footer-divider {
  border-top: 1px solid rgba(234, 244, 255, 0.25);
  margin: 2.5rem 0 2rem 0;
}

.footer-copyright {
  color: rgba(234, 244, 255, 0.85);
  font-size: 0.85rem;
  letter-spacing: 0.2px;
}

.footer-policy-link {
  color: var(--accent-gold);
  text-decoration: none;
  font-weight: 700;
  transition: var(--transition-smooth);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  display: inline-block;
  border-bottom: 2px solid transparent;
}

.footer-policy-link:hover,
.footer-policy-link:focus {
  color: var(--white);
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom: 2px solid var(--white);
}

@media (max-width: 768px) {
  .footer-main {
    padding: 2rem 1rem;
  }

  .footer-heading {
    margin-top: 1.5rem;
  }

  .footer-heading::before {
    display: none;
  }

  .footer-links a {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .footer-title {
    font-size: 1.25rem;
  }

  .footer-heading {
    margin-top: 1.25rem;
    font-size: 0.9rem;
  }

  .footer-text {
    font-size: 0.9rem;
  }
}
</style>
