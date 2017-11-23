<template>
    <div class="main">
        <div class="content">
            <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-attendance.jpg" class="banner">
            <p class="share-sns"><span @click="shareSns('share_facebook')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_facebook_1.png"><i>シェア</i></span><span @click="shareSns('share_twitter')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_twitter_1.png"><i>ツイート</i></span></p>
            <img class="attendance-title" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-attendance-title.png" alt="">
            <p class="attendance-desc">Groupyアプリおよび公式Twitter @GGroupyyy にて発表されます。<br>※アプリでの掲載期間は一週間となります。</p>
            <ul class="ranking_list">
                <li>
                    <div class="ranking-idol-content" @click="isFans&&ranking.length>0?(ranking[0].idol_id?showIdolPage(ranking[0].idol_id):false):false">
                        <div class="img_content">
                            <span class="avatar"><img v-lazy="ranking.length>0?ranking[0].avatar:'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/default_img/default_img.png'"></span>
                        </div>
                        <div class="name">{{ranking.length>0?(ranking[0].nickname?ranking[0].nickname:'...'):'...'}}</div>
                        <div class="idol_desc">
                            <p><span>{{Number(ranking.length>0?(ranking[0].videoCount?ranking[0].videoCount:0):0).toLocaleString()}}</span><i>{{activity.works}}</i></p>
                            <p><span>{{Number(ranking.length>0?(ranking[0].videoCount?ranking[0].videoCount:0):0).toLocaleString()}}</span><i>{{activity.works}}</i></p>
                            <p><span>{{Number(ranking.length>0?(ranking[0].videoCount?ranking[0].videoCount:0):0).toLocaleString()}}</span><i>{{activity.works}}</i></p>
                        </div>
                    </div>
                    <img class="attendance-bg" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-attendance-bg.png" alt="">
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
            shareSns(val) {
                var self = this;
                if(self.isFans) {
                    if(location.hostname == 'activity.groupy.vip') {
                        var shareURL = `http://share.groupy.vip/html/activity_subwayAds/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                    }else {
                        var shareURL = `http://share.groupy.cn/html/activity_subwayAds/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                    }
                    var title = `【Groupy駅看板モデル選定企画】`;
                    var description = `中国広州大型駅看板モデル選定企画に応募しました。予選は12月1日から、応援してね`;
                    var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-books.jpg`;
                }else {
                    if(location.hostname == 'activity.groupy.vip') {
                        var shareURL = `http://share.groupy.vip/html/activity_subwayAds/index.html?activityId=${getParams('activityId')}&isFans=1`;
                    }else {
                        var shareURL = `http://share.groupy.cn/html/activity_subwayAds/index.html?activityId=${getParams('activityId')}&isFans=1`;
                    }
                    var title = `【Groupy駅看板モデル選定企画】`;
                    var description = `中国広州大型駅看板モデルを募集中！推しメンを招待して大活躍のキッカケを作ってあげよう！`;
                    var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-books.jpg`;
                }
                window.setupWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler(val, {'title':title,'description':description,'shareImg':shareImg,'shareURL':shareURL})
                })
            },
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
                    if(res.data.isActivityEnded) {
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
            this.getList();
        }
    }
</script>
<style type="text/css" lang="scss" scoped>
     @import "../../../css/idol_activity_top10.scss";
     .content {
        background: #fffbfb;
     }
     .attendance-title {
        width: 76vw;
        display: block;
        margin: 10px auto 5px;
     }
     .attendance-desc {
        color: #F4564D;
        font-size: 14px;
        width: 76vw;
        margin: 0 auto;
        text-align: center;
     }
     .ranking_list li {
        position: relative;
        border: none;
        padding-left: 10px;
        padding-top: 10px;
        .ranking-idol-content {
            padding: 12px;
            background: #FFFBFB;
            width: calc(100vw - 36px);
            box-sizing: border-box;
            position: absolute;
            top: 0;left: 0;
            border: 1px solid #FC4083;
            box-shadow: 0 1px 7.5px 0 rgba(252,64,131,0.18);
            border-radius: 5px;
        }
        &:first-child .ranking-idol-content {
            background: #FFFBFB;
        }
        .attendance-bg {
            width: 100%;
        }
        .idol_desc p{
            &:first-child span em {
                color: #666;
            }
            span {
                display: block;
                text-align: center;
                font-size: 18px;
                font-weight: 600;
            }
            i {
              display: block;
              text-align: center;
              margin-left: 0;
            }
        }
     }
</style>