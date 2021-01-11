<template>
  <div class="border rounded-md h-70 w-full shadow-md grid grid-cols-5  grid-rows-1 md:grid-rows-2 md:grid-cols-1" >
    <div class="col-span-2 md:col-span-1">photo</div>
    <div class=" col-span-3 p-2 space-y-1">
      <router-link 
        :to="{name:'Product', params:{id:23}}"
        class=" text-blue-400 underline"
      > 
        Product Title 
      </router-link>
      <div> $23 </div>
      <div> Lorem ipsum dolor sit amet consectetur. </div>
      <button 
        class="border border-white rounded-md bg-blue-400 text-white hover:bg-blue-900 duration-300  px-2 py-1">
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>