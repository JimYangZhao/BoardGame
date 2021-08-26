<template>
  <div class="游戏动态">
    <Header menu="菜单按钮" />
    <p>页面12</p>
    <Footer class="position-bottom" />
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  props: {
    // title: String,
  },
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped></style>
