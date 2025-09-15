<script setup lang="ts">
import Card from '../../../components/shared/cards/Card.vue'
import Sections from '../../../components/shared/sections/Sections.vue';
import { techs } from '../data/about'
</script>

<template>
  <Sections class="mb-20">
    <div
      class="bg-base-100 border border-base-200 shadow-2xl rounded-3xl overflow-hidden transition-colors duration-300"
    >
      <div class="p-12 lg:p-16 grid lg:grid-cols-2 gap-12 items-center">
        <!-- Texto + Cards -->
        <div>
          <h3
            class="text-4xl font-extrabold text-base-content mb-6 leading-tight tracking-tight text-balance"
          >
            Tecnología Moderna
          </h3>
          <p class="text-base-content/70 text-lg leading-relaxed mb-8">
            Construida con lo último en web para garantizar
            <span class="font-semibold text-base-content">velocidad</span>,
            <span class="font-semibold text-base-content">confiabilidad</span> y
            <span class="font-semibold text-base-content">accesibilidad</span>.
          </p>

          <div class="grid sm:grid-cols-2 gap-6">
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
        <div class="text-center relative">
          <!-- Glow decorativo -->
          <div
            class="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full"
          ></div>

          <div
            class="relative w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl"
          >
            <IconCode class="w-16 h-16 text-white" />
          </div>
          <h4 class="text-2xl font-bold text-base-content mb-4">Código Limpio</h4>
          <p class="text-base-content/70 leading-relaxed max-w-sm mx-auto">
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
