<template>
  <div class="register">
    <div class="container my-5">
      <h2 class="page-title">Register Your Child</h2>

      <div class="info-section mb-4">
        <h3 class="section-title">Enrollment Information</h3>
        <p class="text-justify">
          We welcome new students throughout the year. Leicester Greek School accepts children from age 4
          to our Nursery class. We also offer classes for older children and teenagers, including GCSE
          Greek preparation.
        </p>

        <div class="highlight-box">
          <h4 class="subsection-title">Age Groups</h4>
          <ul class="info-list">
            <li>Nursery - From age 4</li>
            <li>Primary Classes - Ages 5-11</li>
            <li>Secondary Classes - Ages 11-16</li>
            <li>GCSE Preparation - Ages 14-16</li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="info-box">
            <h3 class="section-title">How to Register</h3>
            <ol class="registration-steps">
              <li>Complete the registration form below</li>
              <li>We will contact you to confirm enrollment</li>
              <li>Attend an introductory session</li>
              <li>Begin classes on the next scheduled Saturday</li>
            </ol>
          </div>
        </div>

        <div class="col-md-6">
          <div class="info-box">
            <h3 class="section-title">What to Bring</h3>
            <ul class="bring-list">
              <li>Completed registration form</li>
              <li>Birth certificate (copy)</li>
              <li>Passport-sized photo</li>
              <li>Registration fee</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="registration-form mt-4">
        <h3 class="section-title">Registration Form</h3>
        <form @submit.prevent="handleSubmit" aria-label="Student registration form">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="parentName" class="form-label">Parent/Guardian Name *</label>
              <input type="text" class="form-control custom-input" id="parentName" v-model="form.parentName" required>
            </div>
            <div class="col-md-6 mb-3">
              <label for="email" class="form-label">Email Address *</label>
              <input type="email" class="form-control custom-input" id="email" v-model="form.email" required>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="phone" class="form-label">Phone Number *</label>
              <input type="tel" class="form-control custom-input" id="phone" v-model="form.phone" required>
            </div>
            <div class="col-md-6 mb-3">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control custom-input" id="address" v-model="form.address">
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="studentName" class="form-label">Student Name *</label>
              <input type="text" class="form-control custom-input" id="studentName" v-model="form.studentName" required>
            </div>
            <div class="col-md-6 mb-3">
              <label for="dob" class="form-label">Date of Birth *</label>
              <input type="date" class="form-control custom-input" id="dob" v-model="form.dob" required>
            </div>
          </div>

          <div class="mb-3">
            <label for="ageGroup" class="form-label">Age Group/Class *</label>
            <select class="form-select custom-input" id="ageGroup" v-model="form.ageGroup" required>
              <option value="">Please select...</option>
              <option value="nursery">Nursery (Age 4)</option>
              <option value="primary">Primary (Ages 5-11)</option>
              <option value="secondary">Secondary (Ages 11-16)</option>
              <option value="gcse">GCSE Preparation (Ages 14-16)</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="greekLevel" class="form-label">Previous Greek Language Experience</label>
            <select class="form-select custom-input" id="greekLevel" v-model="form.greekLevel">
              <option value="">Please select...</option>
              <option value="none">No previous experience</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="native">Native speaker</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Additional Information</label>
            <textarea class="form-control custom-input" id="message" rows="4" v-model="form.message"></textarea>
          </div>

          <button type="submit" class="btn btn-primary custom-btn">Submit Registration</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        parentName: '',
        email: '',
        phone: '',
        address: '',
        studentName: '',
        dob: '',
        ageGroup: '',
        greekLevel: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log('Registration submitted:', this.form);
      alert('Thank you for registering! We will contact you shortly to confirm enrollment.');
      this.form = {
        parentName: '',
        email: '',
        phone: '',
        address: '',
        studentName: '',
        dob: '',
        ageGroup: '',
        greekLevel: '',
        message: ''
      };
    }
  }
};
</script>

<style scoped>
.register {
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
  margin: 1.5rem 0 1rem 0;
  font-weight: 600;
}

.subsection-title {
  font-size: 18px;
  color: #591434;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin: 1rem 0 0.75rem 0;
  font-weight: 600;
}

.info-section {
  background-color: #faf7f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(89, 20, 52, 0.1);
  border: 1px solid #d4b5c4;
}

.highlight-box {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 6px;
  border-left: 4px solid #591434;
  margin-top: 1.5rem;
}

.info-box {
  background-color: #faf7f9;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #d4b5c4;
  height: 100%;
}

.text-justify {
  text-align: justify;
  margin-bottom: 1rem;
  line-height: 1.8;
  color: #2d1a22;
}

.info-list {
  margin-left: 1.5rem;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

.info-list li {
  margin-bottom: 0.75rem;
  line-height: 1.8;
  color: #2d1a22;
  position: relative;
  padding-left: 1.8rem;
}

.info-list li::before {
  content: '●';
  position: absolute;
  left: 0;
  color: #591434;
  font-size: 1.2em;
}

.registration-steps {
  margin-left: 1.5rem;
  color: #2d1a22;
  line-height: 1.8;
}

.registration-steps li {
  margin-bottom: 0.75rem;
}

.bring-list {
  margin-left: 1.5rem;
  color: #2d1a22;
  line-height: 1.8;
}

.bring-list li {
  margin-bottom: 0.75rem;
}

.registration-form {
  background-color: #faf7f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(89, 20, 52, 0.1);
  border: 1px solid #d4b5c4;
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
}

.custom-btn:focus {
  outline: 2px solid #591434;
  outline-offset: 3px;
}
</style>

