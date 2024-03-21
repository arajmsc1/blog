<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{
  item: Person
}>()
</script>

<template>
<!-- {{item}} -->
  <div flex="~ col" px16 gap6>
    <div flex mt-10 gap-2 items-baseline>
      <div text-2xl>
        {{ $t('Person Photos') }}
      </div>
      <div text-sm op50>
        {{ $t('{numberOfImages} Images', { numberOfImages: item.images?.profiles?.length }) }}
      </div>
    </div>
    <div grid="~ cols-minmax-10rem lg:cols-minmax-15rem" gap4>
      <!-- <PhotoCard
        v-for="i of item"
        :key="i.guideid"
        :item="i"
        class="aspect-9/16"
      />
    </div> -->
    <PhotoCard
       
        :item="item"
        class="aspect-9/16"
      />
    </div>
  </div>
</template>
