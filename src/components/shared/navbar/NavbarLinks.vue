<script setup lang="ts">
const navbarLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Notas', path: '/notes' },
  { name: 'Acerca de', path: '/about' },
]
</script>

<template>
  <div
    class="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-8 font-medium text-base-content"
  >
    <RouterLink
      v-for="link in navbarLinks"
      :key="link.name"
      :to="link.path"
      class="relative group hover:text-primary transition"
    >
      {{ link.name }}
      <span
        class="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"
      ></span>
    </RouterLink>
  </div>
</template>
