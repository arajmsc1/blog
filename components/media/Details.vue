<script setup lang="ts">
import type { Media, MediaType } from '~/types'

defineProps<{
  item: Media,
  page:String,
  photos:Object,
  videos:Object,
}>()
const type='type'
const tab = ref<'overview' | 'videos' | 'photos'>('overview')
</script>

<template>
  <div v-if='page=="country"' flex items-center justify-center gap8 py6>
     <button n-tab :class="{ 'n-tab-active': tab === 'overview' }" @click="tab = 'overview'">
      {{ $t('Overview') }}
    </button> 
     <button n-tab :class="{ 'n-tab-active': tab === 'videos' }" @click="tab = 'videos'">
      {{ $t('Videos') }}
    </button>
    <button n-tab :class="{ 'n-tab-active': tab === 'photos' }" @click="tab = 'photos'">
      {{ $t('Media Photos') }}
    </button> 
  </div>
  <MediaOverview v-if="tab === 'overview'" :item="item" :type="type" />
  <MediaVideos v-if="tab === 'videos'" :item="videos" />
  <MediaPhotos v-if="tab === 'photos'" :item="photos" /> 
</template>
