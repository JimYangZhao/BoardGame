<template>
  <div class="GamePage" title="吉祥赛事" id="Gamepage">
    <div class="background">
      <MatchNav :logoSrc="logo" />
      <div class="head-img"></div>
      <div class="p-3"><img src="../assets/赛事/赛事福利.png" alt="赛事福利" /></div>
      <div class="gift d-flex center">
        <div v-for="item in gift" :key="item.id" class="item flex-v">
          <img :src="item.src" alt="image" class="img-size" />
          <div class="background-img">
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
      <div class="p-3"><img src="../assets/赛事/赛事介绍.png" alt="赛事介绍" /></div>
      <div v-for="item in entry" :key="item.id" class="container">
        <GameEntry :title="item.title" :contents="item.contents" :popupContents="item.popupContents" />
      </div>
      <div class="p-3"><img src="../assets/赛事/赛事回顾.png" alt="赛事回顾" /></div>
      <Video />
      <Coverflow />
      <Footer />
    </div>
  </div>
</template>

<script>
import MatchNav from '../components/MatchNav';
import Footer from '../components/Footer';
import GameEntry from '../components/GameEntry';
import Vue from 'vue';
import { Image as VanImage } from 'vant';
import Coverflow from '../components/Coverflow';
import Video from '../components/Video';
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
    Video,
  },
  data() {
    return {
      logo: require('../assets/赛事/抬头2.png'),
      // Headimg: require('../assets/首页/主轮播图1.png'),
      gift: [
        {
          id: 0,
          src: require('../assets/赛事/数码产品.png'),
          // text: '数码产品',
        },
        {
          id: 1,
          src: require('../assets/赛事/生活家电.png'),
          // text: '数码产品2',
        },
        {
          id: 2,
          src: require('../assets/赛事/休闲食品.png'),
          // text: '数码产品3',
        },
        {
          id: 3,
          src: require('../assets/赛事/海量道具.png'),
          // text: '数码产品4',
        },
      ],
      entry: [
        {
          id: 0,
          title: '锦标赛',
          contents: '循环开赛，人满即开',
          popupContents: require('../assets/赛事/popUp/赛事介绍锦标赛.png'),
        },
        { id: 1, title: '福利赛', contents: '每天9场定时开赛', popupContents: require('../assets/赛事/popUp/赛事介绍福利赛.png') },
        {
          id: 2,
          title: '大师赛',
          contents: '每晚20:30赢家点',
          popupContents: require('../assets/赛事/popUp/赛事介绍大师赛.png'),
        },
        {
          id: 3,
          title: '闯关赛',
          contents: '随到随闯，爽快通关',
          popupContents: require('../assets/赛事/popUp/赛事介绍闯关赛.png'),
        },
        {
          id: 4,
          title: '电视赛',
          contents: '预约报名，上电视，赢大奖',
          popupContents: require('../assets/赛事/popUp/赛事介绍电视赛.png'),
        },
      ],
    };
  },
};
</script>

<style scoped>
.head-img {
  height: 8rem;
}
.background {
  background-image: url('../assets/赛事/赛事.png');
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
}
/* .GamePage {
} */
.m-3 {
  margin: 30px auto;
}

.img-size {
  height: 2.7rem;
  width: auto;
}
.container {
  width: 90%;
  padding: 5px 0;
}
.center {
  justify-content: center;
  text-align: center;
}
</style>
