<template>
    <div class="main">
         <div class="content">
            <img v-if="isOver" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-spokesman3-over.png" class="banner">
            <img v-else src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-spokesman3.png" class="banner">
            <h2>{{activity.theme}}</h2>
            <p class="share-sns" v-if="isFans"><span @click="shareSns('share_facebook')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_facebook_1.png"><i>シェア</i></span><span @click="shareSns('share_twitter')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_twitter_1.png"><i>ツイート</i></span></p>
            <div class="activity_rule">
                <p>上位1名は桜シーズン限定のGroupy日本語版イメージガールになって貰います！お花見動画を撮って参加しましょう。</p>
            </div>
            <div class="activity_rule">
                <!-- <span v-if="isFans" class="shares" @click="shareSns()"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/activity_banner/shareAll.jpg">分享</span> -->
                <h4>{{activity.desc.title}}</h4>
                <p v-html="activity.desc.p1"></p>
                <p v-html="activity.desc.p2"></p>
                <p v-html="activity.desc.p3"></p>
                <p v-html="activity.desc.p4"></p>
                <p v-html="activity.desc.p5"></p>
                <p v-html="activity.desc.p6"></p>
                <p v-html="activity.desc.p7"></p>
                <p v-html="activity.desc.p8"></p>
                <p v-html="activity.desc.p9"></p>
                <p v-html="activity.desc.p10"></p>
                <p v-html="activity.desc.p11"></p>
                <p v-html="activity.desc.p12"></p>
            </div>
            <div class="activity_time">
                <h4>{{activity.time}}</h4>
                <div class="duration_time">
                    <p><span>{{activity.start}}</span><i>2018年03月22日（木）00:00:00</i></p>
                    <p><span>{{activity.end}}</span><i>2018年03月31日（土）23:59:59</i></p>
                </div>
            </div>
           <!--  <div class="activity_rule">
                <h4>{{activity.obj.title}}</h4>
                <p v-html="activity.obj.p1"></p>
            </div> -->
            <ul class="activity_reward">
                <h4>{{activity.award}}</h4>
                <li>
                    <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/icon_1.png">
                    <div class="reward_desc">
                        <p><i>{{activity.rewards[0].p1}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p2}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p3}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p4}}</i></p>
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
        background: #fff6f8;
    }
    h2 {
        background: #EC7591;
    }
    h4 {
        background-image: linear-gradient(-48deg, #DB4B6C 8%, #F1708E 92%);
    }
    .activity_reward li {
        background: #FFF0F3;
        border: 1px solid #F3CCD4;
    }
    .activity_rule p i {
        color: #EC7591;
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
                    theme:'#Groupyイメージガール3#',
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
                        p1: '1. イベント期間中、<i>「#Groupyイメージガール3」</i>タグをつけて投稿してください。投稿内容は自由です。',
                        p2: '2.イベント期間中は、動画を何本投稿しても問題ありません。',
                        p4: '<i>※投稿する際、タグ欄からタグを選択してください。入力のタグは認識されないのでご注意ください。</i>'
                    },
                    desc: {
                        title: '掲載について',
                        p1: '大好評につき、Groupyのイメージガール選定企画を待望の第三弾開催することになりました！',
                        p2: '今回、Groupyは桜をテーマにして、日本アプリストア内のアプリ紹介画像のモデルを募集します。',
                        p3: '上位1名のアイドルはGroupy日本語版の初桜シーズン限定のイメージガールとして、各アプリストア、Groupy 公式Twitterに登場していただきます。',
                        p4: 'Groupy日本語版の新規ユーザーにいち早く知られる大チャンスです。今すぐお花見動画を撮って応募しましょう！',
                        p5: 'WEBメディア・SNS（Twitter等）にも、Groupyの広告と共に露出できちゃうかもよ！',
                        p6: '<i>※掲載期間：</i>',
                        p7: '<i>2018年04月05日～2018年04月20日（時間は変更する場合がございます）</i>',
                        p8: '<i>※掲載場所：</i>',
                        p9: '<i>・アプリストア（App Store日本、Google Play日本）内の桜をテーマにしたGroupyアプリ紹介画像</i>',
                        p10: '<i>・Groupy 公式Twitter（@GGroupyyy）のヘッダー画像</i>',
                        p11: 'さらに！！！ファンの方に向けて、Groupy公式Twitterにて桜シーズン限定の豪華プレゼント企画を03月26日に開催決定！ぜひお見逃しなく！',
                        p12: '*<i>ご注意：</i>イメージガールになろう企画、及びファン向けのプレゼント企画はGroupyが独力で企画したイベントであります。Apple.Inc等、他の団体とは一切関係ありません。',
                    },
                    fansrule: {
                        title: '集計方法',
                        p1: '1. 全ての参加動画のLike数（ハート）の合計によってランキングが決まります。',
                        p2: '2. ランキングはイベント詳細ページにリアルタイムで確認できます。',
                        p3: '3. イベント期間外は、<i>「#Groupyイメージガール3」</i>をつけて投稿しても集計されません。'
                    },
                    warning: {
                        title: '注意事項',
                        p1: '1. 最終結果はイベント期間終了の翌日にGroupyアプリおよび公式Twitter@GGroupyyyにて発表いたします。',
                        p2: '2. 当選アイドルはアプリストア用の写真及びトップバナー掲載用の写真を2018年4月3日までにご提出いただきます。',
                        p3: '3. 掲載期間は2週間を予定しております。それ以後は予告なく掲載内容を変更する場合がございます。',
                        p4: '4. アプリストア・Twitter以外の他のメディアでも使用される可能性がありますが、確実に露出を保証するものではありません。なお他のメディアで使用する際はアプリストア用の写真を使用いたします。'
                    },
                    rewards: [{
                        p1: 'ランキング1位に：',
                        p2: '日本各アプリストア内の桜シーズン限定のGroupyアプリ紹介画像のモデルとして起用（期間は2週間となります）',
                        p3: 'Groupyの公式Twitterのヘッダー画像に掲載（期間は2週間となります）',
                        p4: 'アプリ内のトップバナーに登場（期間は2日間となります）'
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
                        var shareURL = `http://share.groupy.vip/html/activity_spokesman3/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                    }else {
                        var shareURL = `http://share.groupy.cn/html/activity_spokesman3/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                    }
                    var title = `【#Groupyイメージガール3 】`;
                    var description = `桜をテーマにしたGroupy日本語版イメージガールになろう限定企画に参加した！応援してね。#Groupy`;
                    var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-spokesman3.png`;
                }else {
                    if(location.hostname == 'activity.groupy.vip') {
                        var shareURL = `http://share.groupy.vip/html/activity_spokesman3/index.html?activityId=${getParams('activityId')}&isFans=1`;
                    }else {
                        var shareURL = `http://share.groupy.cn/html/activity_spokesman3/index.html?activityId=${getParams('activityId')}&isFans=1`;
                    }
                    var title = `【#Groupyイメージガール3 】`;
                    var description = `推しメンが桜をテーマにしたGroupy日本語版イメージガールになろう限定企画に参加した！応援しよう。#Groupy`;
                    var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-spokesman3.png`;
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
                bridge.callHandler('setTitle', {'title':'Groupyイメージガール3'})
            })
        }
    }
</script>
