<script setup lang="ts">
import type { Media } from '~/types'

definePageMeta({
  pageTransition: false,
})

const route = useRoute()
const router = useRouter()
//const searchMonth = localStorage.getItem('searchMonth') ? localStorage.getItem('searchMonth'):false;
//console.log(searchMonth)
function getNextTwoYearsMonths() {
    const currentDate = new Date();
    const nextTwoYearsMonths = {};

    for (let i = 0; i < 24; i++) {
        const year = currentDate.getFullYear() + Math.floor((currentDate.getMonth() + i) / 12);
        const monthIndex = (currentDate.getMonth() + i) % 12;
        const monthName = new Date(0, monthIndex).toLocaleString('default', { month: 'long' });

        if (!nextTwoYearsMonths[year]) {
            nextTwoYearsMonths[year] = [];
        }

        nextTwoYearsMonths[year].push(monthName);
    }

    return nextTwoYearsMonths;
}

const twoyearData = getNextTwoYearsMonths();
</script>

<template>
<!-- {{twoyearData}} -->
  <div>
    <div flex bg-gray:10 items-center px6 py4 gap3 sticky>
      <div i-ph: text-xl op50 />
      Please click on the Month
      
    </div>

    <div>
    <div v-for="(months, year) in twoyearData" :key="year">
      <h1 class="year">{{ year }}</h1>
      <div class="card-container">

        <!-- <div v-for="month in months" :key="month" :class="!searchMonth ? card : cardSelected">  
          <div v-for="month in months" :key="month" :class="!searchMonth ? card : cardSelected"> -->
        <div v-for="month in months" :key="month"  class="card">  
         <NuxtLink :to="`/searchCountry/${month}::${year}`">
           <div class="card-content">
            {{ month }}
          </div>
         </NuxtLink>
        </div>
      </div>
    </div>
  </div>
    <!-- <div v-if="error" p8 flex flex-col gap-3 items-start>
      <h1 text-4xl text-red>
        {{ $t('Error occurred on fetching') }}
      </h1>
      <pre py2>{{ error }}</pre>
      <button n-link border px4 py1 rounded @click="error = undefined">
        {{ $t('Retry') }}
      </button>
    </div>
    <MediaAutoLoadGrid
      v-else-if="currentSearch"
      :key="currentSearch"
      :fetch="fetch"
      :items="items"
      :count="count"
      :blocking="false"
      type="movie"
    >
      <div>{{ $t('Search result for: {currentSearch}', { currentSearch }) }}</div>
    </MediaAutoLoadGrid>
    <div v-else text-4xl p10 font-100 op50 text-center>
      {{ $t('Type something to search...') }}
    </div> -->
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  margin-left:15px;
  
}

.card {
  width: calc(12% - 8px); /* Adjust card width as needed */
  margin: 8px;
  background-color: #383838;
  border: 2px solid #ccc;
  border-radius: 5px;
  
}

.card-content {
  padding: 10px;
  text-align: center;
}
.cardSelected{
  width: calc(12% - 8px); /* Adjust card width as needed */
  margin: 8px;
  background-color: #f0e006;
  border: 2px solid #ccc;
  border-radius: 5px;
  
}

.card-content {
  padding: 10px;
  text-align: center;
}
.year{
text-align: center;
font-size: 20px;
font-weight: bold;
padding: 5px;
}
</style>
