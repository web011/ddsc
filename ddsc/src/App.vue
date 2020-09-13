<template>
  <div id="app">
    <router-view></router-view>
    <tabbar v-show="$route.meta.showBottomTabbar" style="margin-bottom:-5px;"></tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar/Tabbar';
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    Tabbar
  }
}
</script>

<style land="scss">
.van-tabbar--fixed {
  margin-bottom: -1px;
}
</style>
