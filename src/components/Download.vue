<template>
  <div class="download">
    <h1>吉祥, 分享快乐<span style="color:red;">十一年</span></h1>
    <div style="width:100%;height:600px">
      <slider ref="slider" :options="options">
        <slideritem v-for="item in info" :key="item.id" style="width: 400px">
          <div v-if="isiOS">
            <a :href="item.ios_url">
              <img :src="item.thumb" alt="image" style="height: 250px;" />
              <p class="game-title">{{ item.name }}</p>
              <van-button type="default" class="oneClickDL">直接下载</van-button>
            </a>
          </div>
          <div v-else>
            <a :href="item.android_url">
              <img :src="item.thumb" alt="image" style="height: 250px;" />
              <p class="game-title">{{ item.name }}</p>
              <van-button type="default" class="oneClickDL">直接下载</van-button>
            </a>
          </div>
        </slideritem>
      </slider>
    </div>
  </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider';
import Vant from 'vant';
import Vue from 'vue';
import { Button } from 'vant';
import 'vant/lib/index.css';
import '../css/home.css';
import axios from 'axios';

Vue.use(Button);
Vue.use(Vant);

export default {
  components: {
    slider,
    slideritem,
  },
  props: {},
  data() {
    return {
      value1: 0,
      value2: 'a',
      info: [],
      isiOS: null,
      options: {
        currentPage: 1,
        itemAnimation: true,
        centeredSlides: true,
        thresholdDistance: 100,
        loopedSlides: 2,
        slidesToScroll: 1,
        // speed: 300,
        // thresholdTime: 300,
        // loop: true,
      },
    };
  },

  mounted() {
    axios.get('http://10.10.3.198:9081/api/product/list').then((response) => {
      this.info = response.data.data;
      // console.log(this.info);
    });
    const u = navigator.userAgent;
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    this.isiOS = isiOS;
  },
  methods: {},
};
</script>

<style scoped>
.game-title {
  color: black;
  margin: 0.5rem;
  font-size: 18px;
}
.background {
  background-size: cover;
}
.van-button--normal {
  font-size: 0.4rem;
}
.slider-item {
  flex-direction: column;
}
.oneClickDL {
  padding: 0.5rem 0.7rem;
  background-color: #ce182e;
  color: white;
  border-radius: 20px;
}
.download {
  margin-top: 1rem;
}
.slider-active {
  background-color: #f2f3f5;
}
</style>
