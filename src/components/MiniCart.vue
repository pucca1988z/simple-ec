<template>
  <div
    class="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
    <div>
      <div>{{ data.itemName }}</div>
      <div> ${{ data.itemPrice }} * {{ data.amount }} </div>
    </div>
    <div class=" cursor-pointer px-2 py-1 rounded-md bg-red-200" @click="removeMiniCartItem(data)">remove</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props:['data'],
  methods:{
    // removeMiniCartItem(data){
    //   this.$store.dispatch('removeMiniCartItem', data)
    // }
    ...mapActions({
      removeMiniCartItem:'removeMiniCartItem'
    })
  }
}
</script>

<style>

</style>