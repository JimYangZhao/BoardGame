<template>
  <div>
    <div class="nav MatchNav background-matchnav">
      <ul class="GameNavHeight">
        <li>
          <!-- Logo -->
          <a href="/" style="display:flex"><img :src="logoSrc" alt="logo"/></a>
        </li>
        <li style="float:right;height:100px;">
          <!-- 按钮 -->
          <van-button round size="large" style="white-space: nowrap;" class="goDownload">立即下载</van-button>
          <!-- 菜单 -->
          <van-cell @click="showPopup" :get-container="getContainer" class="menuBtn"><span class="d-flex white">三</span></van-cell>
          <van-popup v-model="show" class="popupMenu">
            <!-- 菜单内容 -->
            <ul id="navList">
              <li v-for="item in nav" :key="item.id">
                <router-link :to="{ name: item.name }" class="sun_active"
                  ><p>{{ item.name }}</p>
                  <hr style="width: 90%;"
                /></router-link>
              </li>
            </ul>
          </van-popup>
          <!-- <van-dropdown-menu>
            <div v-for="item in option1" :key="item.id">
            <van-dropdown-item v-model="value1" :options="option1" />
            </div>
          </van-dropdown-menu> -->
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
import { Button } from 'vant';

Vue.use(Button);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

Vue.use(Vant);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Popup);

export default {
  props: ['logoSrc'],
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
      // logoSrc: require('../assets/赛事/抬头2.png'),
      // DropDown Menu
      value1: 0,
      value2: 'a',
      option1: [
        { text: '首页', value: 0, id: 0, name: '首页' },
        { text: '关于吉祥', value: 1, id: 1, name: '关于吉祥' },
        { text: '游戏动态', value: 2, id: 2, name: '游戏动态' },
        { text: '吉祥赛事', value: 3, id: 3, name: '吉祥赛事' },
        { text: '活动商品', value: 4, id: 4, name: '游戏产品' },
        { text: '活动商品', value: 5, id: 5, name: '联系我们' },
      ],
    };
  },
};
</script>

<style scoped>
.van-cell__value {
  display: block;
}
.background-matchnav {
  background: #262625;
}
ol {
  margin: 15px 0;
}
.menuBtn {
  font-size: 10px;
  width: 0.8rem;
  height: 0.7rem;
  background-color: transparent;
  border: 1px solid gray;
  margin-left: 15px;
  color: white;
}
.van-cell::after {
  border-bottom: 0;
}
.white {
  color: white;
  justify-content: center;
  align-content: center;
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
