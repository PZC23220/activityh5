<template>
  <div class="content">
    <!-- 导航栏 -->
    <nav class="tabs">
      <a href="#" id="content_tab" @click="changePage('content_tab')" class="tabs-groupy-icon"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Groupywebsite/icon_groupy_128.png" alt=""><span class="Groupy-web">Groupy</span></a>
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
      <button class="changeLan cursor" @click="changeLan()">{{htmlInfo.changeLan}}</button>
    </nav>
    <div class="main-content">
     <!--  <img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_1.png" class="img_1">
      <img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_1.png" class="img_1 img_1_2">
      <img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_1.png" class="img_1 img_1_3">
      <img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_1.png" class="img_1 img_1_4">
      <img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_1.png" class="img_1 img_1_5">
      <img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_2.png" class="img_2">
      <img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_2.png" class="img_2 img_2_2">
      <img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_2.png" class="img_2 img_2_3">
      <img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/img_2.png" class="img_2 img_2_4"> -->
      <!-- <img :src="htmlInfo.may" class="groupy-may box"> -->
     <!--  <ul class="idol-content width900 box">
        <li class="idol_sfm"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_sfm.png"><p>Shine Fine<br>Movement</p></li>
        <li class="idol_asuka"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_asuka.png"><p>{{htmlInfo.asuka}}</p></li>
        <li class="idol_tsp"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/idol_tsp.png"><p>Tokyo Sweet Party</p></li>
      </ul> -->
      <div class="banner"><img :src="htmlInfo.may" class="width1200"></div>
      <!-- 萤火虫专场 -->
      <div id="box-ffacg">
        <h2 class="ffacg-title box" id="ffacg"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/gradient.png" class="inlineBlock"><span class="inlineBlock">{{htmlInfo.ffacg.title}}</span><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/gradient.png" class="inlineBlock"></h2>
        <div class="ffacg-time box">{{htmlInfo.ffacg.title2}}</div>
        <div class="ffacg-imgs width900">
          <div class="ffacg-left box">
            <img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/picture_1.jpg" class="img_ffacg box">
            <p class="img-desc box">{{htmlInfo.ffacg.imgDesc}}</p>
          </div>
          <div class="ffacg-right box">
            <h3 class="ffacg-h3title">{{htmlInfo.ffacg.descTitle}}</h3>
            <p class="ffacg-p">{{htmlInfo.ffacg.descp1}}</p>
            <p class="ffacg-p">{{htmlInfo.ffacg.descp2}}</p>
            <p class="ffacg-p">{{htmlInfo.ffacg.descp3}}<a href="https://www.fireflyacg.com">https://www.fireflyacg.com</a></p>
            <span class="reservation-btn cursor" @click="showWindow()"><em>{{htmlInfo.reservation}}</em><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/icon_1.png"></span>
          </div>
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
                <p class="content-desc" v-if="lan!='zh-cn'" style="color: #1B318E;margin-bottom: 0.5rem;">*セットチケットはFFACG入場チケット及びVIPエリア料金は含まれています。</p>
                <h4 class="content-title" v-if="htmlInfo.ffacg.money2Desc"><span>{{htmlInfo.ffacg.money2Desc}}</span><em>{{htmlInfo.ffacg.money2}}</em></h4>
                <p class="content-desc" v-if="lan=='zh-cn'" style="color: #1B318E;margin-bottom: 0.5rem;">*套票含漫展门票+Groupy内场票</p>
                <p class="content-desc">{{htmlInfo.ffacg.moneyDesc1}}</p>
                <!-- <p class="content-desc">{{htmlInfo.ffacg.moneyDesc2}}</p> -->
                <!-- <p class="content-desc" v-if="htmlInfo.tour.moneyDesc3">{{htmlInfo.tour.moneyDesc3}}</b></p>
                <p class="content-desc">{{htmlInfo.ffacg.moneyDesc3}}</p>
                <p class="content-desc" v-html="htmlInfo.ffacg.moneyDesc4"></p>
                <p class="content-desc" v-html="htmlInfo.tour.moneyDesc2"></p>
                <p class="content-desc">{{htmlInfo.tour.moneyDesc6}}</b></p> -->
                <!-- <div class="tour-qq"><span class="inlineBlock" v-html="htmlInfo.ffacg.moneyDesc7"></span><img class="form-img inlineBlock" :src="htmlInfo.ffacg.moneyImg"></div> -->
              </div>
            </div>
            <div class="dashed-content">
              <div class="content-left">{{htmlInfo.address}}</div>
              <div class="content-right content-right-last">
                <h4 class="content-title">{{htmlInfo.ffacg.address1}}</h4>
                <p class="content-desc">{{htmlInfo.ffacg.address2}}</p>
                <a href="https://j.map.baidu.com/iqLvP" target="_black" v-if="lan=='zh-cn'">
                  <img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/ffacg.jpg" class="ffacg-gmap ffacg-gmap-2">
                </a>
                <a href="https://goo.gl/maps/JrafPbdh3pR2" v-else>
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
                </a>
              </div>
            </div>
          </div>
        </div>
        <h4 class="ffacg-desc-tile box"><span></span><span></span><em>{{htmlInfo.ffacg.th17}}</em><span></span><span></span></h4>
        <ul class="idol-content width1100 box">
          <li class="live-imgs"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/picture2_2.jpg"></li>
          <li class="live-imgs"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/picture2_1.jpg"></li>
          <li class="live-imgs"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/picture2_3.jpg"></li>
        </ul>
      </div>
      <!-- Live & Off会主场 -->
      <div id="box-live">
        <h2 class="ffacg-title live-title box" id="live"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/gradient.png" class="inlineBlock"><span>{{htmlInfo.live.title}}</span><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/gradient.png" class="inlineBlock"></h2>
        <div class="ffacg-time live-time box">{{htmlInfo.live.title2}}</div>
        <div class="ffacg-imgs width900 box">
          <div class="ffacg-left">
            <img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/picture_3.jpg" class="img_ffacg">
            <p class="img-desc" v-html="htmlInfo.live.imgDesc"></p>
          </div>
          <div class="ffacg-right box">
            <h3 class="ffacg-h3title">{{htmlInfo.live.descTitle}}</h3>
            <p class="ffacg-p">{{htmlInfo.live.descp1}}</p>
            <p class="ffacg-p" v-html="htmlInfo.live.descp2">{{htmlInfo.live.descp2}}</p>
            <span class="reservation-btn cursor" @click="showWindow()"><em>{{htmlInfo.reservation}}</em><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/icon_1.png"></span>
          </div>
        </div>
        <h4 class="ffacg-desc-tile box"><span></span><span></span><em>{{htmlInfo.desc}}</em><span></span><span></span></h4>
        <div class="ffacg-desc width900 box">
          <div class="ffacg-dashed">
            <div class="dashed-content">
              <div class="content-left">{{htmlInfo.date}}</div>
              <div class="content-right">
                <h4 class="content-title"><span>{{htmlInfo.live.date}}</span></h4>
                <h4 class="content-title"><span>{{htmlInfo.live.date1Desc}}</span><em>{{htmlInfo.live.date1}}</em></h4>
                <h4 class="content-title" v-if="htmlInfo.live.date1_1Desc"><span>{{htmlInfo.live.date1_1Desc}}</span><em>{{htmlInfo.live.date1_1}}</em></h4>
                <!-- <h4 class="content-title"><span>{{htmlInfo.live.date1_2Desc}}</span><em>{{htmlInfo.live.date1_2}}</em></h4>
                <h4 class="content-title"><span>{{htmlInfo.live.date1_3Desc}}</span><em>{{htmlInfo.live.date1_3}}</em></h4> -->
                <h4 class="content-title" v-if="htmlInfo.live.date2"><span>{{htmlInfo.live.date2Desc}}</span><em>{{htmlInfo.live.date2}}</em></h4>
                <h4 class="content-title"><span>{{htmlInfo.live.date3Desc}}</span><em>{{htmlInfo.live.date3}}</em></h4>
                <h4 class="content-title" v-if="htmlInfo.live.date3_1Desc"><span>{{htmlInfo.live.date3_1Desc}}</span><em>{{htmlInfo.live.date3_1}}</em></h4>
                <!-- <h4 class="content-title"><span>{{htmlInfo.live.date3_2Desc}}</span><em>{{htmlInfo.live.date3_2}}</em></h4>
                <h4 class="content-title"><span>{{htmlInfo.live.date3_3Desc}}</span><em>{{htmlInfo.live.date3_3}}</em></h4> -->
              </div>
            </div>
            <div class="dashed-content">
              <div class="content-left">{{htmlInfo.money}}</div>
              <div class="content-right">
                <h4 class="content-title"><span>{{htmlInfo.live.money1Desc}}</span><em>{{htmlInfo.live.money1}}</em></h4>
                <h4 class="content-title" v-if="htmlInfo.live.money2"><span>{{htmlInfo.live.money2Desc}}</span><em>{{htmlInfo.live.money2}}</em></h4>
                <h4 class="content-title" v-if="htmlInfo.live.money3"><span>{{htmlInfo.live.money3Desc}}</span><em>{{htmlInfo.live.money3}}</em></h4>
                <h4 class="content-title" v-if="htmlInfo.live.money4"><span>{{htmlInfo.live.money4Desc}}</span><em>{{htmlInfo.live.money4}}</em></h4>
                <p class="content-desc" v-if="lan!='zh-cn'" style="color: #1B318E;margin-bottom: 0.5rem;">*一日券は2部ライプ及びファンミーティング料金が含まれています。</p>
                <!-- <p class="content-desc" v-if="lan=='zh-cn'" style="color: #1B318E;margin-bottom: 0.5rem;">＊双场票团购福利：Groupy淘宝官方提供双场门票团购优惠，5人成团免1人门票</p> -->
                <p class="content-desc" v-if="lan=='zh-cn'" style="color: #1B318E;margin-bottom: 1rem;">※双场演唱会参加早鸟、粉红票、5人成团活动</p>
                <p class="content-desc" v-html="htmlInfo.live.moneyDesc1"></p>
                <!-- <p class="content-desc" v-html="htmlInfo.live.moneyDesc2"></p>
                <p class="content-desc" v-html="htmlInfo.live.moneyDesc3"></p>
                <p class="content-desc" v-html="htmlInfo.live.moneyDesc4"></p>
                <p class="content-desc" v-if="htmlInfo.live.moneyDesc5">{{htmlInfo.live.moneyDesc5}}</p>
                <p class="content-desc" v-if="htmlInfo.live.moneyDesc6">{{htmlInfo.live.moneyDesc6}}</p>
                <p class="content-desc">{{htmlInfo.tour.moneyDesc6}}</p> -->
                <!-- <div class="tour-qq"><span class="inlineBlock" v-html="htmlInfo.ffacg.moneyDesc7"></span><img class="form-img inlineBlock" :src="htmlInfo.ffacg.moneyImg"></div> -->
              </div>
            </div>
            <div class="dashed-content">
              <div class="content-left">{{htmlInfo.address}}</div>
              <div class="content-right content-right-last">
                <h4 class="content-title">{{htmlInfo.live.address1}}</h4>
                <p class="content-desc">{{htmlInfo.live.address2}}</p>
                <a href="https://j.map.baidu.com/AbXvP" target="_black" v-if="lan=='zh-cn'"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/maolive.jpg"class="ffacg-gmap ffacg-gmap-2"></a>
                <a href="https://goo.gl/maps/FYLbnkAGCuq" target="_black" v-else>
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
                      @click="center=m.position"
                    ></gmap-marker>
                  </gmap-map>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 粉丝同游 -->
      <div id="box-toure">
        <h2 class="ffacg-title tour-title box" id="tour"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/gradient.png" class="inlineBlock"><span>{{htmlInfo.tour.title}}</span><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/gradient.png" class="inlineBlock"></h2>
        <div class="ffacg-time tour-time box">{{htmlInfo.tour.title2}}</div>
        <div class="ffacg-imgs width900">
          <div class="ffacg-left box">
            <img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/picture_4.jpg" class="img_ffacg">
            <p class="img-desc">{{htmlInfo.tour.imgDesc}}</p>
          </div>
          <div class="ffacg-right box">
            <h3 class="ffacg-h3title">{{htmlInfo.tour.descTitle}}</h3>
            <p class="ffacg-p" v-html="htmlInfo.tour.descp1"></p>
            <p class="ffacg-p" v-html="htmlInfo.tour.descp2" v-if="htmlInfo.tour.descp2"></p>
            <span class="reservation-btn cursor" @click="showWindow()"><em>{{htmlInfo.reservation}}</em><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/icon_1.png"></span>
          </div>
        </div>
        <h4 class="ffacg-desc-tile box"><span></span><span></span><em>{{htmlInfo.desc}}</em><span></span><span></span></h4>
        <div class="ffacg-desc width900 box">
          <div class="ffacg-dashed">
            <div class="dashed-content">
              <div class="content-left">{{htmlInfo.date}}</div>
              <div class="content-right">
                <h4 class="content-title"><span>{{htmlInfo.tour.date}}</span></h4>
                <!-- <h4 class="content-title"><span>{{htmlInfo.tour.date1Desc}}</span><em>{{htmlInfo.tour.date1}}</em></h4>
                <h4 class="content-title"><span>{{htmlInfo.tour.date2Desc}}</span><em>{{htmlInfo.tour.date2}}</em></h4>
                <h4 class="content-title"><span>{{htmlInfo.tour.date3Desc}}</span><em>{{htmlInfo.tour.date3}}</em></h4>
                <h4 class="content-title"><span>{{htmlInfo.tour.date4Desc}}</span><em>{{htmlInfo.tour.date4}}</em></h4>
                <h4 class="content-title"><span>{{htmlInfo.tour.date5Desc}}</span><em>{{htmlInfo.tour.date5}}</em></h4> -->
              </div>
            </div>
            <div class="dashed-content">
              <div class="content-left">{{htmlInfo.money}}</div>
              <div class="content-right content-right-last">
                <h4 class="content-title"><em>{{htmlInfo.tour.money1}}</em></h4>
                <p class="content-desc" style="color: #1b318e;" v-html="htmlInfo.tour.moneyDesc1"></p>
                <!-- <p class="content-desc" v-html="htmlInfo.tour.moneyDesc2"></p>
                <p class="content-desc" v-if="htmlInfo.tour.moneyDesc3">{{htmlInfo.tour.moneyDesc3}}</b></p>
                <p class="content-desc">{{htmlInfo.tour.moneyDesc4}}</p>
                <p class="content-desc" v-html="htmlInfo.tour.moneyDesc5"></p>
                <p class="content-desc">{{htmlInfo.tour.moneyDesc6}}</p> -->
                <!-- <div class="tour-qq"><span class="inlineBlock" v-html="htmlInfo.ffacg.moneyDesc7"></span><img class="form-img inlineBlock" :src="htmlInfo.ffacg.moneyImg"></div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 马上购票按钮 -->
      <div class="reservation-bigBtn box cursor" @click="showWindow()"><em>{{htmlInfo.reservation}}</em><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/icon_1.png"></div>
      <div class="ffacg-desc warning width900" id="warning">
        <div class="titles" v-html="htmlInfo.warning.title"></div>
        <div v-html="htmlInfo.warning.desc">
        </div>
        <div class="tour-qq"><p class="inlineBlock"><span v-html="htmlInfo.warning.desc2"></span></p><img class="form-img inlineBlock" :src="htmlInfo.warning.img"></div>
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
    <!-- 马上购票弹窗 -->
    <div class="reservation" :class="[{'reservationShow':reservationShow},{'box':reservationShow}]">
      <img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/icon_close.png" class="close cursor" @click="closeWindow()">
      <div class="reservation-content">
        <div class="form">
          <div class="form-dashed">
            <h2 class="ffacg-title reservation-title box" id="ffacg"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/gradient.png" class="inlineBlock"><span class="inlineBlock">{{htmlInfo.resContent.btn}}</span><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/gradient.png" class="inlineBlock"></h2>
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
            <!-- <div class="input-content" v-if="htmlInfo.resContent.form">
              <span>{{htmlInfo.resContent.form}}</span>
              <select v-model="Sactivity">
                <option value="1">Groupy官方宣传</option>
                <option value="2">麦萌App</option>
                <option value="3">其他</option>
              </select>
            </div> -->
            <div class="form-tips">
              <p>{{htmlInfo.resContent.tip1}}</p>
              <p>{{htmlInfo.resContent.tip2}}</p>
              <p v-html="htmlInfo.resContent.tip3"></p>
              <p v-html="htmlInfo.resContent.tip4"></p>
              <p v-html="htmlInfo.resContent.tip5"></p>
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
        center: {lat: 23.0964459, lng: 113.3634019},
        center2: {lat: 23.0972269, lng: 113.363385},
        markers: [{
          position: {lat: 23.0964459, lng: 113.3634019}
        }],
        markers2: [{
          position: {lat: 23.0972269, lng: 113.363385}
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
        isJp: true,
        htmlInfo: {
            nav: {
              ffacgTitle: '19th FFACG',
              ffacgDesc: '~7.14~',
              liveTitle: 'Live&Fan Meeting',
              liveDesc: '~7.15~',
              tourTitle: 'Tour',
              tourDesc: '~7.16~',
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
            changeLan: '中文',
            may: 'https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/title2.png',
            ffacg: {
              title: 'Groupy in 19th FFACG',
              title2: '~7.14~',
              imgDesc: 'Groupy in 18th FFACG現場',
              descTitle: '19th FFACG',
              descp1: '来場者数20万人超の中国最大級のコミケFirefly ACG Festival第19回（下記FFACGという）にてメインステージ及び専用ブースへの出展がまた決定しました。',
              descp2: 'そこで、日本、中国アイドルがFFACGの最も豪華なメインステージに登場！推しメンとと共にこの記念すべき一日を盛り上げましょう。',
              descp3: 'コミケHP：',
              date: '2018年7月14日（土）',
              date1Desc: '前物販',
              date2Desc: 'メインステージ出演',
              date3Desc: '物販特典会',
              date1: '10:00~12:00',
              date2: '12:00~14:00',
              date3: '14:10~17:00',
              money1Desc: 'セットチケット',
              // money2Desc: 'FFACGチケット',
              money1: '2000円',
              // money2: '60元（別途）',
              moneyDesc1:'※予約方法については、当ページ一番下の注意事項にてご確認ください。',
              // moneyDesc2:'下記のメールアドレスまでご連絡をお願いいたします。',
              // moneyDesc3:'◇必要事項',
              // moneyDesc4:'お名前/連絡先（携帯番号、メールアドレス）/枚数<br>上記の項目をメールに記入しご予約ください。',
              // moneyDesc5:'※ご予約後、後ほど確認・案内メールをお送りしますので、ご確認ください。',
              // moneyDesc6:'※入場順については、チケット予約の先着順となることをご留意ください。',
              // moneyDesc7:'※お問い合せ<br>メールアドレス：<a href="mailto:contact@groupy.vip" target="_black">contact@groupy.vip</a><br>LineグループQRコード：',
              // moneyImg:'https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/line.jpg',
              address1: '広州琶洲保利世贸博览馆3階5、6号館',
              address2: '1000 Xingang E Rd, Haizhu Qu, Guangzhou Shi（地下鉄8号線「琶洲駅」）',
              th17: '第18回までの開催の模様',
            },
            live: {
              title: 'Groupy Live & Fan Meeting',
              title2: '~7.15~',
              imgDesc: 'Groupy Idol Festival  -5月イベント現場',
              descTitle: 'Live & OFF会',
              descp1: 'ライブとファンミーティングを、一日思う存分楽しんで頂けます！',
              date: '2018年7月15日（日）',
              date1Desc: 'ライブ一部',
              date1: '詳細時間後ほどお知らせいたします',
              // date1_1Desc: '開場',
              // date1_2Desc: '開演',
              // date1_3Desc: '物販',
              // date1_1: '13:45～14:00',
              // date1_2: '14:00～15:30',
              // date1_3: '15:30～17:00',
              date2Desc: 'ファンミーティング',
              date2: '',
              date3Desc: 'ライブ二部',
              date3: '',
              // date3_1Desc: '開場',
              // date3_2Desc: '開演',
              // date3_3Desc: '物販',
              // date3_1: '19:15～19:30',
              // date3_2: '19:30～21:00',
              // date3_3: '21:00～22:30',
              money1Desc: '一日券',
              money1: '8000円',
              moneyDesc1:'※予約方法については、当ページ一番下の注意事項にてご確認ください。',
              // moneyDesc2:'下記のメールアドレスまでご連絡をお願いいたします。',
              // moneyDesc3:'◇必要事項',
              // moneyDesc4:'お名前/連絡先（携帯番号、メールアドレス）/枚数<br>上記の項目をメールに記入しご予約ください。',
              // moneyDesc5:'※ご予約後、後ほど確認・案内メールをお送りしますので、ご確認ください。',
              // moneyDesc6:'※入場順については、チケット予約の先着順となることをご留意ください。',
              address1: '広州Mao Live house',
              address2: '1088 Xingang E Rd, Haizhu Qu, Guangzhou Shi（地下鉄8号線「琶洲駅」 D出口）',
            },
            tour: {
              title: 'Groupy Idol Tour',
              title2: '~7.16~',
              imgDesc: '中国・広州の夜景',
              descTitle: 'TOUR',
              descp1: 'Groupy Idol Festival最後の日に、アイドルたちと遊びに行くという企画がこの度実現！今までにない楽しさが盛り沢山、ぜひ衝撃ツアーをご参加ください～♪',
              date: '2018年7月16日（月・祝）',
              // date1Desc: '集合',
              // date2Desc: '入園',
              // date3Desc: '退園・入口に集合',
              // date4Desc: '全員で記念撮影',
              // date5Desc: '解散',
              // date1: '15:00~15:30',
              // date2: '15:30',
              // date3: '18:30',
              // date4: '18:30~19:00',
              // date5: '19:00',
              money1: '13000円',
              moneyDesc1:'※ファンツアーは参加者10名以上のアイドルグループのみ行いますので、ご予約の際は、ご希望のグループを記入してください。',
              moneyDesc2:'※予約時間について<br>2018/5/17 夜9時間よりご予約の受付を開始いたします。',
              moneyDesc3:'※タイムテーブル・集合場所などは決定次第ご連絡いたします。',
              moneyDesc4:'※おすすめホテル情報はGroupyツイッターまでご確認ください。',
              moneyDesc5:'※チケットの受取について<br>チケット受取のご案内は、予約時に確認メールでご案内しますので必ずご確認ください。<br>当日、案内に従って集合場所にお越し下さい。お支払いは、中国元または日本円の現金払いとなります。',
              moneyDesc6:'※何かご質問がございましたら、QRコードをスキャンされ、Lineグループでお問い合わせまでご連絡ください',
            },
            warning: {
              title: ' 注意事項',
              desc: '※必要事項を下記のメールアドレスまでご連絡をお願いいたします。<a href="mailto:contact@groupy.vip" target="_blank">contact@groupy.vip</a><br><br>※必要事項について<br>お名前/連絡先（携帯番号、メールアドレス）/枚数<br>上記の項目をメールに記入しご予約ください。<br><br>※予約開始時間について<br>2018/5/17 夜9時間よりご予約の受付を開始いたします。<br><br>※入場順については、チケット予約の先着順となることをご留意ください。<br><br>※ご予約後、後ほど確認・案内メールをお送りしますので、ご確認ください。<br><br>※タイムテーブル・集合場所などは決定次第メールもしくはLineにてご連絡いたします。<br><br>※おすすめホテル情報はGroupyツイッターまでご確認ください。<br><br>※チケットの受取について（加粗）<br>チケット受取のご案内は、予約時に確認メールでご案内しますので必ずご確認ください。<br>当日、案内に従って集合場所にお越し下さい。お支払いは、中国元または日本円の現金払いとなります。<br><br>※何かご質問がございましたら、QRコードをスキャンされ、Lineグループでお問い合わせまでご連絡ください<br>',
              desc2: '',
              img: 'https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/line.jpg'
            },
            resContent: {
              name: 'お名前',
              phone: 'メールアドレス',
              activity: 'イベントを選択する',
              form: '',
              tip1: '注意事項',
              tip2: '※航空券や滞在ホテルなどは、お客様ご自身でご手配いただきますようお願いいたします。',
              tip3: '※おすすめホテル情報はGroupyツイッターでご確認ください。',
              tip4: '※メールアドレス：<a href="mailto:contact@groupy.vip">contact@groupy.vip</a>',
              tip5: '※何かご質問がございましたら、QRコードをスキャンされ、Lineグループでお問い合わせまでご連絡ください',
              btn: '予約する',
              op1: '(7.14)Groupy in 19th FFACG',
              op2: '(7.15)Groupy Live & Fan Meeting',
              op3: '(7.16)Groupy Idol Tour',
              numsTips: 'メールアドレスを入力してください',
              nameTips: 'お名前をご入力ください'
            }
          }
      }
    },
    methods: {
      changeLan() {
        if(this.lan == 'zh-cn') {
          this.lan = '';
        }else {
          this.lan = 'zh-cn';
        }
        console.log(this.lan)
        this.changeInfo();
      },
      changeInfo() {
        if(this.lan == 'zh-cn') {
          this.htmlInfo = {
            nav: {
              ffacgTitle: '萤火虫专场',
              ffacgDesc: '~7.14~',
              liveTitle: '偶像音乐节',
              liveDesc: '~7.15~',
              tourTitle: '偶像同游会',
              tourDesc: '~7.16~',
              restitle: '马上购票',
              resDesc: '~马上购票嗨起来~',
            },
            reservation: '马上购票',
            desc: '详情',
            date: '日期',
            address: '场地',
            money: '价格',
            changeLan: '日本語',
            may: 'https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/title.png',
            ffacg: {
              title: '燃动夏日・Groupy萤火虫漫展专场',
              title2: '~7.14~',
              imgDesc: '18th漫展活动现场摄图',
              descTitle: ' 18th FFACG',
              descp1: 'Groupy三度降临人流量超过20万的广州萤火虫动漫嘉年华。7月14日即将开启！马上报名，与爱豆在中国嗨起来吧！',
              descp2: '马上报名，与爱豆在中国嗨起来吧！',
              descp3: '萤火虫漫展官网：',
              date: '2018年7月14日（周六）',
              date1Desc: '偶像周边产品/物贩',
              date2Desc: '萤火虫漫展主舞台演出',
              date3Desc: '偶像周边产品/物贩',
              date1: '10:00~12:00',
              date2: '12:00~14:00',
              date3: '14:10~17:00',
              money1Desc: 'Groupy内场票',
              money2Desc: '萤火虫套票',
              money1: '50元',
              money2: '100元',
              moneyDesc1:'※关于注意事项，请参考本网页最底部的“购票事宜”',
              // moneyDesc2:'※购买套票的亲们请在漫展入口的 萤火虫办证中心，找到Groupy工作人员，兑换漫展套票',
              // moneyDesc3:'※入场顺序按照购票付款时间顺序排名。',
              // moneyDesc4:'※其他平台购买者，按到场顺序在已有番号基础上进行番号排序。',
              // moneyDesc7:'※咨询：<br>QQ群：671740145<br>邮箱：contact@groupy.vip <br>淘宝：Groupy应援线上店',
              // moneyImg:'https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/QQ.jpg',
              address1: '广州琶洲保利世贸博览馆三层5、6号馆',
              address2: '广州市海珠区新港东路1000号（地铁琶洲站PWTC出口直达）',
              th17: '第18届萤火虫漫展Groupy演出现场剪影',
            },
            live: {
              title: '燃动夏日・Groupy偶像音乐节',
              title2: '~7.15~',
              imgDesc: '5月Groupy萌色倾城演唱会现场',
              descTitle: '音乐节&小茶会',
              descp1: 'Groupy偶像音乐节再度来袭，中日火辣萌系小偶像突破次元劲爆演出不容错过。<br>参加与小偶像的粉丝互动会，近距离亲密接触等你来！',
              date: '2018年7月15日（周日）',
              date1Desc: 'A场演唱会',
              date1_1Desc: '偶像周边产品/物贩',
              // date1_2Desc: '偶像小茶会',
              // date1_3Desc: 'B场演唱会 ',
              // date1_4Desc: '偶像周边产品/物贩 ',
              date1: '时间暂定',
              date1_1: '',
              // date1_2: '',
              // date1_3: '',
              // date1_4: '',
              date2Desc: '偶像小茶会',
              date2: '',
              date3Desc: 'B场演唱会',
              date3_1Desc: '偶像周边产品/物贩',
              // date3_2Desc: '开演',
              // date3_3Desc: '物贩',
              date3: '',
              date3_1: '',
              // date3_2: '19:30～21:00',
              // date3_3: '21:00～22:30',
              money1Desc: '音乐节A场/B场单场演唱会',
              money2Desc: '音乐节双场演唱会',
              money3Desc: '偶像小茶会',
              // money4Desc: '一日通手环（2场Live&Off会）',
              money1: ' 120元',
              money2: '180元',
              money3: '300元',
              // money4: '400元',
              moneyDesc1:'※关于注意事项，请参考本网页最底部的“购票事宜”',
              // moneyDesc2:'※门票将于5月17日晚上八点开始售卖，戳Groupy官方淘宝店即可购买：<a href="https://shop323210088.taobao.com" target="_black">https://shop323210088.taobao.com</a>',
              // moneyDesc3:'※入场顺序按照购票付款时间顺序排名。',
              // moneyDesc4:'※其他平台购买者，按到场顺序在已有番号基础上进行番号排序。',
              address1: '广州Mao Livehouse',
              address2: '广州市海珠区新港东路1088号六元素体验天地一层（琶洲站D出口）',
            },
            tour: {
              title: 'Groupy粉丝同游',
              title2: '~7.16~',
              imgDesc: '广州景色',
              descTitle: 'TOUR',
              descp1: '燃动夏日・Groupy像祭的最后一天我们将进行爱豆与粉丝同游活动！<br>发现爱豆们私下的一面，这段难得的旅途不容错过~',
              date: '2018年7月16日（周一）',
              // date1Desc: '集合',
              // date2Desc: '入园',
              // date3Desc: '出园，在门口集合',
              // date4Desc: '全员大合照',
              // date5Desc: '解散',
              // date1: '15:00~15:30',
              // date2: '15:30',
              // date3: '18:30',
              // date4: '18:30~19:00',
              // date5: '19:00',
              money1: '800元',
              money1Desc: '门票价格',
              moneyDesc1:'※购买时请选择希望一起同游的的女团名称。若该女团报团人数不足10人，则取消该女团的同游会安排，稍后作相应地退款，请知悉。',
              moneyDesc2:'※门票将于5月17日晚上八点开始售卖，戳Groupy官方淘宝店即可购买：<a href="https://shop323210088.taobao.com" target="_black">https://shop323210088.taobao.com</a>',
              moneyDesc3:'※关于萤火虫漫展内场入场顺序 , 按官方渠道付款时间顺序',
              moneyDesc4:'※音乐节入场顺序，按双场票＞单场票＞无番号 进行入场',
              moneyDesc5:'※其他第三方平台购票或者现场购票按实际情况定番号',
              moneyDesc6:'※请粉丝自行购买车票和预订住宿酒店等。也可留意官博微博酒店抽奖活动',
            },
            warning: {
              title: ' 购票事宜',
              desc: '※门票将于5月17日晚上八点开始售卖，点击马上购票将跳转至Groupy官方淘宝店购票链接：<a href="https://shop323210088.taobao.com" target="_blank">https://shop323210088.taobao.com</a><br>※入场顺序官方TB渠道付款时间排序。<br>其他平台购买者，按到场顺序在已有番号基础上进行番号排序。 <br>※请粉丝自行购买车票和预订住宿酒店等。也可留意官博微博酒店抽奖活动<br><br><b>关于萤火虫专场</b><br>※购买套票的亲们请在漫展入口的 萤火虫办证中心（或找到Groupy工作人员），兑换漫展套票<br>※购买内场票的亲们请在当天到GroupyA43展位领取。<br><br><b>关于偶像音乐节</b><br>※活动当天凭淘宝兑换号或者个人姓名电话信息在现场兑票。<br>※音乐节入场顺序，按双场票＞单场票＞无番号 进行入场。<br><br>',
              desc2: '※咨询：<br>QQ群：671740145<br>邮箱：contact@groupy.vip <br>淘宝：Groupy应援线上店',
              img: 'https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival/QQ.jpg'
            },
            resContent: {
              name: '姓名',
              phone: '电话号码',
              activity: '选择活动',
              form: '从哪里得知此活动',
              tip1: '※咨询：',
              tip2: '※基本信息填写结束，按下“预约”按钮后，请到Groupy官方淘宝店【Groupy应援线上店】购买门票，购票成功后预约才正式生效。否则预约作废。',
              tip3: '※Groupy官方淘宝购票链接：<a href="https://shop323210088.taobao.com">https://shop323210088.taobao.com</a>',
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
              ffacgTitle: '19th FFACG',
              ffacgDesc: '~7.14~',
              liveTitle: 'Live&Fan Meeting',
              liveDesc: '~7.15~',
              tourTitle: 'Tour',
              tourDesc: '~7.16~',
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
            changeLan: '中文',
            may: 'https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/title2.png',
            ffacg: {
              title: 'Groupy in 19th FFACG',
              title2: '~7.14~',
              imgDesc: 'Groupy in 18th FFACG現場',
              descTitle: '19th FFACG',
              descp1: '来場者数20万人超の中国最大級のコミケFirefly ACG Festival第19回（下記FFACGという）にてメインステージ及び専用ブースへの出展がまた決定しました。',
              descp2: 'そこで、日本、中国アイドルがFFACGの最も豪華なメインステージに登場！推しメンとと共にこの記念すべき一日を盛り上げましょう。',
              descp3: 'コミケHP：',
              date: '2018年7月14日（土）',
              date1Desc: '前物販',
              date2Desc: 'メインステージ出演',
              date3Desc: '物販特典会',
              date1: '10:00~12:00',
              date2: '12:00~14:00',
              date3: '14:10~17:00',
              money1Desc: 'セットチケット',
              // money2Desc: 'FFACGチケット',
              money1: '2000円',
              // money2: '60元（別途）',
              moneyDesc1:'※予約方法については、当ページ一番下の注意事項にてご確認ください。',
              // moneyDesc2:'下記のメールアドレスまでご連絡をお願いいたします。',
              // moneyDesc3:'◇必要事項',
              // moneyDesc4:'お名前/連絡先（携帯番号、メールアドレス）/枚数<br>上記の項目をメールに記入しご予約ください。',
              // moneyDesc5:'※ご予約後、後ほど確認・案内メールをお送りしますので、ご確認ください。',
              // moneyDesc6:'※入場順については、チケット予約の先着順となることをご留意ください。',
              // moneyDesc7:'※お問い合せ<br>メールアドレス：<a href="mailto:contact@groupy.vip" target="_black">contact@groupy.vip</a><br>LineグループQRコード：',
              // moneyImg:'https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/line.jpg',
              address1: '広州琶洲保利世贸博览馆3階5、6号館',
              address2: '1000 Xingang E Rd, Haizhu Qu, Guangzhou Shi（地下鉄8号線「琶洲駅」）',
              th17: '第18回までの開催の模様',
            },
            live: {
              title: 'Groupy Live & Fan Meeting',
              title2: '~7.15~',
              imgDesc: 'Groupy Idol Festival  -5月イベント現場',
              descTitle: 'Live & OFF会',
              descp1: 'ライブとファンミーティングを、一日思う存分楽しんで頂けます！',
              date: '2018年7月15日（日）',
              date1Desc: 'ライブ一部',
              date1: '詳細時間後ほどお知らせいたします',
              // date1_1Desc: '開場',
              // date1_2Desc: '開演',
              // date1_3Desc: '物販',
              // date1_1: '13:45～14:00',
              // date1_2: '14:00～15:30',
              // date1_3: '15:30～17:00',
              date2Desc: 'ファンミーティング',
              date2: '',
              date3Desc: 'ライブ二部',
              date3: '',
              // date3_1Desc: '開場',
              // date3_2Desc: '開演',
              // date3_3Desc: '物販',
              // date3_1: '19:15～19:30',
              // date3_2: '19:30～21:00',
              // date3_3: '21:00～22:30',
              money1Desc: '一日券',
              money1: '8000円',
              moneyDesc1:'※予約方法については、当ページ一番下の注意事項にてご確認ください。',
              // moneyDesc2:'下記のメールアドレスまでご連絡をお願いいたします。',
              // moneyDesc3:'◇必要事項',
              // moneyDesc4:'お名前/連絡先（携帯番号、メールアドレス）/枚数<br>上記の項目をメールに記入しご予約ください。',
              // moneyDesc5:'※ご予約後、後ほど確認・案内メールをお送りしますので、ご確認ください。',
              // moneyDesc6:'※入場順については、チケット予約の先着順となることをご留意ください。',
              address1: '広州Mao Live house',
              address2: '1088 Xingang E Rd, Haizhu Qu, Guangzhou Shi（地下鉄8号線「琶洲駅」 D出口）',
            },
            tour: {
              title: 'Groupy Idol Tour',
              title2: '~7.16~',
              imgDesc: '中国・広州の夜景',
              descTitle: 'TOUR',
              descp1: 'Groupy Idol Festival最後の日に、アイドルたちと遊びに行くという企画がこの度実現！今までにない楽しさが盛り沢山、ぜひ衝撃ツアーをご参加ください～♪',
              date: '2018年7月16日（月・祝）',
              // date1Desc: '集合',
              // date2Desc: '入園',
              // date3Desc: '退園・入口に集合',
              // date4Desc: '全員で記念撮影',
              // date5Desc: '解散',
              // date1: '15:00~15:30',
              // date2: '15:30',
              // date3: '18:30',
              // date4: '18:30~19:00',
              // date5: '19:00',
              money1: '13000円',
              moneyDesc1:'※ファンツアーは参加者10名以上のアイドルグループのみ行いますので、ご予約の際は、ご希望のグループを記入してください。',
              moneyDesc2:'※予約時間について<br>2018/5/17 夜9時間よりご予約の受付を開始いたします。',
              moneyDesc3:'※タイムテーブル・集合場所などは決定次第ご連絡いたします。',
              moneyDesc4:'※おすすめホテル情報はGroupyツイッターまでご確認ください。',
              moneyDesc5:'※チケットの受取について<br>チケット受取のご案内は、予約時に確認メールでご案内しますので必ずご確認ください。<br>当日、案内に従って集合場所にお越し下さい。お支払いは、中国元または日本円の現金払いとなります。',
              moneyDesc6:'※何かご質問がございましたら、QRコードをスキャンされ、Lineグループでお問い合わせまでご連絡ください',
            },
            warning: {
              title: ' 注意事項',
              desc: '※必要事項を下記のメールアドレスまでご連絡をお願いいたします。<a href="mailto:contact@groupy.vip" target="_blank">contact@groupy.vip</a><br><br>※必要事項について<br>お名前/連絡先（携帯番号、メールアドレス）/枚数<br>上記の項目をメールに記入しご予約ください。<br><br>※予約開始時間について<br>2018/5/17 夜9時間よりご予約の受付を開始いたします。<br><br>※入場順については、チケット予約の先着順となることをご留意ください。<br><br>※ご予約後、後ほど確認・案内メールをお送りしますので、ご確認ください。<br><br>※タイムテーブル・集合場所などは決定次第メールもしくはLineにてご連絡いたします。<br><br>※おすすめホテル情報はGroupyツイッターまでご確認ください。<br><br>※チケットの受取について（加粗）<br>チケット受取のご案内は、予約時に確認メールでご案内しますので必ずご確認ください。<br>当日、案内に従って集合場所にお越し下さい。お支払いは、中国元または日本円の現金払いとなります。<br><br>※何かご質問がございましたら、QRコードをスキャンされ、Lineグループでお問い合わせまでご連絡ください<br>',
              desc2: '',
              img: 'https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/idolFestival201807/line.jpg'
            },
            resContent: {
              name: 'お名前',
              phone: 'メールアドレス',
              activity: 'イベントを選択する',
              form: '',
              tip1: '注意事項',
              tip2: '※航空券や滞在ホテルなどは、お客様ご自身でご手配いただきますようお願いいたします。',
              tip3: '※おすすめホテル情報はGroupyツイッターでご確認ください。',
              tip4: '※メールアドレス：<a href="mailto:contact@groupy.vip">contact@groupy.vip</a>',
              tip5: '※何かご質問がございましたら、QRコードをスキャンされ、Lineグループでお問い合わせまでご連絡ください',
              btn: '予約する',
              op1: '(7.14)Groupy in 19th FFACG',
              op2: '(7.15)Groupy Live & Fan Meeting',
              op3: '(7.16)Groupy Idol Tour',
              numsTips: 'メールアドレスを入力してください',
              nameTips: 'お名前をご入力ください'
            }
          }
        }
      },
      foucusCount(val,type) {
        if(type == 'name') {
          if(val) {
            this.nameIsNone = false;
          }else {
            this.nameIsNone = true;
          }
        }
        if(type == 'nums') {
          if(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(val)) {
            this.phoneIsNone = false;
          }else {
            this.phoneIsNone = true;
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
              showsDescription:'Groupy Idol Festival July 2018',
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
              showsDescription:'Groupy Idol Festival July 2018',
              firstName: self.Sname,
              phone: self.Snums,
              email: self.Snums,
              nums: 888888
            }
          }
          console.log(data_)
          if(self.Sname && self.Snums && canPush) {
            http.post('/shows/applyOffical',JSON.stringify(data_))
            .then(function(res){
              self.idx++;
              if(self.lan === 'zh-cn') {
                alert('信息登记成功！请前往淘宝自行购票～');
                window.location.href='https://shop323210088.taobao.com';
              }else{
                console.log(res)
                self.toast = '予約しました！';
                alert('予約しました！');
                // location.reload();
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
          window.open('https://shop323210088.taobao.com','_blank');
        }else {
          $("html, body").animate({
            scrollTop: $('#warning').offset().top - 100 + "px"
            }, 1500);
          // window.open('mailto: contact@groupy.vip');
          // this.reservationShow = true;
          // this.navWindowShow = false;
          // $('html, body').addClass('nav_open');
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
      window.setupWebViewJavascriptBridge(function(bridge) {
          bridge.callHandler('setTitle', {'title':'Groupy Idol Festival May 2018~in広州~'})
      })
      let ua = navigator.userAgent.toLowerCase();
      let _lan = (navigator.browserLanguage || navigator.language).toLowerCase();
      this.lan = _lan;
      this.changeInfo();
    }
  }
</script>
