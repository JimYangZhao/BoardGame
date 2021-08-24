<template>
  <div class="游戏产品">
    <Header menu="菜单按钮" />
    <p>页面12</p>
    <Footer
      contents1="腾讯公司版权所有COPYRIGHT @1998 - 2020 TENCENT ALL RIGHTS RESERVED 本网络游戏适合17+岁的用户使用；为了您的健康，请合理控制游戏时间。 工商网兼电子问文(2017)6138-1464号！ (总)"
      contents2="腾讯公司"
      copyright="Helloworld"
      class="position-bottom"
    />
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
