<template>
  <div class="download">
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
          html: 'slider1',
          src: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          style: {
            background: '#4abf8a',
            width: '33.33333333%',
          },
        },
        {
          id: 1,
          html: 'slider2',
          src: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          style: {
            background: '#4bbfc3',
            width: '33.33333333%',
          },
        },
        {
          id: 2,
          html: 'slider3',
          src: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          style: {
            background: '#7baabe',
            width: '33.33333333%',
          },
        },
        {
          id: 3,
          html: 'slider4',
          src: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          style: {
            background: '#4abf8a',
            width: '33.33333333%',
          },
        },
        {
          id: 4,
          html: 'slider5',
          src: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          style: {
            background: '#4bbfc3',
            width: '33.33333333%',
          },
        },
        {
          id: 5,
          html: 'slider6',
          src: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          style: {
            backgroundImage: 'url(https://img01.yzcdn.cn/vant/cat.jpeg)',
            width: '33.33333333%',
                backgroundSize: 'cover';
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
