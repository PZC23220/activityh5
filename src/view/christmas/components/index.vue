<template>
    <div class="main">
         <div class="content">
            <img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-christmas.png" class="banner">
            <h2>{{activity.theme}}</h2>
            <p class="share-sns"><span @click="shareSns('share_facebook')"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_facebook_1.png"><i>シェア</i></span><span @click="shareSns('share_twitter')"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_twitter_1.png"><i>ツイート</i></span></p>
            <div class="activity_rule">
                <p>Groupyは、内容の良い動画をより多くのユーザーに観てもらうために、動画を厳選し「いいね」「大人気」「オススメ」といったスタンプを動画に貼り付け、またはトップに固定してユーザーの注目を集める！<br>app storeから最新バージョンをアップデートしてくださいね♪</p>
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
                    <p><span>{{activity.start}}</span><i>2017年12月12日00:00:00</i></p>
                    <p><span>{{activity.end}}</span><i>2017年12月26日23:59:59</i></p>
                </div>
            </div>
            <div class="activity_rule">
                <h4>{{activity.obj.title}}</h4>
                <p v-html="activity.obj.p1"></p>
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
            </ul>
            <div class="activity_rule">
                <h4>{{activity.warning.title}}</h4>
                <p v-html="activity.warning.p1"></p>
                <p v-html="activity.warning.p2"></p>
            </div>
         </div>
    </div>
</template>
<style type="text/css">
    .content {
        background: #fdf9f1;
    }
    h2 {
        background: #DCAD53;
    }
    h4 {
        background-image: linear-gradient(-46deg, #D79C2F 0%, #E8C072 100%);
    }
    .activity_reward li {
        background: #F6EEDF;
        border: 1px solid #E3D8C1;
    }
    .activity_rule p i {
        color: #DCAD53;
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
                    theme:'#日本のクリスマスを紹介しよう#',
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
                    obj: {
                        title: '対象',
                        p1: 'Groupyの参加アイドル全員'
                    },
                    desc: {
                        title: '詳細',
                        p1: '今回のテーマは<i>『日本のクリスマスを紹介しょう』</i>',
                        p2: '皆さんは、クリスマスは何をしますか？実は、クリスマスの過ごし方は国によって違うだって！',
                        p3: 'クリスマスと言えば...ショットケーキ？イルミネーション？プレゼント交換？',
                        p4: 'これは日本クリスマス特有のものだと思ったら、なんでもいいので、Groupyを通じて海外の人々に紹介しましょう。',
                        p5: 'イベント期間中、Groupyスタッフは投稿から内容の充実した動画を選出し、目立つように「いいね・大人気・オススメ」のスタンプを貼り付けます。',
                        p6: '海外のファンの注目を集める大チャンス！ぜひ動画をどんどん投稿してくださいね♪',
                        p7: '<br>さらに、さらに！<br>選出された動画の一部を使い、 Groupyスタッフが記事を作成し、中国のwechat・weiboなどのsnsで拡散します。<br>あなたの動画が中国の多くの人々にみられちゃいますよ！'

                    },
                    warning: {
                        title: '注意事項',
                        p1: '<i>※「日本のクリスマスを紹介しよう」というテーマに沿って、動画を投稿すれば良いです。</i>',
                        p2: '<i>※イベントタグをつける必要はありません。</i>'
                    },
                    rewards: [{
                        p1: '選出された動画に「いいね」「大人気」「オススメ」といったスタンプ貼り付け、注目を集める。',
                        p2: '選出された動画の一部を記事に使用し、中国各snsにて拡散します。'
                    }]
                },
                isFans: true,
                activityInfo: {}
            }
        },
        methods: {
          shareSns(val) {
            var self = this;
                if(location.hostname == 'activity.groupy.vip') {
                    var shareURL = `https://share.groupy.vip/html/activity_christmas/index.html?activityId=${getParams('activityId')}`;
                }else {
                    var shareURL = `https://share.groupy.cn/html/activity_christmas/index.html?activityId=${getParams('activityId')}`;
                }
                var title = `【日本のクリスマスを紹介しよう企画】`;
                var description = `内容の良い動画はスタンプを貼り付け・トップに固定表示！今すぐチェックして応援してね。`;
                var shareImg = `https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-christmas.png`;
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
                bridge.callHandler('setTitle', {'title':'日本のクリスマスを紹介しよう企画'})
            })
        }
    }
</script>
