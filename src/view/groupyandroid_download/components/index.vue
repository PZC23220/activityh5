<template>
  <div class="content">
    <div class="download-content">
      <img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/android_download/index.png" alt="" class="download-groupy">
      <img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/android_download/writing.png" alt="" class="download-writing">
      <div class="download-link-content">
        <a class="download-link" target="blank" :href="hrefs"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/android_download/icon_apple.png" alt=""><span>iPhone</span></a>
        <span class="download-link" style="background: #66AC20;" @click="get_app()"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/android_download/icon_android.png" alt=""><span>Android</span></span>
      </div>
      <img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/android_download/phone.png" alt="" class="bg_banner">
    </div>
    <div class="mask-content" v-if="maskShow">
      <img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/android_download/arrow.png" alt="">
      <p>请在浏览器中打开<br>下载app</p>
    </div>
  </div>
</template>
<script>
  var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  }
  import $ from 'n-zepto';
  import http from '@api/js/http.js';
  export default {
    data() {
      return {
        maskShow: false,
        hrefs: 'itms-apps://itunes.apple.com/app/id1270083927',
        androidUrl: 'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/optupload/com.groupy.app.android.apk'
      }
    },
    methods: {
      get_app() {
        console.log(this.androidUrl);
        window.location.assign(this.androidUrl);
      },
      getLink() {
        let self = this;
        http.get('/shows/getDownUrl').then(function(res){
          if(res.data) {
            self.androidUrl = res.data.appUrl;
          }
        })
      }
    },
    computed: {
    },
    created: function() {
      let self = this;
      this.getLink();
      if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
        var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
        if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/WeiBo/i) == "weibo") {
          self.maskShow = true;
        }else {
          self.maskShow = false;
        }
      }else {
        self.maskShow = false;
      }
      if (/iphone|ipad|ipod/.test(ua)) {
          this.hrefs = 'itms-apps://itunes.apple.com/app/id1270083927';
      }else {
          this.hrefs = 'https://itunes.apple.com/app/id1270083927';
      }
    }
  }
</script>
<style lang="scss">
  .content {
    max-width: 980px;
    margin: 0 auto;
    height: 100vh;
    overflow: hidden;
    box-sizing: border-box;
  }
  .download-content {
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
    padding-top: 7.47226vh;
    background-image: linear-gradient(124deg, #FF9A6D 0%, #FF5390 100%);
    >img {
      display:block;
      margin: 0 auto;
    }
  }
  .download-writing {
    width: 72.8vw;
    max-width: 364px;
  }
  .download-groupy {
    width: 17.06666vw;
    max-width: 85px;
    margin-bottom: 14px !important;
  }
  .download-link-content {
    display: flex;
    width: 77.6vw;
    max-width: 480px;
    margin: 0 auto;
  }
  .download-link {
    flex: 1;
    display: block;
    color: #fff;
    margin: 20px 0 2.5vh;
    background: #000000;
    border: 2px solid #FFFFFF;
    border-radius: 50px;
    padding: 10px 0;
    &:first-child {
      margin-right: 11px;
    }
    img {
      height: 3.6vh;
      max-height: 40px;
      vertical-align: middle;
     margin-right: 8.5px;
    }
    span {
      display: inline-block;
      vertical-align: middle;
      letter-spacing: 2.22px;
      font-size: 18px;
    }
    @media screen and (min-width: 500px) {
      span {
        font-size: 24px;
      }
    }
  }
  .bg_banner {
    width: 88vw;
    max-width: 500px;
  }
  .mask-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    min-height: 100vh;
    background: rgba(0,0,0,0.4);
    color: #fff;
    text-align: right;
    font-size: 16px;
    img {
      width: 85px;
      margin-right: 12px;
    }
    p {
      width: 128px;
      text-align: center;
      margin-left: calc(100vw - 148px);
    }
  }
  @media screen and (min-width: 800px) {
    html,body,.content {
      height: auto;
      height: auto;
      overflow: hidden;
    }
  }
  body {
    background-size: cover;
    min-height: 100vh;
  }
  .bg_banner {

  }
</style>
