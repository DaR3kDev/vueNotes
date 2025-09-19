<script setup lang="ts">
import { ref } from 'vue'
import {
  IconStar,
  IconClock,
  IconTag,
  IconLayoutGrid,
  IconSearch,
  IconPlus,
} from '@tabler/icons-vue'
import Sections from '../../components/shared/sections/Sections.vue'
import NoteModal from '../../features/notes/components/NoteModal.vue'
import CardNotes from '../../features/notes/components/CardNotes.vue'
import Summary from '../../features/notes/components/Summary.vue'

const resumen = {
  total: 1,
  favoritas: 0,
  recientes: 1,
  etiquetas: 1,
}

const secciones = [
  { name: 'Todas las notas', icon: IconLayoutGrid },
  { name: 'Favoritas', icon: IconStar },
  { name: 'Recientes', icon: IconClock },
  { name: 'Etiquetas', icon: IconTag },
]

const etiquetas = ['Trabajo', 'Personal', 'Ideas']

const noteModalRef = ref<InstanceType<typeof NoteModal> | null>(null)
const openCreateModal = () => noteModalRef.value?.open()
const handleSave = (note: any) => {
  console.log('Nota guardada/actualizada', note)
  noteModalRef.value?.close()
}
</script>

<template>
  <Sections id="notes" class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6">
    <!-- Sidebar -->
    <aside class="w-full lg:w-64 flex-shrink-0 space-y-6 lg:sticky lg:top-6 self-start">
      <!-- Resumen -->
      <Summary :resumen="resumen" />

      <!-- Secciones -->
      <div
        class="bg-base-100 shadow-lg rounded-3xl overflow-hidden border border-base-200 data-[theme=forest]:bg-green-50 data-[theme=forest]:border-green-200"
      >
        <div class="p-5">
          <h2 class="flex items-center gap-3 text-lg font-bold text-primary mb-4">
            <IconLayoutGrid class="w-6 h-6" /> Secciones
          </h2>
          <ul class="flex flex-col gap-2">
            <li v-for="sec in secciones" :key="sec.name">
              <a
                class="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-primary/10 data-[theme=forest]:hover:bg-green-100 transition font-medium cursor-pointer"
              >
                <component :is="sec.icon" class="w-5 h-5 text-primary" />
                <span class="capitalize text-base-content">{{ sec.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Etiquetas -->
      <div
        class="bg-base-100 shadow-lg rounded-3xl overflow-hidden border border-base-200 data-[theme=forest]:bg-green-50 data-[theme=forest]:border-green-200"
      >
        <div class="p-5">
          <h2 class="flex items-center gap-3 text-lg font-bold text-primary mb-4">
            <IconTag class="w-6 h-6" /> Etiquetas
          </h2>
          <ul class="flex flex-col gap-2">
            <li v-for="tag in etiquetas" :key="tag">
              <a
                class="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-primary/10 data-[theme=forest]:hover:bg-green-100 transition font-medium cursor-pointer"
              >
                <IconTag class="w-5 h-5 text-primary" />
                <span class="text-base-content">{{ tag }}</span>
              </a>
            </li>
            <li v-if="!etiquetas.length">
              <span class="italic text-sm text-base-content/50">Sin etiquetas aún</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>

    <!-- Main Area -->
    <div class="flex-1 space-y-6">
      <!-- Top Bar -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <!-- Search -->
        <label
          class="flex-1 flex items-center gap-3 px-4 py-2 bg-base-100 border border-base-200 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-text data-[theme=forest]:bg-green-50 data-[theme=forest]:border-green-200"
        >
          <IconSearch class="w-5 h-5 text-base-content/50" />
          <input
            type="search"
            placeholder="Buscar notas..."
            class="bg-transparent focus:outline-none w-full text-sm text-base-content/80"
          />
        </label>

        <!-- NoteModal trigger -->
        <NoteModal ref="noteModalRef" @save="handleSave" />

        <!-- New Note Button -->
        <button
          class="flex items-center gap-2 px-5 py-2 text-sm font-semibold btn btn-primary rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          @click="openCreateModal"
        >
          <IconPlus class="w-5 h-5" /> Nueva Nota
        </button>
      </div>

      <!-- Notes Grid -->
      <CardNotes class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" />
    </div>
  </Sections>
</template>
