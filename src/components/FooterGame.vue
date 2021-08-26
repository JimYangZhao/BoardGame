<template>
  <div class="footer">
    <!-- 上半部分 -->
    <div class="d-flex flex-v p-3">
      <!-- <img :src="urlImage" alt="urlImage" class="mx-ht" /> -->
      <van-button type="default" class="btn-footer">关于吉祥</van-button>
    </div>
    <!-- 下半部分 -->
    <div class="dark-footer">
      <div class="d-flex container">
        <div v-for="item in boxInfo" :key="item.id">
          <img :src="item.src" alt="image" />
        </div>
      </div>
      <hr />
      <div class="container">
        <span style="color: white;"
          ><a href="#">关于吉祥 | </a><a href="#">商务合作 | </a> <a href="#">家长监护<br /></a><a href="#">用户协议 | </a><a href="#">隐私政策</a></span
        >
        <p style="color: white;">{{ contents1 }}</p>
        <p style="color:#dfe098;">{{ contents2 }}</p>
        <p style="color:white;">{{ copyright }}</p>
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
      // urlImage: require('../assets/尾部/吉祥创造更多快乐.png'),
      boxInfo: [
        {
          id: 0,
          src: require('../assets/首页/公众号按钮.png'),
        },
        {
          id: 1,
          src: require('../assets/首页/视频号按钮.png'),
        },
        {
          id: 2,
          src: require('../assets/首页/抖音按钮.png'),
        },
      ],
    };
  },
};
</script>

<style scoped>
p {
  font-size: 6px;
}
span > a {
  font-size: 12px;
}
label,
.title {
  display: flex;
  transform: translateY(2.5vh);
  background: #312826;
  padding: 0 0.13333rem;
  white-space: nowrap;
  margin: 15px;
}
.box > img {
  height: 1.3rem;
  width: auto;
  margin: 10px 0;
}
.btn-footer {
  color: white;
  background-color: #ce182e;
  border-color: transparent;
  border-radius: 20px;
  font-size: 10px;
  padding: 15px 25px;
  margin-top: 17px;
}

.box {
  border: 2px white solid;
}
.dark-footer {
  background: transparent;
  width: 100%;
}
.footer {
  background: transparent;
  color: white;
  margin-top: 1.5rem;
}
.text-small-footer {
  font-size: 7px;
}
span > a {
  color: white;
}
</style>
