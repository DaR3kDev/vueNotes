<script setup lang="ts">
import FeaturesGrid from '../features/home/components/FeaturesGrid.vue'
import HeroSection from '../features/home/components/HeroSection.vue'
import CTASection from '../features/home/components/CTASection.vue'
import { buttonsHome } from '../features/home/data/home'
</script>

<template>
  <div class="min-h-screen bg-base-100 transition-colors duration-500">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Features Section -->
    <FeaturesGrid />

    <!-- CTA Section -->
    <CTASection
      title="¿Listo para organizar tus ideas?"
      description="Empieza ahora mismo a crear tus notas y organiza tu vida fácilmente."
      :buttons="buttonsHome"
    />
  </div>
</template>
