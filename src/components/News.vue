<template>
  <div class="news">
    <!-- <div class="d-flex container ht-2"></div> -->
    <!-- <p class="leftTitle">{{ leftTitle }}</p> -->
    <div class="container bot-free">
      <div v-for="item in info" :key="item.id" class="d-flex w-100 align-center">
        <p class="leftTitle">{{ item.title }}</p>
        <van-notice-bar class="title" :text="item.description" />
      </div>
    </div>

    <div class="d-flex flex-vertical center">
      <hr style="width: 81%; margin: auto" />
      <ul v-for="item in comments" :key="item.id" style="width:90%;">
        <!-- li v-for="(i, index) in data" v-if="index < 2" v-text="i" -->
        <ol class="news-contents">
          <p>{{ item.description }}</p>
          <hr />
        </ol>
      </ul>
    </div>
    <div class="container p-3">
      <router-link to="/news"><van-button class="news-bottom-text" size="large">查看更多</van-button></router-link>
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
      info: [],
      comments: [],
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
    axios.get('http://10.10.3.198:9081/api/material/list?categoryTag=popular').then((response) => {
      this.info = response.data.data.data;
    });
    axios.get('http://10.10.3.198:9081/api/material/list?categoryTag=news').then((response) => {
      this.comments = response.data.data.data;
    });
  },
};
</script>

<style scoped>
.news-contents {
  width: 90%;
  margin: auto;
  font-size: 14px;
}
.news-contents:first-child {
  border-top: 1px solid #f1f2f6;
}

.leftTitle {
  display: flex;
  align-items: center;
  flex: 20%;
  justify-content: center;
  background-image: url('../assets/首页/推荐.png');
  height: 1rem;
  color: white;
  overflow: visible;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  background-color: #f1f2f7;
  font-size: 15px;
}
.background-grey {
  background: #f1f2f6;
  height: 1rem;
}
.ht-2 {
  height: 0rem;
}

p {
  text-align: left;
}
.flex-vertical {
  flex-direction: column;
}
.container {
  width: 81%;
}
.title {
  margin: 10px 0;
}
.van-notice-bar {
  height: 1rem;
  font-size: 0.5rem;
  background-color: #f1f2f7;
  color: black;
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
