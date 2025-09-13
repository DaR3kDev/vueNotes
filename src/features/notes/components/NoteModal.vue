<script setup lang="ts">
import { ref, watch } from 'vue'
import ModalBase from '@/components/shared/modal/ModalBase.vue'
import type { ModalBaseType, Note } from '../types/note'

const props = defineProps<{
  note?: Note | null
}>()

const title = ref<string>('')
const content = ref<string>('')
const tags = ref<string>('')

const modalRef = ref<ModalBaseType | null>(null)

const open = (): void => modalRef.value?.open()
const close = (): void => modalRef.value?.close()

defineExpose({ open, close })

watch(
  () => props.note,
  note => {
    title.value = note?.title ?? ''
    content.value = note?.content ?? ''
    tags.value = note?.tags?.join(', ') ?? ''
  },
  { immediate: true },
)
</script>

<template>
  <ModalBase ref="modalRef">
    <div class="space-y-6 p-2">
      <!-- Encabezado -->
      <h3 class="text-2xl font-bold text-center text-primary">
        {{ props.note ? 'Editar nota' : 'Nueva nota' }}
      </h3>

      <!-- Campo: Título -->
      <div class="form-control">
        <label class="label">
          <span class="label-text font-semibold">Título</span>
        </label>
        <input
          v-model="title"
          type="text"
          placeholder="Ej: Reunión con cliente"
          class="input input-bordered w-full focus:input-primary"
        />
      </div>

      <!-- Campo: Contenido -->
      <div class="form-control">
        <label class="label">
          <span class="label-text font-semibold">Contenido</span>
        </label>
        <textarea
          v-model="content"
          placeholder="Escribe el contenido de la nota..."
          class="textarea textarea-bordered w-full min-h-[140px] focus:textarea-primary"
        />
      </div>

      <!-- Campo: Etiquetas -->
      <div class="form-control">
        <label class="label">
          <span class="label-text font-semibold">Etiquetas</span>
        </label>
        <input
          v-model="tags"
          type="text"
          placeholder="Ej: trabajo, urgente, cliente"
          class="input input-bordered w-full focus:input-primary"
        />
        <span class="text-xs text-gray-500 mt-1"> Separa las etiquetas con coma </span>
      </div>

      <!-- Acciones -->
      <div class="modal-action flex justify-end gap-3">
        <button class="btn btn-outline btn-sm" @click="close">Cancelar</button>
        <button class="btn btn-primary btn-sm">
          {{ props.note ? 'Actualizar' : 'Guardar' }}
        </button>
      </div>
    </div>
  </ModalBase>
</template>
