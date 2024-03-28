<script setup lang="ts" >
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

    <div flex bg-gray:10 items-center px6 py4 gap3 sticky mb-2>
      <div i-ph: text-xl op50 />
        {{country}} - {{month}}  {{year}}
     
    </div>

  <div class="flex bg-gray-10">
    <div class="w-1/3 px-6 py-4 rounded-lg shadow-md mx-2 bg-gray:10"> <!-- Left Column -->
        <!-- Content for the left column goes here -->
        Left Column
    </div>
    <div class="w-2/3 px-6 py-4 mx-2 rounded-md "> <!-- Middle Column (Double Width) -->
        <!-- Content for the middle column goes here -->
        <div class="flex bg-gray:10 px-6 py-4 rounded mb-2" v-for="destination in results" :key="destination.id"> <!-- Flex container for card layout -->
            <div class="w-1/3"> <!-- Thumbnail -->
                <!-- Thumbnail content goes here -->
                <!-- <img  alt="Thumbnail" class="rounded-lg shadow-md"> -->
                <NuxtImg width="300"       height="600"
                src="https://www.travelogyindia.com/storage/app/itinerary/349/elephant-at-bandipur-national-park-m.jpg"  />
            </div>
            <div class="w-2/3 px-4 ml-2"> <!-- Content -->
                <!-- Content for the right side goes here -->
                <h1 >{{ destination.name }}</h1>
                <ul class="list-disc">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
            
        </div>
        
    </div>
    <div class="w-1/3 px-6 py-4 rounded-md bg-gray:10"> <!-- Right Column -->
        <!-- Content for the right column goes here -->
        Right Column
    </div>
</div>


    
   </template> 
