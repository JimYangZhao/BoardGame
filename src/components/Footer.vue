<template>
  <div class="footer">
    <!-- 上半部分 -->
    <div class="d-flex flex-v p-3">
      <img :src="urlImage" alt="urlImage" class="mx-ht" />
      <van-button type="default" class="btn-footer">关于吉祥</van-button>
    </div>
    <!-- 下半部分 -->
    <div class="dark-footer">
      <div class="d-flex container">
        <div v-for="item in boxInfo" :key="item.id">
          <label class="title">{{ item.title }}</label>
          <div class="box">
            <img :src="item.src" alt="image" />
          </div>
          <p style="color: white;">{{ item.foot }}</p>
        </div>
      </div>
      <hr />
      <div class="container">
        <span style="color: white;font-size:28px;"
          ><a href="#">关于吉祥 | </a><a href="#">商务合作 | </a> <a href="#">家长监护<br /></a><a href="#">用户协议 | </a><a href="#">隐私政策</a></span
        >
        <p style="color: white;font-size:10px;">{{ contents1 }}</p>
        <p style="color:#dfe098;font-size:10px;">{{ contents2 }}</p>
        <p style="color:white;font-size:10px;">{{ copyright }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vant from 'vant';
import Vue from 'vue';
Vue.use(Vant);

export default {
  props: {
    contents1: String,
    contents2: String,
    copyright: String,
  },
  data() {
    return {
      urlImage: 'https://jixiang.cn/img/jx-logo.png',
      boxInfo: [
        {
          id: 0,
          title: '微信公众号',
          src: require('../assets/公众号.png'),
          foot: '点击图标进入',
        },
        {
          id: 1,
          title: '微信视频号',
          src: require('../assets/视频号.png'),
          foot: '点击图标进入',
        },
        {
          id: 2,
          title: '官方抖音号',
          src: require('../assets/抖音.png'),
          foot: '点击图标进入',
        },
      ],
    };
  },
};
</script>

<style scoped>
.btn-footer {
  color: white;
  background-color: #ce182e;
  border-color: transparent;
  border-radius: 20px;
  font-size: 10px;
  padding: 5px 10px;
  margin-top: 17px;
}

.box {
  border: 2px white solid;
}
.dark-footer {
  background: #312826;
  width: 100%;
}
.footer {
  background: #3e3434;
  color: white;
}
.text-small-footer {
  font-size: 7px;
}
span > a {
  color: white;
}
.box > img {
  height: 60px;
  width: auto;
}
</style>
