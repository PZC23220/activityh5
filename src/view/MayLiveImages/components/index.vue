<template>
  <div class="index">
      <h3 class="bigTitle">{{banner.bigTitle1}}</h3>
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/liveImages/201805live/1.jpg" class="banner">
      <p class="banner-title">{{banner.title1}}</p>
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/liveImages/201805live/2.jpg" class="banner">
      <p class="banner-title">{{banner.title2}}</p>
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/liveImages/201805live/3.jpg" class="banner">
      <p class="banner-title">{{banner.title3}}</p>
      <h3 class="bigTitle">{{banner.bigTitle2}}</h3>
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/liveImages/201805live/4.jpg" class="banner">
      <p class="banner-title">{{banner.title4}}</p>
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/liveImages/201805live/5.jpg" class="banner">
      <p class="banner-title">{{banner.title5}}</p>
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/liveImages/201805live/6.jpg" class="banner">
      <p class="banner-title">{{banner.title6}}</p>
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/liveImages/201805live/7.jpg" class="banner"><br>
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/liveImages/201805live/8.jpg" class="banner">
      <p class="banner-title">{{banner.title7}}</p>
      <h3 class="bigTitle">{{banner.bigTitle3}}</h3>
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/liveImages/201805live/9.jpg" class="banner">
      <p class="banner-title">{{banner.title9}}</p>
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/liveImages/201805live/10.jpg" class="banner">
      <p class="banner-title">{{banner.title10}}</p>
    </swiper>
  </div>
</template>
<style scoped>
  .index {
    background: #f0f0f0;
  }
  .banner {
    width: 100vw;
    display: block;
    max-width: 800px;
    margin: 0 auto;
  }
  h3,p {
    text-align: center;
    line-height: 3;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
  }
  p {
    font-size: 14px;
  }
</style>
<script>
  export default {
    data() {
      return {
        banner: {
          bigTitle1: '4.29 酷狗蘑菇X萤火虫动漫音乐嘉年华',
          title1: 'Shine Fine Movement-舞台精彩瞬间',
          title2: 'Tokyo Sweet Party-舞台精彩瞬间',
          title3: '幕后花絮',
          bigTitle2: '4.30 Groupy Live',
          title4: 'Shine Fine Movement-舞台精彩瞬间',
          title5: 'Tokyo Sweet Party-舞台精彩瞬间',
          title6: '夏芽优李-舞台精彩瞬间',
          title7: '叶月飞鸟-舞台精彩瞬间',
          bigTitle3: '5.1 恒宝商演',
          title9: '大合照',
          title10: '大家按的手印'
        }
      }
    },
    methods: {

    },
    mounted() {
      var self = this;
    },
    created: function() {
    }
  }
</script>
