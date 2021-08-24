<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import 'vant/lib/index.css';

export default {
  name: 'App',
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
<!-- <div class="aleft">
      <router-link to="/" class="sun_active">首页</router-link><br />
      <router-link to="/page11" class="sun_active">page11</router-link>
    </div>
    <div class="aright">
      <keep-alive>
        <router-view sunMsg="sdun"></router-view>
      </keep-alive>
    </div> -->
