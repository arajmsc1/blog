<script setup lang="ts">
//import { ref, watch } from 'vue'
//import marked from 'marked'
import type { Media, MediaType } from '~/types'
import { formatDate, formatLang, formatTime, numberWithCommas } from '~/composables/utils'

const props = withDefaults(defineProps<{
  item: Media
  //type: MediaType
}>(), {
  item: () => ({} as Media),
  type: 'movie',
})
const externalIds = computed(() => ({ ...props.item.external_ids, homepage: props.item.homepage }))
const directors = computed(() => props.item.credits?.crew.filter(person => person.job === 'Director'))

 let renderedMarkdown = ref('')
// const markdownContent = ref('')
// // Watch for changes in the prop
// watch(() => props.item.post_content, (newVal) => {
//   markdownContent.value = newVal.markdownContent
// })

// // Render Markdown content
// watch(markdownContent, (newVal) => {
//   renderedMarkdown.value = marked(newVal)
// })


// watch(markdownContent, () => {
//   renderedMarkdown.value = marked(markdownContent)
// })


  let contents= props.item.post_content.replace(/[\r\n]+/g, '')
  .replace(/<\/p>/g, '</p><br>')
  .replace(/<\/ul>/g, '</ul><br>');// Handle line breaks on different systems

  
  
  
</script>

<template>
<!-- {{contents2}} -->
<!-- items-center -->
  <div p4 grid="~ cols-[max-content_1fr]" gap-8  ma max-w-300>
    <!-- <NuxtImg
      width="400"
      height="600"
      format="webp"
      :src="`/tmdb${props.item.image}`"
      :alt="props.item.title || props.item.name"
      block border="4 gray4/10" w-79 lt-md:hidden
      transition duration-400 object-cover aspect="10/16"
      :style="{ 'view-transition-name': `item-${props.item.id}` }"
    /> -->
    
    <NuxtImg
     class="image"
      width="400"
      height="600"
      format="webp"
      :src="props.item.featureimage"
      :alt="props.item.title || props.item.name"
      block border="4 gray4/10" w-79 lt-md:hidden
      transition duration-400 object-cover aspect="10/16"
      :style="{ 'view-transition-name': `item-${props.item.id}` }"
    />
    <div lt-md:w="[calc(100vw-2rem)]" flex="~ col" md:p4 gap6>
      <!-- <div v-if="props.item.overview"> -->
        <div>
        <h2 text-3xl mb4>
          {{props.item.title_post}}
          
        </h2>
        <div op80 v-html="contents" />        
      </div>

      <div text-sm op80>
        <ul grid="~ cols-[max-content_1fr] lg:cols-[max-content_1fr_max-content_1fr] gap3" items-center>
          <!-- <template v-if="props.item.release_date"> -->
            <!-- <template >
            <div>
              {{ $t('Release Date') }}
            </div>
            <div>
              {{ formatDate(props.item.release_date) }}
            </div> 
          </template> -->
          <!-- <template v-if="props.item.runtime">
            <div>
              {{ $t('Runtime') }}
            </div>

            <div>
              {{ formatTime(props.item.runtime) }}
            </div>
          </template> -->
          <!-- <template v-if="directors?.length">
            <div>
              {{ $t('Director') }}
            </div>

            <div flex="~ row wrap gap1">
              <NuxtLink
                v-for="person of directors"
                :key="person.id"
                :to="`/person/${person.id}`"
                bg="gray/10 hover:gray/20" p="x2 y1"
                rounded text-xs
              >
                {{ person.name }}
              </NuxtLink>
            </div>
          </template>
          <template v-if="props.item.budget">
            <div>
              {{ $t('Budget') }}
            </div>

            <div>
              ${{ numberWithCommas(props.item.budget) }}
            </div>
          </template> -->
        
          <!-- <template v-if="props.item.revenue">
            <div>
              {{ $t('Revenue') }}
            </div>

            <div>
              ${{ numberWithCommas(props.item.revenue) }}
            </div>
          </template>
          <template v-if="props.item?.genres?.length">
            <div>
              {{ $t('Genre') }}
            </div> 

            <div flex="~ row wrap gap1">
              <NuxtLink
                v-for="genre of props.item.genres" :key="genre.id"
                :to="`/genre/${genre.id}/${type}`"
                bg="gray/10 hover:gray/20" p="x2 y1"
                rounded text-xs
              >
                {{ genre.name }}
              </NuxtLink>
            </div>
          </template>
          <template v-if="props.item.status">
            <div>
              {{ $t('Status') }}
            </div>

            <div>
              {{ props.item.status }}
            </div>
          </template>
          <template v-if="props.item.original_language">
            <div>
              {{ $t('Language') }}
            </div>

            <div>
              {{ formatLang(props.item.original_language) }}
            </div>
          </template>
          <template v-if="props.item?.production_companies?.length">
            <div>
              {{ $t('Production') }}
            </div>

            <div>
              {{ props.item.production_companies.map(i => i.name).join(', ') }}
            </div>
          </template>-->
        </ul>
      </div>

      <div>
        <ExternalLinks :links="externalIds" />
      </div>
    </div>
  </div>
</template>
<style >
h1{font-weight: 800;}
h2{font-weight: 700;}
h3{font-weight: 600;}
.image {
  position: relative; /* Position the image absolutely */
  top:30px;
}
</style>
