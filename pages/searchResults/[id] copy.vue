<script setup >
import { apiurl } from '~/constants/lists'
const route = useRoute()
//const searchdata
const searchdata=route.params.id
//localStorage.setItem('searchCountry', searchdata);
// Split the string using the separator "::"
 const parts = searchdata.split("::");

// // Replace "%20" with a space in the last part
 parts[2] = parts[2].replace(/%20/g, ' ');
const month=parts[0];
const year=parts[1];
const country=parts[2];
const {data:results}=await (useFetch(apiurl+'/locations/'+country+'/'+year+'/'+month))
const toggleSelected=(destination) =>
{
    destination.selected = !destination.selected;
    // if(destination.selected==true)
    // alert(destination.name)
    // else
    // alert(destination.name)
}






      
</script>
<template>
    <!-- <div>{{results.length}}</div> -->

    <div flex bg-gray:10 items-center px6 py4 gap3 sticky>
      <div i-ph: text-xl op50 />
        {{country}} - {{month}}  {{year}}
     
    </div>

    

  <div v-if="results.length>0" class="card-container">
    <div v-for="destination in results" :key="destination.id" 
    :class="{ 'card': true, 'selected': destination.selected }" 
    @click="toggleSelected(destination)">
      {{ destination.name }}
    </div>
  </div>

  <div v-else>No result found</div>
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
  padding:20px;
  cursor: pointer;
}
.selected {
  background-color:  #FFFF00;
  color:black
}

</style>
