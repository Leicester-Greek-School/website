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
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: var(--primary-light);
  margin-top: 3rem;
  box-shadow: 0 -4px 12px rgba(11, 94, 215, 0.2);
}

.footer-title {
  color: var(--white);
  font-size: 20px;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-bottom: 0.25rem;
  font-weight: bold;
}

.footer-subtitle {
  color: var(--accent-gold);
  font-size: 14px;
  font-style: italic;
  margin-bottom: 1rem;
}

.footer-heading {
  color: var(--accent-gold);
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-text {
  color: var(--primary-light);
  line-height: 1.6;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--primary-light);
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block;
}

.footer-links a:hover,
.footer-links a:focus {
  color: var(--white);
  text-decoration: none;
  transform: translateX(5px);
  outline: 1px solid rgba(255, 255, 255, 0.15);
  padding-left: 5px;
}

.footer-divider {
  border-top: 1px solid rgba(234, 244, 255, 0.3);
  margin: 2rem 0 1.5rem 0;
}

.footer-copyright {
  color: var(--border-color);
  font-size: 13px;
}

.footer-policy-link {
  color: var(--accent-gold);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.footer-policy-link:hover,
.footer-policy-link:focus {
  color: var(--white);
  text-decoration: underline;
}
</style>
