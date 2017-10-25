<template>
    <div class="main">
        <div class="content">
            <img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/acticity_banner/activity-halloween.jpg" class="banner">
            <h2><span style="left: 0;"></span>{{activity.theme}}<span style="right: 0;"></span></h2>
            <ul class="ranking_list">
                <li>
                    <div class="ranking-idol-content" @click="isFans&&ranking.length>0?(ranking[0].idol_id?showIdolPage(ranking[0].idol_id):false):false">
                        <div class="img_content">
                            <img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/crown_metal/icon_crown_1.png" class="crown">
                            <img v-lazy="ranking.length>0?ranking[0].avatar:'http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/default_img/default_img.png'" class="avatar">
                            <img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/activity/pic_ranking_1.png" class="ranking_pic">
                            <span class="idol_level">NO.1</span>
                        </div>
                        <div class="name">{{ranking.length>0?(ranking[0].nickname?ranking[0].nickname:'...'):'...'}}</div>
                        <div class="idol_desc">
                            <p><span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/icon/timeline_icon_likes.png"><em>{{Number(ranking.length>0?(ranking[0].popularity?ranking[0].popularity:0):0).toLocaleString()}}</em></span></p>
                            <p><span><em>{{Number(ranking.length>0?(ranking[0].videoCount?ranking[0].videoCount:0):0).toLocaleString()}}</em></span><i>{{activity.works}}</i></p>
                        </div>
                    </div>
                    <div class="ranking-fans-content" v-if="ranking.length>0">
                        <div class="ranking-idol" v-for="(fans,key) in ranking[0].topFansList" v-if="key < 3"><p class="avatar-content"><img :src="'http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/crown_metal/ranking_'+ (key+1) +'.png'"><img :src="fans.avatar?fans.avatar: 'http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/default_img/default_img.png'"></p><p class="idolName-content"><span>{{fans.nickname?fans.nickname:'...'}}</span><span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/icon/timeline_icon_likes.png"><i>{{Number(fans.score?fans.score:0).toLocaleString()}}</i></span></p></div>
                    </div>
                    <div class="fans-likes-ranking" v-if="ranking.length>0?ranking[0].topFansList:false"><router-link :to="'/fans_ranking?idolId='+ranking[0].idol_id">応援ランキング</router-link></div>
                    <!-- <div class="reard_moer" v-if="isFans" @click="ranking.length>0?(ranking[0].idol_id?showIdolPage(ranking[0].idol_id):false):false">{{activity.idolPage}}</div> -->
                </li>
                <li v-for="(idol,key) in ranking" v-if="isOver?(key>0&key<3):key>0">
                    <div class="ranking-idol-content" @click="isFans&&idol.idol_id?showIdolPage(idol.idol_id):false">
                        <div class="idolranking_content">
                            <div class="img_content">
                                <img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/crown_metal/icon_crown_3.png" class="crown">
                                <img v-lazy="idol.avatar" class="avatar">
                                <img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/activity/pic_ranking_2.png" class="ranking_pic">
                                <span class="idol_level">NO.{{key+1}}</span>
                            </div>
                            <div class="idol_content">
                                <div class="name">{{idol.nickname?idol.nickname:'...'}}</div>
                                <div class="idol_desc">
                                    <p><span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/icon/timeline_icon_likes.png"><em>{{Number(idol.popularity?idol.popularity:0).toLocaleString()}}</em></span></p>
                                    <p><span><em>{{Number(idol.videoCount?idol.videoCount:0).toLocaleString()}}</em></span><i>{{activity.works}}</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ranking-fans-content">
                        <div class="ranking-idol" v-for="(fans,key) in idol.topFansList" v-if="key < 3"><p class="avatar-content"><img :src="'http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/crown_metal/ranking_'+ (key+1) +'.png'"><img :src="fans.avatar?fans.avatar: 'http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/default_img/default_img.png'"></p><p class="idolName-content"><span>{{fans.nickname?fans.nickname:'...'}}</span><span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/icon/timeline_icon_likes.png"><i>{{Number(fans.score?fans.score:0).toLocaleString()}}</i></span></p></div>
                    </div>
                    <div class="fans-likes-ranking" v-if="idol.topFansList"><router-link :to="'/fans_ranking?idolId='+idol.idol_id">応援ランキング</router-link></div>
                    <!-- <div class="reard_moer" v-if="isFans" @click="idol.idol_id?showIdolPage(idol.idol_id):false">{{activity.idolPage}}</div> -->
                </li>
            </ul>
            <div class="read_videos" v-if="isFans && isOver" @click="toVideoList()">{{activity.videos}}</div>
        </div>
    </div>
</template>
<script>
    import http from '@api/js/http.js';
    require('@api/js/common.js')
    export default {
        data() {
            return {
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
                bridge.callHandler('activity_videos', {'activityId':self.activityInfo.id,'activityName':self.activityInfo.title})
            })
          },
          getList() {
            let self = this;
            let _lan = (navigator.browserLanguage || navigator.language).toLowerCase();
            if(self.idx < 2) {
                http.get('/video/activityIdols',{
                    params: {
                        activityId:getParams('activityId'),
                        rows: 10
                    }
                }).then(function(res){
                    console.log(res)
                    self.ranking = res.data.ranking;
                    self.me = res.data.self;
                    self.loadingShow = true;
                    var timeString = Date.parse(new Date());
                    self.activityInfo = res.data.activityInfo;
                    if(res.data.activityInfo.startTime > timeString || res.data.activityInfo.endTime < timeString) {
                        self.isOver = true;
                    }else {
                        self.isOver = false;
                    }
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
</style>