<template>
    <div class="main">
         <div class="content">
            <img v-if="isOver" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-entertainmentWeekly-over.png" class="banner">
            <img v-else src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-entertainmentWeekly.png" class="banner">
            <h2>{{activity.theme}}</h2>
            <p class="share-sns" v-if="isFans"><span @click="shareSns('share_facebook')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_facebook_1.png"><i>シェア</i></span><span @click="shareSns('share_twitter')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_twitter_1.png"><i>ツイート</i></span></p>
            <div class="activity_rule">
                <p>中国のエンタメ誌「娯楽・品味週刊」に、上位1名の所属ユニットメンバー全員が特集ページに登場する！是非奮ってご参加ください！</p>
            </div>
            <div class="activity_time">
                <h4>イベント期間</h4>
                <div class="duration_time">
                    <p><span>{{activity.start}}</span><i>2018年1月5日（金）00:00:00</i></p>
                    <p><span>{{activity.end}}</span><i>2018年1月11日（木） 23:59:59</i></p>
                </div>
            </div>
            <div class="activity_rule">
                <h4>{{activity.obj.title}}</h4>
                <p v-html="activity.obj.p1"></p>
            </div>
            <ul class="activity_reward">
                <h4>{{activity.award}}</h4>
                <li>
                    <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/icon_1.png">
                    <div class="reward_desc">
                        <p><span></span><i>{{activity.rewards[0].p1}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p2}}</i></p>
                        <p>{{activity.rewards[0].p3}}</p>
                    </div>
                </li>
            </ul>
            <div class="activity_rule">
                <h4>{{activity.desc.title}}</h4>
                <p v-html="activity.desc.p1"></p>
                <p v-html="activity.desc.p2"></p>
                <p v-html="activity.desc.p3"></p>
            </div>
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
            <!-- <div class="activity_rule">
                <h4>{{activity.warning.title}}</h4>
                <p v-html="activity.warning.p1"></p>
            </div> -->
            <div class="activity_ranking" v-if="isFans">
                <h4>{{activity.rewardList}}</h4>
                <p class="no_ranking" v-if="ranking.length<0 && loadingShow">{{activity.noRanking}}</p>
                <ul class="ranking_list">
                    <li v-for="(idol,key) in ranking" v-if="ranking.length > 0 && key < 5">
                        <span :class="[{'first':key == 0},{'second':key == 1},{'three':key > 1}]">{{key+1}}</span>
                        <div class="img_content"><img v-lazy="idol.orgLogo?idol.orgLogo:idol.avatar" class="avatar"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_1.png" class="crown" v-if="key == 0"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_2.png" class="crown" v-if="key == 1"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_3.png" class="crown" v-if="key > 1"></div>
                        <div class="idol_content">
                            <span>{{idol.orgName?idol.orgName:idol.nickname}}</span>
                            <div class="idol_desc">
                                <!-- <p><span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png"><em>{{Number(idol.gcoin?idol.gcoin:0).toLocaleString()}}</em></span><i>{{activity.Gcoin}}</i></p> -->
                                <p><span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_likes.png"><em>{{Number(idol.popularity?idol.popularity:0).toLocaleString()}}</em></span><!-- <i>{{activity.like}}</i> --></p>
                                <p><span><em>{{Number(idol.videoCount?idol.videoCount:0).toLocaleString()}}</em></span><i>{{activity.works}}</i></p>
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
        background: #70BFE6;
    }
    h4 {
        background-image: linear-gradient(-46deg,   #3FA3D4 0%, #84CBEE 100%);
    }
    .activity_reward li {
        background: #E8F7FF;
        border: 1px solid #C3DAE5;
    }
    .activity_rule p i {
        color: #70BFE6;
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
                    theme:'#娯楽品味週刊#',
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
                        title: '応募方法',
                        p1: '1. イベント期間中、<i>「#娯楽品味週刊」</i>タグをつけて投稿してください。投稿内容は自由です。',
                        p2: '2.イベント期間中は、動画を何本投稿しても問題ありません。',
                        p4: '<i>※投稿する際、タグ欄からタグを選択してください。入力のタグは認識されないのでご注意ください。</i>'
                    },
                    desc: {
                        title: '雑誌『娯楽・品味週刊』とは',
                        p1: '「娯楽・品味週刊」は1989年に広東放送テレビにより創刊し、范氷々、劉涛、孫儷など中国の有名女優が掲載されている有名エンタメ雑誌です。',
                        p2: '全国の20代から30代のサラリーマン・OLから人気を集め、発行部数が10万部を超え、広東省で6000ヶ所を超える書店・駅売店・スタンド・コンビニエンスストアで販売されています。',
                        p3: '中国の華南地域における最も権威性のあるエンタメ誌として、北京、広州、上海、深センなど23都市の空港の中国南方空港VIPエリアに配置され、数多くの方に閲覧されています。'
                    },
                    obj: {
                        title: '対象',
                        p1: 'ランキング1位のアイドルが所属するユニット（ソロの方も参加可能）'
                    },
                    fansrule: {
                        title: '集計方法',
                        p1: '1. 全ての参加動画のLike数（ハート）の合計によってランキングが決まります。',
                        p2: '2. ランキングはイベント詳細ページにリアルタイムで確認できます。',
                        p3: '3.イベント期間外は、<i>「#娯楽品味週刊」</i>をつけて投稿しても集計されません。'
                    },
                    warning: {
                        title: '注意事項',
                        p1: '予選結果はイベント予選期間終了日の翌日にGroupyアプリおよび公式Twitter @GGroupyyy にて発表いたします。'
                    },
                    rewards: [{
                        p1: 'ランキング1位の所属ユニットメンバー全員が「娯楽・品味週刊」の特集ページに登場！',
                        p2: '※当選ユニットはプロフィールを1/15までにご提出いただきます。',
                        p3: '※「娯楽・品味週刊」のライターによるインタービューの可能性もございますので、ご了承ください。'
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
                    var shareURL = `http://share.groupy.vip/html/activity_entertainmentWeekly/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }else {
                    var shareURL = `http://share.groupy.cn/html/activity_entertainmentWeekly/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }
                var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-entertainmentWeekly.png`;
                if(self.isFans) {
                    var title = `Groupy x「娯楽品味週刊」 `;
                    var description = `大人気雑誌に登場できるイベント参加中、動画をいっぱい投稿したので、応援してね`;
                }else {
                    var title = `Groupy x「娯楽品味週刊」 `;
                    var description = `1位が大人気雑誌に登場！動画がいっぱい投稿されているので、応援しよう`;
                }
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
                this.getList();
            }
            window.setupWebViewJavascriptBridge(function(bridge) {
                bridge.callHandler('setTitle', {'title':'Groupy x「娯楽品味週刊」'})
            })
        }
    }
</script>
