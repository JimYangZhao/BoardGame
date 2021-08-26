<template>
  <div class="video">
    <div class="container">
      <a href="javascript:playVideo('https://jxcloudimg.oss-cn-beijing.aliyuncs.com/video/6qi.mp4')">
        <img src="../assets/赛事/视频边框.png" alt="边框" class="cover" />
        <img width="100%" height="100%" src="../assets/赛事/赛事回顾视频.png" /> <img width="auto" src="../assets/赛事/播放.png" class="play" />
      </a>
    </div>
    <!-- 差一个视频边框明天加上 -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cover {
  position: absolute;
  transform: translateY(0.1rem);
}
.container {
  width: 90%;
  padding: 5px 0;
}
.play {
  position: absolute;
  left: 43%;
  transform: translateY(1.6rem);
}
</style>
