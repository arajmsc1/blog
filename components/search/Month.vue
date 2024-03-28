<script setup lang="ts">
defineProps<{
  data:Array
}>()
</script>
<template>
{{data}}
     <div>
    <div v-for="(months, year) in twoyearData" :key="year">
      <h1 class="year">{{ year }}</h1>
      <div class="card-container">
        <div v-for="month in months" :key="month" class="card">
          <div class="card-content">
            {{ month }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>