<script setup lang="ts">
import Card from '../../../components/shared/cards/Card.vue'
import Sections from '../../../components/shared/sections/Sections.vue'
import { techs } from '../data/about'
import { IconCode } from '@tabler/icons-vue'
</script>

<template>
  <Sections class="mb-20 px-4 sm:px-6 lg:px-12">
    <div
      class="bg-base-100 border border-base-200 shadow-2xl rounded-3xl overflow-hidden transition-colors duration-300"
    >
      <div class="p-6 sm:p-12 lg:p-16 grid lg:grid-cols-2 gap-12 items-center">
        <!-- Texto + Cards -->
        <div class="space-y-6">
          <h3
            class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-base-content leading-tight tracking-tight"
          >
            Tecnología Moderna
          </h3>
          <p class="text-base sm:text-lg text-base-content/70 leading-relaxed">
            Construida con lo último en web para garantizar
            <span class="font-semibold text-base-content">velocidad</span>,
            <span class="font-semibold text-base-content">confiabilidad</span> y
            <span class="font-semibold text-base-content">accesibilidad</span>.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card
              v-for="(tech, i) in techs"
              :key="i"
              :icon="tech.icon"
              :title="tech.title"
              :description="tech.description"
              :iconBg="tech.iconBg"
              :iconColor="tech.iconColor"
              class="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <!-- Icono grande -->
        <div class="text-center relative mt-10 lg:mt-0">
          <!-- Glow decorativo adaptativo -->
          <div
            class="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full w-40 h-40 sm:w-48 sm:h-48 mx-auto top-0 left-1/2 -translate-x-1/2"
          ></div>

          <div
            class="relative w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl"
          >
            <IconCode class="w-16 h-16 sm:w-20 sm:h-20 text-white" />
          </div>
          <h4 class="text-xl sm:text-2xl font-bold text-base-content mb-3">Código Limpio</h4>
          <p class="text-base sm:text-lg text-base-content/70 leading-relaxed max-w-sm mx-auto">
            Arquitectura <span class="font-semibold text-base-content">simple</span> y
            <span class="font-semibold text-base-content">mantenible</span> que prioriza el
            <span class="font-semibold text-base-content">rendimiento</span> y la
            <span class="font-semibold text-base-content">experiencia</span>.
          </p>
        </div>
      </div>
    </div>
  </Sections>
</template>
