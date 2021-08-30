<template>
  <div class="news">
    <div class="d-flex container ht-2">
      <!-- <p class="leftTitle">{{ leftTitle }}</p> -->
      <div v-for="item in info.data.data.data" :key="item.id" class="d-flex">
        <p class="leftTitle">{{ item.title }}</p>
        <van-notice-bar class="title" scrollable :text="item.description" />
      </div>
    </div>
    <div class="d-flex flex-vertical">
      <ul v-for="item in info.data.data.data" :key="item.id" style="width:90%;">
        <!-- li v-for="(i, index) in data" v-if="index < 2" v-text="i" -->
        <ol style="width: 90%; margin: auto">
          <hr />
          <p>{{ item.title }}</p>
          <hr />
        </ol>
      </ul>
    </div>
    <div class="container p-3">
      <van-button class="news-bottom-text" size="large">查看更多</van-button>
    </div>
  </div>
</template>

<script>
import Vant from 'vant';
import Vue from 'vue';
import { NoticeBar } from 'vant';
import '../css/home.css';

Vue.use(NoticeBar);
Vue.use(Vant);
import axios from 'axios';

export default {
  props: {
    title: String,
    leftTitle: String,
  },
  data() {
    return {
      activeName: 'a',
      info: null,
      news: [
        {
          id: 0,
          content: 'Hello world',
        },
        {
          id: 1,
          content: 'Hello world2',
        },
        {
          id: 2,
          content: 'Hello world3',
        },
      ],
    };
  },

  mounted() {
    axios.get('http://10.10.3.198:9081/api/material/list?categoryTag=popular').then((response) => (this.info = response));
  },
};
</script>

<style scoped>
.ht-2 {
  height: 2rem;
}
p {
  text-align: left;
}
.flex-vertical {
  flex-direction: column;
}
.container {
  width: 90%;
}
.title {
  margin: 30px 0;
}
.van-notice-bar {
  height: 60px;
  font-size: 20px;
}
.leftTitle {
  display: flex;
  align-items: center;
  flex: 20%;
  justify-content: center;
  background-image: url('../assets/首页/推荐.png');
  height: 60px;
  color: white;
  z-index: 999;
  overflow: visible;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 15px;
}
.van-notice-bar {
  flex: 80%;
}
.news-bottom-text {
  color: #9f9fa3;
  background: #f1f2f7;
  font-size: 15px;
}
</style>
