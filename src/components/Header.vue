<template>
  <div>
    <div class="nav background-nav">
      <ul class="GameNavHeight">
        <li>
          <a href="/"><img v-bind:src="logoSrc" alt="logo"/></a>
        </li>
        <li style="float:right;height:100px; margin-right: 0.7rem;">
          <!-- 后期准备加上Menu Icon转换，用这个click closeIcon -->
          <van-dropdown-menu id="general" @click="closeIcon">
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
          <!-- <div class="menu-icon-wrapper open" @click="toggle(this)">
            <div class="menu-icon-first"></div>
            <div class="menu-icon-second"></div>
            <div class="menu-icon-thrid"></div>
          </div> -->
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
      ],
      chose: 0,
      logoSrc: 'https://jixiang.cn/img/logo.png',
      value1: 'sdfkjsfdlkjf',
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
.white-space {
  height: 0.2rem;
}
#navList {
  display: flex;
  flex-direction: column;
}
.textBigger {
  font-size: 0.5rem;
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
.sun_active {
  color: black;
}
.van-dropdown-menu__item {
  width: 100%;
}
.van-dropdown-menu {
  width: 0.8rem;
}

/* 新添加 */

.menu-icon-wrapper {
  display: inline-block;
  cursor: pointer;
}

.menu-icon-first,
.menu-icon-second,
.menu-icon-thrid {
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
  transition: 0.4s;
}

/* 旋转第一条横线 */
.close .menu-icon-first {
  -webkit-transform: rotate(-45deg) translate(-8px, 7px);
  transform: rotate(-45deg) translate(-8px, 7px);
}

/* 隐藏第二条横线 */
.close .menu-icon-second {
  opacity: 0;
}

/* 旋转第三条横线 */
.close .menu-icon-thrid {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>
