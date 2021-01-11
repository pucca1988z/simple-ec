import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testCartData:[
      {itemName:'abc', itemPrice:1, amount:10},
      {itemName:'cde', itemPrice:2, amount:5},
      {itemName:'xyz', itemPrice:3, amount:3}
    ],
    products:[]
  },
  getters:{
    testCartDataTotal(state){
      return state.testCartData.reduce((acc, cur) => {
        return acc + cur.itemPrice * cur.amount
      },0)
    }
  },
  mutations: {
    REMOVE_CART_ITEM(state, data){
      let ind = state.testCartData.find( cartData => cartData == data )
      state.testCartData.splice(ind, 1);
    }
  },
  actions: {
    removeMiniCartItem({commit}, data){
      commit('REMOVE_CART_ITEM', data)
    }
  },
  modules: {
  }
})
