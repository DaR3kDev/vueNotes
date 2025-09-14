<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { IconSun, IconMoon } from '@tabler/icons-vue'

const theme = ref<'light' | 'dark'>((localStorage.getItem('theme') as 'light' | 'dark') || 'light')

const applyTheme = () => {
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}

const switchTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const toggleTheme = () => {
  document.startViewTransition ? document.startViewTransition(() => switchTheme()) : switchTheme()
}

watch(theme, applyTheme, { immediate: true })

const isDark = computed(() => theme.value === 'dark')
</script>

<template>
  <button
    class="p-2 rounded-full hover:bg-base-200 dark:hover:bg-base-300 transition-colors duration-200"
    @click="toggleTheme"
    aria-label="Cambiar tema"
  >
    <transition name="fade-scale" mode="out-in">
      <IconSun
        v-if="!isDark"
        key="sun"
        class="h-6 w-6 text-yellow-500 transition-transform duration-300"
      />
      <IconMoon v-else key="moon" class="h-6 w-6 transition-transform duration-300" />
    </transition>
  </button>
</template>

<style>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.7) rotate(-90deg);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.7) rotate(90deg);
}
</style>
