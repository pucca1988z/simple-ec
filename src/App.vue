<template>
  <div id="app" class="">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <AppHeader/>
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/styles/styles.css'
import AppHeader from '@/components/AppHeader'
export default {
  components:{
    AppHeader
  }
}
</script>

<style>

</style>
