<script setup lang="ts">
import { ref } from 'vue'
import { useModal } from '../../../composables/useModal'
import { IconX } from '@tabler/icons-vue'

const modalRef = ref<HTMLDialogElement | null>(null)
const { open, close } = useModal(modalRef)

defineExpose({
  modalRef,
  open,
  close,
})
</script>

<template>
  <dialog ref="modalRef" class="modal">
    <div
      class="modal-box relative max-w-lg rounded-2xl shadow-xl bg-base-100 p-6 transition-all duration-300 transform scale-95 opacity-0"
    >
      <!-- Botón cerrar -->
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="close">
          <IconX class="w-5 h-5" />
        </button>
      </form>

      <!-- Contenido dinámico -->
      <div class="space-y-4">
        <slot />
      </div>
    </div>
  </dialog>
</template>
