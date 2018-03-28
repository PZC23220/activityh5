<template>
    <div class="main">
         <div class="content">
            <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-ffacg201807_preliminaries.jpg" class="banner">
            <h2>{{activity.theme}}</h2>
            <div class="activity_rule box">
                <p>上位1名のグループはGroupy Idol Festival July 2018~in広州~に出演して頂きます！！ぜひご参加ください～♪</p>
                <p>排名第一的团体即可获得Groupy偶像祭 July 2018~in广州~出演权！一定要踊跃参加哦。</p>
            </div>
            <span v-if="isFans" class="shares" style="position: relative;left: 12px;right: auto;top: 0;padding: 4px 9px;" @click="shareSns()"><img src="http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/activity_banner/shareAll.jpg">シェア</span>
            <div class="activity_rule box">
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
                <p v-html="activity.desc.p13"></p>
                <p v-html="activity.desc.p14"></p>
                <p v-html="activity.desc.p15"></p>
                <p v-html="activity.desc.p16"></p>
                <p v-html="activity.desc.p17"></p>
                <p v-html="activity.desc.p18"></p>
                <p v-html="activity.desc.p19"></p>
                <p v-html="activity.desc.p20"></p>
                <p v-html="activity.desc.p21"></p>
                <img style="width:100%;padding: 12px;display: block;box-sizing: border-box;" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/ffacg1.jpg">
                <img style="width:100%;padding: 0 12px;display: block;box-sizing: border-box;" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/ffacg2.jpg">
            </div>
            <div class="activity_time">
                <h4>集計期間（日本時間 活动时间）</h4>
                <div class="duration_time">
                    <p><span>{{activity.start}}</span><i>2018年04月01日（日）00:00:00</i></p>
                    <p><span>{{activity.end}}</span><i>2018年04月08日（日）23:59:59</i></p>
                </div>
            </div>
            <ul class="activity_reward">
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
                <h4>{{activity.obj.title}}（如何参赛？）</h4>
                <p v-html="activity.obj.p1"></p>
                <p v-html="activity.obj.p2"></p>
                <p v-html="activity.obj.p3"></p>
                <p v-html="activity.obj.p4"></p>
                <p v-html="activity.obj.p5"></p>
                <p v-html="activity.obj.p6"></p>
                <p v-html="activity.obj.p7"></p>
                <p v-html="activity.obj.p8"></p>
            </div>
            <div class="activity_rule">
                <h4>{{activity.fansrule.title}}</h4>
                <p v-html="activity.fansrule.p1"></p>
                <p v-html="activity.fansrule.p2"></p>
                <p v-html="activity.fansrule.p3"></p>
                <p v-html="activity.fansrule.p4"></p>
                <p v-html="activity.fansrule.p5"></p>
                <p v-html="activity.fansrule.p6"></p>
                <p v-html="activity.fansrule.p7"></p>
                <p v-html="activity.fansrule.p8"></p>
                <p v-html="activity.fansrule.p9"></p>
                <p v-html="activity.fansrule.p10"></p>
            </div>
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
                    theme:'#GroupyIdolFestival#',
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
                        title: '参加条件',
                        p1: '・オリジナル曲を持っていること',
                        p2: '・2018.7.13~2018.7.17の日程で中国遠征が可能であること',
                        p3: '・拥有原创歌曲',
                        p4: '・2018.7.13~2018.7.17能到广州出演'
                    },
                    desc: {
                        title: 'Groupy Idol Festival July 2018~in広州~とは？',
                        p1: '「Groupy Idol Festival July 2018~in広州~」とは、2018.7.14~2018.7.16にGroupyによって中国・広州で開催される第3回の中国大型アイドルイベントです。',
                        p2: '・7月14日：第19回FFACGのメインステージに出演 ',
                        p3: '・7月15日：Groupy Live出演（場所：Mao Livehouse 広州、キャパ800人）',
                        p4: '・7月16日：ファン参加型広州観光ツアー',
                        p5: '<i>※FFACGとは、毎回来場者が20万人超の中国華南地区において最大級のアニメゲームイベントFirefly ACG Festivalです。（公式HP：<a href="http://www.fireflyacg.com</a>" target="_blank">http://www.fireflyacg.com）</i>',
                        p6: '出演アイドルは３組を予定し、その中の1枠をイベントで決めます。Groupyアプリ内の出演権争奪イベント上位１名のグループは出演していただきます！ ',
                        p7: '中国の超大人気な舞台に輝き、多くの人に知ってもらチャンス！ぜひふるってご応募ください。',
                        p8: 'さらに！！！ファンの方に向けて、4月1日~4月3日にGroupyコイン50%増量キャンペーンを実施決定！期間中に購入したコインに応じてもれなく50%分をプレゼントします。',
                        p9: '<i>*ご注意：</i>',
                        p10: '<i>Groupy Idol Festival July 2018~in広州~出演権争奪イベント、及びコイン50%増量キャンペーンはGroupyが独力で企画したイベントであります。Apple.Inc等、他の団体とは一切関係ありません。</i>',
                        p11: 'Groupy偶像祭 July 2018~in广州~是什么？',
                        p12: 'Groupy偶像祭 July 2018~in广州~是由Groupy在2018.7.14~2018.7.16于中国广州举办的第3届Groupy偶像大型活动。',
                        p13: '・7月14日：第19届萤火虫游戏嘉年华',
                        p14: '・7月15日：主场Live（场地：Mao Livehouse 广州，可容纳800人）',
                        p15: '・7月16日：粉丝同游',
                        p16: '<i>※萤火虫游戏嘉年华是中国华南地区最大型的动漫游戏展览,每届到场人数高达20万。（官网：<a href="http://www.fireflyacg.com" target="_blank">http://www.fireflyacg.com</a>）</i>',
                        p17: '届时表演嘉宾预计为3组，其中1组将在本次活动中决定。在争夺战中获得第一名的参赛团体，将获得Groupy偶像祭 July 2018~in广州~出演权！一定要来参加哦。',
                        p18: '另！！！4月1日~4月3日我们为粉丝准备了充值送G币大回馈活动！活动期间充值G币，将额外获赠相应充值额度的50%G币。',
                        p19: '<i>*注意：</i>',
                        p20: '<i>通过本软件参加的Groupy偶像祭July 2018~in广州~出演权争夺赛以及充值送G币大回馈活动与获奖, 均与Apple Inc. 无关，仅有Groupy官方提供！</i>',
                        p21: '第一回「Groupy New Year Festival~in広州~」開催の模様：'
                    },
                    obj: {
                        title: '参加方法',
                        p1: '1.イベント期間中、<i>「#GroupyIdolFestival」</i>タグをつけて投稿してください。投稿内容は自由です。',
                        p2: '2.イベント期間中は、動画を何本投稿しても問題ありません。',
                        p3: '3.イベントに応募された方のみご投稿ください。応募されなかった方は<i>「#GroupyIdolFestival」</i>をつけて投稿しても無効となります。',
                        p4: '<i>※投稿する際、タグ欄からタグを選択してください。入力のタグは認識されないのでご注意ください。</i>',
                        p5: '1. 活动期间，爱豆发布视频时添加标签<i>#GroupyIdolFestival</i>即可参赛，视频不限制内容。',
                        p6: '2. 活动期间爱豆可多次发布参赛视频。',
                        p7: '3.提前报名的团体才可参加活动，未经报名的团体即使添加标签<i>#GroupyIdolFestival</i>发布视频也不会计入排名',
                        p8: '<i>※参与活动时，请从下方选择合适的活动标签，手动输入的标签将不被识别</i>',
                    },
                    fansrule: {
                        title: '集計方法',
                        p1: '1.ユニット全員の参加動画のLike数の合計によってランキングが決まります（ソロの方も参加可能）。',
                        p2: '2.グループ全員参加しなくても良いですが、ユニット対抗戦ですので、Like数は参加メンバー全員のLikeの合計になります。',
                        p3: '3.ランキングがイベント詳細ページにリアルタイムで確認できます。',
                        p4: '4.イベント期間外は、<i>「#GroupyIdolFestival」</i>をつけて投稿しても集計されません。',
                        p5: '5.最終結果はイベント期間終了の翌日に公式Twitter@GGroupyyyにて発表いたします。',
                        p6: '1.按活动期间团体全员获得的like数总数进行排名。',
                        p7: '2.不硬性要求全体成员参加，但由于是团体对抗赛，参赛成员获得的like数将作为全员的总like数进行排名。',
                        p8: '3.活动排名可在活动详情页实时查看。',
                        p9: '4.活动结束以后，参赛爱豆即使添加该主题标签<i>「#GroupyIdolFestival」</i>，也无法参赛，Like数排名统计只在活动期间计算。',
                        p10: '5.活动最终结果将在活动结束后第二天在Groupy官方微博@GGroupy公布。',
                    },
                    warning: {
                        title: '注意事項',
                        p1: '予選結果はイベント予選期間終了日の翌日にGroupyアプリおよび公式Twitter @GGroupyyy にて発表いたします。'
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
                    var shareURL = `http://share.groupy.vip/html/activity_ffacg201807_preliminaries/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }else {
                    var shareURL = `http://share.groupy.cn/html/activity_ffacg201807_preliminaries/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }
                var shareImg = `http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-ffacg201807_preliminaries.jpg`;
                if(self.isFans) {
                    var title = `【#GroupyIdolFestival】`;
                    var description = `#Groupy 上位1名のグループはGroupy Idol Festival July 2018~in広州~に出演！応援してね~`;
                }else {
                    var title = `【#GroupyIdolFestival】`;
                    var description = `#Groupy 上位1名のグループはGroupy Idol Festival July 2018~in広州~に出演！応援しよう~`;
                }
                console.log(shareURL)
                window.setupWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler('share', {'title':title,'description':description,'shareImg':shareImg,'shareURL':shareURL})
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
                bridge.callHandler('setTitle', {'title':'GroupyIdolFestival'})
            })
        }
    }
</script>
