<template>
  <div class="border bg-gray-600 h-10 grid grid-cols-8 justify-items-center items-center">
    <router-link :to="{name:'Home'}" class="text-white text-xl">home</router-link>
    <router-link to="/product/12" class="text-white text-xl ml-10">product</router-link>
    <div class="  col-start-8">
      <button class="flex focus:outline-none" @click=" showDropdown = !showDropdown">
        <div class="">
          Mini Cart
        </div>
        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
      <div v-show="showDropdown" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <!-- items in cart -->
          <MiniCart v-for="(data, key) in testCartData" :key="key" :data="data"/>

          <div class="border mx-2"></div>
          <div class="flex justify-between px-4">
            <div class="py-2 text-sm text-gray-700 ">total: {{ testCartDataTotal }}</div>
            <div class=" text-blue-500 py-2 text-sm underline cursor-pointer ">Clear Cart</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import MiniCart from '@/components/MiniCart.vue'
export default {
  components:{
    MiniCart
  },
  data(){
    return {
      showDropdown: false
    }
  },
  computed:{
    ...mapState({
      testCartData: state => state.testCartData
    }),
    ...mapGetters({
      testCartDataTotal: 'testCartDataTotal'
    })
    
  }
}
</script>

<style>

</style>