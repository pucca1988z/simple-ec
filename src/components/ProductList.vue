<template>
  <div class="grid grid-cols-1 grid-rows-2 md:grid-cols-4 gap-4 mx-6">
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  components:{
    ProductCard
  }
}
</script>

<style>

</style>