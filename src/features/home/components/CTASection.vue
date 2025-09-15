<script setup lang="ts">
import Card from '../../../components/shared/cards/Card.vue'
import Sections from '../../../components/shared/sections/Sections.vue'
import { RouterLink } from 'vue-router'
import type { Component } from 'vue'

interface ButtonConfig {
  label: string
  to: string
  icon?: Component
  style: string
}

defineProps<{
  title: string
  description: string
  buttons: ButtonConfig[]
}>()
</script>

<template>
  <Sections class="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-20 relative">
    <Card
      class="border-0 shadow-2xl overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl relative transition-all duration-500 hover:scale-[1.01]"
    >
      <div class="p-6 sm:p-10 md:p-12 text-center space-y-6 sm:space-y-8 relative z-10">
        <!-- Título -->
        <h3
          class="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-white drop-shadow-lg"
        >
          {{ title }}
        </h3>

        <!-- Descripción -->
        <p
          class="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-white/80 leading-relaxed px-2"
        >
          {{ description }}
        </p>

        <!-- Botones -->
        <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-4 pt-4">
          <RouterLink v-for="button in buttons" :key="button.label" :to="button.to">
            <button
              class="btn gap-2 px-6 sm:px-8 py-3 rounded-full font-semibold shadow-md w-full sm:w-auto flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-xl"
              :class="button.style"
              :aria-label="button.label"
            >
              <component v-if="button.icon" :is="button.icon" class="w-5 h-5" />
              <span>{{ button.label }}</span>
            </button>
          </RouterLink>
        </div>
      </div>

      <!-- Overlay sutil -->
      <div class="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
    </Card>
  </Sections>

  <!-- Decoraciones adaptativas -->
  <div
    class="absolute -z-10 top-10 left-10 w-28 sm:w-36 h-28 sm:h-36 bg-primary/20 rounded-full blur-3xl animate-pulse hidden sm:block"
  ></div>
  <div
    class="absolute -z-10 bottom-10 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse hidden sm:block"
  ></div>
</template>
