<script setup lang="ts">
import { IconNotebook } from '@tabler/icons-vue'
defineProps({
  resumen: Object,
})
</script>

<template>
  <div class="bg-base-100 shadow-lg rounded-3xl overflow-hidden border border-base-200">
    <div class="p-5">
      <h2 class="flex items-center gap-3 text-lg font-bold text-primary mb-4">
        <IconNotebook class="w-6 h-6" /> Resumen
      </h2>
      <div class="space-y-3">
        <div
          v-for="(value, key) in resumen"
          :key="key"
          class="flex justify-between items-center p-3 rounded-xl hover:bg-primary/10 transition cursor-pointer"
        >
          <span class="font-semibold capitalize">{{ key }}</span>
          <span class="font-semibold text-base-content">{{ value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
