<template>
    <div class="main">
        <div class="content">
            <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-ffacg201807.png" class="banner">
            <h2 class="box">{{activity.theme}}</h2>
            <!-- <p class="share-sns box" v-if="isFans"><span @click="shareSns('share_facebook')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_facebook_1.png"><i>シェア</i></span><span @click="shareSns('share_twitter')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_twitter_1.png"><i>ツイート</i></span></p> -->
            <div class="activity_rule box">
                <p>Groupy Idol Festival July 2018~in広州~出演権争奪イベントに参加できるアイドルを募集中！興味のある方はお気軽に<i>wanted@groupy.vip</i>までご応募ください。</p>
                <p>Groupy偶像祭 July 2018~in广州~出演权争夺战即将开启！现招募参赛团体，马上邮件联系<i>wanted@groupy.vip</i>解锁您的参赛权吧♪～</p>
            </div>
            <span class="shares" style="position: relative;left: 12px;right: auto;top: 0;padding: 4px 9px;" @click="shareSns()"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/activity_banner/shareAll.jpg">シェア</span>
            <div class="activity_rule box">
                <h4>{{activity.desc.title}}</h4>
                <p v-html="activity.desc.p1"></p>
                <p v-html="activity.desc.p2"></p>
                <p v-html="activity.desc.p3"></p>
                <p v-html="activity.desc.p4"></p>
                <p v-html="activity.desc.p5"></p>
                <p v-html="activity.desc.p6"></p>
                <p v-html="activity.desc.p7"></p>
                <p v-html="activity.desc.p15"></p>
                <p v-html="activity.desc.p8"></p>
                <p v-html="activity.desc.p9"></p>
                <p v-html="activity.desc.p10"></p>
                <p v-html="activity.desc.p11"></p>
                <p v-html="activity.desc.p12"></p>
                <p v-html="activity.desc.p13"></p>
                <p v-html="activity.desc.p14"></p>
                <img style="width:100%;padding: 12px;display: block;box-sizing: border-box;" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/ffacg1.jpg">
                <img style="width:100%;padding: 0 12px;display: block;box-sizing: border-box;" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/ffacg2.jpg">
            </div>
            <div class="activity_time box">
                <h4>{{activity.time}}（活动日程）</h4>
                <div class="duration_time">
                    <p><span>{{activity.start}}</span><br><i>2018年3月31日</i></p>
                    <p><span>{{activity.end}}</span><br><i>2018年4⽉1⽇-2018年4⽉8⽇ </i></p>
                </div>
            </div>
            <ul class="activity_reward box">
                <h4>{{activity.award}}（活动奖品）</h4>
                <li>
                    <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/icon_1.png">
                    <div class="reward_desc">
                        <p><i style="font-weight: 600;">{{activity.rewards[0].p1}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p2}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p3}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p4}}</i></p>
                        <p><i style="color: #50B5D0;">{{activity.rewards[0].p5}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p6}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p7}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p8}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p9}}</i></p>
                        <p><i style="color: #50B5D0;">{{activity.rewards[0].p10}}</i></p>
                    </div>
                </li>
            </ul>
            <div class="activity_rule box">
                <h4>{{activity.rule.title}}（参赛条件）</h4>
                <p v-html="activity.rule.p1"></p>
                <p v-html="activity.rule.p2"></p>
                <p v-html="activity.rule.p3"></p>
                <p v-html="activity.rule.p4"></p>
            </div>
            <div class="activity_rule box">
                <h4>{{activity.fansrule.title}}（报名方式）</h4>
                <p v-html="activity.fansrule.p1"></p>
                <p v-html="activity.fansrule.p2"></p>
                <p v-html="activity.fansrule.p3"></p>
                <p v-html="activity.fansrule.p4"></p>
                <p v-html="activity.fansrule.p5"></p>
                <p v-html="activity.fansrule.p6"></p>
            </div>
        </div>
    </div>
</template>
<style type="text/css">
    .content {
        background: #fbfeff;
    }
    h2 {
        background: #50B5D0;
    }
    h4 {
        background-image: linear-gradient(-48deg, #3BB0CE 8%, #83D1E5 92%);
    }
    .activity_reward li {
        background: #F6FDFF;
        border: 1px solid #C7E5EE;
    }
    .activity_rule p i {
        color: #50B5D0;
    }
</style>
<script>
    import http from '@api/js/http.js';
    import scrollReveal from  'scrollreveal'
    require('@api/js/common.js')
    export default {
        data() {
            return {
                scrollReveal:scrollReveal(),
                ranking: [],
                me: {},
                idx: 0,
                idx2: 0,
                loadingShow: false,
                isOver: false,
                havedMe: false,
                activity: {
                    theme:'#GroupyIdolFestival#',
                    time: 'イベント日程',
                    start: 'エントリー締め切り（报名截止日期）',
                    end: 'イベント開催（活动举办日期）',
                    rewardList: 'ランキング',
                    works: '作品',
                    videos: '参加作品一覧',
                    noRanking: '集計中',
                    award: '特典',
                    me: '自分の順位',
                    all: '全体ランキング',
                    more: 'もっと見る',
                    rule: {
                        title: '参加条件',
                        p1: '・オリジナル曲を持っていること',
                        p2: '・2018.7.13~2018.7.17の日程で中国遠征が可能であること',
                        p3: '・拥有原创歌曲',
                        p4: '・2018.7.13~2018.7.17能到广州出演'
                    },
                    desc: {
                        title: 'Groupy Idol Festival July 2018~in広州~とは？',
                        p1: '「Groupy Idol Festival July 2018~in広州~」とは、2018.7.14~2018.7.16にGroupyによって開催される第3回の中国大型アイドルイベントです。',
                        p2: '・7月14日：第19回FFACGのメインステージに出演',
                        p3: '・7月15日：Groupy Live出演（場所：Mao Livehouse 広州、キャパ800人）',
                        p4: '・7月16日：ファン参加型広州観光ツアー',
                        p5: '<i>※FFACGとは、毎回来場者が20万人超の中国華南地区において最大級のアニメゲームイベントFirefly ACG Festivalです。（公式HP：<a href="http://www.fireflyacg.com</a>" target="_blank">http://www.fireflyacg.com）</i>',
                        p6: '出演アイドルは３組を予定し、その中の1枠をイベントで決めます。Groupyアプリ内の出演権争奪イベント上位１名のグループは出演していただきます！ ',
                        p7: '中国の超大人気な舞台に輝き、多くの人に知ってもらチャンス！ぜひふるってご応募ください。',
                        p15: 'Groupy偶像祭 July 2018~in广州~是什么？',
                        p8: 'Groupy偶像祭 July 2018~in广州~是由Groupy在2018.7.14~2018.7.16于中国广州举办的第3届Groupy偶像大型活动。',
                        p9: '・7月14日：第19届萤火虫游戏嘉年华',
                        p10: '・7月15日：主场Live（场地：Mao Livehouse 广州，可容纳800人）',
                        p11: '・7月16日：粉丝同游',
                        p12: '<i>※萤火虫游戏嘉年华是中国华南地区最大型的动漫游戏展览,每届到场人数高达20万。（官网：<a href="http://www.fireflyacg.com" target="_blank">http://www.fireflyacg.com</a>）</i>',
                        p13: '届时表演嘉宾预计为3组，其中1组将在本次活动中决定。在争夺战中获得第一名的参赛团体，将获得Groupy偶像祭 July 2018~in广州~出演权！一定要来参加哦。',
                        p14: '第一回「Groupy New Year Festival~in広州~」開催の模様（Groupy New Year Live精彩回顾）：'
                    },
                    obj: {
                        title: '対象',
                        p1: 'イベント期間中ランキング1位のアイドル'
                    },
                    fansrule: {
                        title: '応募方法',
                        p1: '1.興味のある方はお気軽に<i>wanted@groupy.vip</i>までご応募ください。エントリーの際は、グループ写真をお送りください。',
                        p2: '2.ユーザーからのLike数（ハート）によって順位を決定いたします。',
                        p3: '3.グループ全員参加しなくても良いですが、ユニット対抗戦ですので、Like数は参加メンバー全員のLikeの合計になります。',
                        p4: '1.如有意愿请联系邮箱<i>wanted@groupy.vip</i>，报名时需提供团体合照一张。',
                        p5: '2.根据参赛团体在活动中获得的总like数决定排名。',
                        p6: '3.不硬性要求全体成员参加，但由于是团体对抗赛，参赛成员获得的like数将作为全员的总like数进行排名。'
                    },
                    warning: {
                        title: '注意事項',
                        p1: '1.最終結果はイベント期間終了の翌日にGroupyアプリおよび公式Twitter@GGroupyyyにて発表いたします。',
                        p2: '2.当選アイドルは掲載用の写真を2018年2月28日までにご提出いただきます。',
                    },
                    rewards: [{
                        p1: '期間中Like数ランキング１位のグループ：',
                        p2: '7月14日~7月16日に開催される「Groupy Idol Festival July 2018~in広州~」の出演権',
                        p3: '中国での露出チャンス（看板広告・雑誌・メディア・SNS等）',
                        p4: 'ライブごとに物販時間あり（物販手数料30%）',
                        p5: '※ 飛行機代・宿泊費・食費はGroupyが負担（Staffを含め8名まで）',
                        p6: '活动期间获得Like数排名第一的偶像团体：',
                        p7: '7月14日~7月16日举办的Groupy偶像祭 July 2018~in广州~出演权',
                        p8: '中国各大曝光机会（看板，杂志，媒体、sns...）',
                        p9: '每场Live的物贩时间（物贩手续费30%）',
                        p10: '出演团体来往的飞机票、住宿费、用餐费由Groupy全权承担（包括Staff，8名以内）',
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
                    var shareURL = `http://share.groupy.vip/html/activity_ffacg201807/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }else {
                    var shareURL = `http://share.groupy.cn/html/activity_ffacg201807/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }
                var title = `【#GroupyIdolFestival】`;
                var description = `Groupy Idol Festival July 2018~in広州~出演権争奪イベントに参加できるアイドルを募集中！`;
                var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-ffacg201807.png`;
                console.log(shareURL)
                window.setupWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler(val, {'title':title,'description':description,'shareImg':shareImg,'shareURL':shareURL})
                })
            }
        },
        mounted() {
          this.scrollReveal.reveal('.box', {
            duration: 600,
          });
        },
        created() {
            window.setupWebViewJavascriptBridge(function(bridge) {
                bridge.callHandler('setTitle', {'title':'GroupyIdolFestival'})
            })
        }
    }
</script>
