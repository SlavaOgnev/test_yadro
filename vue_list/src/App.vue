<template>
  <nav-bar></nav-bar>
  <div class="app">

  <router-view></router-view>
  </div>
</template>
<script>
import navBar from '@/components/UI/navBar.vue';
export default {
  components: {
    navBar
  }
}
</script>

<style  >
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  padding: 20px;
}
</style>а