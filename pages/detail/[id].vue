<template>
<!-- {{item.relatedPosts}} -->
    <div>
    <MediaHero :item="item.singlePost" page="detail"/>
      <MediaDetails :item="item.singlePost"  />
    
   <CarouselBase v-if="item.relatedPosts?.length">
      <template #title>
        {{ $t('More like this') }}
      </template>
      <MediaCard
        v-for="i of item.relatedPosts"
        :key="i.id"
        :item="i"
        type="detail"
        flex-1 w-40 md:w-60
      />
    </CarouselBase>
    <TheFooter />
  </div>
</template>

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
const {data:item}=await (useFetch(apiurl+'/singleblogpost/'+title_url))

//local url
// const {data:item}=await (useFetch('http://localhost:8000/singlePost'))
// const {data:relatedPosts}=await (useFetch('http://localhost:8000/relatedPosts'))

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

<style >

</style>