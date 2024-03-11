<script setup>
import axios from 'axios';
import { apiurl } from '~/constants/lists'
const {dest} = useRoute().params
//const dest='Kenya'
//const items = ref([]);
const itemsfinal = ref([]);
const page=ref([1])
const LoadmoreVisible=ref(true)

    // Fetch initial data when the component is mounted
    const fetchData = async () => {
       //alert(dest) 
      try {
       // alert('ff')
        var {data:data2} = await axios.get(apiurl+'/blogposts/'+page.value+'?destination='+dest);
        //alert('ff')
        itemsfinal.value = data2.results;
        
      } catch (error) {
        console.log('Error fetching initial data:', error);
      }
    };
// var items =await useFetch('https://fakestoreapi.com/products')
fetchData()
 const fetchAndAppendData = async () => {
      try {
        page.value++;
        
        // Replace 'your-api-endpoint' with the actual API endpoint
        //const {data:response} = await axios.get('https://fakestoreapi.com/products');
       const {data:response} = await axios.get(apiurl+'/blogposts/'+page.value+'?destination='+dest);
        const totalpages=36
        //response.total_pages
        //alert(totalpages)
        if(totalpages==page.value)
            LoadmoreVisible.value=false;
    //    const response= [
    // {
    //     "id": 111,
    //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     "price": 109.95,
    //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     "rating": {
    //         "rate": 3.9,
    //         "count": 120
    //     }
    // }]
       const newData = response.results;
       
        //alert('gg')
       // Ensure items.value is an array before appending the new data
       itemsfinal.value=itemsfinal.value.concat(newData)
      //items.value= { ...items.value, ...newData };
        //items.value = Array.isArray(items.value) ? [...items.value, ...newData] : newData;
     
      } catch (error) {
        console.error('Error fetching and appending data:', error);
      }
    };

// //alert(items)
// async function test()
// {
//     var {data:newitems} =await useFetch('https://fakestoreapi.com/products')
//     //alert(rrr)
//      alert('fff')
//      this.items = [...this.items, ...newitems];
//      console.log(this.items)
//     // const{data:response} =await useFetch('https://fakestoreapi.com/products')
//     // this.posts = [...this.posts, ...response.data];
//     // const{data:items}
// }
</script>

<template>
  <!-- <h2>ttttttt</h2>
{{itemsfinal}} -->
<MediaGrid>
      <MediaCard
        v-for="item of itemsfinal"
        :key="item.location_id"
        type="detail"
        :item="item"
      />
    </MediaGrid>
    <div v-if="LoadmoreVisible" p10 animate-pulse n-link text-right style="cursor: pointer;">
      <span @click="fetchAndAppendData">Load more...</span>
    </div>
</template> 



<style>

</style>