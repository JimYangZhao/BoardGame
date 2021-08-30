<template>
  <div class="gameActivityMain">
    <div class="background">
      <Header menu="菜单按钮" />
      <img src="../assets/游戏动态/最新动态.png" alt="最新动态" />
      <div class="contents">
        <van-pull-refresh v-model="refreshing">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="item in info" :key="item.id" class="mb-3">
              <div class="flex-v w-100">
                <router-link :to="{ path: '/news/GameActivity/' + item.id }" class="d-flex ml-w-100 color-position">
                  <div class="pro-img">
                    <img src="../assets/游戏动态/通知.png" alt="通知" height="50" />
                  </div>
                  <div class="pro-text d-flex flex-v">
                    <h2>{{ item.title }}</h2>
                    <p>{{ item.create_at }}</p>
                  </div>
                </router-link>

                <hr style="margin-top: 0.3rem;" />
              </div>
            </van-cell>
          </van-list>
          <button @click="onRefresh" class="loadMore">加载更多</button>
        </van-pull-refresh>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
// import GameActivity from '../subdomain/GameActivity';

import axios from 'axios';
export default {
  props: {
    // title: String,
  },

  data() {
    return {
      info: [],
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  mounted() {
    axios.get('http://10.10.3.198:9081/api/material/list?categoryTag=news').then((response) => {
      this.info = response.data.data.data;
    });
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 4) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
};
</script>

<style scoped>
.color-position {
  color: inherit;
  align-items: center;
  padding-left: 0.5rem;
}
.loadMore {
  padding: 0.1rem 1.2rem;
  margin: 1rem;
}
.ml-w-100 {
  margin-left: 0;
  width: 100%;
}
.pro-text {
  margin-left: 0.4rem;
  align-items: left !important;
}

.contents {
  min-height: 10rem;
  /* width: 90%; */
  margin: auto;
}
.mt-3 {
  padding-top: 4.6rem;
}
.background {
  background-color: #f2f0f1;
}
.mb-3 {
  margin-bottom: 0.15rem;
  background: transparent;
}
p {
  margin: 2px 0;
  width: 100%;
  text-align: left;
}
h3 {
  margin: 2px 0;
  width: 100%;
  text-align: left;
}
.van-cell__value {
  display: flex;
}

button {
  font-size: 1em;
}
</style>
