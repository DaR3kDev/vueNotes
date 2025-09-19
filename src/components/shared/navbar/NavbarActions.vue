<script setup lang="ts">
import { IconBell, IconUser } from '@tabler/icons-vue'
import DarkMode from '../toggles/DarkMode.vue'
import { RouterLink } from 'vue-router'

const dropdownLinks = [
  { name: 'Perfil', path: '/profile' },
  { name: 'Configuración', path: '/settings' },
  { name: 'Cerrar sesión', path: '/logout' },
]
</script>

<template>
  <div class="flex items-center gap-3 ml-auto z-10">
    <!-- Toggle de tema -->
    <DarkMode class="scale-90" />

    <!-- Notificaciones -->
    <button
      class="relative p-2 rounded-full hover:bg-base-200 transition-colors duration-300 data-[theme=forest]:hover:bg-green-100/50"
      aria-label="Notificaciones"
    >
      <IconBell class="h-6 w-6 text-base-content data-[theme=forest]:text-green-800" />
      <!-- indicador animado -->
      <span
        class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full animate-ping data-[theme=forest]:bg-green-500"
      ></span>
      <span
        class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full data-[theme=forest]:bg-green-600"
      ></span>
    </button>

    <!-- Dropdown usuario -->
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="avatar cursor-pointer">
        <div
          class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 data-[theme=forest]:ring-green-600"
        >
          <IconUser
            class="w-full h-full p-2 text-white bg-primary rounded-full data-[theme=forest]:bg-green-700"
          />
        </div>
      </label>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 data-[theme=forest]:bg-green-50 data-[theme=forest]:text-green-900"
      >
        <li v-for="link in dropdownLinks" :key="link.name">
          <RouterLink
            :to="link.path"
            class="hover:bg-base-200 rounded-md data-[theme=forest]:hover:bg-green-100"
          >
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- Slot para mobile-menu -->
    <slot name="mobile-menu-button"></slot>
  </div>
</template>
