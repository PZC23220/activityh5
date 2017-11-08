<template>
    <div class="main">
         <div class="content">
            <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-books-over.png" class="banner">
            <h2>{{activity.theme}}</h2>
            <p class="share-sns" v-if="isFans"><span @click="shareSns('share_facebook')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_facebook_1.png"><i>シェア</i></span><span @click="shareSns('share_twitter')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_twitter_1.png"><i>ツイート</i></span></p>
            <div class="activity_rule">
                <h4>{{activity.desc.title}}</h4>
                <p v-html="activity.desc.p1"></p>
                <p v-html="activity.desc.p2"></p>
                <p v-html="activity.desc.p3"></p>
                <p v-html="activity.desc.p4"></p>
                <p v-html="activity.desc.p5"></p>
                <p v-html="activity.desc.p6"></p>
                <p v-html="activity.desc.p7"></p>
            </div>
            <div class="activity_time">
                <h4>{{activity.times}}</h4>
                <div class="duration_time">
                    <p><span>{{activity.start}}</span><i>2017年11月8日（水） 00:00:00</i></p>
                    <p><span>{{activity.end}}</span><i>2017年11月30日（木） 23:59:59</i></p>
                </div>
            </div>
            <div class="activity_rule">
                <h4>{{activity.rule.title}}</h4>
                <p v-html="activity.rule.p1"></p>
                <p v-html="activity.rule.p2"></p>
            </div>
            <div class="activity_time">
                <h4>{{activity.time}}</h4>
                <div class="duration_time">
                    <p><i>予選：</i></p>
                    <p><span>{{activity.start}}</span><i>2017年12月1日（金） 00:00:00</i></p>
                    <p><span>{{activity.end}}</span><i>2017年12月5日（火） 23:59:59</i></p>
                </div>
                 <div class="duration_time">
                    <p><i>決勝：</i></p>
                    <p><span>{{activity.start}}</span><i>2017年12月6日（水） 00:00:00</i></p>
                    <p><span>{{activity.end}}</span><i>2017年12月10日（日） 23:59:59</i></p>
                </div>
            </div>
            <ul class="activity_reward">
                <h4>{{activity.award}}</h4>
                <li>
                    <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/icon_1.png">
                    <div class="reward_desc">
                        <p><span></span><i style="font-weight: 600;">{{activity.rewards[0].p1}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p2}}</i></p>
                    </div>
                </li>
                <li>
                    <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/icon_1.png">
                    <div class="reward_desc">
                        <p><span></span><i style="font-weight: 600;">{{activity.rewards[1].p1}}</i></p>
                        <p><span></span><i>{{activity.rewards[1].p2}}</i></p>
                    </div>
                </li>
            </ul>
            
            <div class="activity_rule">
                <h4>{{activity.fansrule.title}}</h4>
                <p v-html="activity.fansrule.p1"></p>
                <p v-html="activity.fansrule.p2"></p>
                <p v-html="activity.fansrule.p3"></p>
            </div>
            <div class="activity_rule">
                <h4>{{activity.warning.title}}</h4>
                <p v-html="activity.warning.p1"></p>
                <p v-html="activity.warning.p2"></p>
                <p v-html="activity.warning.p3"></p>
                <p v-html="activity.warning.p4"></p>
                <p v-html="activity.warning.p5"></p>
            </div>
         </div>
    </div>
</template>
<style type="text/css">
    .content {
        background: #fff6e9;
    }
    h2 {
        background: #F3A43F;
    }
    h4 {
        background-image: linear-gradient(-46deg, #F38B07 0%, #F3A43F 100%);
    }
    .activity_reward li {
        background: #FFF3E3;
        border: 1px solid #F1DABA;
    }
    .activity_rule p i {
        color: #F3A43F;
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
                    theme:'【Groupy駅看板モデル選定企画】',
                    time: 'イベント期間',
                    start: '開始日時',
                    end: '終了日時',
                    rewardList: 'ランキング',
                    works: '作品',
                    Gcoin: 'コイン',
                    like: 'Like',
                    videos: '参加作品一覧',
                    noRanking: '集計中',
                    award: '特典',
                    me: '自分の順位',
                    all: '全体ランキング',
                    more: 'もっと見る',
                    times: '募集期間',
                    rule: {
                        title: '応募方法',
                        p1: '興味のある方はお気軽に <i>wanted@groupy.vip</i>‍ までスタッフにご連絡ください。',
                        p2: '<i>※今回のイベントは、ユニット全員のLike数を合算した集計となります（ソロの方も参加可能）</i>'
                    },
                    fansrule: {
                        title: '集計方法',
                        p1: '1. 全ての参加動画のLike数（ハート）の合計によってランキングが決まります。',
                        p2: '2. ランキングはイベント詳細ページにリアルタイムで確認できます。',
                        p3: '3.イベント期間外は、「＃読書の秋」をつけて投稿しても集計されません。'
                    },
                    desc: {
                        title: '掲載について',
                        p1: '中国広州の地下鉄は、全市人口の65.8%を占め、一日平均乗降客数の合計が700万人以上！',
                        p2: '広州タワーも高さ600mの広州代表的な観光地・広州のCBD(中心業務地区)として有名！',
                        p3: 'そんな賑わう広州塔駅の広告モデルを募集します！',
                        p4: 'ぜひ中国たくさんの人に顔を覚えてもらえるこの大チャンスをつかんでくだい！',
                        p5: '<i>※掲載期間：2018年1月1日～2018年1月31日</ii>',
                        p6: '<i>※掲載場所：広州地下鉄3号線広州塔駅</ii>',
                        p7: '<i>※サイズ：高さ1,520mm × 幅3,020mm</ii>'

                    },
                    warning: {
                        title: '注意事項',
                        p1: '1. イベント期間中、「#広州塔駅」タグをつけて投稿してください。投稿内容は自由です。',
                        p2: '2. ユニット全員の参加動画のLike数の合計によってランキングが決まります（ソロの方も参加可能）。',
                        p3: '3.興味のあるアイドルの方は wanted@groupy.vip‍ までご応募ください。応募せず、予選・決勝期間中「#広州塔駅」をつけて投稿しても無効となります。'
                    },
                    rewards: [{
                        p1: '予選特典',
                        p2: '予選ランキング上位5名かつ50万Like達成のユニット・ソロアイドル：決勝イベントへの参加権を獲得！'
                    }, {
                        p1: '決勝特典',
                        p2: '決勝ランキング上位3名のユニット・ソロアイドル：中国・広州塔地下鉄駅の大型サインボードに1カ月掲載！'
                    }]
                },
                isFans: true,
                activityInfo: {}
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
                var description = `中国広州大型駅看板モデルを募集中！推しメンを招待して大活躍のキッカケを作ってあげよう！`;
                var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-books.jpg`;
            }else {
                if(location.hostname == 'activity.groupy.vip') {
                    var shareURL = `http://share.groupy.vip/html/activity_subwayAds/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }else {
                    var shareURL = `http://share.groupy.cn/html/activity_subwayAds/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }
                var title = `【Groupy駅看板モデル選定企画】`;
                var description = `中国広州大型駅看板モデル選定企画に応募しました。予選は12月1日から、応援してね`;
                var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-books.jpg`;
            }
            window.setupWebViewJavascriptBridge(function(bridge) {
                bridge.callHandler(val, {'title':title,'description':description,'shareImg':shareImg,'shareURL':shareURL})
            })
          },
        },
        mounted() {
        },
        created() {
            let _lan = (navigator.browserLanguage || navigator.language).toLowerCase();
            console.log(getParams('isFans'))
            if(getParams('isFans') == 1) {
                this.isFans = false;
            }else {
                this.isFans = true;
            }
        }
    }
</script>