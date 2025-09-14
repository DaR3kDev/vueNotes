<script setup lang="ts">
import HeroSection from '../features/home/HeroSection.vue'
import FeaturesGrid from '../features/home/FeaturesGrid.vue'
import CTASection from '../features/home/CTASection.vue'
</script>

<template>
  <div class="min-h-screen bg-base-100 transition-colors duration-500">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Features Section -->
    <FeaturesGrid />

    <!-- CTA Section -->
    <CTASection />
  </div>
</template>
