<script setup lang="ts">
import type { Image } from '~/types'

const props = defineProps<{
  item: Image
}>()
</script>

<template>
<!-- {{item}} -->
  <button
    text-left block
    bg-gray4:10 transition
    duration-400 relative hover="scale-102 z10"
    title="View photo"
  >
    <NuxtImg
      width="400"
      height="600"
      format="webp"
      :src="props.item.contenturl || props.item.guideimage"
      alt="Photo"
      w-full h-full object-cover
    />
    <!-- <NuxtImg
      width="400"
      height="600"
      format="webp"
      :src="`/tmdb${props.item.file_path}`"
      alt="Photo"
      w-full h-full object-cover
    /> -->
  </button>
</template>
