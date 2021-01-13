import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // testCartData:[
    //   {title:'abc', price:1, description:'test product1(abc) description la', },
    //   {title:'cde', price:2, description:'test product2(cde) description la', },
    //   {title:'xyz', price:3, description:'test product3(xyz) description la', }
    // ],
    products:[],
    product:null,
    cart:[],
    cartTotalPrice:0
  },
  getters:{
    getCartTotalPrice(state){
      let total = 0 
      state.cart.forEach(item => total += item.product.price * item.qty)
      return total
    }
  },
  mutations: {
    REMOVE_CART_ITEM(state, data){
      let ind = state.cart.find( cartData => cartData.product == data.product )
      state.cart.splice(ind, 1);
    },
    SET_PRODUCTS(state, products){
      state.products = products;
    },
    SET_PRODUCT(state, product){
      state.product = product
    },
    ADD_TO_CART(state,{product, qty}){
      let productInCart = state.cart.find( item => item.product._id == product._id)
      console.log(qty)
      if(productInCart) productInCart.qty = parseInt(qty) + parseInt(productInCart.qty)
      else state.cart.push({product, qty})
    },
    CLEAR_CART(state){
      state.cart = [];
    }
  },
  actions: {
    clearCart({commit}){
      commit('CLEAR_CART');
    },
    removeMiniCartItem({commit}, data){
      commit('REMOVE_CART_ITEM', data)
    },
    getProducts({commit}){
      axios.get('http://localhost:4000/product')
      .then( res => commit('SET_PRODUCTS', res.data.products))
    },
    getProduct({commit}, productId){
      axios.get(`http://localhost:4000/product/${productId}`)
      .then( res => commit('SET_PRODUCT', res.data.product))
    }, 
    addProductToCart({commit}, {product, qty}){
      commit('ADD_TO_CART', {product, qty})
    }
  },
  modules: {
  }
})
