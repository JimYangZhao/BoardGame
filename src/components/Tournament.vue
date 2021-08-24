<template>
  <div class="Tournament">
    <h3>{{ title }}</h3>
    <van-grid class="grid-container">
      <van-grid-item class="item1">
        <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
      <van-grid-item class="item2">
        <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
      <van-grid-item class="item3">
        <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
      <van-grid-item class="item4">
        <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
    </van-grid>
    <button v-if="noMore" class="btn-grey">{{ bottom_button }}</button>
    <button v-else class="btn-red">{{ bottom_button }}</button>
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

<style scoped></style>
