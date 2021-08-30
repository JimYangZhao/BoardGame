<template>
  <div class="gameEntry" id="gameEntries">
    <div class="d-flex center">
      <div class="space"></div>
      <div class="title">
        <h2>{{ title }}</h2>
      </div>
      <div class="contents">
        <p>{{ contents }}</p>
      </div>
      <div class="btn">
        <van-button round size="normal" style="white-space: nowrap;" class="goDownload" @click="showPopup">{{ button }}</van-button>
        <van-popup v-model="show" closeable close-icon-position="top-right">
          <img :src="popupContents" height="700px" width="auto" alt="popupContents" />
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Popup } from 'vant';

Vue.use(Popup);
export default {
  props: ['title', 'contents', 'popupContents'],
  data() {
    return {
      button: '查看详情',
      show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
.van-popup {
  background-color: transparent;
  height: 10.22rem;
  display: flex;
  align-items: flex-end;
}

.textBigger {
  font-size: 0.5rem;
}
.van-button__text {
  font-size: 0.25rem;
  font-weight: 900;
}
h2 {
  margin: 0px;
}
p {
  margin: 0px;
}
.title {
  color: #f9d6b9;
}
.contents {
  color: #f9d6b9;
}
#gameEntries {
  background-image: url('../assets/赛事/赛事条幅.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  padding: 0.5rem 0;
}
.space {
  flex: 5%;
  width: 5%;
}
.title {
  flex: 25%;
  width: 25%;
}
.contents {
  flex: 45%;
  width: 45%;
}
.btn {
  flex: 30%;
  width: 30%;
}
</style>
