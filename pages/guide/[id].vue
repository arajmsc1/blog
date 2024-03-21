<script setup lang="ts">
import { apiurl } from '~/constants/lists'
const {id} = useRoute().params
//const id = useRouteParam<string>('id')
//const person = await getPerson(id.value)
const {data:person}=await (useFetch(apiurl+'/guide/'+id))
const $img = useImage()

useHead({
  title: person.guidename,
  meta: [
    { name: 'description', content: person.biography || person.guidename },
    { property: 'og:image', content: $img(`${person.guideimage}`, { width: 1200, height: 630 }) },
  ],
})
</script>

<template>
<!-- {{person}} -->
  <div>
    <PersonDetails :item="person" />
    <TheFooter />
  </div>
</template>
