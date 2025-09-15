<script setup lang="ts">
import { stats } from '../data/home'
import { RouterLink } from 'vue-router'
import { IconPlus, IconArrowRight } from '@tabler/icons-vue'
import Sections from '../../../components/shared/sections/Sections.vue'
</script>

<template>
  <Sections
    class="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-20 text-center relative overflow-hidden"
  >
    <div class="relative z-10">
      <!-- Título -->
      <h1
        class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-base-content text-balance transition-colors duration-500"
      >
        Organiza tus ideas con
        <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          NotasApp
        </span>
      </h1>

      <!-- Descripción -->
      <p
        class="text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-base-content/70 transition-colors duration-500"
      >
        La forma más simple y elegante de capturar, organizar y encontrar tus notas. Todo en un
        lugar, siempre disponible.
      </p>

      <!-- CTA Botones -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16 sm:mb-20">
        <RouterLink to="/notes">
          <button
            aria-label="Comenzar ahora"
            class="btn btn-primary gap-2 px-8 py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <IconPlus class="w-5 h-5" /> Comenzar ahora
          </button>
        </RouterLink>
        <RouterLink to="/about">
          <button
            aria-label="Saber más"
            class="btn btn-outline gap-2 px-8 py-4 text-base sm:text-lg font-semibold rounded-full transition-transform duration-300 hover:scale-105"
          >
            Saber más <IconArrowRight class="w-5 h-5" />
          </button>
        </RouterLink>
      </div>

      <!-- Stats -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center"
      >
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="flex flex-col items-center opacity-0 translate-y-4 animate-fadeIn hover:scale-110 transition-transform"
          :style="{ animationDelay: `${i * 150}ms` }"
        >
          <component
            :is="stat.icon"
            class="w-12 h-12 mb-3"
            :class="stat.color"
            aria-hidden="true"
          />
          <div class="text-sm sm:text-base font-medium text-base-content/70">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </Sections>
  <!-- Fondos decorativos -->
  <div
    class="absolute top-0 left-0 w-60 sm:w-72 h-60 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
  ></div>
  <div
    class="absolute bottom-0 right-0 w-72 sm:w-80 h-72 sm:h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
  ></div>
</template>

<style scoped>
@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.6s forwards;
}
</style>
