<template>
  <div class="gameEntry">
    <div class="d-flex">
      <div class="space"></div>
      <div class="title">
        <h2>{{ title }}</h2>
      </div>
      <div class="contents">
        <p>{{ contents }}</p>
      </div>
      <div class="btn">
        <button>{{ button }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'contents'],
  data() {
    return {
      button: '查看详情',
    };
  },
};
</script>

<style scoped>
.gameEntry {
  background: red;
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
