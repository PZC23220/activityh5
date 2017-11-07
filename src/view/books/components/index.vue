<template>
    <div class="main">
         <div class="content">
            <img v-if="isOver" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-books-over.png" class="banner">
            <img v-else src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-books.jpg" class="banner">
            <h2>{{activity.theme}}</h2>
            <p class="share-sns" v-if="isFans"><span @click="shareSns('share_facebook')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_facebook_1.png"><i>シェア</i></span><span @click="shareSns('share_twitter')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_twitter_1.png"><i>ツイート</i></span></p>
            <div class="activity_rule">
                <p>読書の秋に盛り上げよう！期間中上位のアイドルは起動画面に掲載など豪華な特典が盛りだくさん！さらに、ファンにも、推しメンからオススメの書籍と直筆メッセージカードをプレゼント！</p>
            </div>
            <div class="activity_time">
                <h4>{{activity.time}}</h4>
                <div class="duration_time">
                    <p><span>{{activity.start}}</span><i>2017年11月3日（金）00:00:00</i></p>
                    <p><span>{{activity.end}}</span><i>2017年11月9日（木）23:59:59</i></p>
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
                        <p><span></span><i>{{activity.rewards[1].p2}}</i></p>
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
                <p style="color: #F17B61;font-weight:600;">※投稿する際、タグ欄からタグを選択してください。入力のタグは認識されないのでご注意ください。</p>
                <!-- <p v-html="activity.rule.p3"></p> -->
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
                    <h5 v-if="havedMe">{{activity.me}}</h5>
                    <li v-if="havedMe">
                        <span :class="[{'first':me.ranking == 0},{'second':me.ranking == 1},{'three':me.ranking > 1},{'ten':me.ranking > 9}]">{{me.ranking?me.ranking:'-'}}</span>
                        <div class="img_content"><span class="avatar"><img v-lazy="me.avatar"></span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_1.png" class="crown" v-if="me.ranking?me.ranking==1:false"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_2.png" class="crown" v-if="me.ranking?me.ranking==2:false"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_3.png" class="crown" v-if="me.ranking?me.ranking>2:false"></div>
                        <div class="idol_content">
                            <span>{{me.nickname?me.nickname:'...'}}</span>
                            <div class="idol_desc">
                                <!-- <p><span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png"><em>{{Number(me.gcoin?me.gcoin:0).toLocaleString()}}</em></span><i>{{activity.Gcoin}}</i></p> -->
                                <p><span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_likes.png"><em>{{Number(me.popularity?me.popularity:0).toLocaleString()}}</em></span><!-- <i>{{activity.like}}</i> --></p>
                                <p><span><em>{{Number(me.videoCount?me.videoCount:0).toLocaleString()}}</em></span><i>{{activity.works}}</i></p>
                            </div>
                        </div>
                    </li>
                    <h5 v-if="ranking.length > 0">{{activity.all}}</h5>
                    <li v-for="(idol,key) in ranking" v-if="ranking.length > 0 && key < 3">
                        <span :class="[{'first':key == 0},{'second':key == 1},{'three':key > 1}]">{{key+1}}</span>
                        <div class="img_content"><span class="avatar"><img v-lazy="idol.avatar"></span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_1.png" class="crown" v-if="key == 0"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_2.png" class="crown" v-if="key == 1"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_3.png" class="crown" v-if="key > 1"></div>
                        <div class="idol_content">
                            <span>{{idol.nickname?idol.nickname:'...'}}</span>
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
        background: #fff2f0;
    }
    h2 {
        background: #F17B61;
    }
    h4 {
        background-image: linear-gradient(-46deg, #F17B61 0%, #F1A542 100%);
    }
    .activity_reward li {
        background: #FFEEEA;
        border: 1px solid #F3D5CF;
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
                    theme:'#読書の秋#',
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
                    rule: {
                        title: '参加方法',
                        p1: '1. イベント期間中、「#読書の秋」タグをつけて投稿します。投稿内容は自由です。',
                        p2: '2.イベント期間中は、動画を何本投稿しても問題ありません。'
                    },
                    obj: {
                        title: '対象',
                        p1: 'ランキング上位3名のアイドル、及び各アイドルのファンランキング（イベントにおけるファンランキング）上位3名の方'
                    },
                    fansrule: {
                        title: '集計方法',
                        p1: '1. 全ての参加動画のLike数（ハート）の合計によってランキングが決まります。',
                        p2: '2. ランキングはイベント詳細ページにリアルタイムで確認できます。',
                        p3: '3.イベント期間外は、「＃読書の秋」をつけて投稿しても集計されません。'
                    },
                    warning: {
                        title: '注意事項',
                        p1: '1. 最終結果はイベント期間終了の翌日にGroupyアプリおよび公式Twitter@GGroupyyyにて発表いたします。',
                        p2: '2. 当選アイドルは直筆メッセージカードと起動画面掲載用の写真を11/17までにご提出いただきます。',
                        p3: '3.プレゼントの権利を獲得されたファンの方は、11/12までにprize@groupy.cn、または公式Twitter@GGroupyyyのDMにてご連絡ください。',
                        p4: '4.ファンの方へのプレゼントは準備が出来次第、Groupy運営からお届け致します。費用はすべて当社負担です。',
                        p5: '5.プレゼントの権利は当選者本人のものとし、第三者へ譲渡・転売することはできません。'
                    },
                    rewards: [{
                        p1: 'ファンランキング上位3名に推しメンからオススメの「書籍」と「推しメンの直筆メッセージカード」をプレゼント。',
                        p2: 'アプリの起動画面に登場（期間は2日間となります）。',
                        p3: 'Twitter公式アカウントで1位として発表されます。'
                    }, {
                        p1: 'ファンランキング上位3名に推しメンからオススメの「書籍」と「推しメンの直筆メッセージカード」をプレゼント。',
                        p2: 'アプリの起動画面に登場（期間は1日となります）。'
                    }, {
                        p1: 'ファンランキング上位3名に推しメンからオススメの「書籍」と「推しメンの直筆メッセージカード」をプレゼント。'
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
                    var shareURL = `http://share.groupy.vip/html/activity_books/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                }else {
                    var shareURL = `http://share.groupy.cn/html/activity_books/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                }
                var title = `Groupy読書の秋動画コンテスト`;
                var description = `ファン上位3名は推しメンからオススメの書籍と直筆メッセージカードが貰える！今すぐGETしよう`;
                var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-books.jpg`;
            }else {
                if(location.hostname == 'activity.groupy.vip') {
                    var shareURL = `http://share.groupy.vip/html/activity_books/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }else {
                    var shareURL = `http://share.groupy.cn/html/activity_books/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }
                var title = `Groupy読書の秋動画コンテスト`;
                var description = `アプリ起動画面に掲載されるイベント参加中、動画をいっぱい投稿したので、応援してね`;
                var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-books.jpg`;
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
                http.get('http://activity.groupy.vip/japi/video/activityIdols',{
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
            let _lan = (navigator.browserLanguage || navigator.language).toLowerCase();
            console.log(getParams('isFans'))
            if(getParams('isFans') == 1) {
                this.isFans = false;
            }else {
                this.isFans = true;
            }
            this.getList();
        }
    }
</script>