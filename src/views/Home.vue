<template>
  <div class="home">
    <div>
      home
    </div>
    <ProductList/>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
export default {
  name: 'Home',
  components: {
    ProductList
  }
}
</script>
