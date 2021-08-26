<template>
  <div class="video">
    <div class="container">
      <a href="javascript:playVideo('https://jxcloudimg.oss-cn-beijing.aliyuncs.com/video/6qi.mp4')"
        ><img width="100%" height="100%" src="../assets/赛事/赛事回顾视频.png"/> <img width="50" src="../assets/赛事/视频号按钮.png" class="play"
      /></a>
    </div>
    <!-- 差一个视频边框明天加上 -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 90%;
  padding: 5px 0;
}
.play {
  position: absolute;
  left: 46%;
  transform: translateY(1.8rem);
}
</style>
