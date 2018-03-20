<template>
  <div class="content">
    <!-- 导航栏 -->
    <nav class="tabs">
      <a href="#" id="content_tab" @click="changePage('content_tab')" class="tabs-groupy-icon"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/icon_groupy_128.png" alt=""><span class="Groupy-web">Groupy</span></a>
      <a href="#ffacg" id="ffacg_tab"  @click="changePage('ffacg_tab')" class="tabs-li">
        <p class="tab-title">{{htmlInfo.nav.ffacgTitle}}</p>
        <p class="tab-desc">{{htmlInfo.nav.ffacgDesc}}</p>
      </a >
      <a href="#live" id="live_tab"  @click="changePage('live_tab')" class="tabs-li tabs-li-blue">
        <p class="tab-title">{{htmlInfo.nav.liveTitle}}</p>
        <p class="tab-desc">{{htmlInfo.nav.liveDesc}}</p>
      </a >
      <a href="#tour" id="tour_tab"  @click="changePage('tour_tab')" class="tabs-li tabs-li-green">
        <p class="tab-title">{{htmlInfo.nav.tourTitle}}</p>
        <p class="tab-desc">{{htmlInfo.nav.tourDesc}}</p>
      </a >
      <li class="tabs-li tabs-li-none cursor" @click="showWindow()">
        <p class="tab-title">{{htmlInfo.nav.restitle}}</p>
        <p class="tab-desc">{{htmlInfo.nav.resDesc}}</p>
      </li >
      <a id="nav_bar" @click="showNav()" class="tabs-li-none cursor"><span></span></a>
    </nav>
    <div class="main-content">
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_1.png" class="img_1">
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_1.png" class="img_1 img_1_2">
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_1.png" class="img_1 img_1_3">
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_1.png" class="img_1 img_1_4">
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_1.png" class="img_1 img_1_5">
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_2.png" class="img_2">
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_2.png" class="img_2 img_2_2">
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_2.png" class="img_2 img_2_3">
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_2.png" class="img_2 img_2_4">
      <img :src="htmlInfo.may" class="groupy-may box">
      <ul class="idol-content width900 box">
        <li class="idol_sfm"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_sfm.png"><p>Shine Fine<br>Movement</p></li>
        <li class="idol_asuka"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_asuka.png"><p>{{htmlInfo.asuka}}</p></li>
        <li class="idol_tsp"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_tsp.png"><p>Tokyo Sweet Party</p></li>
      </ul>
      <!-- 萤火虫专场 -->
      <div id="box-ffacg">
        <h2 class="ffacg-title box" id="ffacg"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/bg_ffacg.png"><span>{{htmlInfo.ffacg.title}}</span></h2>
        <div class="ffacg-time box">{{htmlInfo.ffacg.title2}}</div>
        <div class="ffacg-imgs width900">
          <div class="ffacg-left box">
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_ffacg.png" class="img_ffacg box">
            <p class="img-desc box">{{htmlInfo.ffacg.imgDesc}}</p>
          </div>
          <div class="ffacg-right box">
            <h3 class="ffacg-h3title">{{htmlInfo.ffacg.descTitle}}</h3>
            <p class="ffacg-p">{{htmlInfo.ffacg.descp1}}</p>
            <p class="ffacg-p">{{htmlInfo.ffacg.descp2}}</p>
            <p class="ffacg-p">{{htmlInfo.ffacg.descp3}}<a href="http://www.fireflyacg.com">http://www.fireflyacg.com</a></p>
            <span class="reservation-btn cursor" @click="showWindow()"><em>{{htmlInfo.reservation}}</em><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/icon_1.png"></span>
          </div>
        </div>
        <div class="cn_tips width900" v-if="lan=='zh-ch'">
          <p>※点击马上预约将跳转至Groupy官方淘宝店购票链接：<a href="http://m.tb.cn/h.WFFfKzA">http://m.tb.cn/h.WFFfKzA</a></p>
          <p>※淘宝报名购买4月30日一日通手环时，请备注真实的活动信息来源（从哪里得知此活动：Groupy官方宣传、麦萌App、其他），否则可能错失萤火虫漫展VIP门票赠送资格哦。</p>
          <p>※咨询：contact@groupy.vip / Groupy官方淘宝店客服</p>
          <p>※请粉丝自行购买车票和预订住宿酒店等。</p>
        </div>
        <h4 class="ffacg-desc-tile box"><span></span><span></span><em>{{htmlInfo.desc}}</em><span></span><span></span></h4>
        <div class="ffacg-desc width900 box">
          <div class="ffacg-dashed">
            <div class="dashed-content">
              <div class="content-left">{{htmlInfo.date}}</div>
              <div class="content-right">
                <h4 class="content-title"><span>{{htmlInfo.ffacg.date}}</span></h4>
                <h4 class="content-title"><span>{{htmlInfo.ffacg.date1Desc}}</span><em>{{htmlInfo.ffacg.date1}}</em></h4>
                <h4 class="content-title"><span>{{htmlInfo.ffacg.date2Desc}}</span><em>{{htmlInfo.ffacg.date2}}</em></h4>
                <h4 class="content-title"><span>{{htmlInfo.ffacg.date3Desc}}</span><em>{{htmlInfo.ffacg.date3}}</em></h4>
              </div>
            </div>
            <div class="dashed-content">
              <div class="content-left">{{htmlInfo.money}}</div>
              <div class="content-right">
                <h4 class="content-title"><span>{{htmlInfo.ffacg.money1Desc}}</span><em>{{htmlInfo.ffacg.money1}}</em></h4>
                <h4 class="content-title"><span>{{htmlInfo.ffacg.money2Desc}}</span><em>{{htmlInfo.ffacg.money2}}</em></h4>
                <p class="content-desc">{{htmlInfo.ffacg.moneyDesc1}}</p>
                <p class="content-desc">{{htmlInfo.ffacg.moneyDesc2}}</p>
                <p class="content-desc">{{htmlInfo.ffacg.moneyDesc3}}</p>
                <p class="content-desc">{{htmlInfo.ffacg.moneyDesc4}}</p>
                <p class="content-desc" v-html="htmlInfo.ffacg.moneyDesc5" v-if="htmlInfo.ffacg.moneyDesc5"></p>
                <p class="content-desc" v-html="htmlInfo.ffacg.moneyDesc6" v-if="htmlInfo.ffacg.moneyDesc6"></p>
              </div>
            </div>
            <div class="dashed-content">
              <div class="content-left">{{htmlInfo.address}}</div>
              <div class="content-right content-right-last">
                <h4 class="content-title">{{htmlInfo.ffacg.address1}}</h4>
                <p class="content-desc">{{htmlInfo.ffacg.address2}}</p>
                <gmap-map
                    :center="center2"
                    :zoom="15"
                    class="ffacg-gmap">
                    <gmap-marker
                      :key="index"
                      v-for="(m, index) in markers2"
                      :position="m.position"
                      :clickable="true"
                      :draggable="true"
                      @click="center2=m.position"
                    ></gmap-marker>
                  </gmap-map>
              </div>
            </div>
          </div>
        </div>
        <h4 class="ffacg-desc-tile ffacg-desc-tile-green box"><span></span><span></span><em>{{htmlInfo.idols}}</em><span></span><span></span></h4>
        <ul class="idol-content width900 box">
          <li class="idol_sfm"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_sfm.png"><p>Shine Fine<br>Movement</p></li>
          <li class="idol_asuka"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_asuka.png"><p>{{htmlInfo.asuka}}</p></li>
          <li class="idol_tsp"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_tsp.png"><p>Tokyo Sweet Party</p></li>
        </ul>
        <h4 class="ffacg-desc-tile ffacg-desc-tile-pink box"><span></span><span></span><em>{{htmlInfo.ffacg.th17}}</em><span></span><span></span></h4>
        <ul class="idol-content width1100 box">
          <li class="live-imgs"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_ffacg_1.png"></li>
          <li class="live-imgs"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_ffacg_2.png"></li>
          <li class="live-imgs"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_ffacg_3.png"></li>
        </ul>
      </div>
      <!-- Live & Off会主场 -->
      <div id="box-live">
        <h2 class="ffacg-title live-title box" id="live"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/bg_live.png"><span>{{htmlInfo.live.title}}</span></h2>
        <div class="ffacg-time live-time box">{{htmlInfo.live.title2}}</div>
        <div class="ffacg-imgs width900 box">
          <div class="ffacg-left">
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/ing_live.png" class="img_ffacg">
            <p class="img-desc" v-html="htmlInfo.live.imgDesc"></p>
          </div>
          <div class="ffacg-right box">
            <h3 class="ffacg-h3title">{{htmlInfo.live.descTitle}}</h3>
            <p class="ffacg-p">{{htmlInfo.live.descp1}}</p>
            <p class="ffacg-p" v-html="htmlInfo.live.descp2">{{htmlInfo.live.descp2}}</p>
            <span class="reservation-btn cursor" @click="showWindow()"><em>{{htmlInfo.reservation}}</em><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/icon_1.png"></span>
          </div>
        </div>
        <div class="cn_tips width900" v-if="lan=='zh-ch'">
          <p>※点击马上预约将跳转至Groupy官方淘宝店购票链接：<a href="http://m.tb.cn/h.WFFfKzA">http://m.tb.cn/h.WFFfKzA</a></p>
          <p>※淘宝报名购买4月30日一日通手环时，请备注真实的活动信息来源（从哪里得知此活动：Groupy官方宣传、麦萌App、其他），否则可能错失萤火虫漫展VIP门票赠送资格哦。</p>
          <p>※咨询：contact@groupy.vip / Groupy官方淘宝店客服</p>
          <p>※请粉丝自行购买车票和预订住宿酒店等。</p>
        </div>
        <h4 class="ffacg-desc-tile box"><span></span><span></span><em>{{htmlInfo.desc}}</em><span></span><span></span></h4>
        <div class="ffacg-desc width900 box">
          <div class="ffacg-dashed">
            <div class="dashed-content">
              <div class="content-left">{{htmlInfo.date}}</div>
              <div class="content-right">
                <h4 class="content-title"><span>{{htmlInfo.live.date}}</span></h4>
                <h4 class="content-title"><span>{{htmlInfo.live.date1}}</span></h4>
                <h4 class="content-title"><span>{{htmlInfo.live.date1_1Desc}}</span><em>{{htmlInfo.live.date1_1}}</em></h4>
                <h4 class="content-title"><span>{{htmlInfo.live.date1_2Desc}}</span><em>{{htmlInfo.live.date1_2}}</em></h4>
                <h4 class="content-title"><span>{{htmlInfo.live.date1_3Desc}}</span><em>{{htmlInfo.live.date1_3}}</em></h4>
                <h4 class="content-title" v-if="htmlInfo.live.date2"><span>{{htmlInfo.live.date2Desc}}</span><em>{{htmlInfo.live.date2}}</em></h4>
                <h4 class="content-title"><span>{{htmlInfo.live.date3}}</span></h4>
                <h4 class="content-title"><span>{{htmlInfo.live.date3_1Desc}}</span><em>{{htmlInfo.live.date3_1}}</em></h4>
                <h4 class="content-title"><span>{{htmlInfo.live.date3_2Desc}}</span><em>{{htmlInfo.live.date3_2}}</em></h4>
                <h4 class="content-title"><span>{{htmlInfo.live.date3_3Desc}}</span><em>{{htmlInfo.live.date3_3}}</em></h4>
              </div>
            </div>
            <div class="dashed-content">
              <div class="content-left">{{htmlInfo.money}}</div>
              <div class="content-right">
                <h4 class="content-title"><span>{{htmlInfo.live.money1Desc}}</span><em>{{htmlInfo.live.money1}}</em></h4>
                <h4 class="content-title" v-if="htmlInfo.live.money2"><span>{{htmlInfo.live.money2Desc}}</span><em>{{htmlInfo.live.money2}}</em></h4>
                <h4 class="content-title" v-if="htmlInfo.live.money3"><span>{{htmlInfo.live.money3Desc}}</span><em>{{htmlInfo.live.money3}}</em></h4>
                <h4 class="content-title" v-if="htmlInfo.live.money4"><span>{{htmlInfo.live.money4Desc}}</span><em>{{htmlInfo.live.money4}}</em></h4>
                <p class="content-desc" v-html="htmlInfo.live.moneyDesc1"></p>
                <p class="content-desc">{{htmlInfo.live.moneyDesc2}}</p>
                <p class="content-desc">{{htmlInfo.live.moneyDesc3}}</p>
                <p class="content-desc">{{htmlInfo.live.moneyDesc4}}</b></p>
                <p class="content-desc">{{htmlInfo.live.moneyDesc5}}</b></p>
                <p class="content-desc">{{htmlInfo.live.moneyDesc6}}</b></p>
              </div>
            </div>
            <div class="dashed-content">
              <div class="content-left">{{htmlInfo.address}}</div>
              <div class="content-right content-right-last">
                <h4 class="content-title">{{htmlInfo.live.address1}}</h4>
                <p class="content-desc">{{htmlInfo.live.address2}}</p>
                <gmap-map
                    :center="center"
                    :zoom="15"
                    class="ffacg-gmap">
                    <gmap-marker
                      :key="index"
                      v-for="(m, index) in markers"
                      :position="m.position"
                      :clickable="true"
                      :draggable="true"
                      @click="center2=m.position"
                    ></gmap-marker>
                  </gmap-map>
              </div>
            </div>
          </div>
        </div>
        <h4 class="ffacg-desc-tile ffacg-desc-tile-green box"><span></span><span></span><em>{{htmlInfo.idols}}</em><span></span><span></span></h4>
        <ul class="idol-content width1100 box">
          <li class="idol_sfm" style="padding-top: 1.75rem;"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_sfm.png"><p>Shine Fine<br>Movement</p></li>
          <li class="idol_xigua"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_xigua.png"><p>夏芽優李</p></li>
          <li class="idol_asuka"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_asuka.png"><p>{{htmlInfo.asuka}}</p></li>
          <li class="idol_tsp" style="padding-top: 1.25rem;"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_tsp.png"><p>Tokyo Sweet Party</p></li>
        </ul>
      </div>
      <!-- 粉丝同游 -->
      <div id="box-toure">
        <h2 class="ffacg-title tour-title box" id="tour"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/bg_tour.png"><span>{{htmlInfo.tour.title}}</span></h2>
        <div class="ffacg-time tour-time box">{{htmlInfo.tour.title2}}</div>
        <div class="ffacg-imgs width900">
          <div class="ffacg-left box">
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_tour.png" class="img_ffacg">
            <p class="img-desc">{{htmlInfo.tour.imgDesc}}</p>
          </div>
          <div class="ffacg-right box">
            <h3 class="ffacg-h3title">{{htmlInfo.tour.descTitle}}</h3>
            <p class="ffacg-p" v-html="htmlInfo.tour.descp1"></p>
            <p class="ffacg-p" v-html="htmlInfo.tour.descp2" v-if="htmlInfo.tour.descp2"></p>
            <span class="reservation-btn cursor" @click="showWindow()"><em>{{htmlInfo.reservation}}</em><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/icon_1.png"></span>
          </div>
        </div>
        <div class="cn_tips width900" v-if="lan=='zh-ch'">
          <p>※点击马上预约将跳转至Groupy官方淘宝店购票链接：<a href="http://m.tb.cn/h.WFFfKzA">http://m.tb.cn/h.WFFfKzA</a></p>
          <p>※淘宝报名购买4月30日一日通手环时，请备注真实的活动信息来源（从哪里得知此活动：Groupy官方宣传、麦萌App、其他），否则可能错失萤火虫漫展VIP门票赠送资格哦。</p>
          <p>※咨询：contact@groupy.vip / Groupy官方淘宝店客服</p>
          <p>※请粉丝自行购买车票和预订住宿酒店等。</p>
        </div>
        <h4 class="ffacg-desc-tile box"><span></span><span></span><em>{{htmlInfo.desc}}</em><span></span><span></span></h4>
        <div class="ffacg-desc width900 box">
          <div class="ffacg-dashed">
            <div class="dashed-content">
              <div class="content-left">{{htmlInfo.date}}</div>
              <div class="content-right">
                <h4 class="content-title"><span>{{htmlInfo.tour.date}}</span></h4>
              </div>
            </div>
            <div class="dashed-content">
              <div class="content-left">{{htmlInfo.money}}</div>
              <div class="content-right content-right-last">
                <h4 class="content-title"><em>{{htmlInfo.tour.money1}}</em></h4>
                <p class="content-desc">{{htmlInfo.tour.moneyDesc1}}</p>
                <p class="content-desc">{{htmlInfo.tour.moneyDesc2}}</p>
                <p class="content-desc" v-if="htmlInfo.tour.moneyDesc3">{{htmlInfo.tour.moneyDesc3}}</b></p>
                <p class="content-desc">{{htmlInfo.tour.moneyDesc4}}</b></p>
              </div>
            </div>
          </div>
        </div>
        <h4 class="ffacg-desc-tile ffacg-desc-tile-green box"><span></span><span></span><em>{{htmlInfo.idols}}</em><span></span><span></span></h4>
        <ul class="idol-content width1100 box">
          <li class="idol_sfm" style="padding-top: 1.75rem;"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_sfm.png"><p>Shine Fine<br>Movement</p></li>
          <li class="idol_xigua"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_xigua.png"><p>夏芽優李</p></li>
          <li class="idol_asuka"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_asuka.png"><p>{{htmlInfo.asuka}}</p></li>
          <li class="idol_tsp" style="padding-top: 1.25rem;"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_tsp.png"><p>Tokyo Sweet Party</p></li>
        </ul>
      </div>
      <!-- 马上预约按钮 -->
      <div class="reservation-bigBtn box cursor" @click="showWindow()"><em>{{htmlInfo.reservation}}</em><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/icon_1.png"></div>
      <div class="cn_tips width900" v-if="lan=='zh-ch'">
        <p>※点击马上预约将跳转至Groupy官方淘宝店购票链接：<a href="http://m.tb.cn/h.WFFfKzA">http://m.tb.cn/h.WFFfKzA</a></p>
        <p>※淘宝报名购买4月30日一日通手环时，请备注真实的活动信息来源（从哪里得知此活动：Groupy官方宣传、麦萌App、其他），否则可能错失萤火虫漫展VIP门票赠送资格哦。</p>
        <p>※咨询：contact@groupy.vip / Groupy官方淘宝店客服</p>
        <p>※请粉丝自行购买车票和预订住宿酒店等。</p>
      </div>
    </div>
    <!-- 导航弹窗 -->
    <div class="navWindow" :class="[{'navWindowShow':navWindowShow},{'box':navWindowShow}]">
      <nav class="navs">
        <a href="#ffacg" id="ffacg_tab"  @click="changePage('ffacg_tab')" class="navs-pink">
          <h3 class="navs-title">{{htmlInfo.nav.ffacgTitle}}</h3>
          <p class="navs-desc">{{htmlInfo.nav.ffacgDesc}}</p>
        </a>
        <a href="#live" id="live_tab"  @click="changePage('live_tab')" class="navs-blue">
          <h3 class="navs-title">{{htmlInfo.nav.liveTitle}}</h3>
          <p class="navs-desc">{{htmlInfo.nav.liveDesc}}</p>
        </a>
        <a href="#tour" id="tour_tab"  @click="changePage('tour_tab')" class="navs-green">
          <h3 class="navs-title">{{htmlInfo.nav.tourTitle}}</h3>
          <p class="navs-desc">{{htmlInfo.nav.tourDesc}}</p>
        </a>
        <li class="navs-yellow cursor" @click="showWindow()">
          <h3 class="navs-title">{{htmlInfo.nav.restitle}}</h3>
          <p class="navs-desc">~{{htmlInfo.nav.resDesc}}</p>
        </li>
      </nav>
    </div>
    <!-- 马上预约弹窗 -->
    <div class="reservation" :class="[{'reservationShow':reservationShow},{'box':reservationShow}]">
      <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/icon_close.png" class="close cursor" @click="closeWindow()">
      <div class="reservation-content">
        <h4 class="reservation-title"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/bg_book.png"><span>预 约</span></h4>
        <div class="form">
          <div class="form-dashed">
            <div class="input-content">
              <span>{{htmlInfo.resContent.name}}</span>
              <input v-model="Sname" type="text" :placeholder="htmlInfo.resContent.name" name="" @input="foucusCount(Sname,'name')" v-on:blur="foucusCount(Sname,'name')">
              <em v-if="nameIsNone">*{{htmlInfo.resContent.nameTips}}</em>
            </div>
            <div class="input-content">
              <span>{{htmlInfo.resContent.phone}}</span>
              <input v-model="Snums" :placeholder="htmlInfo.resContent.phone" type="number" name="" @input="foucusCount(Snums,'nums')" v-on:blur="foucusCount(Snums,'nums')" v-if="htmlInfo.resContent.phone == '电话号码'">
              <input v-model="Snums" :placeholder="htmlInfo.resContent.phone" type="text" name="" @input="foucusCount(Snums,'nums')" v-on:blur="foucusCount(Snums,'nums')" v-else>
              <em v-if="phoneIsNone">*{{htmlInfo.resContent.numsTips}}</em>
            </div>
            <div class="input-content">
              <span>{{htmlInfo.resContent.activity}}</span>
              <select v-model="Slive">
                <option value="1">{{htmlInfo.resContent.op1}}</option>
                <option value="2">{{htmlInfo.resContent.op2}}</option>
                <option value="3">{{htmlInfo.resContent.op3}}</option>
              </select>
            </div>
            <div class="input-content" v-if="htmlInfo.resContent.form">
              <span>{{htmlInfo.resContent.form}}</span>
              <select v-model="Sactivity">
                <option value="1">Groupy官方宣传</option>
                <option value="2">麦萌App</option>
                <option value="3">其他</option>
              </select>
            </div>
            <div class="form-tips">
              <p>{{htmlInfo.resContent.tip1}}<em>contact@groupy.vip</em></p>
              <p>{{htmlInfo.resContent.tip2}}</p>
              <p v-html="htmlInfo.resContent.tip3"></p>
              <p>{{htmlInfo.resContent.tip4}}</p>
            </div>
            <div class="form-submite" @click="pushInfo()">{{htmlInfo.resContent.btn}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- toast -->
    <!-- <div class="toast" :class="{'show':toastShow}" v-html="toast"></div> -->
  </div>
</template>
<script>
  import http from '@api/js/http.js';
  require('@api/js/common.js')
  import scrollReveal from  'scrollreveal'
  export default {
    data() {
      return {
        scrollReveal:scrollReveal(),
        center: {lat: 23.0964459, lng: 113.369968},
        center2: {lat: 23.100549, lng: 113.3692763},
        markers: [{
          position: {lat: 23.0964459, lng: 113.369968}
        }],
        markers2: [{
          position: {lat: 23.100549, lng: 113.3692763}
        }],
        Semail: '',
        Sname: '',
        Snums: '',
        Slive: 1,
        Sactivity: 1,
        lan: '',
        toast: '予約しました！',
        toastShow: false,
        idx: 1,
        reservationShow: false,
        navWindowShow: false,
        phoneIsNone: false,
        nameIsNone: false,
        htmlInfo: {
          nav: {
            ffacgTitle: 'Groupy in 18th FFACG',
            ffacgDesc: '~4.29~',
            liveTitle: 'Live & Fan Meeting',
            liveDesc: '~4.30~',
            tourTitle: 'Groupy Idol Tour',
            tourDesc: '~5.1~',
            restitle: '今すぐ予約',
            resDesc: '~受付中~',
          },
          reservation: '今すぐ予約',
          desc: '詳細',
          idols: '出演アイドル',
          date: '日程',
          yen: '',
          asuka: '葉月あすか',
          address: '場所',
          money: 'チケット代',
          may: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/slogan_jp.png',
          ffacg: {
            title: 'Groupy in 18th FFACG',
            title2: '~4.29~',
            imgDesc: 'Groupy in 17th FFACG現場',
            descTitle: ' 18th FFACG',
            descp1: '大好評につき、2018年もGroupyは、来場者数20万人超の中国最大級のアニメゲームのイベント第18回Firefly ACG Festival（下記FFACGという）にてメインステージ及び専用ブースへの出展が決定しました。',
            descp2: 'そこで、日本アイドルがFFACGの最も豪華なメインステージに登場！推しメンとと共にこの記念すべき一日を盛り上げましょう。',
            descp3: 'イベントHP：',
            date: '2018年4月29日（日）',
            date1Desc: '前物販',
            date2Desc: 'メインステージ出演',
            date3Desc: '物販特典会',
            date1: '11:30~13:00',
            date2: '13:30~15:00',
            date3: '15:30~17:00',
            money1Desc: 'VIPエリア（ステージに最も近いエリア）チケット',
            money2Desc: 'FFACGチケット',
            money1: '50元（1000円）',
            money2: '60元（別途）',
            moneyDesc1:'※受付は当日Groupyブースにて行いますので、VIPエリアチケットを予約された方は開演前にGroupyブースまでお越し下さい（日本円でのご購入が可能です）。',
            moneyDesc2:'※Groupyブースのブース番号はA46です。',
            moneyDesc3:'※FFACGチケットは現地のFFACGチケット窓口にてご購入いただく形になります（ご購入は中国元になります）。',
            moneyDesc4:'※先着順でVIPエリアを予約された15名の方にFFACGチッケトをプレゼントします。チッケトの受取り方は別途ご案内致します。',
            moneyDesc5:'※予約は3月20日20:00（日本時間）に受付を開始させていただきますので、本サイトをチェックしてください。',
            moneyDesc6:'※タイムテーブル・特典会などは決定次第公開いたします。',
            address1: '中国広州国際採購中心',
            address2: '(中国広東省広州市海珠区琶洲大道東路2-8号)　',
            th17: '第17回までの開催の模様',
          },
          live: {
            title: 'Live & Fan Meeting',
            title2: '~4.30~',
            imgDesc: 'Groupy New Year Festival -カウントダウンパーティ現場',
            descTitle: 'Live & OFF会',
            descp1: '中国・広州でGroupyが主催するライブ・ファンミーティングに参加し、2018年のゴールデンウィーク（GW）に推しメンと素晴らしい一日を作りましょう！',
            date: '2018年4月30日（月）',
            date1: 'ライブ一部：',
            date1_1Desc: '開場',
            date1_2Desc: '開演',
            date1_3Desc: '物販',
            date1_1: '13:45～14:00',
            date1_2: '14:00～15:30',
            date1_3: '15:30～17:00',
            date2Desc: 'ファンミーティング',
            date2: '17:30～18:50',
            date3: 'ライブ二部：',
            date3_1Desc: '開場',
            date3_2Desc: '開演',
            date3_3Desc: '物販',
            date3_1: '19:15～19:30',
            date3_2: '19:30～21:00',
            date3_3: '21:00～22:30',
            money1Desc: '一日券（2回Live&FanMeeting）',
            money1: '400元（7000円）',
            moneyDesc1:'※ライブごとのチケットは販売しておりませんので、ご了承ください。',
            moneyDesc2:'※整理番号でご入場をご案内致します。',
            moneyDesc3:'※日本円でのご購入が可能です。',
            moneyDesc4:'※予約は3月20日20:00（日本時間）に受付を開始させていただきますので、本サイトをチェックしてください。',
            moneyDesc5:'※ご予約後、後日に確認・案内メールをお送りいたしますので、ご確認ください。',
            moneyDesc6:'※タイムテーブル・特典会などは決定次第公開いたします。',
            address1: '中国Mao Live house',
            address2: '(中国広東省広州市海珠区新港東路1088号六元素体験天地F1)',
          },
          tour: {
            title: 'Groupy Idol Tour',
            title2: '~5.1~',
            imgDesc: '中国・広州の夜景',
            descTitle: 'TOUR',
            descp1: 'Groupy Idol Festival最後の日に、アイドルたちと遊びに行くという企画がこの度実現！今までにない楽しさが盛り沢山、ぜひ衝撃ツアーをご参加ください～♪',
            date: '2018年5月1日（火）',
            money1: '400元（7000円）',
            moneyDesc1:'※受付は当日現場にて行います。日本円でのご購入が可能です。',
            moneyDesc2:'※予約は3月20日20:00（日本時間）に受付を開始させていただきますので、本サイトをチェックしてください。',
            moneyDesc3:'※ご予約後、後日確認・案内メールをお送りいたしますので、ご確認いただきます。',
            moneyDesc4:'※タイムテーブル・場所などは決定次第公開いたします。',
          },
          resContent: {
            name: 'お名前',
            phone: 'メールアドレス',
            activity: 'イベントを選択',
            form: '',
            tip1: 'お問い合わせ：',
            tip2: '*予約された方に、後日メールにて詳細をご案内致します。',
            tip3: '*支払い方につて、現時点では現地での支払いになりますが、他の支払い方が出来次第、改めてご案内致します。',
            tip4: '*航空券や滞在ホテルなどはお客様ご自身でご手配いただきますようお願いします。',
            btn: '予約する',
            op1: '(4.29)Groupy in 18th FFACG',
            op2: '(4.30)Groupy Live & Fan Meeting',
            op3: '(5.1)Groupy Idol Tour',
            numsTips: 'メールアドレスを入力してください',
            nameTips: 'お名前をご入力ください'
          }
        }
      }
    },
    methods: {
      foucusCount(val,type) {
        if(type == 'name') {
          if(val) {
            this.nameIsNone = false;
          }else {
            this.nameIsNone = true;
          }
        }
        if(type == 'nums') {
          if(lan == 'zh-cn') {
            if(val) {
              this.phoneIsNone = false;
            }else {
              this.phoneIsNone = true;
            }
          }else {
            if(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(val)) {
              this.phoneIsNone = false;
            }else {
              this.phoneIsNone = true;
            }
          }
        }
      },
      changePage(val) {
        let tabLi = document.getElementById(val);
        this.navWindowShow = false;
        this.reservationShow = false;
        $('html, body').removeClass('overflow nav_open');
        $('html, body').animate({
          scrollTop: $($.attr(tabLi, 'href')).offset().top - 120
        }, 500);
        return false;
      },
      pushInfo() {
        var self = this;
        if(self.idx < 2) {
          let showsName,canPush=false;
          if(self.Slive == 1) {
            showsName = '(4.29)Groupy in 18th FFACG';
          }else if(self.Slive == 2){
            showsName = '(4.30)Groupy Live & Fan Meeting';
          }else {
            showsName = '(5.1)Groupy Idol Tour';
          }
          if(self.lan === 'zh-cn') {
            canPush = true;
            var data_ = {
              showsId: self.Slive,
              showsName: showsName,
              showsDescription:'Groupy Idol Festival May 2018~in広州~',
              firstName: self.Sname,
              phone: self.Snums,
              nums: self.Sactivity,
              email: self.Snums
            }
          }else {
            if(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(self.Snums)) {
              canPush = true;
            }
            var data_ = {
              showsId: self.Slive,
              showsName: showsName,
              showsDescription:'Groupy Idol Festival May 2018~in広州~',
              firstName: self.Sname,
              phone: self.Snums,
              email: self.Snums,
              nums: 888888
            }
          }
          if(self.Sname && self.Snums && canPush) {
            http.post('/shows/applyOffical',JSON.stringify(data_))
            .then(function(res){
              self.idx++;
              if(self.lan === 'zh-cn') {
                alert('信息登记成功！请前往淘宝自行购票～');
                window.location.href='https://shop323210088.taobao.com/';
              }else{
                self.toast = '予約しました！';
                alert('予約しました！');
                location.reload();
              }
            })
            .catch(function(err){
              self.idx++;
              if(self.lan === 'zh-cn') {
                self.toast = '网络错误，请稍后重试';
              }else{
                self.toast = 'エラーが発生しました。<br>しばらくしてからもう一度お試しください。';
              }
              self.toastShow = true;
              setTimeout(() => {
                self.idx = 1;
                self.toastShow = false;
              },1500)
            });
          }else {
            if(!self.Snums) {
              this.nameIsNone = true;
            }

            if(!self.Sname) {
              this.phoneIsNone = true;
            }
          }
        }
      },
      showWindow() {
        if(this.lan == 'zh-cn') {
          window.open('https://shop323210088.taobao.com/','_blank');
        }else {
          this.reservationShow = true;
          this.navWindowShow = false;
          $('html, body').addClass('nav_open');
        }
      },
      closeWindow() {
        this.reservationShow = false;
        $('html, body').removeClass('nav_open');
      },
      showNav() {
        if($('html').hasClass('overflow')) {
          this.navWindowShow = false;
          this.reservationShow = false;
          $('html, body').removeClass('overflow');
        }else {
          this.navWindowShow = true;
          this.reservationShow = false;
          $('html, body').addClass('overflow');
        }
      }
    },
    mounted() {
      this.scrollReveal.reveal('.box', {
        duration: 600,
      });
    },
    computed: {

    },
    created: function() {
      let self = this;
      window.setupWebViewJavascriptBridge(function(bridge) {
          bridge.callHandler('setTitle', {'title':'Groupy Idol Festival May 2018~in広州~'})
      })
      let ua = navigator.userAgent.toLowerCase();
      let _lan = (navigator.browserLanguage || navigator.language).toLowerCase();
      self.lan = _lan;
      if(_lan === 'zh-cn') {
        this.htmlInfo = {
          nav: {
            ffacgTitle: '萤火虫专场',
            ffacgDesc: 'Groupy偶像祭~4.29~',
            liveTitle: '主场Live&Off会',
            liveDesc: 'Groupy偶像祭~4.30~',
            tourTitle: '粉丝同游',
            tourDesc: 'Groupy偶像祭~5.1~',
            restitle: '马上预约',
            resDesc: '~马上预约嗨起来~',
          },
          reservation: '马上预约',
          asuka: '葉月Asuka',
          desc: '详情',
          idols: '出演爱豆',
          date: '日期',
          address: '场地',
          money: '价格',
          may: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/slogan_cn.png',
          ffacg: {
            title: 'Groupy 偶像祭-萤火虫专场',
            title2: '~ 4月29日 ~',
            imgDesc: '17th 漫展活动现场摄图',
            descTitle: ' 18th FFACG',
            descp1: '人流量超过20万、华南地区最大的商业动漫游戏展萤火虫动漫嘉年华（18th）4月29日即将开启！',
            descp2: '马上报名，与爱豆在中国嗨起来吧！',
            descp3: '活动官网：',
            date: '2018年4月29日（周日）',
            date1Desc: '前物贩',
            date2Desc: '主舞台演出',
            date3Desc: '物贩特典会',
            date1: '11:30~13:00',
            date2: '13:30~15:00',
            date3: '15:30~17:00',
            money1Desc: '内场手环',
            money2Desc: '萤火虫漫展门票',
            money1: '50元',
            money2: '60元（需自行购买）',
            moneyDesc1:'※预约了内场手环的亲们请在当天到Groupy展位领取手环。',
            moneyDesc2:'※Groupy展位番号为A46。',
            moneyDesc3:'※萤火虫漫展门票请自行购买，',
            moneyDesc4:'※活动将于3月20日19:00开始接受预约。请到Groupy官方淘宝店购买手环。否则预约将失效。',
            moneyDesc5:'※Timetable・特典会等详情将在近日公布。',
            address1: '广州国际采购中心',
            address2: '（广东省广州市海珠区琶洲大道东路2-8号）',
            th17: '第17届现场剪影',
          },
          live: {
            title: 'Groupy 偶像祭-主场Live&Off会',
            title2: '~ 4月30日 ~',
            imgDesc: '元旦跨年活动-新年倒数摄图',
            descTitle: 'Live & OFF会',
            descp1: '来参加Groupy广州主场Live，跟爱豆一起欢度五一小长假！不够过瘾？还有Off会等你来~',
            date: '2018年4月30日（周一）',
            date1: 'live一部：',
            date1_1Desc: '开场',
            date1_2Desc: '开演',
            date1_3Desc: '物贩',
            date1_1: '13:45～14:00',
            date1_2: '14:00～15:30',
            date1_3: '15:30～17:00',
            date3: 'live二部：',
            date3_1Desc: '开场',
            date3_2Desc: '开演',
            date3_3Desc: '物贩',
            date3_1: '19:15～19:30',
            date3_2: '19:30～21:00',
            date3_3: '21:00～22:30',
            money1Desc: '单场Live手环',
            money2Desc: '双场Live手环（2场Live ）',
            money3Desc: 'off会手环',
            money4Desc: '一日通手环（2场Live&Off会）',
            money1: ' 80元',
            money2: '150元',
            money3: '300元',
            money4: '400元',
            moneyDesc1:'※购买off会手环或一日通门票，入场可获得随机偶像私房拍立得一张。',
            moneyDesc2:'※活动当天根据整理番号入场。',
            moneyDesc3:'※活动将于3月20日19:00开始接受预约。请到Groupy官方淘宝店购买一日通手环。否则预约将失效。',
            moneyDesc4:'※在淘宝购买一日通手环前10名的亲们，我们将各送出漫展VIP门票一张。送完即止。',
            moneyDesc6:'※Timetable・特典会等详情将在近日公布。',
            address1: '广州Mao Livehouse',
            address2: '（广州市海珠区新港东路1088号六元素体验天地一层）',
          },
          tour: {
            title: 'Groupy 偶像祭-粉丝同游',
            title2: '~ 5月1日 ~',
            imgDesc: '广州景色',
            descTitle: 'TOUR',
            descp1: 'Groupy偶像祭的最后一天我们将进行爱豆与粉丝同游活动！<br>发现爱豆们私下的一面，这段难得的旅途不容错过~',
            date: '2018年5月1日（周二）',
            money1: '400元',
            money1Desc: '门票价格',
            moneyDesc1:'※活动当天请按时到达指定集合地点，过时不候，此次报名费用中包含活动场所的门票一张，参加者无需另外购票。活动全程请听从带队staff的安排，请勿擅自离队。',
            moneyDesc2:'※活动将于3月20日19:00开始接受预约。请到Groupy官方淘宝店购买手环。否则预约将失效。',
            moneyDesc4:'※Timetable・地点等详情将在近日公布。',
          },
          resContent: {
            name: '姓名',
            phone: '电话号码',
            activity: '选择活动',
            form: '从哪里得知此活动',
            tip1: '※咨询：',
            tip2: '※基本信息填写结束，按下“预约”按钮后，请到Groupy官方淘宝店【Groupy应援线上店】购买门票，购票成功后预约才正式生效。否则预约作废。',
            tip3: '※Groupy官方淘宝购票链接：<a href="https://shop323210088.taobao.com/">https://shop323210088.taobao.com/</a>',
            tip4: '※请粉丝自行购买车票和预订住宿酒店等。',
            btn: '预 约',
            op1: '(4.29)Groupy偶像祭-萤火虫专场',
            op2: '(4.30)Groupy偶像祭-主场Live&Off会~',
            op3: '(5.1)Groupy偶像祭-粉丝同游',
            nameTips: '请输入姓名',
            numsTips: '请输入电话号码'
          }
        }
      }else {
        this.htmlInfo = {
          nav: {
            ffacgTitle: 'Groupy in 18th FFACG',
            ffacgDesc: '~4.29~',
            liveTitle: 'Live & Fan Meeting',
            liveDesc: '~4.30~',
            tourTitle: 'Groupy Idol Tour',
            tourDesc: '~5.1~',
            restitle: '今すぐ予約',
            resDesc: '~受付中~',
          },
          reservation: '今すぐ予約',
          desc: '詳細',
          idols: '出演アイドル',
          date: '日程',
          yen: '',
          asuka: '葉月あすか',
          address: '場所',
          money: 'チケット代',
          may: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/slogan_jp.png',
          ffacg: {
            title: 'Groupy in 18th FFACG',
            title2: '~4.29~',
            imgDesc: 'Groupy in 17th FFACG現場',
            descTitle: ' 18th FFACG',
            descp1: '大好評につき、2018年もGroupyは、来場者数20万人超の中国最大級のアニメゲームのイベント第18回Firefly ACG Festival（下記FFACGという）にてメインステージ及び専用ブースへの出展が決定しました。',
            descp2: 'そこで、日本アイドルがFFACGの最も豪華なメインステージに登場！推しメンとと共にこの記念すべき一日を盛り上げましょう。',
            descp3: 'イベントHP：',
            date: '2018年4月29日（日）',
            date1Desc: '前物販',
            date2Desc: 'メインステージ出演',
            date3Desc: '物販特典会',
            date1: '11:30~13:00',
            date2: '13:30~15:00',
            date3: '15:30~17:00',
            money1Desc: 'VIPエリア（ステージに最も近いエリア）チケット',
            money2Desc: 'FFACGチケット',
            money1: '50元（1000円）',
            money2: '60元（別途）',
            moneyDesc1:'※受付は当日Groupyブースにて行いますので、VIPエリアチケットを予約された方は開演前にGroupyブースまでお越し下さい（日本円でのご購入が可能です）。',
            moneyDesc2:'※Groupyブースのブース番号はA46です。',
            moneyDesc3:'※FFACGチケットは現地のFFACGチケット窓口にてご購入いただく形になります（ご購入は中国元になります）。',
            moneyDesc4:'※先着順でVIPエリアを予約された15名の方にFFACGチッケトをプレゼントします。チッケトの受取り方は別途ご案内致します。',
            moneyDesc5:'※予約は3月20日20:00（日本時間）に受付を開始させていただきますので、本サイトをチェックしてください。',
            moneyDesc6:'※タイムテーブル・特典会などは決定次第公開いたします。',
            address1: '中国広州国際採購中心',
            address2: '(中国広東省広州市海珠区琶洲大道東路2-8号)　',
            th17: '第17回までの開催の模様',
          },
          live: {
            title: 'Live & Fan Meeting',
            title2: '~4.30~',
            imgDesc: 'Groupy New Year Festival -カウントダウンパーティ現場',
            descTitle: 'Live & OFF会',
            descp1: '中国・広州でGroupyが主催するライブ・ファンミーティングに参加し、2018年のゴールデンウィーク（GW）に推しメンと素晴らしい一日を作りましょう！',
            date: '2018年4月30日（月）',
            date1: 'ライブ一部：',
            date1_1Desc: '開場',
            date1_2Desc: '開演',
            date1_3Desc: '物販',
            date1_1: '13:45～14:00',
            date1_2: '14:00～15:30',
            date1_3: '15:30～17:00',
            date2Desc: 'ファンミーティング',
            date2: '17:30～18:50',
            date3: 'ライブ二部：',
            date3_1Desc: '開場',
            date3_2Desc: '開演',
            date3_3Desc: '物販',
            date3_1: '19:15～19:30',
            date3_2: '19:30～21:00',
            date3_3: '21:00～22:30',
            money1Desc: '一日券（2回Live&FanMeeting）',
            money1: '400元（7000円）',
            moneyDesc1:'※ライブごとのチケットは販売しておりませんので、ご了承ください。',
            moneyDesc2:'※整理番号でご入場をご案内致します。',
            moneyDesc3:'※日本円でのご購入が可能です。',
            moneyDesc4:'※予約は3月20日20:00（日本時間）に受付を開始させていただきますので、本サイトをチェックしてください。',
            moneyDesc5:'※ご予約後、後日に確認・案内メールをお送りいたしますので、ご確認ください。',
            moneyDesc6:'※タイムテーブル・特典会などは決定次第公開いたします。',
            address1: '中国Mao Live house',
            address2: '(中国広東省広州市海珠区新港東路1088号六元素体験天地F1)',
          },
          tour: {
            title: 'Groupy Idol Tour',
            title2: '~5.1~',
            imgDesc: '中国・広州の夜景',
            descTitle: 'TOUR',
            descp1: 'Groupy Idol Festival最後の日に、アイドルたちと遊びに行くという企画がこの度実現！今までにない楽しさが盛り沢山、ぜひ衝撃ツアーをご参加ください～♪',
            date: '2018年5月1日（火）',
            money1: '400元（7000円）',
            moneyDesc1:'※受付は当日現場にて行います。日本円でのご購入が可能です。',
            moneyDesc2:'※予約は3月20日20:00（日本時間）に受付を開始させていただきますので、本サイトをチェックしてください。',
            moneyDesc3:'※ご予約後、後日確認・案内メールをお送りいたしますので、ご確認いただきます。',
            moneyDesc4:'※タイムテーブル・場所などは決定次第公開いたします。',
          },
          resContent: {
            name: 'お名前',
            phone: 'メールアドレス',
            activity: 'イベントを選択',
            form: '',
            tip1: 'お問い合わせ：',
            tip2: '*予約された方に、後日メールにて詳細をご案内致します。',
            tip3: '*支払い方につて、現時点では現地での支払いになりますが、他の支払い方が出来次第、改めてご案内致します。',
            tip4: '*航空券や滞在ホテルなどはお客様ご自身でご手配いただきますようお願いします。',
            btn: '予約する',
            op1: '(4.29)Groupy in 18th FFACG',
            op2: '(4.30)Groupy Live & Fan Meeting',
            op3: '(5.1)Groupy Idol Tour',
            numsTips: 'メールアドレスを入力してください',
            nameTips: 'お名前をご入力ください'
          }
        }
      }
    }
  }
</script>
