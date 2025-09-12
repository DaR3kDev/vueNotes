<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { IconSun, IconMoon } from '@tabler/icons-vue'

// Estado del tema
const theme = ref<'light' | 'dark'>((localStorage.getItem('theme') as 'light' | 'dark') || 'light')

// Función que aplica el tema
const applyTheme = () => {
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}

// Función que alterna el tema
const switchTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

// Función que usa startViewTransition si existe
const toggleTheme = () => {
  document.startViewTransition ? document.startViewTransition(() => switchTheme()) : switchTheme()
}

// Vigilar cambios de tema y aplicar
watch(theme, applyTheme, { immediate: true })

// Computed para estado del toggle
const isDark = computed(() => theme.value === 'dark')
</script>

<template>
  <div class="flex items-center gap-2">
    <label class="swap swap-rotate cursor-pointer">
      <!-- Checkbox ligado al tema -->
      <input type="checkbox" :checked="isDark" @change="toggleTheme" />

      <!-- Icono sol (modo claro) -->
      <IconSun class="swap-on h-6 w-6 text-yellow-500 transition-transform duration-300" />

      <!-- Icono luna (modo oscuro) -->
      <IconMoon class="swap-off h-6 w-6 text-blue-500 transition-transform duration-300" />
    </label>
  </div>
</template>
