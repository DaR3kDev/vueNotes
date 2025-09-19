<script setup lang="ts">
import { ref } from 'vue'
import { IconPencil, IconTrash } from '@tabler/icons-vue'
import type { Note } from '../types/note'

const notes = ref<Note[]>([
  {
    id: '1',
    title: 'Ejemplo de Nota',
    content: 'Aquí puedes escribir tus ideas, pendientes o recordatorios ✨',
    tags: ['trabajo', 'ideas'],
  },
  {
    id: '2',
    title: 'Otra Nota',
    content: 'Segunda nota de ejemplo.',
    tags: ['personal'],
  },
])
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="note in notes"
      :key="note.id"
      class="card bg-base-100 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 rounded-2xl border border-base-200 overflow-hidden"
    >
      <div class="card-body flex flex-col justify-between h-full">
        <!-- Título -->
        <h2 class="card-title text-lg font-bold truncate mb-2">
          {{ note.title }}
        </h2>

        <!-- Contenido -->
        <p class="text-sm text-base-content/70 line-clamp-3 mb-4">
          {{ note.content }}
        </p>

        <!-- Etiquetas modernizadas -->
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tag in note.tags"
            :key="tag"
            class="px-3 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-800 shadow-sm hover:bg-gray-300 transition-colors duration-200 cursor-default"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Acciones -->
        <div class="card-actions justify-end gap-3 mt-auto">
          <!-- Botón Editar -->
          <button
            class="flex items-center gap-2 px-4 py-2 text-sm font-semibold btn btn-outline btn-primary rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            <IconPencil class="w-4 h-4" />
            Editar
          </button>

          <!-- Botón Borrar -->
          <button
            class="flex items-center gap-2 px-4 py-2 text-sm font-semibold btn btn-error rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            <IconTrash class="w-4 h-4" />
            Borrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
