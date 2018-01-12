<template>
    <div class="main">
         <div class="content">
            <img v-if="isOver" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-spokesman2-over.jpg" class="banner">
            <img v-else src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-spokesman2.jpg" class="banner">
            <h2>{{activity.theme}}</h2>
            <p class="share-sns" v-if="isFans"><span @click="shareSns('share_facebook')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_facebook_1.png"><i>シェア</i></span><span @click="shareSns('share_twitter')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_twitter_1.png"><i>ツイート</i></span></p>
            <div class="activity_rule">
                <p>大好評につき、Groupyのイメージガールになろう企画第2弾開催決定！上位１名は日本アプリストア内のGroupy紹介画像のモデルとして1か月起用されちゃいます。</p>
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
                <h4>{{activity.time}}</h4>
                <div class="duration_time">
                    <p><span>{{activity.start}}</span><i>2018年01月15日（月）00:00:00</i></p>
                    <p><span>{{activity.end}}</span><i>2018年01月26日（金）23:59:59</i></p>
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
                        <p><span></span><i>{{activity.rewards[0].p3}}</i></p>
                    </div>
                </li>
                <li>
                    <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/icon_2.png">
                    <div class="reward_desc">
                        <p><span></span><i>{{activity.rewards[1].p1}}</i></p>
                    </div>
                </li>
                <li>
                    <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/icon_3.png">
                    <div class="reward_desc">
                        <p><span></span><i>{{activity.rewards[2].p1}}</i></p>
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
                <p v-html="activity.warning.p2"></p>
                <p v-html="activity.warning.p3"></p>
                <p v-html="activity.warning.p4"></p>
            </div>
            <div class="activity_ranking" v-if="isFans">
                <h4>{{activity.rewardList}}</h4>
                <p class="no_ranking" v-if="ranking.length<0 && loadingShow">{{activity.noRanking}}</p>
                <ul class="ranking_list">
                    <li v-for="(idol,key) in ranking" v-if="ranking.length > 0 && key < 3">
                        <span :class="[{'first':key == 0},{'second':key == 1},{'three':key > 1}]">{{key+1}}</span>
                        <div class="img_content"><img v-lazy="idol.avatar" class="avatar"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_1.png" class="crown" v-if="key == 0"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_2.png" class="crown" v-if="key == 1"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_3.png" class="crown" v-if="key > 1"></div>
                        <div class="idol_content">
                            <span>{{idol.nickname?idol.nickname:'...'}}</span>
                            <div class="idol_desc">
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
        background: #fefaff;
    }
    h2 {
        background: #C3A1D0;
    }
    h4 {
        background-image: linear-gradient(-48deg, #B88BCB 3%, #D6ADE5 95%);
    }
    .activity_reward li {
        background: #FDF3FF;
        border: 1px solid #E6D7EA;
    }
    .activity_rule p i {
        color: #C3A1D0;
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
                    theme:'#Groupyイメージガール2#',
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
                        p1: '1. イベント期間中、<i>「#Groupyイメージガール2」</i>タグをつけて投稿してください。投稿内容は自由です。',
                        p2: '2.イベント期間中は、動画を何本投稿しても問題ありません。',
                        p4: '<i>※投稿する際、タグ欄からタグを選択してください。入力のタグは認識されないのでご注意ください。</i>'
                    },
                    desc: {
                        title: '掲載について',
                        p1: '大好評につき、Groupyのイメージガール選定企画第二弾を開催することになりました！',
                        p2: '今回、Groupyは日本アプリストアのアプリ紹介画像のモデルを募集します。',
                        p3: '上位1名のアイドルはGroupy日本語版のイメージガールとして、各アプリストアに登場できます。',
                        p4: 'Groupy日本語版の新規ユーザーにいち早く知られる大チャンスを掴み取ろう！',
                        p5: 'さらに、WEBメディア・SNS（Twitter等）にも、Groupyの広告と共に露出できちゃうかもよ！',
                        p6: '<i>※掲載期間：2018年2月01日～2018年2月28日</i>',
                        p7: '<i>※掲載場所：アプリストア（日本）：App Store、Google Play</i>',
                    },
                    obj: {
                        title: '対象',
                        p1: 'イベント期間中ランキング1位のアイドル'
                    },
                    fansrule: {
                        title: '集計方法',
                        p1: '1.全ての参加動画のLike数（ハート）の合計によってランキングが決まります。',
                        p2: '2. ランキングはイベント詳細ページにリアルタイムで確認できます。',
                        p3: '3.イベント期間外は、<i>「#Groupyイメージガール2」</i>をつけて投稿しても集計されません。'
                    },
                    warning: {
                        title: '注意事項',
                        p1: '1.最終結果はイベント期間終了の翌日にGroupyアプリおよび公式Twitter@GGroupyyyにて発表いたします。',
                        p2: '2.当選アイドルはアプリストア用の写真及びトップバナー掲載用の写真を2018年1月5日までにご提出いただきます。',
                        p3: '3.掲載期間は1ヶ月を予定しております。それ以後は予告なく掲載内容を変更する場合があります。',
                        p4: '4.アプリストア以外の他のメディアでも使用される可能性がありますがが、確実に露出を保証するものではありません。なお他のメディアで使用する際はアプリストア用の写真を使用いたします。'
                    },
                    rewards: [{
                        p1: '中国各アプリストア内のGroupy紹介画像のモデルとして起用！',
                        p2: 'アプリ内のトップバナーに登場（期間は2日間となります）',
                        p3: 'Twitter公式アカウントで1位として発表'
                    },{
                        p1: 'アプリ内のトップバナーに登場（期間は1日間となります）'
                    },{
                        p1: 'アプリ内のトップバナーに登場（期間は1日間となります）'
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
                if(self.isFans) {
                    if(location.hostname == 'activity.groupy.vip') {
                        var shareURL = `http://share.groupy.vip/html/activity_spokesman/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                    }else {
                        var shareURL = `http://share.groupy.cn/html/activity_spokesman/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                    }
                    var title = `【イメージガール大募集】`;
                    var description = `上位1名がGroupy日本各アプリストアの画像に登場！動画がいっぱい投稿したので、応援してね。`;
                    var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-spokesman2.jpg`;
                }else {
                    if(location.hostname == 'activity.groupy.vip') {
                        var shareURL = `http://share.groupy.vip/html/activity_spokesman/index.html?activityId=${getParams('activityId')}&isFans=1`;
                    }else {
                        var shareURL = `http://share.groupy.cn/html/activity_spokesman/index.html?activityId=${getParams('activityId')}&isFans=1`;
                    }
                    var title = `【イメージガール大募集】`;
                    var description = `上位1名がGroupy日本各アプリストアの画像に登場！動画がいっぱい投稿されているので、応援しよう。`;
                    var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-spokesman2.jpg`;
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
                    let token_ = getParams('token');
                    if(token) {
                        http.defaults.headers.common['Authorization'] = 'Token '+token;
                    }else if(token_!='(null)' && token_!='') {
                        http.defaults.headers.common['Authorization'] = 'Token ' + token_;
                    }
                    http.get('/video/activityIdols',{
                        params: {
                            activityId:getParams('activityId'),
                            rows: 10
                        }
                    }).then(function(res){
                        self.ranking = res.data.ranking;
                        self.activityInfo = res.data.activityInfo;
                        if(res.data.self) {
                            self.me = res.data.self;
                            self.havedMe = true;
                        }
                        self.loadingShow = true;
                        if(res.data.isActivityEnded) {
                            self.isOver = true;
                        }else {
                            self.isOver = false;
                        }
                        console.log(res)
                    }).catch(function(){
                        self.idx++;
                        window.setupWebViewJavascriptBridge(function(bridge) {
                            bridge.callHandler('getToken', {'targetType':'0','targetId':'0'}, function responseCallback(responseData) {
                                self.getList(responseData.token);
                            })
                        })
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
                bridge.callHandler('setTitle', {'title':'イメージガール大募集'})
            })
        }
    }
</script>
