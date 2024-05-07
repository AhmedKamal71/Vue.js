<template>
  <div class="container">
    <NavBar v-if="!$route.meta.hideNavbar"/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './Component/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
