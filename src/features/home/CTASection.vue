<script setup lang="ts">
import { IconPlus } from '@tabler/icons-vue'
import Card from '../../components/shared/cards/Card.vue'
import Sections from '../../components/shared/sections/Sections.vue'
</script>

<template>
  <Sections class="container mx-auto max-w-6xl px-6 py-20">
    <Card
      class="border-0 shadow-2xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl"
    >
      <div class="p-12 text-center">
        <h3 class="text-3xl md:text-4xl font-bold mb-6 text-white">
          ¿Listo para organizar tus ideas?
        </h3>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-white/80">
          Únete a miles de usuarios que ya organizan sus pensamientos con NotasApp. Es gratis y
          fácil de usar.
        </p>
        <RouterLink to="/notes">
          <button
            aria-label="Crear mi primera nota"
            class="btn btn-white text-blue-600 gap-2 px-8 py-4 text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-white/40"
          >
            <IconPlus class="w-5 h-5" /> Crear mi primera nota
          </button>
        </RouterLink>
      </div>
    </Card>
  </Sections>
</template>
