<template>
  <div class="contact container my-5">
    <h1>Contact Us</h1>
    <form @submit.prevent="handleSubmit" aria-label="Contact form">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="form.name" required aria-required="true">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="form.email" required aria-required="true">
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="4" v-model="form.message" required aria-required="true"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.form);
      alert('Thank you for your message!');
      this.form = { name: '', email: '', message: '' };
    }
  }
};
</script>

