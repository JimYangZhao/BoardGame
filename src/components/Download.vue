<template>
  <div class="download">
    <!-- <h3>吉祥 分享快乐<span style="color:red;">十一年</span></h3> -->
    <h2><span style="color: red;">吉祥，</span>{{ title }}</h2>
    <div style="width:100%;height:400px">
      <slider ref="slider" :options="options">
        <slideritem v-for="(item, index) in someList" :key="index" :style="item.style">
          <img v-bind:src="item.img" alt="image" style="height: 200px;margin-top: 30px;" />
          <p style="color:black">{{ item.title }}</p>
          <van-button type="default" class="oneClickDL">{{ item.button }}</van-button>
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

Vue.use(Button);
Vue.use(Vant);

export default {
  components: {
    slider,
    slideritem,
  },
  props: {
    title: String,
  },
  data() {
    return {
      value1: 0,
      value2: 'a',
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
      someList: [
        {
          img: require('../assets/首页/吉祥街机捕鱼.png'),
          title: '吉祥斗地主',
          button: '直接下载',
          id: 1,
          style: {
            width: '400px',
            border: '1px solid lightgrey',
          },
        },
        {
          img: require('../assets/首页/斗地主.png'),
          title: '吉祥四川麻将',
          button: '直接下载',
          id: 2,
          style: {
            width: '400px',
            border: '1px solid lightgrey',
          },
        },
        {
          img: require('../assets/首页/吉祥麻将.png'),
          title: '吉祥麻将',
          button: '直接下载',
          id: 3,
          style: {
            width: '400px',
            border: '1px solid lightgrey',
          },
        },
        {
          img: require('../assets/首页/吉祥四川麻将.png'),
          title: '吉祥麻将',
          button: '直接下载',
          id: 4,
          style: {
            width: '400px',
            border: '1px solid lightgrey',
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.slider-item {
  flex-direction: column;
}
.oneClickDL {
  padding: 10px;
  background-color: #ce182e;
  color: white;
  border-radius: 20px;
}
</style>
