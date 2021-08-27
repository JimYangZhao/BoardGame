<template>
  <div class="Tournament p-3">
    <img src="../assets/首页/吉祥赛事.png" alt="吉祥赛事" />
    <van-grid class="grid-container">
      <van-grid-item class="item1">
        <img height="100%" src="../assets/首页/吉祥赛事1.png" alt="吉祥赛事1" />
      </van-grid-item>
      <van-grid-item class="item2">
        <img height="100%" src="../assets/首页/吉祥赛事4.png" alt="吉祥赛事2" />
      </van-grid-item>
      <van-grid-item class="item3">
        <img height="100%" src="../assets/首页/吉祥赛事3.png" alt="吉祥赛事3" />
      </van-grid-item>
      <van-grid-item class="item4">
        <img height="100%" src="../assets/首页/吉祥赛事2.png" alt="吉祥赛事4" />
      </van-grid-item>
    </van-grid>
    <!-- <button v-if="noMore" class="btn-grey">{{ bottom_button }}</button> -->
    <router-link to="/match"
      ><button class="btn-red">{{ bottom_button }}</button></router-link
    >
  </div>
</template>

<script>
import Vant from 'vant';
import Vue from 'vue';
import { Grid, GridItem } from 'vant';
import { Button } from 'vant';
Vue.use(Button);
Vue.use(Vant);
Vue.use(Grid);
Vue.use(GridItem);
export default {
  props: {
    bottom_button: String,
    title: String,
  },
  data() {
    return {
      noMore: true,
    };
  },
};
</script>

<style scoped>
.grid-container > div {
  padding: 0;
}
.van-grid-item__content {
  padding: 0;
}
.grid-container {
  grid-gap: 0;
}
</style>
