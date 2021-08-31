<template>
  <div class="gameProduct">
    <!-- <div class="background"> -->
    <Header menu="菜单按钮" />
    <img src="../assets/游戏产品/游戏产品banner.png" alt="游戏产品banner" />
    <div class="contents">
      <!-- <div v-for="name in info" class="name" :key="name.id"> -->
      <div class="pt-3">
        <div v-for="item in info" :key="item.id" class="mb-3">
          <a :href="item.product_url" class="d-flex" style="color: inherit;">
            <div class="pro-img">
              <img :src="item.thumb" alt="thumb" height="150" />
            </div>
            <div class="pro-text d-flex flex-v">
              <h3>{{ item.name }}</h3>
              <p>{{ item.tag }}</p>
            </div>
            <div class="pro-right-img center mr-0">
              <img src="../assets/游戏产品/箭头_arrow591.png" alt="箭头_arrow591" />
            </div>
          </a>
          <hr />
        </div>
        <!-- </div> -->
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
export default {
  props: {
    // title: String,
  },
  data() {
    return {
      info: [],
    };
  },
  mounted() {
    axios.get('http://10.10.3.198:9081/api/product/list').then((response) => {
      this.info = response.data.data;
    });
  },
  components: {
    Header,
    Footer,
  },
  // methods: {
  //   downApp() {
  //     let ua = navigator.userAgent.toLowerCase();
  //     //android终端
  //     let isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1; //ios终端
  //     let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  //     if (isWeixinBrowser()) {
  //       this.$router.push({
  //         path: '/product',
  //       });
  //     } else {
  //       if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
  //         //ios
  //         this.ShowPop = !this.ShowPop;
  //         this.ShowDark = !this.ShowDark;
  //       } else if (/(Android)/i.test(navigator.userAgent)) {
  //         //android
  //         window.location = 'http://www.xyfan.top/app.apk';
  //       }
  //     }

  //     function isWeixinBrowser() {
  //       return /micromessenger/.test(ua) ? true : false;
  //     }
  //   },
  // },
};
</script>

<style scoped>
.mr-0 {
  margin-right: 0;
}
.pro-text {
  margin-left: 0.4rem;
}
.contents {
  min-height: 5rem;
  width: 90%;
  margin: auto;
  /* margin-top: 4.2rem; */
}
.pt-3 {
  padding-top: 0.4rem;
}
.background {
  background-image: url('../assets/游戏产品/游戏产品背景.png');
}
.mb-3 {
  margin-bottom: 0.35rem;
}
p {
  margin: 2px 0;
  width: 100%;
  text-align: left;
}
h3 {
  margin: 2px 0;
  width: 100%;
  text-align: left;
}
</style>
