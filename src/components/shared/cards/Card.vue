<script setup lang="ts">
import type { Component } from 'vue'
import { defineProps } from 'vue'

interface Props {
  title?: string
  description?: string
  icon?: Component
  customClass?: string
  iconColor?: string
  iconBg?: string
}

defineProps<Props>()
</script>

<template>
  <div
    :class="[
      'card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl',
      customClass,
    ]"
  >
    <div class="card-body">
      <!-- Icon + Title solo si existen -->
      <div
        v-if="icon"
        :class="['w-12 h-12 rounded-xl flex items-center justify-center mb-4', iconBg]"
      >
        <component :is="icon" :class="['w-6 h-6', iconColor || 'text-white']" />
      </div>
      <h2 v-if="title" class="card-title text-lg font-bold">{{ title }}</h2>
      <p v-if="description" class="text-sm text-base-content/60">{{ description }}</p>

      <slot />
    </div>
  </div>
</template>
