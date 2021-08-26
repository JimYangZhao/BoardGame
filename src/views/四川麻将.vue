<template>
  <div class="sichuanmajiang" title="四川麻将" id="sichuanmajiang">
    <MatchNav :logoSrc="logo" />
    <div class="background">
      <div class="head-img"></div>
      <swiper class="swiper" :options="swiperOption" style="margin-bottom:2rem;">
        <swiper-slide><img src="../assets/四川麻将/轮播图1.png" alt="轮播图1"/></swiper-slide>
        <swiper-slide><img src="../assets/四川麻将/轮播图2.png" alt="轮播图2"/></swiper-slide>
        <swiper-slide><img src="../assets/四川麻将/轮播图3.png" alt="轮播图3"/></swiper-slide>
        <swiper-slide><img src="../assets/四川麻将/轮播图4.png" alt="轮播图4"/></swiper-slide>
        <swiper-slide><img src="../assets/四川麻将/轮播图5.png" alt="轮播图5"/></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
      <FooterGame class="footer" bgColor="white" fontColor="#ce182e" />
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
      logo: require('../assets/四川麻将/四川麻将导航.png'),
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    };
  },
};
</script>

<style scoped>
.footer {
  margin-top: 2.7rem;
}
.head-img {
  height: 16rem;
}
.background {
  background-image: url('../assets/四川麻将/川麻.jpg');
  min-height: 39.5rem;
  max-height: 39.5rem;
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
.swiper-slide {
  width: 60%;
}
.swiper-slide:nth-child(2n) {
  width: 60%;
}
.swiper-slide:nth-child(3n) {
  width: 60%;
}
.swiper-slide:nth-child(4n) {
  width: 60%;
}
.swiper-slide:nth-child(5n) {
  width: 60%;
}
.swiper-container-android .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0) !important;
}
/* .swiper-container-android .swiper-slide,
.swiper-wrapper {
  transform: translateX(10px) !important;
} */
</style>
