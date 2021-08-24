<template>
  <div class="GamePage" title="吉祥赛事" id="Gamepage">
    <Header menu="菜单按钮" />
    <div class="head-img">
      <img :src="Headimg" alt="img" />
    </div>
    <h2>赛事福利</h2>
    <div class="gift d-flex">
      <div v-for="item in gift" :key="item" class="item flex-v">
        <img :src="item.src" alt="image" class="img-size" />
        <div class="background-img">
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
    <h2>赛事介绍</h2>
    <div v-for="item in entry" :key="item" class="container">
      <GameEntry :title="item.title" :contents="item.contents" />
    </div>
    <h2>赛事回顾</h2>
    <div class="container">
      <a href="#">
        <van-image width="100%" height="100%" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
      </a>
      <DL2 />
    </div>
    <Footer
      contents1="腾讯公司版权所有COPYRIGHT @1998 - 2020 TENCENT ALL RIGHTS RESERVED 本网络游戏适合17+岁的用户使用；为了您的健康，请合理控制游戏时间。 工商网兼电子问文(2017)6138-1464号！ (总)"
      contents2="腾讯公司"
      copyright="Helloworld"
    />
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameEntry from '../components/GameEntry';
import Vue from 'vue';
import { Image as VanImage } from 'vant';
import DL2 from '../components/Download2';
Vue.use(VanImage);

export default {
  props: {},
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
  },
  components: {
    Header,
    Footer,
    GameEntry,
    DL2,
  },
  data() {
    return {
      Headimg: require('../assets/主轮播图1.png'),
      gift: [
        {
          src: 'https://m.jixiang.cn/jixiang/images/buyunew.png',
          text: '数码产品',
        },
        {
          src: 'https://m.jixiang.cn/jixiang/images/buyunew.png',
          text: '数码产品2',
        },
        {
          src: 'https://m.jixiang.cn/jixiang/images/buyunew.png',
          text: '数码产品3',
        },
        {
          src: 'https://m.jixiang.cn/jixiang/images/buyunew.png',
          text: '数码产品4',
        },
      ],
      entry: [
        {
          title: '锦标赛',
          contents: '锦标赛好',
        },
        {
          title: '福利赛',
          contents: '锦标赛好',
        },
        {
          title: '大师赛',
          contents: '锦标赛好',
        },
      ],
    };
  },
};
</script>

<style scoped>
.img-size {
  height: 2rem;
  width: auto;
}
.container {
  width: 90%;
  padding: 5px 0;
}
</style>
