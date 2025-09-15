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
  <Sections class="container mx-auto max-w-6xl px-6 py-20 relative">
    <Card
      class="border-0 shadow-2xl overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl relative"
    >
      <div class="p-12 text-center space-y-8 relative z-10">
        <!-- Título -->
        <h3 class="text-3xl md:text-4xl font-extrabold leading-tight text-white drop-shadow-lg">
          {{ title }}
        </h3>

        <!-- Descripción -->
        <p class="text-lg md:text-xl max-w-2xl mx-auto text-white/80 leading-relaxed">
          {{ description }}
        </p>

        <!-- Botones -->
        <div class="flex flex-wrap justify-center gap-4 pt-4">
          <RouterLink v-for="button in buttons" :key="button.label" :to="button.to">
            <button
              class="btn gap-2 px-8 py-3 rounded-full font-semibold shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-xl"
              :class="button.style"
              :aria-label="button.label"
            >
              <component v-if="button.icon" :is="button.icon" class="w-5 h-5" />
              <span>{{ button.label }}</span>
            </button>
          </RouterLink>
        </div>
      </div>

      <!-- Overlay sutil para dar contraste -->
      <div class="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
    </Card>
  </Sections>

  <!-- Decoración animada -->
  <div
    class="absolute -z-10 top-10 left-10 w-36 h-36 bg-primary/20 rounded-full blur-3xl animate-pulse"
  ></div>
  <div
    class="absolute -z-10 bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse"
  ></div>
</template>
