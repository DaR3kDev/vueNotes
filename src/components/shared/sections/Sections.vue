<script setup lang="ts">
interface Props {
  id?: string
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <section :id="props.id" :class="props.class">
    <slot />
  </section>
</template>