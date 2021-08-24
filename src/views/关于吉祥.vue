<template>
  <div class="关于吉祥">
    <Header menu="菜单按钮" />
    <div class="d-flex flex-v">
      <h1>{{ title }}</h1>
      <p style="margin-top:0px;">{{ subtitle }}</p>
      <img :src="images" alt="img" class="mx-ht100" />
      <p>{{ contents }}</p>
    </div>
    <Footer
      contents1="腾讯公司版权所有COPYRIGHT @1998 - 2020 TENCENT ALL RIGHTS RESERVED 本网络游戏适合17+岁的用户使用；为了您的健康，请合理控制游戏时间。 工商网兼电子问文(2017)6138-1464号！ (总)"
      contents2="腾讯公司"
      copyright="Helloworld"
    />
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
  data() {
    return {
      value: '',
      title: '公司介绍',
      subtitle: 'COMPANY INFORMATION',
      images: 'https://img01.yzcdn.cn/vant/apple-2.jpg',
      contents: 'abcd',
    };
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.btn_position {
  position: absolute;
  bottom: 10%;
  left: 50%;
  z-index: 999;
  margin-left: -70px;
  color: white;
  background-color: red;
  border: 0;
  border-radius: 20px;
  font-size: 30px;
  padding: 25px 20px;
}
h1 {
  color: #ce182e;
  margin-bottom: 5px;
}
</style>
