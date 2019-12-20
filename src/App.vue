<template>
  <div id="app">
    <div class="mark" v-show="$store.state.isMarkShow"></div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <BottomBar></BottomBar>
  </div>
</template>
<script>
  import BottomBar from '@/components/bottomBar'
  export default {
      components:{
          BottomBar
      },
      computed:{

      }
  }
</script>
<style>
  .mark{
    position: fixed;
    top:0;
    left: 0;
    background: rgba(0,0,0,0.5);
    width:100vw;
    height:100vh;
    z-index:900;
  }
</style>
