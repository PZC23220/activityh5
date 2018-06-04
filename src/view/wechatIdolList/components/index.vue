<template>
  <div class="idolGroup_index">
    <!-- content -->
    <h2 class="page-title"><b>入驻爱豆 - {{type == 'China'? '中国' : '日本'}}</b><br><small>Idol Group - {{type == 'China'? 'China' : 'Japan'}}</small></h2>
    <div class="idol-content">
        <!-- anthors -->
          <swiper :options="swiperOption2" ref="groupSwiper2" class="swiper-content">
            <swiper-slide class="banner-slides" v-for="(team,index1) in idolList1" :key="index1" v-if="index1%5 == 0">
              <ul class="group-list">
                <li class="list-content" v-for="(idol,$index) in idolList1" :key="$index" v-if="($index >= index1) && ($index < index1+5)">
                    <router-link :to="'/group?id='+idol.id" class="group-logo"><span :style="'background-image:url('+ idol.smallLogo +');'"></span></router-link>
                    <div class="group-desc">
                      <router-link :to="'/group?id='+idol.id" class="group-name">{{idol.nameChinese}}</router-link>
                      <router-link :to="'/group?id='+idol.id" class="group-info" v-html="TransferString(idol.introduceChinese)"></router-link>
                    </div>
                </li>
              </ul>
            </swiper-slide>
          </swiper>
          <div class="group-page group-page1" v-if="idolList1.length > 0"><span v-for="(team,index1) in idolList1" :key="index1" v-if="index1%5 == 0" :class="{'active':index1 == 0}" @click="changeSwipers2(index1/5)">{{index1/5+1}}</span></div>
          <div class="groupy-default"  v-if="idolList1.length <= 0 && idx == 1">
            <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_default_1.png">
            <p>网络错误，请稍后重试！</p>
          </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import $ from  'n-zepto'
import http from '@api/js/http.js';
export default {
  name: 'idolGroup_index',
  data () {
    return {
      idolList1:[],
      idolList2:[],
      len1: 0,
      len2: 0,
      idx: 0,
      type: 'Japan',
      swiperOption2: {
        setWrapperSize :true,
        grabCursor: true,
        speed:500,
        onTransitionStart(groupSwiper2){
            $('.group-page1 span').removeClass('active')
            $('.group-page1 span').eq(groupSwiper2.activeIndex).addClass('active');
        }
      },
      text: {
        index: 'ホーム',
        eventTitle: '配信アイドル',
        errMsg: 'エラーが発生しました，しばらくしてからもう一度お試しください'
      }
    }
  },
  methods: {
    TransferString(content) {
     let string = content;
     try{
        string=string.replace(/\r\n/g,"<br>")
        string=string.replace(/\n/g,"<br>");
     }catch(e) {
        console.log(e.message);
     }
     return string;
    },
    changeSwipers2(val) {
      let tabs = $('.group-page1 span');
      tabs.removeClass('active');
      tabs.eq(val).addClass('active');
      this.groupSwiper2.slideTo(val, 500, false)
    },
    getGroupList(type) {
      let self = this;
      http.get(`http://api.groupy.vip/group/getListToWeb?type=${type}`).then(function(res){
        self.idx = 1;
        if(res.data.orgList){
          self.idolList1 = res.data.orgList;
          self.len1 = res.data.count;
        }else {
          self.idolList1 = [];
          self.len1 = 0;
        }

      }).catch(function(err){
        self.idx = 1;
        self.idolList1 = [];
        self.len1 = 0;
      })
    },
  },
  computed: {
    groupSwiper2() {
      return this.$refs.groupSwiper2.swiper
    },
  },
  created: function() {
    this.type = this.$route.query.type;
    if(this.$route.query.type == 'China') {
      this.getGroupList('China');
    }else {
      this.getGroupList('Japan');
    }
  }
}
</script>
