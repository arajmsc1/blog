<script setup>
import axios from 'axios';
//import type { MediaType } from '~/types'
import { apiurl } from '~/constants/lists'
// defineProps<{
  
//   item: detail
// }>()

// definePageMeta({
//   key: route => route.fullPath,
//   validate: ({ params }) => {
//     return ['movie', 'tv'].includes(params.type as MediaType)
//   },
// })

const route = useRoute()
const title_url=route.params.id
const item=await (axios.get(apiurl+'/singleblogpost/'+title_url))
//const type = computed(() => route.params.type as MediaType || 'movie')
//const id = computed(() => route.params.id as string)

// const [item, recommendations] = await Promise.all([
//   getMedia(type.value, id.value),
//   getRecommendations(type.value, id.value),
// ])
// const $img = useImage()

// useHead({
//   title: item.name || item.title,
//   meta: [
//     { name: 'description', content: item.overview },
//     { property: 'og:image', content: $img(`/tmdb${item.poster_path}`, { width: 1200, height: 630 }) },
//   ],
// })
</script>

<template>
{{item}}
  <div>
    <MediaHero :item="item" />
    <!-- <MediaDetails :item="item" :type="type" /> -->
    <!---for recommandations-->
    <!-- <CarouselBase v-if="recommendations?.results?.length">
      <template #title>
        {{ $t('More like this') }}
      </template>
      <MediaCard
        v-for="i of recommendations.results"
        :key="i.id"
        :item="i"
        :type="type"
        flex-1 w-40 md:w-60
      />
    </CarouselBase> -->
    <TheFooter />
  </div>
</template>
