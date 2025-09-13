<script setup lang="ts">
import { IconMenu2, IconBell, IconUser, IconNotebook } from '@tabler/icons-vue'
import DarkMode from '../toggles/DarkMode.vue'
</script>

<template>
  <nav
    class="bg-base-100 shadow-md px-4 lg:px-8 transition-colors sticky top-0 z-50"
  >
    <div class="container mx-auto flex items-center justify-between h-16">
      <!-- Menú hamburguesa móvil -->
      <div class="flex items-center lg:hidden">
        <button
          class="p-2 rounded-md hover:bg-base-200 transition"
          aria-label="Abrir menú"
        >
          <IconMenu2 class="h-6 w-6 text-base-content" />
        </button>
      </div>

      <!-- Logo -->
      <div class="flex items-center gap-2">
        <IconNotebook class="w-7 h-7 text-primary" />
        <RouterLink
          to="/"
          class="text-2xl font-bold text-base-content hover:text-primary transition"
        >
          NotesApp
        </RouterLink>
      </div>

      <!-- Links principales (desktop) -->
      <div
        class="hidden lg:flex lg:items-center lg:space-x-8 lg:ml-12 font-medium"
      >
        <RouterLink
          to="/"
          class="hover:text-primary hover:underline underline-offset-4 transition"
        >
          Inicio
        </RouterLink>
        <RouterLink
          to="/notes"
          class="hover:text-primary hover:underline underline-offset-4 transition"
        >
          Notas
        </RouterLink>
        <RouterLink
          to="/about"
          class="hover:text-primary hover:underline underline-offset-4 transition"
        >
          Acerca de
        </RouterLink>
      </div>

      <!-- Controles a la derecha -->
      <div class="flex items-center gap-4 ml-4">
        <!-- Dark mode toggle -->
        <DarkMode class="scale-90" />

        <!-- Notificaciones -->
        <button
          class="p-2 rounded-full hover:bg-base-200 transition relative"
          aria-label="Notificaciones"
        >
          <IconBell class="h-6 w-6 text-base-content" />
          <!-- Badge -->
          <span
            class="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"
          ></span>
        </button>

        <!-- Perfil con dropdown -->
        <div class="dropdown dropdown-end">
          <label
            tabindex="0"
            class="avatar cursor-pointer"
          >
            <div
              class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
            >
              <IconUser class="w-full h-full p-2 text-white bg-primary" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48"
          >
            <li><RouterLink to="/profile">Perfil</RouterLink></li>
            <li><RouterLink to="/settings">Configuración</RouterLink></li>
            <li><a>Cerrar sesión</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
