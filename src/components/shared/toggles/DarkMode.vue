<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { IconSun, IconTrees } from '@tabler/icons-vue'

const theme = ref<'light' | 'forest'>(
  (localStorage.getItem('theme') as 'light' | 'forest') || 'light',
)

const applyTheme = () => {
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}

const switchTheme = () => {
  theme.value = theme.value === 'light' ? 'forest' : 'light'
}

const toggleTheme = () => {
  document.startViewTransition ? document.startViewTransition(() => switchTheme()) : switchTheme()
}

watch(theme, applyTheme, { immediate: true })

const isForest = computed(() => theme.value === 'forest')
</script>

<template>
  <button
    class="p-2 rounded-full hover:bg-base-200 transition-colors duration-200"
    @click="toggleTheme"
    aria-label="Cambiar tema"
  >
    <transition name="fade-scale" mode="out-in">
      <IconSun
        v-if="!isForest"
        key="sun"
        class="h-6 w-6 text-yellow-500 transition-transform duration-300"
      />
      <IconTrees
        v-else
        key="forest"
        class="h-6 w-6 text-green-600 transition-transform duration-300"
      />
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
