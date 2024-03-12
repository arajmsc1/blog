<script setup lang="ts">
import { apiurl } from '~/constants/lists'
import type { QueryItem } from '~/types'

const props = defineProps<{
  query: QueryItem
}>()

// const item = await listMedia(props.query.type, props.query.query, 1)
const{data:item} =await useFetch(apiurl+'/blogposts'+'/1?destination='+props.query.title)
</script>

<template>
  <CarouselBase>
    <template #title>
      {{ $t(query.title) }}
    </template>
    <!-- <template #more>
      <NuxtLink :to="`/${props.query.type}/category/${props.query.query}`" n-link>
        {{ $t('Explore more') }}
      </NuxtLink>
    </template> -->
    <template #more>
      <NuxtLink :to="`/blog/${query.title}`" n-link>
        {{ $t('Explore more') }}
      </NuxtLink>
    </template>
    <!-- <MediaCard
      v-for="i of item?.results || []"
      :key="i.id"
      :item="i"
      :type="props.query.type"
      flex-1 w-40 md:w-60
    /> -->
    <MediaCard
      v-for="i of item?.results || []"
      :key="i.location_id"
      :item="i"
      type="detail"
      flex-1 w-40 md:w-60
    />
  </CarouselBase>
</template>
