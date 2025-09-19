<script setup lang="ts">
import { IconBook2 } from '@tabler/icons-vue'
import Sections from '../../../components/shared/sections/Sections.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <Sections class="text-center max-w-5xl mx-auto mb-24 px-4 sm:px-6 md:px-8">
    <!-- Ícono con fondo dinámico -->
    <div
      class="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-primary via-primary to-secondary rounded-3xl flex items-center justify-center shadow-xl mx-auto mb-8 sm:mb-10"
    >
      <IconBook2 class="w-10 sm:w-12 h-10 sm:h-12 text-white" />
    </div>

    <!-- Título principal -->
    <h1
      class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-base-content mb-4 sm:mb-6 leading-tight"
    >
      Acerca de
      <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        NotasApp
      </span>
    </h1>

    <!-- Subtítulo -->
    <p
      class="text-base sm:text-lg md:text-xl text-base-content/70 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0"
    >
      Una aplicación diseñada con pasión para ayudarte a
      <span class="font-semibold text-base-content">capturar, organizar y encontrar</span>
      tus ideas de la manera más simple y elegante posible.
    </p>

    <!-- CTA botones -->
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <RouterLink to="/notes">
        <button
          class="btn btn-primary rounded-full w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-105"
        >
          Empezar ahora
        </button>
      </RouterLink>

      <a href="https://github.com/tu-repo/notasapp" target="_blank" rel="noopener">
        <button
          class="btn btn-outline rounded-full w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg font-semibold transition-transform duration-300 hover:scale-105"
        >
          Ver código
        </button>
      </a>
    </div>
  </Sections>
</template>
