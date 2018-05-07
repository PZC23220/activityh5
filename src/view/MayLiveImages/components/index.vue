<template>
  <div class="index">
      <h3>{{banner.bigTitle1}}</h3>
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
    background-color: #fff;
    background-image: url(http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/bg.png);
    background-repeat: repeat;
  }
  .banner {
    width: 100vw;
    display: block;
    max-width: 800px;
    margin: 0 auto;
  }
  h3,p {
    text-align: center;
    width: 100vw;
    display: block;
    max-width: 800px;
    margin: 0 auto;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 4;
  }
  .bigTitle {
    margin-top: 40px;
    /* border-top: 1px solid #eee; */
    box-shadow: 6px 0 1px 0 rgba(59,59,59,.2);
  }
  p {
    line-height: 3;
    font-size: 14px;
    margin-bottom:  30px;
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
      var ua = navigator.userAgent.toLowerCase();
      let _lan = (navigator.browserLanguage || navigator.language).toLowerCase();
      if(_lan === 'zh-cn') {
        this.banner = {
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
      }else {
        this.banner = {
          bigTitle1: '4.29 FFACG',
          title1: 'Shine Fine Movement-ライブの素敵な瞬間',
          title2: 'Tokyo Sweet Party-ライブの素敵な瞬間',
          title3: 'オフショット',
          bigTitle2: '4.30 Groupy Live',
          title4: 'Shine Fine Movement-ライブの素敵な瞬間',
          title5: 'Tokyo Sweet Party-ライブの素敵な瞬間',
          title6: '夏芽優李-ライブの素敵な瞬間',
          title7: '葉月あすか-ライブの素敵な瞬間',
          bigTitle3: '5.1 ショッピングモールライブ',
          title9: '集合写真',
          title10: '皆さんの手形プレート'
        }
      }
    }
  }
</script>
