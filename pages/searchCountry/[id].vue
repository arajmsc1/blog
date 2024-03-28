<template>
<div flex bg-gray:10 items-center px6 py4 gap3 sticky>
      <div i-ph: text-xl op50 />
      Please click on the Country
     
    </div>

    

  <div v-for="(group, continent) in groupedCountries" :key="continent">
      <h1 class="year">{{ continent }}</h1>
      <div class="card-container">
        <div v-for="country in group" :key="country.country" class="card">
          <NuxtLink :to="`/searchResults/${month}::${country.country}`">
          <div class="card-content">
            {{ country.country }}
          </div>
          </NuxtLink>
        </div>
      </div>
    </div>
</template>


<script setup lang="ts">
import { countries } from '~/constants/lists';
import { computed } from 'vue';
const route = useRoute()
const month=route.params.id
localStorage.setItem('searchMonth', month);
const groupedCountries = computed(() => {
  return countries.reduce((groups: any, country: any) => {
    if (country.enable) {
      const continent = country.continent;
      if (!groups[continent]) {
        groups[continent] = [];
      }
      groups[continent].push(country);
    }
    return groups;
  }, {});
});
</script>

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
.year{
text-align: left;
font-size: 20px;
font-weight: bold;
padding: 10px;
margin-left:15px;
}
</style>
