<script setup lang="ts">
import { ref } from 'vue'
import { IconMenu2 } from '@tabler/icons-vue'
import NavbarLogo from './NavbarLogo.vue'
import NavbarLinks from './NavbarLinks.vue'
import NavbarActions from './NavbarActions.vue'
import NavbarMobile from './NavbarMobile.vue'

const isOpen = ref(false)
</script>

<template>
  <nav
    class="bg-base-100 shadow-md sticky top-0 z-50 border-b border-base-200 data-[theme=forest]:bg-green-50 data-[theme=forest]:border-green-200"
  >
    <div class="container mx-auto flex items-center h-16 px-4 lg:px-8 relative">
      <NavbarLogo />
      <NavbarLinks />
      <NavbarActions>
        <template #mobile-menu-button>
          <div class="lg:hidden">
            <button
              class="p-2 rounded-md hover:bg-base-200 transition-colors duration-300 data-[theme=forest]:hover:bg-green-100"
              aria-label="Abrir menú"
              @click="isOpen = true"
            >
              <IconMenu2 class="h-6 w-6 text-base-content data-[theme=forest]:text-green-900" />
            </button>
          </div>
        </template>
      </NavbarActions>
    </div>

    <NavbarMobile :isOpen="isOpen" @close="isOpen = false" />
  </nav>
</template>
