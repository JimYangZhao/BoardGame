<template>
  <div>
    <Header menu="菜单按钮" class="positionTop" />
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#ce182e" height="850" color="black">
      <van-swipe-item v-for="(image, images) in images" :key="images.id">
        <div class="banner">
          <router-link :to="image.link"
            ><van-button type="default" class="btn_position">{{ image.buttons }}</van-button></router-link
          >
          <!-- <img :v-lazy="image.srcImage" /> -->
          <div v-lazy:background-image="image.srcImage" style="height:100%; width:100%; background-size: cover; background-repeat: no-repeat;" />
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
import Header from './Header';
Vue.use(Vant);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Popup);

export default {
  props: [],
  components: {
    Header,
  },
  data() {
    return {
      images: [
        {
          id: 0,
          srcImage: require('../assets/首页/捕鱼轮播.png'),
          buttons: '查看详情',
          link: '',
        },
        {
          id: 1,
          srcImage: require('../assets/首页/斗地主轮播.png'),
          buttons: '查看详情',
          link: '/pocker',
        },
        {
          id: 2,
          srcImage: require('../assets/首页/吉祥11年轮播.png'),
          buttons: '查看详情',
          link: '',
        },
        {
          id: 3,
          srcImage: require('../assets/首页/吉祥麻将轮播.png'),
          buttons: '查看详情',
          link: '/majiang',
        },
        {
          id: 4,
          srcImage: require('../assets/首页/四川麻将轮播.png'),
          buttons: '查看详情',
          link: '/sichuanmajiang',
        },
      ],
    };
  },
};
</script>

<style scoped>
.positionTop {
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
}

.btn_position {
  border-radius: 20px;
  position: absolute;
  bottom: 10%;
  left: 50%;
  margin-left: -1.8rem;
  border-color: transparent;
}
.banner {
  height: 100%;
  width: 100%;
}
</style>
