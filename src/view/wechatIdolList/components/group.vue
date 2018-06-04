<template>
  <div class="idolGroup_group">
    <!-- content -->
    <h2 class="page-title"><b>入驻爱豆</b><br><small>Idol Group</small></h2>
    <div class="idol-content">
      <div v-if="idolInfo.title">
        <h3 class="group-title scrollReveal">{{idolInfo.title}}</h3>
        <a target="_black" :href="'https://twitter.com/intent/user?user_id='+idolInfo.idolList[0].snsUidTw" v-if="idolInfo.idolList.length == 1 && idolInfo.idolList[0].snsUidTw" class="idol-sns idol-sns-desc"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_twitter.png"></a>
        <a target="_black" :href="'https://weibo.com/u/'+idolInfo.idolList[0].snsUidWeibo" v-if="idolInfo.idolList.length == 1 && idolInfo.idolList[0].snsUidWeibo" class="idol-sns idol-sns-desc"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_weibo.png"></a>
        <p class="group-title2 scrollReveal width1000" v-html="TransferString(idolInfo.introduce)"></p>
        <img v-lazy="idolInfo.img" class="group-img scrollReveal">
        <div class="group-idol scrollReveal" v-if="idolInfo.idolList && idolInfo.idolList.length > 1"><span></span><em>入驻爱豆</em><span></span></div>
        <ul class="group-list" v-if="idolInfo.idolList && idolInfo.idolList.length > 1">
          <li class="list-content scrollReveal" v-for="idol in idolInfo.idolList">
              <p class="group-logo"><span :style="'background-image:url('+ idol.avatar +');'"></span></p>
              <div class="group-desc">
                <p class="group-name">{{idol.nickname}}</p>
                <p class="group-info" v-html="TransferString(idol.introduce)"></p>
                <a v-if="idol.snsUidTw" target="_black" :href="'https://twitter.com/intent/user?user_id='+idol.snsUidTw" class="idol-sns"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_twitter.png"></a>
                <!-- <a v-if="idol.sns_uid_fb" target="_black" :href="'https://facebook.com/'+idol.sns_uid_fb" class="idol-sns"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_facebook.png"></a> -->
                <a v-if="idol.snsUidWeibo" target="_black" :href="'https://weibo.com/u/'+idol.snsUidWeibo" class="idol-sns"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/icon_weibo.png"></a>
              </div>
          </li>
        </ul>
      </div>
      <div class="groupy-default"  v-if="!idolInfo.title && index == 1">
        <img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/img_default_1.png">
        <p>网络错误，请稍后重试！</p>
      </div>
    </div>
    <!-- <div class="goIndex"><router-link to="/index?type=Japan">日本爱豆</router-link><router-link to="/index?type=China">中国爱豆</router-link></div> -->
    <div class="group-btns group-translateX"><router-link to="/index?type=Japan" data-hover="日本爱豆"><span>日本爱豆</span></router-link><router-link to="/index?type=China" data-hover="中国爱豆"><span>中国爱豆</span></router-link></div>
  </div>
</template>
<script>
import http from '@api/js/http.js';
import scrollReveal from  'scrollreveal'
export default {
  name: 'idolGroup_group',
  data () {
    return {
      idolList1:[],
      idolList2:[],
      index: 0,
      lan: '',
      id: '',
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
      scrollReveal:scrollReveal(),
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
    getGroupInfo(id) {
      let self = this;
      http.get('http://api.groupy.vip/group/lists?id='+ self.$route.query.id).then(function(res){
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
  mounted() {
    this.scrollReveal.reveal('.scrollReveal', {
      duration: 600,
    });
  },
  computed: {
  },
  created: function() {
    this.getGroupInfo();
  }
}
</script>
