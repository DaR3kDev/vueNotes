<script setup lang="ts">
import { IconMenu2, IconBell, IconUser } from '@tabler/icons-vue'
import DarkMode from '../toggles/DarkMode.vue'
</script>

<template>
  <nav class="bg-base-100 shadow-md px-4 lg:px-8 transition-colors">
    <div class="flex items-center justify-between h-16">
      <!-- Menú hamburguesa móvil -->
      <div class="flex items-center lg:hidden">
        <button class="p-2 rounded-md hover:bg-base-200 transition" aria-label="Abrir menú">
          <IconMenu2 class="h-6 w-6 text-base-content" />
        </button>
      </div>

      <!-- Logo central -->
      <div class="flex-1 flex items-center justify-center lg:justify-start">
        <RouterLink
          to="/"
          class="text-2xl font-bold text-base-content hover:text-primary transition"
        >
          NotesApp
        </RouterLink>
      </div>

      <!-- Links principales (desktop) -->
      <div class="hidden lg:flex lg:items-center lg:space-x-6 lg:ml-8">
        <RouterLink to="/" class="text-base-content hover:text-primary transition">
          Inicio
        </RouterLink>
        <RouterLink to="/notes" class="text-base-content hover:text-primary transition">
          Notas
        </RouterLink>
        <RouterLink to="/about" class="text-base-content hover:text-primary transition">
          Acerca de
        </RouterLink>
      </div>

      <!-- Controles a la derecha -->
      <div class="flex items-center space-x-3 ml-4">
        <!-- Dark mode toggle -->
        <DarkMode />

        <!-- Notificaciones -->
        <button class="p-2 rounded-md hover:bg-base-200 transition" aria-label="Notificaciones">
          <IconBell class="h-6 w-6 text-base-content" />
        </button>

        <!-- Perfil -->
        <button
          class="relative w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-primary transition"
          aria-label="Perfil"
        >
          <div
            class="w-full h-full bg-primary flex items-center justify-center text-white font-bold"
          >
            <IconUser class="h-5 w-5" />
          </div>
        </button>
      </div>
    </div>
  </nav>
</template>
