<template>
  <div class="gameProduct">
    <div class="background">
      <Header menu="菜单按钮" />
      <div class="contents">
        <!-- <div v-for="name in info" class="name" :key="name.id"> -->
        <div class="pt-3">
          <div v-for="item in info.data.data" :key="item.id" class="mb-3">
            <a :href="item.ios_url" class="d-flex" style="color: inherit;">
              <div class="pro-img">
                <img :src="item.thumb" alt="thumb" height="150" />
              </div>
              <div class="pro-text d-flex flex-v">
                <h3>{{ item.name }}</h3>
                <p>{{ item.tag }}</p>
              </div>
              <div class="pro-right-img">
                <img src="../assets/游戏产品/箭头_arrow591.png" alt="箭头_arrow591" />
              </div>
            </a>
          </div>
        </div>

        <!-- </div> -->
      </div>

      <Footer />
    </div>
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
      info: null,
    };
  },
  mounted() {
    axios.get('http://10.10.3.198:9081/api/product/list').then((response) => (this.info = response));
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.pro-text {
  margin-left: 0.4rem;
}
.contents {
  min-height: 5rem;
  width: 90%;
  margin: auto;
}
.pt-3 {
  padding-top: 1.35rem;
}
.background {
  background-image: url('../assets/游戏产品/游戏产品.jpg');
}
.mb-3 {
  margin-bottom: 0.4rem;
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
