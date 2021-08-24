<template>
  <div class="联系我们">
    <Header menu="菜单按钮" />
    <div class="d-flex flex-v">
      <h1>{{ title }}</h1>
      <p style="margin-top:0px;">{{ subtitle }}</p>
      <div class="map-conf overflow border-r">
        <img :src="images" alt="img" class="mx-ht100" />
      </div>

      <div v-for="item in contents" :key="item.id" class="d-flex flex-v p-3 border">
        <h3>{{ item.title }}</h3>
        <p>{{ item.info }}</p>
        <hr class="red-short-line" />
      </div>
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
      title: '联系我们',
      subtitle: 'CONTACT US',
      images: 'https://img01.yzcdn.cn/vant/apple-2.jpg',
      contents: [
        {
          id: 0,
          title: '游戏问题咨询',
          info: '客服热线：4008-777-868',
        },
        {
          id: 1,
          title: '商务合作关系',
          info: '市场部：weijian@jixiang.cn',
        },
        {
          id: 2,
          title: '人力资源联系',
          info: '人力资源部：lizhuo@jixiang.cn',
        },
      ],
    };
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.overflow {
  overflow: hidden;
}
.border-r {
  border-radius: 6px;
}
.map-conf {
  width: 90%;
  height: 150px;
  margin: 10px 0;
}
.border {
  border: 1px lightgray solid;
  width: 90%;
  height: 60px;
  margin: 10px 0;
}
.red-short-line {
  border: #ce182e 2px solid;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100px;
}
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
h3 {
  margin: 5px 0;
}
</style>
