<script setup lang="ts">
import CTASection from '../../features/home/components/CTASection.vue'
import HeroSection from '../../features/about/components/HeroSection.vue'
import MissionSection from '../../features/about/components/MissionSection.vue'
import TechSection from '../../features/about/components/TechSection.vue'
import WhyChooseSection from '../../features/about/components/WhyChooseSection.vue'
import { buttonsAbout } from '../../features/about/data/about'
</script>

<template>
  <div class="container mx-auto px-6 py-20">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Misión -->
    <MissionSection />

    <!-- Features Deep Dive -->
    <WhyChooseSection />

    <!-- Tecnología -->
    <TechSection />

    <!-- CTA -->
    <CTASection
      title="Conoce más sobre mí"
      description="Descubre cómo uso NotasApp para gestionar mis proyectos y productividad."
      :buttons="buttonsAbout"
    />
  </div>
</template>
