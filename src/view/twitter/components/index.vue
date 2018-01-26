<template>
    <div class="main">
         <div class="content">
            <img v-if="isOver" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-twitter-over.png" class="banner">
            <img v-else src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-twitter.png" class="banner">
            <h2>{{activity.theme}}</h2>
            <p class="share-sns" v-if="isFans"><span @click="shareSns('share_facebook')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_facebook_1.png"><i>シェア</i></span><span @click="shareSns('share_twitter')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_twitter_1.png"><i>ツイート</i></span></p>
            <div class="activity_rule">
                <p>日中両国の多くの人に知ってもらう大チャンス！参加動画が一番<i>「＃Groupyツイートキャンペーン」</i>ハッシュタグで<i>ツイート</i>されたアイドルは、Groupyの公式Twitter、Weiboのヘッダー画像に1ヶ月登場できます！</p>
            </div>
            <div class="activity_rule">
                <h4>{{activity.desc.title}}</h4>
                <p v-html="activity.desc.p1"></p>
                <p v-html="activity.desc.p2"></p>
                <p v-html="activity.desc.p3"></p>
                <p v-html="activity.desc.p4"></p>
                <p v-html="activity.desc.p6"></p>
                <p v-html="activity.desc.p7"></p>
                <p><img style="display:block;width:100%;border-radius: 6px;" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-twitter-twitter.jpg"></p>
                <p><img style="display:block;width:100%;border-radius: 6px;" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-twitter-weibo.jpg"></p>
            </div>
            <div class="activity_time">
                <h4>{{activity.time}}</h4>
                <div class="duration_time">
                    <p><span>{{activity.start}}</span><i>2018年2月1日（木）00:00:00</i></p>
                    <p><span>{{activity.end}}</span><i>2018年2月8日（木）23:59:59</i></p>
                </div>
            </div>
            <div class="activity_rule">
                <h4>{{activity.obj.title}}</h4>
                <p v-html="activity.obj.p1"></p>
                <p v-html="activity.obj.p2"></p>
                <p v-html="activity.obj.p3"></p>
                <p v-html="activity.obj.p4"></p>
            </div>
            <ul class="activity_reward">
                <h4>{{activity.award}}</h4>
                <li>
                    <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/icon_1.png">
                    <div class="reward_desc">
                        <p><span></span><i>{{activity.rewards[0].p1}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p2}}</i></p>
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
                <p v-html="activity.fansrule.p4"></p>
                <p v-html="activity.fansrule.p5"></p>
            </div>
            <div class="activity_rule">
                <h4>{{activity.warning.title}}</h4>
                <p v-html="activity.warning.p1"></p>
                <p v-html="activity.warning.p2"></p>
                <p v-html="activity.warning.p3"></p>
                <p v-html="activity.warning.p4"></p>
            </div>
         </div>
    </div>
</template>
<style type="text/css">
    .content {
        background: #f4feff;
    }
    h2 {
        background: #55A9AD;
    }
    h4 {
        background-image: linear-gradient(-48deg, #55A9AD 3%, #7EC2C6 95%);
    }
    .activity_reward li {
        background: #F0F9FA;
        border: 1px solid #D2E9EC;
    }
    .activity_rule p i {
        color: #55A9AD;
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
                    theme:'#Groupyツイートキャンペーン#',
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
                        p1: '1. キャンペーン期間中、イベント参加のアイドルは<i>「#Groupyツイートキャンペーン」</i>タグをつけて動画を投稿してください。投稿内容は自由です。',
                        p2: '2.キャンペーン期間中は、動画を何本投稿しても問題ありません。',
                        p3: '3.キャンペーン期間外は、「#Groupyツイートキャンペーン」をつけて投稿しても集計されません。',
                        p4: '<i>※投稿する際、タグ欄からタグを選択してください。入力のタグは認識されないのでご注意ください。</i>'
                    },
                    desc: {
                        title: '掲載について',
                        p1: 'もっと自分の動画をより多くの人に見てもらいたいという熱い気持ちを持っているアイドルの方に朗報です！',
                        p2: 'Groupyツイートキャンペーンを開催決定！期間中、参加動画がファンに一番<i>「＃Groupyツイートキャンペーン」</i>ハッシュタグをつけて<i>ツイート</i>されたアイドルは、Groupyの公式Twitter、公式Weiboの一番目立つヘッダー画像に1ヶ月登場します！',
                        p3: '上位1名のアイドルはGroupy日本語版のイメージガールとして、各アプリストアに登場できます。',
                        p4: 'この大チャンスを活かしてもっと自分のことを日中両国のいろんな人に知ってもらいましょう！あなたをフォローする人もきっと増えるはず！',
                        p6: '<i>※掲載場所：Groupy 公式Twitter（@GGroupyyy）、公式Weibo（@GGroupy）のヘッダー画像</i>',
                        p7: '<i>※掲載期間：2018年3月1日～2018年3月31日（時間が変更する場合がございます）</i>',
                    },
                    obj: {
                        title: '対象',
                        p1: '期間中に、参加動画が<i>「＃Groupyツイートキャンペーン」</i>ハッシュタグをつけて最も多く<i>ツイート</i>されたアイドル',
                        p2: '<i>※ 参加動画が「＃Groupyツイートキャンペーン」ハッシュタグをつけずにツイートされた場合は集計されません。</i>',
                        p3: '<i>※ 同一の参加動画が同一のユーザーに複数ツイートされた場合は、一回として集計させていただきます。</i>',
                        p4: '※ 毎日11時及び19時に公式Twitter@GGroupyyyにてイベントランキングを更新します。',
                    },
                    fansrule: {
                        title: '集計方法',
                        p1: '1.全ての参加動画の<i>「#Groupyツイートキャンペーン」</i>ハッシュタグをつけてツイートされた回数の合計によってランキングが決まります。',
                        p2: '2. Groupyは、毎日の11時、19時に公式Twitter@GGroupyyyにてキャンペーンランキングを更新します。',
                        p3: '3.<i>参加動画が「#Groupyツイートキャンペーン」ハッシュタグをつけずにツイートされた場合は集計されません。</i>',
                        p4: '4.<i>同一の参加動画が同一のユーザーに複数ツイートされた場合は、一回として集計させていただきます。</i>',
                        p5: '5.<i>「#Groupyツイートキャンペーン」</i>ハッシュタグをつけたツイートのリツイート数も集計されます。'
                    },
                    warning: {
                        title: '注意事項',
                        p1: '1.<i>「#Groupyツイートキャンペーン」ハッシュタグをつけることをお忘れないように、推しメンの参加動画をツイートしてください。</i>「#Groupyツイートキャンペーン」の話題のツイートからランキングを集計いたします。',
                        p2: '2.最終結果はキャンペーン期間終了の翌日に公式Twitter@GGroupyyyにて発表いたします。',
                        p3: '3.当選アイドルは掲載用の写真を2018年2月13日までにご提出いただきます。',
                        p4: '4.掲載期間は1ヶ月を予定しております。それ以後は予告なく掲載内容を変更する場合があります。'
                    },
                    rewards: [{
                        p1: 'Groupyの公式Twitter、公式Weiboのヘッダー画像に掲載（期間は1ヶ月となります）',
                        p2: 'Groupyアプリ内のトップバナーに掲載（期間は7日間となります）'
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
                        var shareURL = `http://share.groupy.vip/html/activity_twitter/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                    }else {
                        var shareURL = `http://share.groupy.cn/html/activity_twitter/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                    }
                    var title = `【Groupyツイートキャンペーン】`;
                    var description = `#Groupyツイートキャンペーン @GGroupyyy 最も多くツイートされたアイドルがGroupy公式Twitter、Weiboのヘッダー画像に登場！応援してね。`;
                    var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-twitter.png`;
                }else {
                    if(location.hostname == 'activity.groupy.vip') {
                        var shareURL = `http://share.groupy.vip/html/activity_twitter/index.html?activityId=${getParams('activityId')}&isFans=1`;
                    }else {
                        var shareURL = `http://share.groupy.cn/html/activity_twitter/index.html?activityId=${getParams('activityId')}&isFans=1`;
                    }
                    var title = `【Groupyツイートキャンペーン】`;
                    var description = `#Groupyツイートキャンペーン @GGroupyyy 最も多くツイートされたアイドルがGroupy公式Twitter、Weiboのヘッダー画像に登場！応援しよう。`;
                    var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-twitter.png`;
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
            }
            window.setupWebViewJavascriptBridge(function(bridge) {
                bridge.callHandler('setTitle', {'title':'Groupyツイートキャンペーン'})
            })
        }
    }
</script>
