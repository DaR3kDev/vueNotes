<script setup lang="ts">
import Navbar from '@/components/shared/navbar/Navbar.vue'
import Footer from '@/components/shared/footer/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <Navbar />

    <!-- Contenido dinámico -->
    <main class="flex-1 p-6">
      <RouterView />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
