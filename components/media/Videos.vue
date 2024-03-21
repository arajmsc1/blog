<script setup lang="ts">
import type { Media } from '~/types'

defineProps<{
  item: Media
}>()
</script>

<template>
  <div flex="~ col" px4 md:px14 py4 gap6>
    <div op50>
      {{ $t('{numberOfVideos} Videos', { numberOfVideos: item?.length || 0 }) }}
    </div>
    <div grid="~ cols-minmax-20rem" gap4>
      <VideoCard v-for="i,index of item" :key="index" :item="i" />
    </div>
  </div>
</template>
