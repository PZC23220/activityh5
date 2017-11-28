<template>
    <div class="main">
         <div class="content">
            <img v-if="isOver" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-subwayAds_preliminaries-over.jpg" class="banner">
            <img v-else src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-subwayAds_preliminaries.jpg" class="banner">
            <h2>{{activity.theme}}</h2>
            <p class="share-sns" v-if="isFans"><span @click="shareSns('share_facebook')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_facebook_1.png"><i>シェア</i></span><span @click="shareSns('share_twitter')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_twitter_1.png"><i>ツイート</i></span></p>
            <div class="activity_rule">
                <p>上位5名かつ50万Like達成のユニットは決勝への参加権を獲得！さらに、Groupyアプリの起動画面に登場して貰います。。</p>
            </div>
            <div class="activity_rule">
                <h4>{{activity.desc.title}}</h4>
                <p v-html="activity.desc.p1"></p>
                <p v-html="activity.desc.p2"></p>
                <p v-html="activity.desc.p3"></p>
                <p v-html="activity.desc.p4"></p>
                <p v-html="activity.desc.p5"></p>
                <p v-html="activity.desc.p6"></p>
                <p v-html="activity.desc.p7"></p>
                <p v-html="activity.desc.p8"></p>
                <!-- <p v-html="activity.rule.p3"></p> -->
            </div>
            <div class="activity_time">
                <h4>予選期間</h4>
                <div class="duration_time">
                    <p><span>{{activity.start}}</span><i>2017年12月1日（金） 00:00:00</i></p>
                    <p><span>{{activity.end}}</span><i>2017年12月5日（火） 23:59:59</i></p>
                </div>
            </div>
            <ul class="activity_reward">
                <h4>{{activity.award}}</h4>
                <li>
                    <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/icon_1.png">
                    <div class="reward_desc">
                        <p><span></span><i>{{activity.rewards[0].p1}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p2}}</i></p>
                        <p><i style="color: #42A9DE;">{{activity.rewards[0].p3}}</i></p>
                    </div>
                </li>
            </ul>
            <div class="activity_rule">
                <h4>{{activity.rule.title}}</h4>
                <p v-html="activity.rule.p1"></p>
                <p v-html="activity.rule.p2"></p>
                <p v-html="activity.rule.p4"></p>
            </div>
            <div class="activity_rule">
                <h4>{{activity.fansrule.title}}</h4>
                <p v-html="activity.fansrule.p1"></p>
                <p v-html="activity.fansrule.p2"></p>
                <p v-html="activity.fansrule.p3"></p>
            </div>
            <div class="activity_rule">
                <h4>{{activity.warning.title}}</h4>
                <p v-html="activity.warning.p1"></p>
            </div>
            <div class="activity_ranking" v-if="isFans">
                <h4>{{activity.rewardList}}</h4>
                <p class="no_ranking" v-if="ranking.length<0 && loadingShow">{{activity.noRanking}}</p>
                <ul class="ranking_list">
                    <div class="none_loading" :class="{'none_loading_show': loadingShow}">
                        <li>
                            <span class="first">1</span>
                            <div class="img_content"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/default_img/default_img.png" class="avatar"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_1.png" class="crown"></div>
                            <div class="idol_content">
                                <span>idolName</span>
                                <div class="idol_desc">
                                    <!-- <p><span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png"><em>0</em></span><i>{{activity.Gcoin}}</i></p> -->
                                    <p><span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_likes.png"><em>0</em></span><!-- <i>{{activity.like}}</i> --></p>
                                    <p><span><em>0</em></span><i>{{activity.works}}</i></p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span class="second">2</span>
                            <div class="img_content"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/default_img/default_img.png" class="avatar"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_2.png" class="crown"></div>
                            <div class="idol_content">
                                <span>idolName</span>
                                <div class="idol_desc">
                                    <!-- <p><span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png"><em>0</em></span><i>{{activity.Gcoin}}</i></p> -->
                                    <p><span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_likes.png"><em>0</em></span><!-- <i>{{activity.like}}</i> --></p>
                                    <p><span><em>0</em></span><i>{{activity.works}}</i></p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span class="second">3</span>
                            <div class="img_content"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/default_img/default_img.png" class="avatar"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_3.png" class="crown"></div>
                            <div class="idol_content">
                                <span>idolName</span>
                                <div class="idol_desc">
                                    <!-- <p><span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png"><em>0</em></span><i>{{activity.Gcoin}}</i></p> -->
                                    <p><span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_likes.png"><em>0</em></span><!-- <i>{{activity.like}}</i> --></p>
                                    <p><span><em>0</em></span><i>{{activity.works}}</i></p>
                                </div>
                            </div>
                        </li>
                    </div>
                    <li v-for="(idol,key) in ranking" v-if="ranking.length > 0 && key < 5">
                        <span :class="[{'first':key == 0},{'second':key == 1},{'three':key > 1}]">{{key+1}}</span>
                        <div class="img_content"><img v-lazy="idol.orgLogo?idol.orgLogo:idol.avatar" class="avatar"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_1.png" class="crown" v-if="key == 0"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_2.png" class="crown" v-if="key == 1"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_3.png" class="crown" v-if="key > 1"></div>
                        <div class="idol_content">
                            <span>{{idol.orgName?idol.orgName:idol.nickname}}</span>
                            <div class="idol_desc">
                                <!-- <p><span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png"><em>{{Number(idol.gcoin?idol.gcoin:0).toLocaleString()}}</em></span><i>{{activity.Gcoin}}</i></p> -->
                                <p><span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_likes.png"><em>{{Number(idol.totalPopularity?idol.totalPopularity:0).toLocaleString()}}</em></span><!-- <i>{{activity.like}}</i> --></p>
                                <p><span><em>{{Number(idol.totalVideoCount?idol.totalVideoCount:0).toLocaleString()}}</em></span><i>{{activity.works}}</i></p>
                            </div>
                        </div>
                    </li>
                    <li v-if="ranking.length <= 0" style="text-align: center;">集計中...</li>
                    <router-link to="/top10" class="reard_more" v-if="ranking.length > 0">{{activity.more}}</router-link>
                </ul>
            </div>
         </div>
    </div>
</template>
<style type="text/css">
    .content {
        background: #f6fcff;
    }
    h2 {
        background: #42A9DE;
    }
    h4 {
        background-image: linear-gradient(-46deg,   #42A9DE 0%, #8DD0F3 100%);
    }
    .activity_reward li {
        background: #F1FAFF;
border: 1px solid #B8CAD4;
    }
    .activity_rule p i {
        color: #42A9DE;
    }
</style>
<script>
    import http from '@api/js/http.js';
    require('@api/js/common.js')
    export default {
        data() {
            return {
                ranking: [],
                me: {},
                idx: 0,
                idx2: 0,
                loadingShow: false,
                isOver: false,
                havedMe: false,
                activity: {
                    theme:'#アイドル応援企画#',
                    time: 'イベント期間',
                    start: '開始日時',
                    end: '終了日時',
                    rewardList: 'ランキング',
                    works: '作品',
                    videos: '参加作品一覧',
                    noRanking: '集計中',
                    award: '特典',
                    me: '自分の順位',
                    all: '全体ランキング',
                    more: 'もっと見る',
                    rule: {
                        title: '参加方法',
                        p1: '1. イベント期間中、「#Groupy広告モデル」タグをつけて投稿してください。投稿内容は自由です。',
                        p2: '2.イベント期間中は、動画を何本投稿しても問題ありません。',
                        p4: '<i>※投稿する際、タグ欄からタグを選択してください。入力のタグは認識されないのでご注意ください。</i>'
                    },
                    desc: {
                        title: '掲載について',
                        p1: '中国広州の地下鉄は、一日700万人以上が利用し、全市人口の65.8%を占めています！',
                        p2: 'その中、広州で最も有名な観光スポットである広州タワーの下にあることから、命名された「広州タワー駅」にて、Groupyが広告出稿決定！',
                        p3: '広州タワーは広州のCBD(中心業務地区)として地元の人だけではなく、海外観光客も多い！1日40万人が通過するところにあなたのグループの写真が掲載されちゃいます！',
                        p4: 'ただいま、広告モデルを募集しております！',
                        p5: '中国の多くの人々に知ってもらえるこの大チャンスをぜひつかんでくだい！',
                        p6: '<i>※掲載期間：2018年1月1日～2018年1月31日</i>',
                        p7: '<i>※掲載場所：広州地下鉄3号線広州塔駅</i>',
                        p8: '<i>※サイズ：高さ1,520mm × 幅3,020mm</i>'
                    },
                    obj: {
                        title: '対象',
                        p1: '予選ランキング上位5名かつ50万Like達成のユニット・ソロアイドル'
                    },
                    fansrule: {
                        title: '集計方法',
                        p1: '1.ユニット全員の参加動画のLike数の合計によってランキングが決まります（ソロの方も参加可能）。',
                        p2: '2. ランキングはイベント詳細ページにリアルタイムで確認できます。',
                        p3: '3.イベント期間外は、<i>「#Groupy広告モデル」</i>をつけて投稿しても集計されません。'
                    },
                    warning: {
                        title: '注意事項',
                        p1: '予選結果はイベント予選期間終了日の翌日にGroupyアプリおよび公式Twitter @GGroupyyy にて発表いたします。'
                    },
                    rewards: [{
                        p1: '予選ランキング上位5名かつ50万Like達成のユニット・ソロアイドル：決勝への参加権を獲得',
                        p2: '50万Like達成のユニット・ソロアイドル：アプリの起動画面に登場（期間は1日間となります）',
                        p3: '※今回のイベントは、ユニット全員のLike数を合算した集計となりますがソロの方も参加可能です。',
                    }]
                },
                isFans: true,
                showsStart: false,
                activityInfo: {}
            }
        },
        methods: {
            shareSns(val) {
                var self = this;
                if(location.hostname == 'activity.groupy.vip') {
                    var shareURL = `http://share.groupy.vip/html/activity_subwayAds_preliminaries/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }else {
                    var shareURL = `http://share.groupy.cn/html/activity_subwayAds_preliminaries/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }
                var title = `【Groupy駅看板モデル選定企画-予選】`;
                var description = `上位5名＆50万Like達成のユニットは決勝に参加！動画がいっぱい投稿されているので、応援しよう。`;
                var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-subwayAds_preliminaries.jpg`;
                console.log(shareURL)
                window.setupWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler(val, {'title':title,'description':description,'shareImg':shareImg,'shareURL':shareURL})
                })
            },
            getList(token) {
                let self = this;
                let _lan = (navigator.browserLanguage || navigator.language).toLowerCase();
                if(self.idx < 2) {
                    http.get('/ranking/idolActVideoByOrganzation',{
                        params: {
                            activityId:getParams('activityId')
                        }
                    }).then(function(res){
                        console.log(res)
                        self.ranking = res.data.ranking;
                        if(res.data.isActivityEnded) {
                            self.isOver = true;
                        }else {
                            self.isOver = false;
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
            }
        },
        mounted() {
        },
        created() {
            if(getParams('isFans') == 1) {
                this.isFans = false;
            }else {
                this.isFans = true;
            }
            this.getList();
        }
    }
</script>