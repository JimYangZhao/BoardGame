<template>
  <div class="pocker" title="斗地主" id="pocker">
    <MatchNav :logoSrc="logo" />
    <div class="background">
      <div class="head-img"></div>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide><img src="../assets/斗地主/轮播图1.png" alt="轮播图1"/></swiper-slide>
        <swiper-slide><img src="../assets/斗地主/轮播图2.png" alt="轮播图2"/></swiper-slide>
        <swiper-slide><img src="../assets/斗地主/轮播图3.png" alt="轮播图3"/></swiper-slide>
        <swiper-slide><img src="../assets/斗地主/轮播图4.png" alt="轮播图4"/></swiper-slide>
        <swiper-slide><img src="../assets/斗地主/轮播图5.png" alt="轮播图5"/></swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <FooterGame />
    </div>
  </div>
</template>

<script>
import MatchNav from '../components/MatchNav';
import FooterGame from '../components/FooterGame';
import Vue from 'vue';
import { Image as VanImage } from 'vant';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
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
    FooterGame,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      logo: require('../assets/斗地主/斗地主导航.png'),
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
};
</script>

<style scoped>
.head-img {
  height: 15.5rem;
}
.background {
  background-image: url('../assets/斗地主/斗地主.jpg');
  /* min-height: 42.7rem; */
  width: 100%;
  background-repeat: no-repeat;
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
