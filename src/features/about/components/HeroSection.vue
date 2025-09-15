<script setup lang="ts">
import { IconBook2 } from '@tabler/icons-vue'
import Sections from '../../../components/shared/sections/Sections.vue';
</script>

<template>
  <Sections class="text-center max-w-5xl mx-auto mb-24 px-4">
    <!-- Ícono con fondo más sutil -->
    <div
      class="w-24 h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center shadow-xl mx-auto mb-10"
    >
      <IconBook2 class="w-12 h-12 text-white" />
    </div>

    <!-- Título con jerarquía -->
    <h1 class="text-5xl md:text-6xl font-extrabold text-base-content mb-6 leading-tight">
      Acerca de
      <span class="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
        NotasApp
      </span>
    </h1>

    <!-- Subtítulo con mejor contraste -->
    <p class="text-lg md:text-xl text-base-content/70 leading-relaxed max-w-3xl mx-auto mb-8">
      Una aplicación diseñada con pasión para ayudarte a
      <span class="font-semibold text-base-content">capturar, organizar y encontrar</span>
      tus ideas de la manera más simple y elegante posible.
    </p>

    <!-- CTA opcional -->
    <div class="flex justify-center gap-4">
      <button class="btn btn-primary btn-lg rounded-full shadow-md">Empezar ahora</button>
      <button class="btn btn-outline btn-lg rounded-full">Ver código</button>
    </div>
  </Sections>
</template>
