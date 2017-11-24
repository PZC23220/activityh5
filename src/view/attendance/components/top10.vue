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
                        <span class="avatar"><img v-lazy="ranking.length>0?ranking[0].avatar:'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/default_img/default_img.png'"></span>
                        <div class="name">{{ranking.length>0?(ranking[0].nickname?ranking[0].nickname:'...'):'メロメロン'}}</div>
                        <div class="idol_desc">
                            <p><span>{{Number(ranking.length>0?(ranking[0].videoCount?ranking[0].videoCount:0):0).toLocaleString()}}</span><i>フォロワー</i></p>
                            <p><span>{{Number(ranking.length>0?(ranking[0].videoCount?ranking[0].videoCount:0):0).toLocaleString()}}</span><i>守護者</i></p>
                            <p><span>{{Number(ranking.length>0?(ranking[0].videoCount?ranking[0].videoCount:0):0).toLocaleString()}}</span><i>Likes</i></p>
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
                activityInfo:{}
            }
        },
        methods: {
            shareSns(val) {
                var self = this;
                if(location.hostname == 'activity.groupy.vip') {
                    var shareURL = `http://share.groupy.vip/html/activity_attendance/index.html`;
                }else {
                    var shareURL = `http://share.groupy.cn/html/activity_attendance/index.html`;
                }
                var title = `【Groupy皆勤賞】`;
                var description = `11月の皆勤賞が発表されました。今すぐ確認しましょう。＃Groupy `;
                var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-attendance.jpg`;
                window.setupWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler(val, {'title':title,'description':description,'shareImg':shareImg,'shareURL':shareURL})
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
            this.getList();
        }
    }
</script>
<style type="text/css" lang="scss" scoped>
     @import "../../../css/idol_activity_top10.scss";
     .content {
        background: #fffbfb;
     }
     .avatar {
        width: 90px;
        min-height: 90px;
        display: block;
        float: none;
        margin: 0 auto;
        border: 2px solid #ff3e84;
        img {
            width: 90px;
        }
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
        padding-left: 9px;
        padding-top: 9px;
        .ranking-idol-content {
            padding: 15px 12px;
            background: #FFFBFB;
            width: calc(100vw - 36px);
            box-sizing: border-box;
            position: absolute;
            top: 0;left: 0;
            border: 1px solid #FC4083;
            box-shadow: 0 2px 13px 0 rgba(252,64,131,0.18);
            border-radius: 5px;
        }
        &:first-child .ranking-idol-content {
            background: #FFFBFB;
        }
        &:first-child .name {
            color: #FC4083;
                margin-top: 10px;
        }
        &:first-child .idol_desc {
            margin-top: 12px;
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
              color: #999;
              margin-top: 2px;
            }
        }
     }
</style>