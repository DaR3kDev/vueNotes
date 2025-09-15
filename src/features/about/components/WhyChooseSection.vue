<script setup lang="ts">
import Card from '../../../components/shared/cards/Card.vue'
import Sections from '../../../components/shared/sections/Sections.vue';
import { reasons } from '../data/about'
</script>

<template>
  <Sections class="mb-28 px-6 lg:px-12">
    <!-- Título -->
    <div class="text-center mb-14">
      <h2 class="text-4xl md:text-5xl font-extrabold text-base-content leading-tight text-balance">
        ¿Por qué elegir
        <span class="text-primary">NotasApp?</span>
      </h2>
      <p class="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
        Una solución ligera, privada y accesible para organizar tus ideas sin complicaciones.
      </p>
    </div>

    <!-- Grid de razones -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        v-for="(reason, i) in reasons"
        :key="i"
        :icon="reason.icon"
        :title="reason.title"
        :description="reason.description"
        :iconBg="reason.iconBg"
        :iconColor="reason.iconColor"
        class="hover:scale-105 hover:shadow-xl transition-transform duration-300 bg-base-100 border border-base-200 rounded-2xl"
      />
    </div>

    <!-- Decoración sutil -->
    <div
      class="absolute -z-10 top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute -z-10 bottom-10 right-10 w-40 h-40 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
    ></div>
  </Sections>
</template>
