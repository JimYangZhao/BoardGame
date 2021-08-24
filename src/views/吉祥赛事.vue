<template>
  <div class="GamePage" title="吉祥赛事" id="Gamepage">
    <MatchNav menu="菜单按钮" />
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
      <a href="javascript:playVideo('https://jxcloudimg.oss-cn-beijing.aliyuncs.com/video/6qi.mp4')"
        ><van-image width="100%" height="100%" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
        <img width="50" src="https://lh3.googleusercontent.com/proxy/ExtwXJWBgPAiCOh2VGthBwZ2GZusdnBxcmomkc4HaJlrt7VWwrBiF7ZkF2TuMNxbZ78lKWGfeoujgYJw9zyYcoUnlqMp8BwvP9azWXr5TGU_KYKuwQ" class="play"
      /></a>
    </div>
    <div class="container m-3">
      <Coverflow />
    </div>

    <Footer
      contents1="腾讯公司版权所有COPYRIGHT @1998 - 2020 TENCENT ALL RIGHTS RESERVED 本网络游戏适合17+岁的用户使用；为了您的健康，请合理控制游戏时间。 工商网兼电子问文(2017)6138-1464号！ (总)"
      contents2="腾讯公司"
      copyright="Helloworld"
    />
  </div>
</template>

<script>
import MatchNav from '../components/MatchNav';
import Footer from '../components/Footer';
import GameEntry from '../components/GameEntry';
import Vue from 'vue';
import { Image as VanImage } from 'vant';
import Coverflow from '../components/Coverflow';
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
    MatchNav,
    Footer,
    GameEntry,
    Coverflow,
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
.m-3 {
  margin: 30px auto;
}
.play {
  position: absolute;
  width: 80px;
  height: 80px;
  left: 135px;
  top: 75px;
  z-index: 99;
}
.img-size {
  height: 2rem;
  width: auto;
}
.container {
  width: 90%;
  padding: 5px 0;
}
</style>
