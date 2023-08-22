<template>
    <header>
        <RouterLink class="text-decoration-none" to="/">
        <div class="d-flex ma-3 align-center">
          <h2>Funko Lab</h2>
        </div>
      </RouterLink>
    </header>
  </template>
  
  <script>
  import { RouterLink } from "vue-router";
  
  export default {
    components: {
      RouterLink,
    },
  };
  </script>
  
  <style scoped>
  router-link{
      text-decoration: none;
  }
  </style>