<template>
  <div class="Tournament p-3">
    <!-- <img src="../assets/首页/吉祥赛事.png" alt="吉祥赛事" /> -->
    <van-grid class="grid-container">
      <div v-for="item in info" :key="item.id" class="item">
        <van-grid-item>
          <img width="100%" :src="item" alt="thumb_img" @click="showPopup" />
          <van-popup v-model="show">
            <video width="700" controls>
              <source type="video/mp4" :src="item.url" />
              <!-- <source type="video/mp4" src="https://jxcloudimg.oss-cn-beijing.aliyuncs.com/video/di2qi.mp4" /> -->
            </video>
          </van-popup>
        </van-grid-item>
      </div>
    </van-grid>

    <router-link to="/match"
      ><button class="btn-red">{{ bottom_button }}</button></router-link
    >
  </div>
</template>

<script>
import Vant from 'vant';
import Vue from 'vue';
import { Grid, GridItem } from 'vant';
import { Button } from 'vant';
import axios from 'axios';
import { Popup } from 'vant';

Vue.use(Popup);
Vue.use(Button);
Vue.use(Vant);
Vue.use(Grid);
Vue.use(GridItem);
export default {
  props: {
    bottom_button: String,
    title: String,
  },
  mounted() {
    axios.get('http://10.10.3.198:9081/api/material/list?categoryTag=match').then((response) => {
      // this.info = response.data.data.data.slice(0, 4);
      this.info = response.data.data.data.map((item) => {
        return item.thumb;
      });
    });
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
  data() {
    return {
      noMore: true,
      show: false,
      info: [],
    };
  },
};
</script>

<style scoped>
.grid-container > div {
  padding: 0;
}
.van-grid-item__content {
  padding: 0;
}
/* .grid-container {
  grid-gap: 0;
} */
.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu menu menu main main main'
    'menu menu menu footer footer footer';
  grid-gap: 10px;
  padding: 10px;
}
.item:nth-child(n + 1) {
  grid-area: header;
}
.item:nth-child(n + 2) {
  grid-area: menu;
}
.item:nth-child(3) {
  grid-area: main;
}
.item:nth-child(4) {
  grid-area: footer;
}
</style>
