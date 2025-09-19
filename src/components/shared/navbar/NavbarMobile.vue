<script setup lang="ts">
import { IconX } from '@tabler/icons-vue'
import NavbarLogo from './NavbarLogo.vue'

defineProps<{ isOpen: boolean }>()

const navbarLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Notas', path: '/notes' },
  { name: 'Acerca de', path: '/about' },
]
</script>

<template>
  <transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
      @click="$emit('close')"
    ></div>
  </transition>

  <transition name="slide">
    <aside
      v-if="isOpen"
      class="fixed top-0 left-0 w-64 h-full bg-base-100 z-50 shadow-lg p-6 flex flex-col"
    >
      <div class="flex items-center justify-between mb-8">
        <NavbarLogo />
        <button
          class="p-2 rounded-md hover:bg-base-200"
          aria-label="Cerrar menú"
          @click="$emit('close')"
        >
          <IconX class="h-6 w-6 text-base-content" />
        </button>
      </div>

      <nav class="flex flex-col gap-4 text-lg font-medium">
        <RouterLink
          v-for="link in navbarLinks"
          :key="link.name"
          :to="link.path"
          class="hover:text-primary"
          @click="$emit('close')"
        >
          {{ link.name }}
        </RouterLink>
      </nav>

      <div class="mt-auto pt-6 border-t border-base-300">
        <p class="text-sm text-base-content/60">© {{ new Date().getFullYear() }} NotesApp</p>
      </div>
    </aside>
  </transition>
</template>
