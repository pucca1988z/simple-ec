<template>
  <div class="border rounded-md h-70 w-full shadow-md grid grid-cols-5  grid-rows-1 md:grid-rows-2 md:grid-cols-1" >
    <div class="col-span-2 md:col-span-1">photo</div>
    <div class=" col-span-3 p-2 space-y-1">
      <router-link 
        :to="{name:'Product', params:{productId:product._id}}"
        class=" text-blue-400 underline"
      > 
        {{product.title}}
      </router-link>
      <div> ${{product.price}} </div>
      <div> Lorem ipsum dolor sit amet consectetur. </div>
      <button 
        @click="addToCart"
        class="border border-white rounded-md bg-blue-400 text-white hover:bg-blue-900 duration-300  px-2 py-1">
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props:['product'],
  methods:{
    addToCart(){
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        qty:1
      })
    },
  }
}
</script>

<style>

</style>