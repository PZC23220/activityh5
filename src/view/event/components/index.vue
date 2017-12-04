<template>
  <div class="content">
    <swiper :options="swiperOption" ref="mySwiper" class="event-content">
        <swiper-slide id="swiper1" class="event-live">
          <div class="event-bg-content"><img :src="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/bg_index.jpg'" class="event-bg"><span class="vertical-align"></span></div>
          <div class="index-content">
            <img :src="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/img_guangzhou.png'" class="index-address"><br>
            <img :src="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/img_idol.png'" class="index-idol"><br>
            <!-- <span @click="changePagesLi(3)" class="index-reservation"><span class="reservation"></span><span class="index-activity-goto index-activity-goto-reservation"></span></span><br> -->
            <span @click="changePagesLi(1)" class="index-activity-content"><span class="index-time-start"></span><span class="index-activity-ffacg"></span><span class="index-activity-goto"></span></span><br>
            <span @click="changePagesLi(2)" class="index-activity-content index-activity-content-end"><span class="index-time-end"></span><span class="index-activity-live"></span><span class="index-activity-goto index-activity-goto-live"></span></span><br>
          </div>
        </swiper-slide>
        <swiper-slide id="swiper2" class="event-live">
          <div class="event-bg-content"><img :src="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/bg_ffacg.jpg'" class="event-bg"><span class="vertical-align"></span></div>
          <!-- <div class="ffacg-content-auto" id="scroll1" @scroll="handleScroll"> -->
          <div class="ffacg-content-auto" id="scroll1">
            <div class="index-content ffacg-content">
              <span class="index-time-start index-time-start-ffacg" id="ffacg-content-auto-3"></span><br>
              <span class="ffacg-title"></span><br>
              <p>来場者数<i class="people">20万人</i>超の<i class="people" style="background: #7230e9;">中国最大級</i>のアニメ、ゲームのイベント第17回Firefly ACG Festival<br>
              （下記FFACGという）にてメインステージ及び専用ブースへの出展が決定しました。<br><br>
              Groupyのメインステージの利用時間はなんと90分！そこで、日本アイドルがFFACGに初登場！<br>
              推しメンと共にこの記念すべき一日を盛り上げましょう。
            </p>
              <a href="http://www.fireflyacg.com/" target="_blank" class="hp-links"><span>イベントHP：<em>http://www.fireflyacg.com/</em></span><span class="index-activity-goto ffacg-goto"></span></a><br>
              <span class="performer">出演アイドル</span><br>
              <img :src="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/img_idol.png'" class="index-idol"><br>
              <span class="performer">詳 細</span><br>
              <p class="desc-p" style="margin-top: 10px;"><i class="time-point"></i><span class="time-start">日程</span><span class="times">2017年12月30日（土）</span></p>
              <p class="desc-p"><i class="time-point"></i><span class="time-start">前物販</span><span class="times">11:00～13:00</span></p>
              <p class="desc-p"><i class="time-point"></i><span class="time-start">ライブ</span><span class="times">13:30～15:00</span></p>
              <p class="desc-p"><i class="time-point"></i><span class="time-start">物販&#183;特典会</span><span class="times">15:00～16:30</span></p>
              <p>※タイムテーブルは決定次第公開いたします。<br>
                ※物販&#183;特典会の時間は変更する場合がございます。<br>
                ※物販&#183;特典会はGroupy専用ブースにて行います。</p>
              <span class="performer">チケット代</span><br>
              <p class="desc-p"><i class="time-point"></i><span class="time-start" style="width: 400px;">VIPエリア（ステージに最も近いエリア）チケット</span><span class="times">60元（1000円）</span></p>
              <p class="desc-p"><i class="time-point"></i><span class="time-start" style="width: 400px;">FFACGチケット</span><span class="times">60元</span></p>
              <span class="performer">場 所</span><br>
              <p class="guangzhou-address">中国広州保利世貿易博覧館 5/6号館 FFACG メインステージ</p>
              <p class="haizhu-adress"><span>(中国広東省広州市海珠区新港東路1000号)</span><a href="https://www.google.com.hk/maps/place/%E4%BF%9D%E5%88%A9%E4%B8%96%E8%B4%B8%E5%B1%95%E8%A7%88%E9%A6%86/@23.0983649,113.3583353,17z/data=!3m1!4b1!4m5!3m4!1s0x3402ffed1db3c62b:0x7fd136151062a33c!8m2!3d23.09836!4d113.360524?hl=zh-CN" target="_blank" class="goole-map"></a></p>
              <gmap-map
                  :center="center2"
                  :zoom="17"
                  style="width: 100%; max-width: 750px; height: 300px;margin-top: 19px;"
                >
                  <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers2"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center2=m.position"
                  ></gmap-marker>
                </gmap-map>
              <span class="performer">第16回までの開催の模様</span><br>
              <swiper :options="swiperOption2" ref="mySwiper2" class="event-content liveImg-content">
                <swiper-slide class="event-live" id="swiper11">
                  <img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/live/1.jpg'">
                </swiper-slide>
                <swiper-slide class="event-live" id="swiper12">
                  <img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/live/2.jpg'">
                </swiper-slide>
                <swiper-slide class="event-live" id="swiper13">
                  <img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/live/3.jpg'">
                </swiper-slide>
                <swiper-slide class="event-live" id="swiper14">
                  <img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/live/4.jpg'">
                </swiper-slide>
                <swiper-slide class="event-live" id="swiper15">
                  <img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/live/5.jpg'">
                </swiper-slide>
                <swiper-slide class="event-live" id="swiper16">
                  <img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/live/6.jpg'">
                </swiper-slide>
                <swiper-slide class="event-live" id="swiper17">
                  <img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/live/7.jpg'">
                </swiper-slide>
                <swiper-slide class="event-live" id="swiper18">
                  <img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/live/8.jpg'">
                </swiper-slide>
                <swiper-slide class="event-live" id="swiper19">
                  <img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/live/9.jpg'">
                </swiper-slide>
                <swiper-slide class="event-live" id="swiper100">
                  <img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/live/10.jpg'">
                </swiper-slide>
              </swiper>
              <div class="smallImg-content" id="ffacg-content-auto-1">
                <div class="imgTabs-content">
                  <span class="tab-left" @click="tabImgLeft()"></span>
                  <div class="imgTabs">
                    <span class="imgtabs-span active" @click="changePagesSpan(0)"><img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/smallLive/1.jpg'"></span>
                    <span class="imgtabs-span" @click="changePagesSpan(1)"><img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/smallLive/2.jpg'"></span>
                    <span class="imgtabs-span" @click="changePagesSpan(2)"><img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/smallLive/3.jpg'"></span>
                    <span class="imgtabs-span" @click="changePagesSpan(3)"><img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/smallLive/4.jpg'"></span>
                    <span class="imgtabs-span" @click="changePagesSpan(4)"><img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/smallLive/5.jpg'"></span>
                    <span class="imgtabs-span" @click="changePagesSpan(5)"><img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/smallLive/6.jpg'"></span>
                    <span class="imgtabs-span" @click="changePagesSpan(6)"><img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/smallLive/7.jpg'"></span>
                    <span class="imgtabs-span" @click="changePagesSpan(7)"><img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/smallLive/8.jpg'"></span>
                    <span class="imgtabs-span" @click="changePagesSpan(8)"><img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/smallLive/9.jpg'"></span>
                    <span class="imgtabs-span" @click="changePagesSpan(9)"><img v-lazy="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/smallLive/10.jpg'"></span>
                  </div>
                  <span class="tab-right" @click="tabImgLeft(1)"></span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide id="swiper3" class="event-live">
          <div class="event-bg-content"><img :src="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/bg_live.jpg'" class="event-bg"><span class="vertical-align"></span></div>
          <!-- <div class="ffacg-content-auto" id="scroll2" @scroll="handleScroll2"> -->
          <div class="ffacg-content-auto" id="scroll2">
            <div class="index-content ffacg-content">
              <span class="index-time-end" id="ffacg-content-auto-4"></span><br>
              <span class="ffacg-title live-title"></span><br>
              <p><i class="people">中国&#183;広州</i>でのGroupy主催ライブに参加し、<br>2017年最後の日に推しメンと<i class="people" style="background: #e17e31;">特別な思い出</i>を作りましょう。<br></p>
              <span class="performer">出演アイドル</span><br>
              <img :src="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/img_idol.png'" class="index-idol"><br>
              <span class="performer">詳 細</span><br>
              <p class="desc-p" style="margin-top: 10px;"><i class="time-point"></i><span class="time-start time-start-2">日程</span><span class="times">2017年12月31日（日）</span></p>
              <p class="desc-p"><i class="time-point"></i><span class="time-start time-start-2">ライブ一部</span><span class="times">11:00～13:15</span></p>
              <p class="desc-p"><i class="time-point"></i><span class="time-start time-start-2">ライブ二部</span><span class="times">14:00～16:15</span></p>
              <p class="desc-p"><i class="time-point"></i><span class="time-start time-start-2">カウントダウンライブ</span><span class="times">22:30～01:40</span></p>
              <p style="margin-top: 10px;">
              ※タイムテーブルは決定次第公開いたします。<br>
              ※時間は微調整する場合がございます。</p>
              <span class="performer">チケット</span><br>
              <span class="times"style="margin-top: 20px;">一日券：420元（7000円）</span>
              <p style="margin-top: 20px;">※ライブごとのチケットは販売しておりませんので、ご了承ください。</p>
              <p>※整理番号でご入場をご案内致します。</p>
              <p>※日本円でのご購入が可能です。</p>
              <p>※予約は12月4日12:00に受付を開始させていただきます。予約フォームを公開しますので、本サイトをチェックしてください。</p>
              <span class="performer">場 所</span><br>
              <p class="guangzhou-address">中国広州TU凸空間</p>
              <p class="haizhu-adress"><span> (中国広東省広州市越秀区広州大道中361-365号東方花苑F1)</span><a href="https://www.google.com.hk/maps/place/TU%E5%87%B8%E7%A9%BA%E9%97%B4/@23.1286471,113.3125053,17z/data=!3m1!4b1!4m5!3m4!1s0x3402f93b30c66829:0xb654a12f6a3e38ae!8m2!3d23.1286471!4d113.314694?hl=zh-CN" target="_blank" class="goole-map"></a></p>
              <div class="maps" id="ffacg-content-auto-2">
                <gmap-map
                  :center="center"
                  :zoom="17"
                  style="width: 100%;max-width: 750px; height: 300px;margin-top: 19px;"
                >
                  <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                  ></gmap-marker>
                </gmap-map>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- <swiper-slide id="swiper4" class="event-live">
          <div class="event-bg-content"><img :src="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/bg_index.jpg'" class="event-bg"><span class="vertical-align"></span></div>
          <div class="index-content reservation-content">
            <div class="reservation-box">
              <p class="reservation-title"><span></span></p>
              <div class="input-content">
                <p><i class="time-point"></i><span>お名前</span></p>
                <input type="text" v-model="Sname" name="">
              </div>
              <div class="input-content">
                <p><i class="time-point"></i><span>メールアドレス</span></p>
                <input type="email" v-model="Semail" name="">
              </div>
              <div class="input-content">
                <p><i class="time-point"></i><span>イベントを選択</span></p>
                <select v-model="Slive">
                  <option value="1">(30日)FFACG VIPエリアチケット</option>
                  <option value="2">(31日)New Year Live 1日券</option>
                </select>
              </div>
              <div class="input-content">
                <p><i class="time-point"></i><span>枚数</span></p>
                <input type="number" v-model="Snums" min="1" name="">
              </div>
              <p class="submit-reservation" @click="pushInfo()"><span>予約する</span></p>
            </div>
            <p class="reservation-p">お問い合わせ：contact@groupy.vip</p>
            <p class="reservation-warning">注意事項</p>
            <p>*予約された方に、後日メールにて詳細をご案内致します。
              <br> *支払い方につて、現時点では現地での支払いになりますが、他の支払い方が出来次第、改めてご案内致します。
              <br>*航空券や滞在ホテルなどはお客様ご自身でご手配いただきますようお願いします。
            </p>
          </div>
        </swiper-slide> -->
    </swiper>
    <div class="left-nav">
      <ul class="tabs">
        <li class="tabs-li" @click="changePagesLi(0)"><span class="groupy-icon"></span></li>
        <li class="tabs-li" @click="changePagesLi(1)"><span></span></li>
        <li class="tabs-li" @click="changePagesLi(2)"><span></span></li>
        <!-- <li class="tabs-li" @click="changePagesLi(3)"><span></span></li> -->
      </ul>
      <span class="groupy-icon-2"></span>
      <span class="groupy-introduce">Groupyでアイドルのいつもと違う一面を発見しよう！</span>
      <span class="groupy-qr-tips">QRコードで<br>ダウンロード</span>
      <span class="groupy-qr"></span>
      <span class="groupy-down">ストアに<br>アクセス</span>
      <span class="groupy-appstore"></span>
      <span class="groupy-googleplay"></span>
    </div>
    <div class="toast" :class="{'show':toastShow}" v-html="toast"></div>
  </div>
</template>

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
              showsName = 'FFACG';
            }else {
              showsName = 'Live';
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
