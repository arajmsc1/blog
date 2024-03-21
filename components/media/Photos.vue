<script setup lang="ts">
import type { Media } from '~/types'

defineProps<{
  item: Media
}>()

interface Image {
  id: number;
  url: string;
  caption?: string;
}
const photos: Image[] = [
  {
                
                "contenturl": "/1e1mvQmgNAelU1xhgi9EoEv8u9z.jpg",
                 "file_path": "/1e1mvQmgNAelU1xhgi9EoEv8u9z.jpg",
               
            },
            {
                "aspect_ratio": 1.778,
                "height": 1080,
                "iso_639_1": "en",
                "file_path": "/oSX9MrOiZM0mEpPdapth8TIfC0H.jpg",
                "vote_average": 5.172,
                "vote_count": 1,
                "width": 1920
            },
            {
                "aspect_ratio": 1.778,
                "height": 720,
                "iso_639_1": "en",
                "file_path": "/5tZv1YSMiOlCPs9Iy16J7SObHgN.jpg",
                "vote_average": 0,
                "vote_count": 0,
                "width": 1280
            }
  // Add more images as needed
];

const show = useImageModal()
</script>

<template> 
<!-- {{item}} -->
  <div flex="~ col" px4 md:px16 py8 gap6>
    <div flex gap-2 items-baseline>
      <div text-2xl>
        {{ $t('Backdrops') }}
      </div>
      <div text-sm op50>
        {{ $t('{numberOfImages} Images', { numberOfImages: item.length }) }}
      </div>
    </div>
    <div grid="~ cols-minmax-20rem" gap4>
      <PhotoCard
        v-for="i, index of item"
        :key="index"
        :item="i"
        class="aspect-16/9"
        w-full  
        @click="show(item, index)"     
      />
      <!-- <PhotoCard
        v-for="i, idx of item.images?.backdrops"
        :key="i.file_path"
        :item="i"
        class="aspect-16/9"
        w-full
        @click="show(item.images!.backdrops, idx)"
      /> -->
    </div>
    <div flex mt-10 gap-2 items-baseline>
      <div text-2xl>
        {{ $t('Posters') }}
      </div>
      <div text-sm op50>
        {{ $t('{numberOfImages} Images', { numberOfImages: item.images?.posters?.length }) }}
      </div>
    </div>
    <!-- <div grid="~ cols-minmax-10rem lg:cols-minmax-15rem" gap4>
      <PhotoCard
        v-for="i, idx of item.images?.posters"
        :key="i.file_path"
        :item="i"
        class="aspect-9/16"
        @click="show(item.images!.posters, idx)"
      />
    </div> -->
  </div>
</template>
