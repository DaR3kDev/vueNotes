<script setup lang="ts">
import { IconBrandGithub, IconBrandWhatsapp, IconBrandLinkedin, IconStar } from '@tabler/icons-vue'

const getFullYear = new Date().getFullYear()
</script>

<template>
  <footer
    class="footer p-6 bg-base-200 text-base-content transition-colors sm:footer-horizontal flex flex-col sm:flex-row items-center sm:justify-between"
  >
    <!-- Sección de copyright -->
    <div class="flex items-center gap-2">
      <IconStar size="24" class="text-primary" />
      <span>Copyright © {{ getFullYear }} - All rights reserved</span>
    </div>

    <!-- Sección de redes sociales alineada a la derecha -->
    <nav class="flex gap-4 mt-4 sm:mt-0 sm:ml-auto">
      <a
        href="https://github.com/tuUsuario"
        target="_blank"
        aria-label="GitHub"
        class="hover:text-primary transition-colors"
      >
        <IconBrandGithub size="24" />
      </a>
      <a
        href="https://wa.me/573000000000"
        target="_blank"
        aria-label="WhatsApp"
        class="hover:text-primary transition-colors"
      >
        <IconBrandWhatsapp size="24" />
      </a>
      <a
        href="https://linkedin.com/in/tuUsuario"
        target="_blank"
        aria-label="LinkedIn"
        class="hover:text-primary transition-colors"
      >
        <IconBrandLinkedin size="24" />
      </a>
    </nav>
  </footer>
</template>
