<template>

<div flex bg-gray:10 items-center px6 py4 gap3 sticky>
      <div i-ph: text-xl op50 />
     {{staticpages.termsConditions.title}}
     
    </div>
   <div items-center  px6 py4 gap3 sticky v-html="contents">
     
   </div> 
<TheFooter />
    

  
</template>


<script setup lang="ts">
import { staticpages } from '~/constants/lists';

let contents= staticpages.termsConditions.content.replace(/[\r\n]+/g, '')
  .replace(/<\/p>/g, '</p><br>')
  .replace(/<\/ul>/g, '</ul><br>');
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
