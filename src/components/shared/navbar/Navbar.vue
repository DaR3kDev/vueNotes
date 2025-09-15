<script setup lang="ts">
import { ref } from 'vue'
import { IconMenu2, IconX, IconBell, IconUser, IconNotebook } from '@tabler/icons-vue'
import DarkMode from '../toggles/DarkMode.vue'

const isOpen = ref(false)
</script>

<template>
  <nav class="bg-base-100 shadow-md sticky top-0 z-50 border-b border-base-200">
    <div class="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
      <!-- Menú hamburguesa móvil -->
      <div class="flex items-center lg:hidden">
        <button
          class="p-2 rounded-md hover:bg-base-200 transition"
          aria-label="Abrir menú"
          @click="isOpen = true"
        >
          <IconMenu2 class="h-6 w-6 text-base-content" />
        </button>
      </div>

      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2">
        <IconNotebook class="w-7 h-7 text-primary" />
        <span class="text-xl font-bold text-base-content">NotesApp</span>
      </RouterLink>

      <!-- Links desktop -->
      <div class="hidden lg:flex lg:items-center lg:gap-8 font-medium ml-8">
        <RouterLink to="/" class="hover:text-primary transition">Inicio</RouterLink>
        <RouterLink to="/notes" class="hover:text-primary transition">Notas</RouterLink>
        <RouterLink to="/about" class="hover:text-primary transition">Acerca de</RouterLink>
      </div>

      <!-- Acciones derechas -->
      <div class="flex items-center gap-3 ml-auto">
        <!-- Dark mode -->
        <DarkMode class="scale-90" />

        <!-- Notificaciones -->
        <button
          class="relative p-2 rounded-full hover:bg-base-200 transition"
          aria-label="Notificaciones"
        >
          <IconBell class="h-6 w-6 text-base-content" />
          <span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full animate-ping"></span>
          <span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
        </button>

        <!-- Perfil -->
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="avatar cursor-pointer">
            <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <IconUser class="w-full h-full p-2 text-white bg-primary" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><RouterLink to="/profile">Perfil</RouterLink></li>
            <li><RouterLink to="/settings">Configuración</RouterLink></li>
            <li><a>Cerrar sesión</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Overlay móvil -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
        @click="isOpen = false"
      ></div>
    </transition>

    <!-- Sidebar móvil -->
    <transition name="slide">
      <aside
        v-if="isOpen"
        class="fixed top-0 left-0 w-64 h-full bg-base-100 z-50 shadow-lg p-6 flex flex-col"
      >
        <!-- Header -->
        <div class="flex items-center justify-between mb-8">
          <RouterLink to="/" class="flex items-center gap-2">
            <IconNotebook class="w-7 h-7 text-primary" />
            <span class="text-xl font-bold text-base-content">NotesApp</span>
          </RouterLink>
          <button
            class="p-2 rounded-md hover:bg-base-200"
            aria-label="Cerrar menú"
            @click="isOpen = false"
          >
            <IconX class="h-6 w-6 text-base-content" />
          </button>
        </div>

        <!-- Links -->
        <nav class="flex flex-col gap-4 text-lg font-medium">
          <RouterLink to="/" class="hover:text-primary" @click="isOpen = false">
            Inicio
          </RouterLink>
          <RouterLink to="/notes" class="hover:text-primary" @click="isOpen = false">
            Notas
          </RouterLink>
          <RouterLink to="/about" class="hover:text-primary" @click="isOpen = false">
            Acerca de
          </RouterLink>
        </nav>

        <!-- Footer -->
        <div class="mt-auto pt-6 border-t border-base-300">
          <p class="text-sm text-base-content/60">© {{ new Date().getFullYear() }} NotesApp</p>
        </div>
      </aside>
    </transition>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
