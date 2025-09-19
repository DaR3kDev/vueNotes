<script setup lang="ts">
import Card from '../../../components/shared/cards/Card.vue'
import Sections from '../../../components/shared/sections/Sections.vue'
import { reasons } from '../data/about'
</script>

<template>
  <Sections class="relative mb-28 px-4 sm:px-6 lg:px-12">
    <!-- Título -->
    <div class="text-center mb-14 max-w-3xl mx-auto">
      <h2
        class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-base-content leading-tight tracking-tight"
      >
        ¿Por qué elegir <span class="text-primary">NotasApp?</span>
      </h2>

      <div
        class="h-1 w-16 sm:w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto my-6"
      ></div>

      <p class="mt-2 text-base sm:text-lg md:text-xl text-base-content/70 leading-relaxed">
        Una solución <span class="font-semibold text-base-content">ligera</span>,
        <span class="font-semibold text-base-content">privada</span> y
        <span class="font-semibold text-base-content">accesible</span> para organizar tus ideas sin
        complicaciones.
      </p>
    </div>

    <!-- Grid de razones -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <Card
        v-for="(reason, i) in reasons"
        :key="i"
        :icon="reason.icon"
        :title="reason.title"
        :description="reason.description"
        :iconBg="reason.iconBg"
        :iconColor="reason.iconColor"
        customClass="group bg-base-100 border border-base-200 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-center"
      >
        <template #icon>
          <component
            :is="reason.icon"
            class="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 text-white"
          />
        </template>
      </Card>
    </div>

    <!-- Fondos decorativos -->
    <div
      class="absolute -z-10 top-10 left-10 w-28 sm:w-36 h-28 sm:h-36 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute -z-10 bottom-10 right-10 w-32 sm:w-44 h-32 sm:h-44 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
    ></div>
  </Sections>
</template>
