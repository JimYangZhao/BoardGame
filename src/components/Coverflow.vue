<template>
  <div class="download container m-3">
    <div style="width:100%;height:400px">
      <slider ref="slider" :options="options">
        <!-- slideritem wrapped package with the components you need -->
        <template slot-scope="">
          <slideritem v-for="(item, index) in someList" :pageLength="someList.length" :index="index" :key="item.id" :style="item.style">{{ item.html }}</slideritem>
        </template>
        <!-- Customizable loading -->
        <div slot="loading">loading...</div>
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
        effect: 'coverflow',
        deviation: 200,
        // loop: true,
        widthScalingRatio: 0.8,
        heightScalingRatio: 0.8,
      },
      someList: [
        {
          id: 0,
          style: {
            backgroundImage: 'url(' + require('../assets/赛事/图片1.jpg') + ')',
            backgroundSize: 'cover',
            width: '60%',
            backgroundPosition: 'center',
          },
        },
        {
          id: 1,
          style: {
            backgroundImage: 'url(' + require('../assets/赛事/图片2.jpg') + ')',
            backgroundSize: 'cover',
            width: '60%',
            backgroundPosition: 'center',
          },
        },
        {
          id: 2,
          // src: 'https://img01.yzcdn.cn/vant/cat2.jpeg',
          style: {
            backgroundImage: 'url(' + require('../assets/赛事/图片3.jpg') + ')',
            backgroundSize: 'cover',
            width: '60%',
            backgroundPosition: 'center',
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.m-3 {
  margin: 30px auto;
}
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
