<template>
    <div class="main">
         <div class="content">
            <img v-if="isOver" src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-spokesman-over.png" class="banner">
            <img v-else src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-spokesman.jpg" class="banner">
            <h2>{{activity.theme}}</h2>
            <p class="share-sns" v-if="isFans"><span @click="shareSns('share_facebook')"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_facebook_1.png"><i>シェア</i></span><span @click="shareSns('share_twitter')"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_twitter_1.png"><i>ツイート</i></span></p>
            <div class="activity_rule">
                <p>Groupyのイメージガールになろう！上位１名は中国各アプリストア内のGroupy紹介画像のモデルとして1か月起用されちゃいます。<br>当選アイドルのファンランキング上位3名のファンの方に当選アイドルからの直筆サイン入りチェキをプレゼント！</p>
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
                    <p><span>{{activity.start}}</span><i>2017年12月15日（金）00:00:00</i></p>
                    <p><span>{{activity.end}}</span><i>2017年12月26日（火）23:59:59</i></p>
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
                        <p><span></span><i>{{activity.rewards[0].p1}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p2}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p3}}</i></p>
                    </div>
                </li>
                <li>
                    <img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/icon_2.png">
                    <div class="reward_desc">
                        <p><span></span><i>{{activity.rewards[1].p1}}</i></p>
                    </div>
                </li>
                <li>
                    <img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/icon_3.png">
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
                <p v-html="activity.warning.p5"></p>
                <p v-html="activity.warning.p6"></p>
                <p v-html="activity.warning.p7"></p>
            </div>
            <div class="activity_ranking" v-if="isFans">
                <h4>{{activity.rewardList}}</h4>
                <p class="no_ranking" v-if="ranking.length<0 && loadingShow">{{activity.noRanking}}</p>
                <ul class="ranking_list">
                    <li v-for="(idol,key) in ranking" v-if="ranking.length > 0 && key < 3">
                        <span :class="[{'first':key == 0},{'second':key == 1},{'three':key > 1}]">{{key+1}}</span>
                        <div class="img_content"><img v-lazy="idol.avatar" class="avatar"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_1.png" class="crown" v-if="key == 0"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_2.png" class="crown" v-if="key == 1"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_3.png" class="crown" v-if="key > 1"></div>
                        <div class="idol_content">
                            <span>{{idol.nickname?idol.nickname:'...'}}</span>
                            <div class="idol_desc">
                                <!-- <p><span><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png"><em>{{Number(idol.gcoin?idol.gcoin:0).toLocaleString()}}</em></span><i>{{activity.Gcoin}}</i></p> -->
                                <p><span><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_likes.png"><em>{{Number(idol.popularity?idol.popularity:0).toLocaleString()}}</em></span><!-- <i>{{activity.like}}</i> --></p>
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
        background: #f6fbfc;
    }
    h2 {
        background: #5DCFE3;
    }
    h4 {
        background-image: linear-gradient(-46deg, #3FC0D7 0%, #61DAEF 100%);
    }
    .activity_reward li {
        background: #E8F7FA;
        border: 1px solid #C3E5EC;
    }
    .activity_rule p i {
        color: #5DCFE3;
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
                    theme:'#Groupyイメージガール#',
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
                        p1: '1. イベント期間中、<i>「#Groupyイメージガール」</i>タグをつけて投稿してください。投稿内容は自由です。',
                        p2: '2.イベント期間中は、動画を何本投稿しても問題ありません。',
                        p4: '<i>※投稿する際、タグ欄からタグを選択してください。入力のタグは認識されないのでご注意ください。</i>'
                    },
                    desc: {
                        title: '掲載について',
                        p1: 'Groupy中国語版の盛大リリースに伴い、中国各アプリストアのGroupy紹介画像のモデルを募集します。',
                        p2: '中国ではapple app storeの他、Tencent App Gem（应用宝）、PP Assistant(PP助手)など多くのアプリストアがあります。なんと7億人以上のスマホユーザーが利用しています。',
                        p3: '上位1名のアイドルはGroupy中国語版のイメージガールとして、各アプリストアに登場できます。',
                        p4: 'アプリストアだけでなく、WEBメディア・SNS（Weibo、Bilibili、wechat等）にも、Groupyの広告と共に登場できちゃうかもよ！',
                        p5: '中国の多くの人々に知ってもらえるこの大チャンスをぜひつかんでくだい！',
                        p6: '<i>※掲載期間：2018年1月20日～2018年2月20日</i>',
                        p7: '<i>※掲載場所：中国の各アプリストア：Tencent App Gem（应用宝）、PP Assistant(PP助手)、Wandoujia（.豌豆荚）、Baidu App Store（百度应用）、 91 Mobile Assistant（91助手 )など</i>',
                    },
                    obj: {
                        title: '対象',
                        p1: 'イベント期間中ランキング1位のアイドル'
                    },
                    fansrule: {
                        title: '集計方法',
                        p1: '1.全ての参加動画のLike数（ハート）の合計によってランキングが決まります。',
                        p2: '2. ランキングはイベント詳細ページにリアルタイムで確認できます。',
                        p3: '3.イベント期間外は、<i>「#Groupyイメージガール」</i>をつけて投稿しても集計されません。'
                    },
                    warning: {
                        title: '注意事項',
                        p1: '1.最終結果はイベント期間終了の翌日にGroupyアプリおよび公式Twitter@GGroupyyyにて発表いたします。',
                        p2: '2.当選アイドルはアプリストア用の写真、直筆サイン入りチェキ及び起動画面掲載用の写真を2018年1月5日までにご提出いただきます。',
                        p3: '3.掲載期間は1ヶ月を予定しております。それ以後は予告なく掲載内容を変更する場合があります。',
                        p4: '4.アプリストア以外の他のメディアでも使用される可能性がありますがが、確実に露出を保証するものではありません。なお他のメディアで使用する際はアプリストア用の写真を使用いたします。',
                        p5: '5.プレゼントの権利を獲得されたファンの方は、2018年1月1日までにprize@groupy.cn、または公式Twitter@GGroupyyyのDMにてご連絡ください。',
                        p6: '6.ファンの方へのプレゼントは準備が出来次第、Groupy運営からお届けいたします。費用はすべて当社負担です。',
                        p7: '7.プレゼントの権利は当選者本人のものとし、第三者へ譲渡・転売することはできません。'
                    },
                    rewards: [{
                        p1: 'ファンランキング（イベントにおけるファンランキング）上位3名の方に直筆サイン入りチェキをプレゼント',
                        p2: '中国各アプリストア内のGroupy紹介画像のモデルとして起用！',
                        p3: 'アプリの起動画面に登場（期間は2日間となります）',
                        p4: 'Twitter公式アカウントで1位として発表'
                    },{
                        p1: 'アプリの起動画面に登場（期間は1日間となります）'
                    },{
                        p1: 'アプリの起動画面に登場（期間は1日間となります）'
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
                        var shareURL = `https://share.groupy.vip/html/activity_spokesman/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                    }else {
                        var shareURL = `https://share.groupy.cn/html/activity_spokesman/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                    }
                    var title = `【イメージガール大募集】`;
                    var description = `上位1名がGroupy中国各アプリストアの画像に登場！動画がいっぱい投稿したので、応援してね。`;
                    var shareImg = `https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-spokesman.jpg`;
                }else {
                    if(location.hostname == 'activity.groupy.vip') {
                        var shareURL = `https://share.groupy.vip/html/activity_spokesman/index.html?activityId=${getParams('activityId')}&isFans=1`;
                    }else {
                        var shareURL = `https://share.groupy.cn/html/activity_spokesman/index.html?activityId=${getParams('activityId')}&isFans=1`;
                    }
                    var title = `【イメージガール大募集】`;
                    var description = `上位1名がGroupy中国各アプリストアの画像に登場！動画がいっぱい投稿されているので、応援しよう。`;
                    var shareImg = `https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-spokesman.jpg`;
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
