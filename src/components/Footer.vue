<template>
  <footer class="bg-dark text-white mt-5 py-4">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5>Leicester Greek School</h5>
          <p class="small">Promoting Greek language and culture</p>
        </div>
        <div class="col-md-6 text-md-end">
          <p class="small mb-0">&copy; {{ currentYear }} Leicester Greek School. All rights reserved.</p>
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

