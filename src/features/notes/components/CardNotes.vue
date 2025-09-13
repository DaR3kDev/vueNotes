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
      class="card bg-base-100 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 rounded-xl border border-base-200"
    >
      <div class="card-body flex flex-col justify-between h-full">
        <!-- Título -->
        <h2 class="card-title text-lg font-semibold text-primary truncate">
          {{ note.title }}
        </h2>

        <!-- Contenido -->
        <p class="text-sm text-base-content/70 line-clamp-3 my-2">
          {{ note.content }}
        </p>

        <!-- Etiquetas -->
        <div class="flex flex-wrap gap-2 mb-2">
          <span
            v-for="tag in note.tags"
            :key="tag"
            class="badge badge-sm badge-outline text-xs text-base-content/70"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Acciones -->
        <div class="card-actions justify-end gap-2 mt-auto">
          <button class="btn btn-sm btn-outline flex items-center gap-1">
            <IconPencil class="w-4 h-4" />
            Editar
          </button>
          <button class="btn btn-sm btn-error flex items-center gap-1">
            <IconTrash class="w-4 h-4" />
            Borrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
