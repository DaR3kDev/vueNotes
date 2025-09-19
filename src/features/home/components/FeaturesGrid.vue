<script setup lang="ts">
import Card from '../../../components/shared/cards/Card.vue'
import Sections from '../../../components/shared/sections/Sections.vue'
import { features } from '../data/home'
</script>

<template>
  <Sections class="container mx-auto max-w-6xl px-6 py-20">
    <!-- Encabezado -->
    <div class="text-center mb-16">
      <h2
        class="text-4xl md:text-5xl font-extrabold mb-4 text-base-content text-balance transition-colors duration-500"
      >
        Todo lo que necesitas para tus notas
      </h2>
      <p
        class="text-lg md:text-xl max-w-2xl mx-auto text-base-content/70 transition-colors duration-500"
      >
        Funcionalidades diseñadas para hacer tu vida más productiva y organizada.
      </p>
    </div>

    <!-- Grid de features -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card
        v-for="(feature, i) in features"
        :key="i"
        :title="feature.title"
        :description="feature.description"
        :icon="feature.icon"
        :iconBg="feature.iconBg"
        class="transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl animate-fadeIn bg-base-100 rounded-2xl border border-base-300"
        :style="{ animationDelay: `${i * 150}ms` }"
      />
    </div>
  </Sections>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.6s forwards;
}
</style>
