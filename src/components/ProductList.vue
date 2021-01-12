<template>
  <div class="grid grid-cols-1 grid-rows-2 md:grid-cols-4 gap-4 mx-6">
    <ProductCard v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  components:{
    ProductCard
  },
  computed:{
    products(){
      return this.$store.state.products
    }
  },
  mounted(){
    this.$store.dispatch('getProducts')
  }
}
</script>

<style>

</style>