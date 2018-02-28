<template>
    <div class="main">
         <div class="content">
            <img v-if="isOver" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-maimeng-over.jpg" class="banner">
            <img v-else src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-maimeng.jpg" class="banner">
            <h2>{{activity.theme}}</h2>
            <p class="share-sns" v-if="isFans"><span @click="shareSns('share_facebook')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_facebook_1.png"><i>シェア</i></span><span @click="shareSns('share_twitter')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_twitter_1.png"><i>ツイート</i></span></p>
            <div class="activity_rule">
                <p>「麦萌对手戏」にて、Groupyアイドル特別コラム開設決定！<br>1位のアイドルはGroupyアイドル特別コラムの第一回に出演いただきます！ぜひご参加ください～♪</p>
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
                <img style="width:100%;padding: 12px;display: block;box-sizing:border-box;" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/maimeng1.jpg">
            </div>
            <div class="activity_time">
                <h4>{{activity.time}}</h4>
                <div class="duration_time">
                    <p><span>{{activity.start}}</span><i>2018年03月01日（木）00:00:00</i></p>
                    <p><span>{{activity.end}}</span><i>2018年03月10日（土）23:59:59</i></p>
                </div>
            </div>
            <ul class="activity_reward">
                <h4>{{activity.award}}</h4>
                <li>
                    <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/icon_1.png">
                    <div class="reward_desc">
                        <p><i style="font-weight: 600;">{{activity.rewards[0].p1}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p2}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p3}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p4}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p5}}</i></p>
                        <p><i style="color: #F68B00;">{{activity.rewards[0].p7}}</i></p>
                        <p><i style="color: #F68B00;">{{activity.rewards[0].p8}}</i></p>
                    </div>
                </li>
            </ul>
            <div class="activity_rule">
                <h4>{{activity.rule.title}}</h4>
                <p v-html="activity.rule.p1"></p>
                <p v-html="activity.rule.p2"></p>
                <p v-html="activity.rule.p3"></p>
                <p v-html="activity.rule.p4"></p>
            </div>
            <div class="activity_rule">
                <h4>{{activity.fansrule.title}}</h4>
                <p v-html="activity.fansrule.p1"></p>
                <p v-html="activity.fansrule.p2"></p>
                <p v-html="activity.fansrule.p3"></p>
                <p v-html="activity.fansrule.p4"></p>
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
        background: #fff5e9;
    }
    h2 {
        background: #F68B00;
    }
    h4 {
        background-image: linear-gradient(-48deg, #F58E0A 8%, #FFB75A 92%);
    }
    .activity_reward li {
        background: #FFF2E0;
        border: 1px solid #F5DAB7;
    }
    .activity_rule p i {
        color: #F68B00;
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
                    theme:'#Groupyx麦萌コラボ#',
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
                        p1: '1. イベント期間中、<i>「#Groupyx麦萌コラボ」</i>タグをつけて投稿してください。投稿内容は自由です。',
                        p2: '2.イベント期間中は、動画を何本投稿しても問題ありません。',
                        p3: '<i>※日本人アイドル参加限定</i>',
                        p4: '<i>※投稿する際、タグ欄からタグを選択してください。入力のタグは認識されないのでご注意ください。</i>'
                    },
                    desc: {
                        title: '「麦萌对手戏」とは？',
                        p1: '麦萌对手戏(マイムン ドゥイ ショウ シ)とは、中国最大級の声優気分を味わえる二次元アフレコアプリです。気軽に他のユーザー・人気声優の投稿した音声と共演できます。また、台本を投稿し、他のユーザー・人気声優にアフレコ出演して貰うこともでき、アプリの魅力はさまざまです！',
                        p2: '麦萌对手戏は世界初のスマホだけで他人と共演できる新感覚アフレコアプリとして、リリースから3年でユーザー数1000万人を突破し、中国で数多くの日本文化愛好者を集めただけ出なく、中国の人気声優にも愛用されています。',
                        p3: 'そんな麦萌对手戏アプリにて、Groupyアイドル特別コラムを開設決定！第一回に出演する日本人アイドルを募集します。',
                        p4: '一千万人の日本文化愛好者に知ってもらう大チャンス！ぜひご応募ください。',
                        p5:'<i>公式HP：<a href="http://www.meng2u.com" target="_blank" style="color: #F68B00;text-decoration: underline;">http://www.meng2u.com</a></i>',
                        p6:'<i>人気コラム1：<a href="https://goo.gl/KcYf2s" target="_blank" style="color: #F68B00;text-decoration: underline;">https://goo.gl/KcYf2s</a></i>',
                        p7:'<i>人気コラム2：<a href="https://goo.gl/VPk8JM" target="_blank" style="color: #F68B00;text-decoration: underline;">https://goo.gl/VPk8JM</a></i><br>',
                        p8:'<i>上位１名のアイドルの出演作品は麦萌对手戏アプリ内のトップバナーに掲載予定：</i>',
                    },
                    obj: {
                        title: '対象',
                        p1: 'イベント期間中ランキング1位のアイドル'
                    },
                    fansrule: {
                        title: '集計方法',
                        p1: '1.全ての参加動画のLike数（ハート）の合計によってランキングが決まります。',
                        p2: '2.ランキングはイベント詳細ページにリアルタイムで確認できます。',
                        p3: '3.イベント期間外は、<i>「#Groupyx麦萌コラボ」</i>をつけて投稿しても集計されません。',
                        p4: '4.最終結果はイベント期間終了の翌日にGroupyアプリおよび公式Twitter@GGroupyyyにて発表いたします。'
                    },
                    warning: {
                        title: '注意事項',
                        p1: '1.最終結果はイベント期間終了の翌日にGroupyアプリおよび公式Twitter@GGroupyyyにて発表いたします。',
                        p2: '2.当選アイドルは掲載用の写真を2018年2月28日までにご提出いただきます。',
                    },
                    rewards: [{
                        p1: 'ランキング上位1名のアイドル：',
                        p2: 'Groupyアイドル特別コラム第1回に出演（面白い日本語を紹介する内容の台本を用意します。）',
                        p3: 'コラムは麦萌对手戏アプリ内のトップバナーに掲載',
                        p4: '中国各人気SNS・動画サイトでも紹介されます（Weibo、WeChat、Bilibili...）',
                        p5: 'コラムのプロモーションポスターのモデルとして起用（ポスターは麦萌对手戏アプリの起動画面に1週間掲載）',
                        p7: '※音声の収録は東京都内で行います。日時は打ち合わせの上決定します。',
                        p8: '作品の公開は2018年4月上旬を予定しております。',
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
                        var shareURL = `http://share.groupy.vip/html/activity_maimeng/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                    }else {
                        var shareURL = `http://share.groupy.cn/html/activity_maimeng/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                    }
                    var title = `【#Groupyx麦萌コラボ 】`;
                    var description = `上位1名は上位1名はGroupyアイドル特別コラムに出演できますので、応援してください！(*≧∀≦*)~`;
                    var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-maimeng.jpg`;
                }else {
                    if(location.hostname == 'activity.groupy.vip') {
                        var shareURL = `http://share.groupy.vip/html/activity_maimeng/index.html?activityId=${getParams('activityId')}&isFans=1`;
                    }else {
                        var shareURL = `http://share.groupy.cn/html/activity_maimeng/index.html?activityId=${getParams('activityId')}&isFans=1`;
                    }
                    var title = `【#Groupyx麦萌コラボ 】`;
                    var description = `上位1名はGroupyアイドル特別コラムに出演できますので！みんな応援をお願い！`;
                    var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-maimeng.jpg`;
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
                bridge.callHandler('setTitle', {'title':'Groupyx麦萌コラボ'})
            })
        }
    }
</script>
