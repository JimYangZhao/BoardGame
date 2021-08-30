<template>
  <div class="gameActivity">
    <div class="background">
      <Header menu="菜单按钮" />
      <div class="contents" style="min-height: 5rem; color: black;">
        <div class="mt-5">
          <router-link to="../news">返回</router-link>
          <span>{{ contents }}</span>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import router from 'vue-router';
export default {
  props: {
    contents: String,
  },
  data() {
    return {
      info: null,
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  mounted() {
    axios.get('http://10.10.3.198:9081/api/material/list?categoryTag=news').then((response) => (this.info = response));
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    goback() {
      return router.go(-1);
    },
  },
};
</script>

<style scoped>
.mt-5 {
  margin-top: 5rem;
}
.background {
  background-image: url('../../assets/游戏动态/游戏动态子页背景.jpg');
  /* min-height: 42.7rem; */
  width: 100%;
  background-repeat: no-repeat;
}
</style>
