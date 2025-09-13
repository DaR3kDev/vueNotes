<script setup lang="ts">
import { ref } from 'vue'
import {
  IconNotebook,
  IconStar,
  IconClock,
  IconTag,
  IconLayoutGrid,
  IconSearch,
  IconPlus,
  IconPencil,
  IconTrash,
} from '@tabler/icons-vue'
import Sections from '../../components/shared/sections/Sections.vue'
import NoteModal from '../../features/notes/components/NoteModal.vue'
import CardNotes from '../../features/notes/components/CardNotes.vue'

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
  <Sections id="notes" class="max-w-7xl mx-auto p-6 flex gap-6">
    <!-- Sidebar izquierdo -->
    <aside class="w-64 space-y-6 sticky top-6 self-start">
      <!-- Resumen -->
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title flex items-center gap-2">
            <IconNotebook class="w-5 h-5 text-primary" />
            Resumen
          </h2>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex justify-between">
              <span>Total</span>
              <span class="font-semibold">{{ resumen.total }}</span>
            </li>
            <li class="flex justify-between">
              <span>Favoritas</span>
              <span class="font-semibold">{{ resumen.favoritas }}</span>
            </li>
            <li class="flex justify-between">
              <span>Recientes</span>
              <span class="font-semibold">{{ resumen.recientes }}</span>
            </li>
            <li class="flex justify-between">
              <span>Etiquetas</span>
              <span class="font-semibold">{{ resumen.etiquetas }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Secciones -->
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title flex items-center gap-2">
            <IconLayoutGrid class="w-5 h-5 text-primary" />
            Secciones
          </h2>
          <ul class="menu bg-base-100 w-full rounded-box mt-3">
            <li v-for="sec in secciones" :key="sec.name">
              <a class="flex items-center gap-2 hover:bg-base-200 rounded-md px-2 py-1 transition">
                <component :is="sec.icon" class="w-4 h-4 text-base-content/70" />
                <span class="capitalize">{{ sec.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Etiquetas -->
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title flex items-center gap-2">
            <IconTag class="w-5 h-5 text-primary" />
            Etiquetas
          </h2>
          <ul class="menu bg-base-100 w-full rounded-box mt-3">
            <li v-for="tag in etiquetas" :key="tag">
              <a class="flex items-center gap-2 hover:bg-base-200 rounded-md px-2 py-1 transition">
                <IconTag class="w-4 h-4 text-base-content/70" />
                {{ tag }}
              </a>
            </li>
            <li v-if="!etiquetas.length">
              <span class="italic text-sm text-base-content/70"> Sin etiquetas aún </span>
            </li>
          </ul>
        </div>
      </div>
    </aside>

    <!-- Área de notas (derecha) -->
    <div class="flex-1 space-y-6">
      <!-- Barra superior -->
      <div class="flex items-center justify-between gap-4">
        <label class="input flex-1 flex items-center gap-2">
          <IconSearch class="w-5 h-5 opacity-50" />
          <input type="search" placeholder="Buscar notas..." />
        </label>
        <NoteModal ref="noteModalRef" @save="handleSave" />
        <button class="btn btn-primary flex items-center gap-2" @click="openCreateModal">
          <IconPlus class="w-5 h-5" />
          Nueva Nota
        </button>
      </div>

      <!-- Grid de notas -->
      <CardNotes />
    </div>
  </Sections>
</template>
