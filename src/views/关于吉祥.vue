<template>
  <div class="关于吉祥">
    <Header menu="菜单按钮" />
    <img src="../assets/关于吉祥/鑫泽网络.png" alt="鑫泽网络" />
    <div class="d-flex flex-v">
      <div class="p-3"><img src="../assets/公司介绍/公司介绍文字.png" alt="公司介绍文字" /></div>
      <img :src="images" alt="img" />
      <div class="container">
        <div v-for="item in info" :key="item.id" class="mb-3">
          <div class="pro-text d-flex flex-v">
            <span>{{ item.content }}</span>
          </div>
        </div>
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
  data() {
    return {
      value: '',
      info: [],
      images: require('../assets/公司介绍/公司介绍图片.png'),
      contents:
        '\t吉林省鑫泽网络技术有限公司【以下简称：鑫泽网络】成立于2009年11月，注册资本1000万元。自创立至今，鑫泽网络一直专注于棋牌游戏的研发与运营，不断的将传统棋牌文化原汁原味的通过互联网呈现，力争带给用户最完美的线上体验。\n\t在10余年的发展历程中，鑫泽网络不断抓住机遇，创新发展。在2013年5月，鑫泽网络首款移动端游戏“长春麻将”上线，在当时，这标志着吉林省内首款移动游戏产品的正式上线。正是基于敏锐的市场洞察力、不断创新的企业精神和踏实苦干的企业作风，让鑫泽网络稳步向前，不断发展，现已成为中国领先的研发、运营、发行一体化游戏公司。现已获得中国信息安全认证中心的“ISO安全体系认证”，并被吉林省科学技术厅评为“高新技术企业”。\n\t鑫泽网络旗下游戏品牌——《吉祥棋牌》注册用户超千万，日活跃用户超百万，具有较高品牌知名度和美誉度，市场份额在国内也位居前列。并且，鑫泽网络持续在手机端、H5、应用小程序的棋牌和休闲游戏中投入研发力量，在移动端游戏全方面持续发力，以优秀的游戏产品、强大的研发实力保持在游戏行业领先的地位。\n\t用游戏，分享更多快乐——是鑫泽人的使命。鑫泽人用诚信、学习、谦逊、敏锐、创新的价值观，吸纳各领域的智慧，不断研发和升级产品，为用户提供体验更好的产品和服务。让用户体验快乐的游戏过程，并感知我们的诚信，是鑫泽研发和运营人士的共识，不断学习，不断创新，脚踏实地，厚积薄发，鑫泽人带着信念稳步前行。',
    };
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    axios.get('http://10.10.3.198:9081/api/material/list?categoryTag=description').then((response) => {
      this.info = response.data.data.data;
    });
  },
};
</script>

<style scoped>
h1 {
  color: #ce182e;
  margin-bottom: 5px;
}
p {
  white-space: pre-wrap;
  font-size: 0.2rem;
  text-align: left;
  line-height: 0.8rem;
}
</style>
