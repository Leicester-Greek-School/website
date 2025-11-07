<template>
  <footer class="footer-main py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3 mb-md-0">
          <h5 class="footer-title">Leicester Greek School</h5>
          <p class="footer-subtitle">Saint Nicholas and Xenophon</p>
          <p class="footer-text">Promoting Greek language and culture in Leicester since the 1980s.</p>
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
          <h6 class="footer-heading">Quick Links</h6>
          <ul class="footer-links">
            <li><router-link to="/">Homepage</router-link></li>
            <li><router-link to="/about">Information</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h6 class="footer-heading">Connect With Us</h6>
          <p class="footer-text small">
            Part of the Cyprus Educational Mission in the UK
          </p>
        </div>
      </div>
      <hr class="footer-divider">
      <div class="row">
        <div class="col-12 text-center">
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
  background: linear-gradient(135deg, #591434 0%, #3d0d23 100%);
  color: #f5e6ed;
  margin-top: 3rem;
  box-shadow: 0 -4px 12px rgba(89, 20, 52, 0.2);
}

.footer-title {
  color: #ffffff;
  font-size: 20px;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-bottom: 0.25rem;
  font-weight: bold;
}

.footer-subtitle {
  color: #d4a574;
  font-size: 14px;
  font-style: italic;
  margin-bottom: 1rem;
}

.footer-heading {
  color: #d4a574;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-text {
  color: #f5e6ed;
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
  color: #f5e6ed;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block;
}

.footer-links a:hover,
.footer-links a:focus {
  color: #ffffff;
  text-decoration: none;
  transform: translateX(5px);
  outline: 1px solid rgba(255, 255, 255, 0.3);
  padding-left: 5px;
}

.footer-divider {
  border-top: 1px solid rgba(245, 230, 237, 0.3);
  margin: 2rem 0 1.5rem 0;
}

.footer-copyright {
  color: #d4b5c4;
  font-size: 13px;
}
</style>

