<template>
  <div class="idolGroup_group">
    <!-- content -->
    <h2 class="page-title animated fadeIn"><b>团队介绍</b><br><small>Introduce</small></h2>
    <div class="idol-content">
      <div v-if="idolInfo.title">
        <h3 class="group-title  animated fadeIn">{{idolInfo.title}}</h3>
        <a target="_black" :href="'https://twitter.com/intent/user?user_id='+idolInfo.idolList[0].snsUidTw" v-if="idolInfo.idolList.length == 1 && idolInfo.idolList[0].snsUidTw" class="idol-sns idol-sns-desc"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_twitter.png"></a>
        <a target="_black" :href="'https://weibo.com/u/'+idolInfo.idolList[0].snsUidWeibo" v-if="idolInfo.idolList.length == 1 && idolInfo.idolList[0].snsUidWeibo" class="idol-sns idol-sns-desc"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_weibo.png"></a>
        <p class="group-title2  animated fadeIn" v-html="TransferString(idolInfo.introduce)"></p>
        <img v-lazy="TransSrc(idolInfo.img)" class="group-img  animated fadeIn">
        <div class="group-idol  animated fadeIn" v-if="idolInfo.idolList && idolInfo.idolList.length > 0"><span></span><em>入驻爱豆</em><span></span></div>
        <ul class="group-list" v-if="idolInfo.idolList && idolInfo.idolList.length > 0">
          <li class="list-content  animated fadeIn" v-for="idol in idolInfo.idolList">
              <a :href="'http://share.groupy.vip/html/idol/index.html?idolId=' + idol.id" class="group-logo"><span :style="'background-image:url('+ TransSrc(idol.avatar) +');'"></span></a>
              <div class="group-desc">
                <a :href="'http://share.groupy.vip/html/idol/index.html?idolId=' + idol.id" class="group-name">{{idol.nickname}}</a>
                <a :href="'http://share.groupy.vip/html/idol/index.html?idolId=' + idol.id" class="group-info" v-html="TransferString(idol.introduce)"></a>
                <!-- <a v-if="idol.snsUidTw" target="_black" :href="'https://twitter.com/intent/user?user_id='+idol.snsUidTw" class="idol-sns"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_twitter.png"></a> -->
                <!-- <a v-if="idol.sns_uid_fb" target="_black" :href="'https://facebook.com/'+idol.sns_uid_fb" class="idol-sns"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_facebook.png"></a> -->
                <!-- <a v-if="idol.snsUidWeibo" target="_black" :href="'https://weibo.com/u/'+idol.snsUidWeibo" class="idol-sns"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_weibo.png"></a> -->
              </div>
          </li>
        </ul>
      </div>
      <div class="groupy-default animated fadeIn"  v-if="!idolInfo.title && index == 1">
        <img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_default_1.png">
        <p>网络错误，请稍后重试！</p>
      </div>
    </div>
    <!-- <div class="goIndex"><router-link to="/index?type=Japan">日本爱豆</router-link><router-link to="/index?type=China">中国爱豆</router-link></div> -->
    <div class="group-btns group-translateX"><router-link :to="'/index?type='+type" data-hover="团队列表"><span>&lt;&nbsp;&nbsp;团队列表</span></router-link></div>
  </div>
</template>
<script>
import http from '@api/js/http.js';
export default {
  name: 'idolGroup_group',
  data () {
    return {
      idolList1:[],
      idolList2:[],
      index: 0,
      lan: '',
      id: '',
      type: 'Japan',
      text: {
        index: 'ホーム',
        index2: '配信アイドル',
        eventTitle: '基本情報',
        idols: '配信アイドル',
        errMsg: 'エラーが発生しました，しばらくしてからもう一度お試しください',
        japan: '日本人アイドル',
        china: '中国人アイドル'
      },
      idol: {},
      idolInfo: {
        title: '',
        introduce: '',
        img: '',
        idolList: []
      },
    }
  },
  methods: {
    TransSrc(content) {
     let string = content;
     try{
        string=string.replace(/http:/g,"https:")
     }catch(e) {
        console.log(e.message);
     }
     return string;
    },
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
    getGroupInfo(id) {
      let self = this;
      http.get('https://api.groupy.vip/group/lists?id='+ self.$route.query.id).then(function(res){
        if(res.data.length>0){
          self.index = 1;
          let idol = res.data[0];
          self.idol = idol;
          self.idolInfo = {
            title: idol.nameChinese,
            introduce: idol.introduceChinese,
            img: idol.logo,
            idolList: idol.idol
          }
        }else {
          self.idolInfo = {
            title: '',
            introduce: '',
            img: '',
            idolList: []
          }
        }

      }).catch(function(err){
        self.idolInfo = {
          title: '',
          introduce: '',
          img: '',
          idolList: []
        }
      })
    },
  },
  created: function() {
    this.type = this.$route.query.type;
    this.getGroupInfo();
  }
}
</script>
