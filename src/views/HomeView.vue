<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import Login from '@/components/Login.vue'
// import Register from '@/components/Register.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome/> -->
    <Login/>
    <!-- <Register/> -->
    <router-link to="/register">
      <button>Register</button>
    </router-link>
    
  </main>
</template>


