<template>
  <div class="frontpage" title="首页" id="home">
    <!-- <Header menu="菜单按钮" /> -->
    <Banner />
    <Download title="分享快乐十一年" />
    <News title="推荐吉祥街机" leftTitle="推荐" />
    <Tournament bottom_button="了解更多赛事" title="吉祥赛事" />
    <Footer />
  </div>
</template>

<script>
// import Header from '../components/Header';
import Footer from '../components/Footer';
import Download from '../components/Download';
import News from '../components/News';
import Tournament from '../components/Tournament';
import Banner from '../components/Banner';
// import Vue from 'vue';
// import Axios from 'axios';
// import VueAxios from 'vue-axios';
// Vue.use(VueAxios, Axios);
// const axios = require('axios');
// axios({
//   methods: 'get',
//   url: 'http://csq.jixiangtest.com/api/product/list',
// }).then((res) => {
//   this.list = res.data;
// });
export default {
  name: 'Home',
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
    // Header,
    Footer,
    Download,
    News,
    Tournament,
    Banner,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
