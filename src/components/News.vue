<template>
  <div class="news">
    <div class="d-flex container">
      <p class="leftTitle">{{ leftTitle }}</p>
      <van-notice-bar class="title" scrollable :text="title" />
    </div>
    <div class="d-flex flex-vertical">
      <ul v-for="item in news" :key="item.id" style="width:90%;">
        <ol style="width: 90%; margin: auto">
          <hr />
          <p>{{ item.content }}</p>
          <hr />
        </ol>
      </ul>
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

export default {
  props: {
    title: String,
    leftTitle: String,
  },
  data() {
    return {
      activeName: 'a',
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
};
</script>

<style scoped>
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
  background: #ce182e;
  height: 60px;
  color: white;
}
.van-notice-bar {
  flex: 80%;
}
</style>
