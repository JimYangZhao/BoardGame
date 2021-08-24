<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#ce182e" height="850" color="black">
      <van-swipe-item v-for="(image, images) in images" :key="images.id">
        <div class="banner">
          <van-button type="default" class="btn_position">{{ image.buttons }}</van-button>
          <!-- <img :v-lazy="image.srcImage" /> -->
          <div v-lazy:background-image="image.srcImage" style="height:100%; width:100%" />
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vant from 'vant';
import Vue from 'vue';
import { Popup } from 'vant';
import { NavBar } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
Vue.use(Vant);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Popup);

export default {
  props: [],
  data() {
    return {
      images: [
        {
          id: 0,
          srcImage: require('../assets/主轮播图1.png'),
          buttons: '查看详情',
        },
        {
          id: 1,
          srcImage: require('../assets/主轮播图2.png'),
          buttons: '查看详情',
        },
        {
          id: 2,
          srcImage: require('../assets/主轮播图3.png'),
          buttons: '查看详情',
        },
      ],
    };
  },
};
</script>

<style scoped>
.btn_position {
  border-radius: 20px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  margin-left: -75px;
}
.banner {
  height: 100%;
  width: 100%;
  /* display: flex; */
  /* justify-content: center;
  align-items: flex-end;
  transform: translateY(-20%); */
}
/* .van-swipe__track > .van-swipe__indicators {
  transform: scale(4.5);
} */
</style>
