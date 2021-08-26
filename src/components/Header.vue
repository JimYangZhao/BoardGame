<template>
  <div>
    <div class="nav background-nav">
      <ul class="GameNavHeight">
        <li>
          <a href="/"><img v-bind:src="logoSrc" alt="logo"/></a>
        </li>
        <li style="float:right;height:100px;">
          <van-cell @click="showPopup" :get-container="getContainer" class="menuBtn"><span class="d-flex white">三</span> </van-cell>
          <van-popup v-model="show" class="popupMenu">
            <ul id="navList">
              <li v-for="item in nav" :key="item.id">
                <router-link :to="{ name: item.name }" class="sun_active">
                  <p>{{ item.name }}</p>
                  <hr style="width: 90%;" />
                </router-link>
              </li>
            </ul>
          </van-popup>
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" class="textBigger" />
          </van-dropdown-menu>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vant from 'vant';
import Vue from 'vue';
import { Popup } from 'vant';
import { NavBar } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu);
Vue.use(DropdownItem);

Vue.use(Vant);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Popup);

export default {
  props: ['title', 'menu'],
  computed: {
    username() {
      return this.$route.params.username;
    },
  },

  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    showPopup() {
      this.show = true;
    },
    getContainer() {
      return document.querySelector('.my-container');
    },
  },
  data() {
    return {
      show: false,
      noMore: true,
      nav: [
        { id: 0, name: '首页' },
        { id: 1, name: '关于吉祥' },
        { id: 2, name: '游戏动态' },
        { id: 3, name: '吉祥赛事' },
        { id: 4, name: '游戏产品' },
        { id: 5, name: '联系我们' },
        { id: 6, name: '斗地主' },
        { id: 7, name: '麻将' },
        { id: 8, name: '四川麻将' },
      ],
      chose: 0,
      logoSrc: 'https://jixiang.cn/img/logo.png',
      // DropDown Menu
      value1: 0,
      value2: 'a',
      option1: [
        { text: '首页', value: 0, id: 0, name: '首页' },
        { text: '关于吉祥', value: 1, id: 1, name: '关于吉祥' },
        { text: '游戏动态', value: 2, id: 2, name: '游戏动态' },
        { text: '吉祥赛事', value: 3, id: 3, name: '吉祥赛事' },
        { text: '活动商品', value: 4, id: 4, name: '游戏产品' },
        { text: '联系我们', value: 5, id: 5, name: '联系我们' },
        { text: '斗地主', value: 6, id: 6, name: '斗地主' },
        { text: '麻将', value: 7, id: 7, name: '麻将' },
        { text: '四川麻将', value: 8, id: 8, name: '四川麻将' },
      ],
    };
  },
};
</script>

<style scoped>
.textBigger {
  font-size: 1rem;
}
.white {
  color: black;
  justify-content: center;
  align-content: center;
}
.background-nav {
  background: #f5f0eae1;
}
ol {
  margin: 15px 0;
}
.menuBtn {
  padding: 10px 7px;
  font-size: 10px;
}
p {
  margin: 3px 0;
}
.nav > ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav > ul > li {
  border-right: 0;
}
</style>
