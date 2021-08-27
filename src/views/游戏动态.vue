<template>
  <div class="游戏动态">
    <div class="background">
      <Header menu="菜单按钮" />
      <div class="contents">
        <!-- <div v-for="name in info" class="name" :key="name.id"> -->
        <div class="pt-3">
          <div v-for="item in info.data.data.data" :key="item.id" class="mb-3">
            <a :href="item.ios_url" class="d-flex" style="color: inherit;">
              <div class="pro-img">
                <img src="../assets/游戏动态/通知.png" alt="通知" height="50" />
              </div>
              <div class="pro-text d-flex flex-v">
                <h3>{{ item.title }}</h3>
                <p>{{ item.create_at }}</p>
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
    axios.get('http://10.10.3.198:9081/api/material/list?categoryTag=news').then((response) => (this.info = response));
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
  padding-top: 0.3rem;
}
.background {
  background-image: url('../assets/游戏动态/游戏动态.jpg');
}
.mb-3 {
  margin-bottom: 0.5rem;
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
