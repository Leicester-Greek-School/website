<template>
  <div class="contact">
    <div class="container my-5">
      <h2 class="page-title">Contact Us</h2>

      <div class="row">
        <div class="col-md-6">
          <h3 class="section-title">Get in Touch</h3>
          <p class="text-justify">
            If you would like more information about Leicester Greek School, please feel free to
            contact us using the form below or through the contact details provided.
          </p>

          <div class="contact-info">
            <h4 class="info-title">Leicester Greek School</h4>
            <p class="mb-2">Saint Nicholas and Xenophon Greek School</p>
            <p class="mb-2">Leicester, United Kingdom</p>
          </div>

          <div class="mt-4">
            <p class="mb-2">
              <strong>For registration and general enquiries:</strong><br>
              Please complete the contact form.
            </p>
          </div>
        </div>

        <div class="col-md-6">
          <h3 class="section-title">Send us a Message</h3>
          <form @submit.prevent="handleSubmit" aria-label="Contact form" class="contact-form">
            <div class="mb-3">
              <label for="name" class="form-label">Name *</label>
              <input type="text" class="form-control custom-input" id="name" v-model="form.name" required aria-required="true">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email *</label>
              <input type="email" class="form-control custom-input" id="email" v-model="form.email" required aria-required="true">
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone</label>
              <input type="tel" class="form-control custom-input" id="phone" v-model="form.phone">
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message *</label>
              <textarea class="form-control custom-input" id="message" rows="5" v-model="form.message" required aria-required="true"></textarea>
            </div>
            <button type="submit" class="btn btn-primary custom-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.form);
      alert('Thank you for your message! We will get back to you soon.');
      this.form = { name: '', email: '', phone: '', message: '' };
    }
  }
};
</script>

<style scoped>
.contact {
  background-color: #ffffff;
  min-height: 70vh;
}

.page-title {
  font-size: 28px;
  color: #591434;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-bottom: 1.5rem;
  font-weight: bold;
  border-bottom: 3px solid #d4a574;
  padding-bottom: 0.5rem;
  display: inline-block;
}

.section-title {
  font-size: 20px;
  color: #591434;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin: 1rem 0 1rem 0;
  font-weight: 600;
}

.info-title {
  font-size: 18px;
  color: #591434;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-bottom: 0.75rem;
  font-weight: bold;
}

.text-justify {
  text-align: justify;
  margin-bottom: 1rem;
  line-height: 1.8;
  color: #2d1a22;
}

.contact-info {
  background-color: #faf7f9;
  border: 2px solid #d4b5c4;
  border-left: 4px solid #591434;
  padding: 1.5rem;
  margin-top: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(89, 20, 52, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-info:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(89, 20, 52, 0.15);
}

.contact-form {
  background-color: #faf7f9;
  border: 2px solid #d4b5c4;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(89, 20, 52, 0.1);
}

.form-label {
  color: #2d1a22;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.custom-input {
  border: 2px solid #d4b5c4;
  background-color: #ffffff;
  transition: all 0.3s ease;
  padding: 0.75rem;
}

.custom-input:hover {
  border-color: #8b3a5d;
}

.custom-input:focus {
  border-color: #591434;
  background-color: #ffffff;
  box-shadow: 0 0 0 0.3rem rgba(89, 20, 52, 0.15);
  outline: none;
}

.custom-input::placeholder {
  color: #9a8890;
}

.custom-btn {
  background: linear-gradient(135deg, #591434 0%, #7a2448 100%);
  border: none;
  color: #ffffff;
  padding: 0.75rem 2.5rem;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(89, 20, 52, 0.3);
}

.custom-btn:hover {
  background: linear-gradient(135deg, #7a2448 0%, #591434 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(89, 20, 52, 0.4);
}

.custom-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(89, 20, 52, 0.3);
}

.custom-btn:focus {
  outline: 2px solid #591434;
  outline-offset: 3px;
}
</style>

