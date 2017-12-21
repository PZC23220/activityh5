<template>
  <div class="index">
    <div class="likes-total"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Live/timeline_icon_likes.png" alt=""><span>25,496</span></div>
      <ul class="gift-list">
        <li><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Live/likes.png" alt=""><span>24</span></li>
        <li><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Live/likes.png" alt=""><span>24</span></li>
        <li><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Live/likes.png" alt=""><span>24</span></li>
        <li><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Live/likes.png" alt=""><span>24</span></li>
      </ul>
    </div>
    <div class="footer">
      <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Live/likes.png" class="send-gift" alt="">
      <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Live/icon_.png" class="top5" alt="">
    </div>
  </div>
</template>
<style lang="scss" scope>
 @import "src/css/event.scss";
</style>
<script>
  import http from '@api/js/http.js';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import $ from 'n-zepto';
  export default {
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          // autoplay: 5000,
          direction : 'vertical',
          grabCursor : true,
          // mousewheelControl: true,
          setWrapperSize :true,
          // autoHeight: true,
          // pagination : '.swiper-pagination',
          paginationClickable :true,
          // loop : true,
          observeParents:true,
          debugger: true,
          onTransitionStart(swiper){
            $('.tabs-li').removeClass('active');
            $('.tabs-li').eq(0).removeClass('one');
            $('.tabs-li').eq(1).removeClass('two');
            $('.tabs-li').eq(2).removeClass('three');
            $('.tabs-li').eq(swiper.activeIndex).addClass('active');
            $('#scroll1').scrollTop(0)
            $('#scroll2').scrollTop(0)
            $('html').scrollTop(0)
            if(swiper.activeIndex == 1) {
              $('.tabs-li').eq(1).addClass('one');
              setTimeout(() => {
                // swiper.disableMousewheelControl();
              }, 500)
            }else if(swiper.activeIndex == 2) {
              $('.tabs-li').eq(2).addClass('two');
              setTimeout(() => {
                // swiper.disableMousewheelControl();
              }, 500)
            }else if(swiper.activeIndex == 3) {
              $('.tabs-li').eq(3).addClass('three');
              // swiper.enableMousewheelControl();
            }else {
              $('.tabs-li').removeClass('active');
              // swiper.enableMousewheelControl();
            }
          },
        },
        swiperOption2: {
          notNextTick: true,
          setWrapperSize :true,
          autoplay: 5000,
          direction : 'horizontal',
          // autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          autoplayDisableOnInteraction: false,
          // loop : true,
          observeParents:true,
          debugger: true,
          onTransitionStart(swiper){
            $('.imgtabs-span').removeClass('active')
            $('.imgtabs-span').eq(swiper.activeIndex).addClass('active');
            if(swiper.activeIndex == 0) {
              $('.imgTabs').css('margin-left','0');
            }
            if(swiper.activeIndex == 5) {
              $('.imgTabs').css('margin-left','-660px');
            }
            // $('.bgActive').css('left',`calc((100vw - 24px)*1/4*${swiper.activeIndex})`);
          },
        },
        center: {lat: 23.1286471, lng: 113.314694},
        center2: {lat: 23.0983649, lng: 113.360524},
        markers: [{
          position: {lat: 23.1286471, lng: 113.314694}
        }],
        markers2: [{
          position: {lat: 23.0983649, lng: 113.360524}
        }],
        Semail: '',
        Sname: '',
        Snums: 1,
        Slive: 1,
        toast: '予約しました！',
        toastShow: false,
        idx: 1
      }
    },
    methods: {
      pushInfo() {
        var self = this;
        if(self.idx < 2) {
          if(self.Sname && self.Semail && /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(self.Semail)) {
            let showsName;
            if(self.Slive == 1) {
              showsName = '(30日)FFACG VIPエリアチケット';
            }else {
              showsName = '(31日)New Year Live 1日券';
            }
            var data_ = {
              showsId: self.Slive, 
              showsName: showsName, 
              showsDescription:'元旦中国行', 
              firstName: self.Sname, 
              email: self.Semail, 
              nums: self.Snums 
            }
            http.post('/shows/applyOffical',JSON.stringify(data_))
            .then(function(res){
              self.idx++;
              self.toast = '予約しました！';
              self.toastShow = true;
              setTimeout(() => {
                self.toastShow = false;
                location.reload();
              },1500)

            })
            .catch(function(err){
              self.idx++;
              self.toast = 'エラーが発生しました。<br>しばらくしてからもう一度お試しください。';
              self.toastShow = true;
              setTimeout(() => {
                self.idx = 1;
                self.toastShow = false;
              },1500)
            });
          }else {
            self.idx++;
            self.toast = '正しく入力してください！';
            self.toastShow = true;
            setTimeout(() => {
              self.idx = 1;
              self.toastShow = false;
            },1500)
          }
        }
      },
      handleScroll(e) {
        var self = this;
       var top_ = $('#ffacg-content-auto-1').offset().top;
       var top_2 = $('#ffacg-content-auto-3').offset().top;
       var winHeight = $(window).height();
       // console.log(top_,winHeight)
       if(winHeight - top_ == 110 || top_2 == 20) {
        setTimeout(() => {
          self.swiper.enableMousewheelControl();
        }, 800)
       }else {
        // console.log('disableMousewheelControl')
        setTimeout(() => {
          self.swiper.disableMousewheelControl();
        }, 800)
       }
      },
      handleScroll2() {
        var self = this;
       var top_ = $('#ffacg-content-auto-2').offset().top;
       var top_2 = $('#ffacg-content-auto-4').offset().top;
       var winHeight = $(window).height();
       if(winHeight - top_ == 320 || top_2 == 20) {
        setTimeout(() => {
          self.swiper.enableMousewheelControl();
        }, 800)
       }else {
        setTimeout(() => {
          self.swiper.disableMousewheelControl();
        }, 800)
       }
      },
      changePagesSpan(val) {
        let tabs = $('.imgtabs-span');
        tabs.removeClass('active');
        tabs.eq(val).addClass('active');
        this.swiper2.slideTo(val, 500, false)
      },
      changePagesLi(val) {
        var self = this;
        let tabs = $('.tabs-li');
        tabs.removeClass('active');
        tabs.eq(val).addClass('active');
        $('#scroll1').scrollTop(0)
        $('#scroll2').scrollTop(0)
        $('html').scrollTop(0)
        if(val == 1) {
            $('.tabs-li').eq(1).addClass('one');
            // self.swiper.disableMousewheelControl();
          }else if(val == 2) {
            $('.tabs-li').eq(2).addClass('two');
            // self.swiper.disableMousewheelControl();
          }else if(val == 3) {
            $('.tabs-li').eq(3).addClass('three');
            // self.swiper.enableMousewheelControl();
          }else {
            $('.tabs-li').removeClass('active');
            // self.swiper.enableMousewheelControl();
          }
        // $('.bgActive').css('left',`calc((100vw - 24px)*1/4*${val})`);
        this.swiper.slideTo(val, 500, false)
      },
      tabImgLeft(val) {
        if(val) {
          $('.imgTabs').css('margin-left','-660px');
        }else {
          $('.imgTabs').css('margin-left','0');
        }
      },
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        },
        swiper2() {
            return this.$refs.mySwiper2.swiper
        }
    },
    created: function() {
      let self = this;
    }
  }
</script>
