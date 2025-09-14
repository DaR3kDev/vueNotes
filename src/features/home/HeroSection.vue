<script setup lang="ts">
import { stats } from './data/home'
import { RouterLink } from 'vue-router'
import Sections from '../../components/shared/sections/Sections.vue'
</script>

<template>
  <Sections class="container mx-auto max-w-6xl px-6 py-20 text-center">
    <div class="mb-8">
      <h1
        class="text-5xl md:text-6xl font-bold mb-6 leading-tight text-base-content text-balance transition-colors duration-500"
      >
        Organiza tus ideas con
        <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >NotasApp</span
        >
      </h1>

      <p
        class="text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-base-content/70 transition-colors duration-500"
      >
        La forma más simple y elegante de capturar, organizar y encontrar tus notas. Todo en un
        lugar, siempre disponible.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <RouterLink to="/notes">
          <button
            aria-label="Comenzar ahora"
            class="btn btn-primary gap-2 px-8 py-4 text-lg font-semibold transition-transform duration-300 hover:scale-105"
          >
            <IconPlus class="w-5 h-5" /> Comenzar ahora
          </button>
        </RouterLink>
        <RouterLink to="/acerca-de">
          <button
            aria-label="Saber más"
            class="btn btn-outline gap-2 px-8 py-4 text-lg font-semibold transition-transform duration-300 hover:scale-105"
          >
            Saber más <IconArrowRight class="w-5 h-5" />
          </button>
        </RouterLink>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto text-center">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="flex flex-col items-center opacity-0 translate-y-4 animate-fadeIn hover:scale-105"
          :style="{ animationDelay: `${i * 150}ms` }"
        >
          <component
            :is="stat.icon"
            class="w-10 h-10 mb-2"
            :class="stat.color"
            aria-hidden="true"
          />
          <div class="text-sm font-medium text-base-content/70">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </Sections>
</template>

<style scoped>
@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s forwards;
}
</style>
