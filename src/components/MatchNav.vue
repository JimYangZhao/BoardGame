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
          <van-button size="large" style="white-space: nowrap; border-radius: 5px;" class="goDownload">立即下载</van-button>
          <!-- 菜单 -->
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" class="textBigger">
              <ul id="navList">
                <div class="white-space"></div>
                <li v-for="item in nav" :key="item.id" class="border-line">
                  <router-link :to="{ name: item.name }" class="sun_active">
                    <p>{{ item.name }}</p>
                  </router-link>
                </li>
              </ul>
            </van-dropdown-item>
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
      ],
      chose: 0,
      value1: 0,
      value2: 'a',
    };
  },
};
</script>

<style scoped>
.border-line {
  border: 1px solid rgb(0 0 0 / 10%);
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
  padding: 0.3rem;
}
#navList {
  display: flex;
  flex-direction: column;
}
.textBigger {
  font-size: 0.5rem;
}
.sun_active {
  color: black;
}
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
/* .van-dropdown-menu__title::after {
  position: relative;
  font-size: 0.3rem;
  margin-top: 0;
  top: unset;
  right: unset;
  -webkit-transorm: unset;
  transform: unset;
  opacity: 1;
  content: '三';
  color: white;
  border: 0;
  font-weight: 900;
}
.van-dropdown-menu__bar {
  background-color: transparent;
  border: 1px solid white;
  width: 0.7rem;
  height: 0.6rem;
  margin-left: 0.3rem;
} */
</style>
