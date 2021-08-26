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
          <img :src="item.src" alt="image" />
        </div>
      </div>
      <hr />
      <div class="container">
        <span style="color: white; font-size:30px;"
          ><a href="#">关于吉祥 | </a><a href="#">商务合作 | </a> <a href="#">家长监护<br /></a><a href="#">用户协议 | </a><a href="#">隐私政策</a></span
        >
        <p style="color: white; font-size:20px;">
          控制不良游戏 拒绝盗版游戏 注意自我保护 谨防上当受骗<br />
          适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活<br />
          本平台游戏仅适合18岁以上人群<br />
        </p>

        <p style="color:#dfe098; font-size:20px;">
          吉网文[2019]2187・005号<br />
          ICP证：吉B24-20100052 吉ICP备13001708号口 文网游备字[2017]<br />
          M-CSG1960号 | 吉公网安备 22010202000453号<br />
          吉祥麻将：978-7-7979-2233-3<br />新广出审[2016]3620号
        </p>

        <p style="color:white; font-size:20px;">
          2021吉祥游戏版权所有|吉林省鑫泽网络技术有限公司I<br />
          地址：吉林省长春市二道区临河街七条东盛街道办事处306-1室<br />
          客服热线：4008-777-868
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vant from 'vant';
import Vue from 'vue';
Vue.use(Vant);

export default {
  props: {},
  data() {
    return {
      urlImage: require('../assets/尾部/吉祥创造更多快乐.png'),
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
  white-space: nowrap;
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
</style>
