<script setup lang="ts">
import Card from '../../../components/shared/cards/Card.vue'
import Sections from '../../../components/shared/sections/Sections.vue'
import { miniFeatures } from '../data/about'
import { RouterLink } from 'vue-router'
</script>

<template>
  <Sections class="relative mb-28 px-4 sm:px-6 lg:px-12">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Texto principal -->
      <div class="space-y-6 max-w-prose mx-auto lg:mx-0">
        <p class="text-sm sm:text-base font-semibold text-primary uppercase tracking-wide">
          Nuestra filosofía
        </p>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-base-content leading-tight">
          Nuestra <span class="text-primary">Misión</span>
        </h2>

        <div
          class="h-1 w-16 sm:w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"
        ></div>

        <p class="text-base sm:text-lg md:text-xl text-base-content/70 leading-relaxed">
          Creemos que las mejores ideas pueden surgir en cualquier momento.
          <span class="font-semibold text-base-content">NotasApp</span> nació de la necesidad de
          tener una herramienta simple, rápida y confiable para capturar pensamientos sin
          complicaciones.
        </p>

        <p class="text-base sm:text-lg md:text-xl text-base-content/70 leading-relaxed">
          No necesitas cuentas complicadas, sincronización en la nube o funciones que nunca usas.
          Solo una interfaz limpia que te permite enfocarte en lo que realmente importa:
          <span class="font-semibold text-base-content">tus ideas</span>.
        </p>

        <!-- CTA -->
        <RouterLink to="/notes">
          <button
            class="btn btn-primary w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-105 mt-4"
          >
            Empieza a tomar notas
          </button>
        </RouterLink>
      </div>

      <!-- Mini features -->
      <div
        class="bg-base-100/80 backdrop-blur-md border border-base-200 shadow-2xl rounded-3xl p-6 sm:p-10"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <Card
            v-for="(f, i) in miniFeatures"
            :key="i"
            :icon="f.icon"
            :title="f.title"
            :description="f.description"
            :iconBg="f.iconBg"
            customClass="group text-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            <template #icon>
              <component
                :is="f.icon"
                class="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 text-white"
              />
            </template>
          </Card>
        </div>
      </div>
    </div>

    <!-- Fondos decorativos adaptativos -->
    <div
      class="absolute -z-10 top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute -z-10 bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-tr from-accent/20 to-secondary/20 rounded-full blur-3xl"
    ></div>
  </Sections>
</template>
