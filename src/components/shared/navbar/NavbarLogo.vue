<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { IconNotebook } from '@tabler/icons-vue'
</script>

<template>
  <RouterLink
    to="/"
    class="flex items-center gap-2 z-10 transition-transform duration-300 hover:scale-105"
  >
    <!-- Icono -->
    <IconNotebook
      class="w-7 h-7 sm:w-8 sm:h-8 text-primary drop-shadow-md data-[theme=forest]:text-green-700"
      aria-hidden="true"
    />

    <!-- Nombre de la app -->
    <span
      class="text-lg sm:text-xl font-extrabold tracking-tight text-base-content data-[theme=forest]:text-green-900"
    >
      NotasApp
    </span>
  </RouterLink>
</template>
