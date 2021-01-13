<template>
  <div v-if="product" class="grid grid-cols-5 grid-rows-1 m-8 px-4  py-2 border rounded-md h-60 shadow-md">
    <div class=" col-span-2">photo</div>
    <div class=" col-span-3">
      <div>{{product.title}}  </div>
      <div>${{product.price}}</div>
      <div class="flex space-x-2">
        <input v-model="qty" class="border w-20 rounded-sm " type="text">
        <button class="border border-white rounded-md bg-blue-400 text-white hover:bg-blue-900 duration-300  px-2 py-1" @click="addToCartWithQty">Add to cart</button>
      </div>
      <div>
        {{product.description}}
      </div>
    </div>
  </div>
  <div v-else>
    no data found!
  </div>
</template>

<script>
export default {
  data(){
    return{
      qty:0
    }
  },
  mounted(){
    this.$store.dispatch('getProduct', this.$route.params.productId)
  },
  computed:{
    product(){
      return this.$store.state.product
    }
  },
  methods:{
    addToCartWithQty(){
      if(this.qty == 0){
        alert('qty cannot be 0')
        return
      }
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        qty:this.qty
      })
      this.qty = 0 
    }
  }
}
</script>

<style>

</style>