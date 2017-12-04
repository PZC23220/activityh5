<template>
    <div class="main">
        <div class="content">
            <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-attendance.jpg" class="banner">
            <p class="share-sns"><span @click="shareSns('share_facebook')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_facebook_1.png"><i>シェア</i></span><span @click="shareSns('share_twitter')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_twitter_1.png"><i>ツイート</i></span></p>
            <img class="attendance-title" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-attendance-title.png" alt="">
            <p class="attendance-desc">Groupyアプリおよび公式Twitter @GGroupyyy にて発表されます。<br>※アプリでの掲載期間は１ヶ月間となります。</p>
            <ul class="ranking_list">
                <li v-for="(idol,key) in ranking">
                    <div class="ranking-idol-content" @click="idol.idol_id?showIdolPage(idol.idol_id):false">
                        <span class="avatar"><img v-lazy="idol.avatar"></span>
                        <div class="name">{{idol.nickname?idol.nickname:'...'}}</div>
                        <div class="idol_desc">
                            <p><span>{{Number(idol.followedCount?idol.followedCount:0).toLocaleString()}}</span><i>フォロワー</i></p>
                            <p><span>{{Number(idol.fansCount?idol.fansCount:0).toLocaleString()}}</span><i>守護者</i></p>
                            <p><span>{{Number(idol.popularityCount?idol.popularityCount:0).toLocaleString()}}</span><i>Likes</i></p>
                        </div>
                    </div>
                    <img class="attendance-bg" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-attendance-bg.png" alt="">
                </li>
            </ul>
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
                    var shareURL = `http://share.groupy.vip/html/activity_attendance/index.html?startDate=${getParams('startDate')}&endDate=${getParams('endDate')}`;
                }else {
                    var shareURL = `http://share.groupy.cn/html/activity_attendance/index.html?startDate=${getParams('startDate')}&endDate=${getParams('endDate')}`;
                }
                var title = `【Groupy皆勤賞】`;
                var description = `${getParams('month')}月の皆勤賞が発表されました。今すぐ確認しましょう。＃Groupy `;
                var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-attendance.jpg`;
                window.setupWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler(val, {'title':title,'description':description,'shareImg':shareImg,'shareURL':shareURL})
                })
            },
          getList() {
            let self = this;
            let _lan = (navigator.browserLanguage || navigator.language).toLowerCase();
            if(self.idx < 2) {
                let startDate = getParams('startDate');
                let endDate = getParams('endDate');
                let dateCount = getParams('dateCount');
                http.get('/ranking/idolVideoAttendance',{
                    params: {
                        startDate:startDate,
                        endDate: endDate,
                        dateCount: dateCount
                        // dateCount: 1,
                    }
                }).then(function(res){
                    self.ranking = res.data;
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