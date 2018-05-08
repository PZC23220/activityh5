<template>
    <div class="main">
         <div class="content">
            <img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-subwayAdsApply.png" class="banner">
            <h2>{{activity.theme}}</h2>
            <p class="share-sns"><span @click="shareSns('share_facebook')"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_facebook_1.png"><i>シェア</i></span><span @click="shareSns('share_twitter')"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_twitter_1.png"><i>ツイート</i></span></p>
            <div class="activity_rule">
                <p>決勝上位3名のグループは、中国・広州の中心地にある広州塔駅で大型看板に1ヶ月ジャック！1日40万人が通過するところにあなたのグループの写真が掲載されちゃいます！応募は<i>wanted@groupy.vip‍</i> までイベント参加の旨をお伝えください。</p>
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
            </div>
            <div class="activity_time">
                <h4>{{activity.times}}</h4>
                <div class="duration_time">
                    <p><span>{{activity.start}}</span><i>2017年11月13日（月） 00:00:00 </i></p>
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
                    <img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/icon_1.png">
                    <div class="reward_desc">
                        <p><span></span><i style="font-weight: 600;">{{activity.rewards[0].p1}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p2}}</i></p>
                    </div>
                </li>
                <li>
                    <img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/icon_1.png">
                    <div class="reward_desc">
                        <p><span></span><i style="font-weight: 600;">{{activity.rewards[1].p1}}</i></p>
                        <p><span></span><i>{{activity.rewards[1].p2}}</i></p>
                    </div>
                </li>
            </ul>
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
                    theme:'#Groupy広告モデル#',
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
                        p2: '<i>※今回のイベントは、ユニット全員のLike数を合算した集計となりますがソロの方も参加可能です。</i>'
                    },
                    desc: {
                        title: '掲載について',
                        p1: '中国広州の地下鉄は、一日700万人以上が利用し、全市人口の65.8%を占めています！',
                        p2: 'その中、広州で最も有名な観光スポットである広州タワーの下にあることから、命名された「広州タワー駅」にて、Groupyが広告出稿決定！',
                        p3: '広州タワーは広州のCBD(中心業務地区)として地元の人だけではなく、海外観光客も多い！1日40万人が通過するところにあなたのグループの写真が掲載されちゃいます！',
                        p4: '中国の多くの人々に知ってもらえるこの大チャンスをぜひつかんでくだい！',
                        p5: '<i>※掲載期間：2018年1月1日～2018年1月31日</i>',
                        p6: '<i>※掲載場所：広州地下鉄3号線広州塔駅</i>',
                        p7: '<i>※サイズ：高さ1,520mm × 幅3,020mm</i>'

                    },
                    warning: {
                        title: '注意事項',
                        p1: '1. イベント期間中、<i>「#Groupy広告モデル」</i>タグをつけて投稿してください。投稿内容は自由です。',
                        p2: '2. ユニット全員の参加動画のLike数の合計によってランキングが決まります（ソロの方も参加可能）。',
                        p3: '3.興味のあるアイドルの方は wanted@groupy.vip‍ までご応募ください。応募せず、予選・決勝期間中<i>「#Groupy広告モデル」</i>をつけて投稿しても無効となります。'
                    },
                    rewards: [{
                        p1: '予選特典',
                        p2: '予選ランキング上位5名かつ50万Like達成のユニット・ソロアイドルは決勝への参加権を獲得！さらに、アプリの起動画面に登場（期間は1日間となります）'
                    }, {
                        p1: '決勝特典',
                        p2: '決勝ランキング上位3名のユニット・ソロアイドルはGroupy駅広告モデルとして起用！'
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
                    var shareURL = `https://share.groupy.vip/html/activity_subwayAds/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                }else {
                    var shareURL = `https://share.groupy.cn/html/activity_subwayAds/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                }
                var title = `【Groupy駅看板モデル選定企画】`;
                var description = `中国広州大型駅看板モデル選定企画に応募しました。予選は12月1日から、応援してね`;
                var shareImg = `https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-books.jpg`;
            }else {
                if(location.hostname == 'activity.groupy.vip') {
                    var shareURL = `https://share.groupy.vip/html/activity_subwayAds/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }else {
                    var shareURL = `https://share.groupy.cn/html/activity_subwayAds/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }
                var title = `【Groupy駅看板モデル選定企画】`;
                var description = `中国広州大型駅看板モデルを募集中！推しメンを招待して大活躍のキッカケを作ってあげよう！`;
                var shareImg = `https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-books.jpg`;
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
            window.setupWebViewJavascriptBridge(function(bridge) {
                bridge.callHandler('setTitle', {'title':'Groupy広告モデル募集'})
            })
        }
    }
</script>
