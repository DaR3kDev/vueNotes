<script setup lang="ts">
import Card from '../../../components/shared/cards/Card.vue'
import Sections from '../../../components/shared/sections/Sections.vue'
import { miniFeatures } from '../data/about'
</script>

<template>
  <Sections class="relative mb-28 px-6 lg:px-12">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Texto -->
      <div class="space-y-6 max-w-prose">
        <p class="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          Nuestra filosofía
        </p>
        <h2 class="text-4xl md:text-5xl font-extrabold text-base-content leading-tight">
          Nuestra <span class="text-primary">Misión</span>
        </h2>
        <div class="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>

        <p class="text-lg text-base-content/70 leading-relaxed">
          Creemos que las mejores ideas pueden surgir en cualquier momento.
          <span class="font-semibold text-base-content">NotasApp</span> nació de la necesidad de
          tener una herramienta simple, rápida y confiable para capturar pensamientos sin
          complicaciones.
        </p>
        <p class="text-lg text-base-content/70 leading-relaxed">
          No necesitas cuentas complicadas, sincronización en la nube o funciones que nunca usas.
          Solo una interfaz limpia que te permite enfocarte en lo que realmente importa:
          <span class="font-semibold text-base-content">tus ideas</span>.
        </p>

        <!-- CTA -->
        <button class="btn btn-primary mt-4">Empieza a tomar notas</button>
      </div>

      <!-- Mini features -->
      <div
        class="bg-base-100/80 backdrop-blur-md border border-base-200 shadow-2xl rounded-3xl p-10"
      >
        <div class="grid grid-cols-2 gap-8">
          <Card
            v-for="(f, i) in miniFeatures"
            :key="i"
            :icon="f.icon"
            :title="f.title"
            :description="f.description"
            :iconBg="f.iconBg"
            customClass="group text-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            <!-- animación extra en ícono -->
            <template #icon>
              <component
                :is="f.icon"
                class="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 text-white"
              />
            </template>
          </Card>
        </div>
      </div>
    </div>

    <!-- Decoración sutil -->
    <div
      class="absolute -z-10 top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute -z-10 bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
    ></div>
  </Sections>
</template>
