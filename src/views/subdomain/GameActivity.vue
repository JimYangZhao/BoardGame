<template>
  <div class="gameActivity">
    <Header menu="菜单按钮" />
    <img src="../../assets/游戏动态/最新动态.png" alt="最新动态" />
    <div class="contents" style="min-height: 5rem; color: black;">
      <div class="mt-1">
        <router-link to="../">返回</router-link>
        <div class="d-flex container">
          <span>{{ info.content }}</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';

export default {
  props: {},
  data() {
    return {
      info: [],
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      contents: '',
    };
  },
  mounted() {
    axios.get('http://10.10.3.198:9081/api/material/detail/' + this.$route.params.id).then((response) => {
      this.info = response.data.data;
    });
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.mt-1 {
  margin-top: 1rem;
}
</style>
