<template>
    <div class="main">
        <div class="content">
            <img v-if="isOver" src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-ffacg201807_preliminaries-over.jpg" class="banner">
            <img v-else src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-ffacg201807_preliminaries.jpg" class="banner">
            <h2 class="box" style="width: 155px;" v-if="isOver"><span style="left: 0;"></span>入賞アイドル<span style="right: 0;"></span></h2>
            <h2 class="box" v-else><span style="left: 0;"></span>{{activity.theme}}<span style="right: 0;"></span></h2>
            <ul class="ranking_list">
                <li class="box">
                    <div class="ranking-idol-content" @click="isFans&&ranking.length>0?(ranking[0].idol_id?showIdolPage(ranking[0].idol_id):false):false">
                        <div class="img_content">
                            <img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_1.png" class="crown">
                            <span class="avatar"><img v-lazy="ranking.length>0?(ranking[0].orgLogo?ranking[0].orgLogo:ranking[0].avatar):'https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/default_img/default_img.png'"></span>
                            <img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/pic_ranking_1.png" class="ranking_pic">
                            <span class="idol_level">NO.1</span>
                        </div>
                        <div class="name">{{ranking.length>0?(ranking[0].orgName?ranking[0].orgName:ranking[0].nickname):'...'}}</div>
                        <div class="idol_desc">
                            <p><span><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_likes.png"><em>{{Number(ranking.length>0?(ranking[0].popularity?ranking[0].popularity:0):0).toLocaleString()}}</em></span></p>
                            <p><span><em>{{Number(ranking.length>0?(ranking[0].videoCount?ranking[0].videoCount:0):0).toLocaleString()}}</em></span><i>{{activity.works}}</i></p>
                        </div>
                    </div>
                </li>
                <li class="box" v-for="(idol,key) in ranking" v-if="isOver?(key > 0 && key < 3):key > 0">
                    <div class="ranking-idol-content" @click="isFans&&idol.idol_id?showIdolPage(idol.idol_id):false">
                        <div class="idolranking_content">
                            <div class="img_content">
                                <img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_3.png" class="crown">
                                <span class="avatar"><img v-lazy="idol.orgLogo?idol.orgLogo:idol.avatar"></span>
                                <img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/pic_ranking_2.png" class="ranking_pic">
                                <span class="idol_level">NO.{{key+1}}</span>
                            </div>
                            <div class="idol_content">
                                <div class="name">{{idol.orgName?idol.orgName:idol.nickname}}</div>
                                <div class="idol_desc">
                                    <p><span><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_likes.png"><em>{{Number(idol.popularity?idol.popularity:0).toLocaleString()}}</em></span></p>
                                    <p><span><em>{{Number(idol.videoCount?idol.videoCount:0).toLocaleString()}}</em></span><i>{{activity.works}}</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="read_videos" v-if="isFans && isOver" @click="toVideoList()">{{activity.videos}}</div>
        </div>
    </div>
</template>
<script>
    import http from '@api/js/http.js';
    import scrollReveal from  'scrollreveal'
    require('@api/js/common.js')
    export default {
        data() {
            return {
              scrollReveal:scrollReveal(),
                ranking: [],
                idx: 0,
                idx2: 0,
                isFans: false,
                isOver: false,
                activity: {
                    theme: 'ランキング',
                    works: '作品',
                    Gcoin: 'コイン',
                    like: 'Like',
                    videos: '参加作品一覧',
                    idolPage: 'プロフィールへ'
                },
                activityInfo:{}
            }
        },
        methods: {
          toVideoList() {
            var self = this;
            window.setupWebViewJavascriptBridge(function(bridge) {
                bridge.callHandler('activity_videos', {'activityId':self.activityInfo.id,'activityName':self.activityInfo.tag})
            })
          },
          getList() {
            let self = this;
            let _lan = (navigator.browserLanguage || navigator.language).toLowerCase();
            if(self.idx < 2) {
                http.get('/ranking/idolActVideoByOrganzation',{
                    params: {
                        activityId:getParams('activityId'),
                        row: 5
                    }
                }).then(function(res){
                    console.log(res)
                    self.ranking = res.data.ranking;
                    self.activityInfo = res.data.activityInfo;
                    if(res.data.isActivityEnded) {
                        self.isOver = true;
                    }
                    self.loadingShow = true;
                }).catch(function(){
                    self.idx++;
                    self.getList();
                });
            }else {
                 window.setupWebViewJavascriptBridge(function(bridge) {
                    if(_lan === 'zh-cn') {
                        bridge.callHandler('makeToast', '服务器出错，请稍后重试');
                     }else {
                        bridge.callHandler('makeToast', 'エラーが発生しました\nしばらくしてからもう一度お試しください');
                     }
                })
            }
          },
          showIdolPage(val) {
            console.log(val)
            window.setupWebViewJavascriptBridge(function(bridge) {
                bridge.callHandler('showIdolPage', {'idolId': val})
            })
          },
        },
        mounted() {
          this.scrollReveal.reveal('.box', {
            duration: 600,
          });
        },
        created() {
            let isFans = getParams('isFans');
            if(isFans) {
                this.isFans = true;
            }
            let _lan = (navigator.browserLanguage || navigator.language).toLowerCase();
             // if(_lan === 'zh-cn') {
             //     this.activity= {
             //        theme: '当前排名',
             //        works: '参赛视频',
             //        Gcoin: '获得G币',
             //        like: '获得Like',
             //        videos: '查看参赛视频',
             //        idolPage: '查看主页'
             //    }
             //  } else {
             //    this.activity= {
             //        theme: 'ランキング',
             //        works: '作品',
             //        Gcoin: 'コイン',
             //        like: 'Like',
             //        videos: '参加作品一覧',
             //        idolPage: 'プロフィールへ'
             //    }
             //  }
            this.getList();
        }
    }
</script>
<style type="text/css" lang="scss" scoped>
     @import "../../../css/idol_activity_top10.scss";
     .ranking-idol-content {
        margin-bottom: 12px;
     }
</style>
