<template>
    <div class="main">
         <div class="content">
            <img v-if="isOver" src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-ffacg201807_spokesman-over.jpg" class="banner">
            <img v-else src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-ffacg201807_spokesman.jpg" class="banner">
            <h2 class="box">{{activity.theme}}</h2>
            <div class="activity_rule box">
                <p>アイドル必見！<br>上位1名のアイドルは、来場者数20万人超えの19th FFACGに、Groupyの広告モデルとして特大看板に登場できます！</p>
                <p>爱豆必看！<br>第一名的爱豆将作为Groupy形象代言人，在华南地区最大型漫展萤火虫（人流量超20万）大曝光！</p>
            </div>
            <span v-if="isFans" class="shares box" style="position: relative;left: 12px;right: auto;top: 0;padding: 4px 9px;" @click="shareSns()"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/activity_banner/shareAll.jpg">シェア</span>
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
                <img style="width:100%;padding: 12px;display: block;box-sizing: border-box;" src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-ffacg201807_spokesman-1.jpg">
                <img style="width:100%;padding: 0 12px;display: block;box-sizing: border-box;" src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-ffacg201807_spokesman-2.jpg">
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
                <img style="width:100%;padding: 12px;display: block;box-sizing: border-box;" src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-ffacg201807_spokesman-3.jpg">
                <img style="width:100%;padding: 0 12px;display: block;box-sizing: border-box;" src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-ffacg201807_spokesman-4.jpg">
            </div>
            <div class="activity_time box">
                <h4>イベント期間（日本時間 活动时间）</h4>
                <div class="duration_time">
                    <p><span>{{activity.start}}</span><i>2018年5月25日（金）00:00:00</i></p>
                    <p><span>{{activity.end}}</span><i>2018年6月1日（金）23:59:59</i></p>
                </div>
            </div>
            <ul class="activity_reward box">
                <h4>{{activity.award}}（奖励）</h4>
                <li>
                    <img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/icon_1.png">
                    <div class="reward_desc">
                        <p><span></span><i style="font-weight: 600;">{{activity.rewards[0].p1}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p2}}</i></p>
                        <p><span></span><i style="font-weight: 600;">{{activity.rewards[0].p3}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p4}}</i></p>
                        <!-- <p><i style="color: #50B5D0;">{{activity.rewards[0].p5}}</i></p>
                        <p><i>{{activity.rewards[0].p6}}</i></p>
                        <p><i>{{activity.rewards[0].p7}}</i></p>
                        <p><i>{{activity.rewards[0].p8}}</i></p>
                        <p><i>{{activity.rewards[0].p9}}</i></p>
                        <p><i style="color: #50B5D0;">{{activity.rewards[0].p10}}</i></p> -->
                    </div>
                </li>
            </ul>
            <!-- <div class="activity_rule box">
                <h4>{{activity.rule.title}}（参赛条件）</h4>
                <p v-html="activity.rule.p1"></p>
                <p v-html="activity.rule.p2"></p>
                <p v-html="activity.rule.p3"></p>
                <p v-html="activity.rule.p4"></p>
            </div> -->
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
            <div class="activity_rule box">
                <h4>{{activity.fansrule.title}}（排名规则）</h4>
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
            <div class="activity_rule box">
                <h4>{{activity.warning.title}}（排名规则）</h4>
                <p v-html="activity.warning.p1"></p>
                <p v-html="activity.warning.p2"></p>
                <p v-html="activity.warning.p3"></p>
                <p v-html="activity.warning.p4"></p>
            </div>
            <div class="activity_ranking box" v-if="isFans">
                <h4>{{activity.rewardList}}</h4>
                <p class="no_ranking" v-if="ranking.length<0 && loadingShow">{{activity.noRanking}}</p>
                <ul class="ranking_list">
                    <li v-for="(idol,key) in ranking" v-if="ranking.length > 0 && key < 5">
                        <span :class="[{'first':key == 0},{'second':key == 1},{'three':key > 1}]">{{key+1}}</span>
                        <div class="img_content"><img v-lazy="idol.orgLogo?idol.orgLogo:idol.avatar" class="avatar"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_1.png" class="crown" v-if="key == 0"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_2.png" class="crown" v-if="key == 1"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_3.png" class="crown" v-if="key > 1"></div>
                        <div class="idol_content">
                            <span>{{idol.orgName?idol.orgName:idol.nickname}}</span>
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
        background: #fbf8f0;
    }
    h2 {
        background: #FBA6AE;
    }
    h4 {
        background-image: linear-gradient(-48deg, #FD818D 8%, #FBA6AE 92%);
    }
    .activity_reward li {
        background: #FEF4F5;
        border: 1px solid #FABBC1;
    }
    .activity_rule p i {
        color: #FBA6AE;
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
                    theme:'#Groupy7月広告モデル#',
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
                        title: 'FFACGとは？',
                        p1: 'FFACGとは、来場者数20万人超えの中国最大級のコミケであるFirefly ACG Festival（蛍火虫動漫遊戯嘉年華）です（公式HP：<a href="http://www.fireflyacg.com" target="_blank">http://www.fireflyacg.com</a>）。',
                        p2: '大好評につき、なんと！Groupyは3回目で7月のFFACGにメインステージ及び専用ブースへの出展が決定しました。',
                        p3: 'ただ今、Groupy巨大広告のモデルを募集しております。上位1名は19th FFACGの特大看板に掲載されちゃいます！',
                        p4: '特大というばどれぐらい？なんと2.5m × 6mであり、連続四日間で掲載！',
                        p5: '多くの方にあなたをアピールする大チャンスです！ すぐ参加しよう！',
                        p6: '<i>※掲載期間：2018年7月14日（土）-2018年7月17日（火）</i>',
                        p7: '<i>※掲載場所：中国広州で開催予定の第19回FFACG</i>',
                        p8: '<i>※サイズ：高さ2.5m × 幅6m</i>',
                        p10: '18th FFACG開催の模様：',
                        p11: '萤火虫漫展是什么？',
                        p12: '萤火虫漫展是人流量超过20万的中国最大型动漫游戏二次元活动漫展活动（Firefly ACG Festival）（官网：<a href="http://www.fireflyacg.com" target="_blank">http://www.fireflyacg.com</a>）',
                        p13: '由于之前活动获得粉丝们的强烈好评，2018年7月，Groupy将三降萤火虫漫展，再次进行精彩的主舞台表演（爱心表情）',
                        p14: 'Now，我们正在招募Groupy形象代言人。第一名就能够登上FFACG特大广告位！',
                        p15: '特大有多大？6M*2.5M！6M*2.5M！6M*2.5M！',
                        p16: '4天！4天的漫展都能看到你哦！大家认识你的绝好良机，一定要来参加哦',
                        p17: '<i>曝光时间：2018年7月14日（六）-2018年7月17日（二）</i>',
                        p18: '<i>曝光场所：在中国广州举办的第19届FFACG</i>',
                        p19: '<i>广告位大小：高6m × 宽2.5m</i>',
                        p20: '18th FFACG回顾：',
                    },
                    obj: {
                        title: '応募方法',
                        p1: '1. イベント期間中、<i>「#Groupy7月広告モデル」</i>タグをつけて投稿してください。投稿内容は自由です。',
                        p2: '2. イベント期間中は、動画を何本投稿しても構いません。',
                        p4: '<i>※投稿する際、タグ欄からタグを選択してください。入力のタグは認識されないため、集計になりません。</i>',
                        p5: '1. 活动期间，爱豆发布视频时添加标签<i>#Groupy7月代言人招募</i>即可参赛，视频不限制内容。',
                        p6: '2. 爱豆可多次发布参赛视频。',
                        p8: '<i>※参与活动时，请从下方选择合适的活动标签，手动输入的标签将不被识别</i>',
                    },
                    fansrule: {
                        title: '集計方法',
                        p1: '1. 全ての参加動画のLike数（ハート）の合計によってランキングが決まります。',
                        p2: '2. ランキングはイベント詳細ページにリアルタイムで確認できます。',
                        p4: '4. イベント期間外は、<i>「#Groupy7月広告モデル」</i>をつけて投稿しても集計されません。',
                        p6: '1. 活动期间，爱豆可发布多个参赛视频，最终按所属团体的所有参赛视频的收获的人气汇总排名。',
                        p7: '2. 活动期间，爱豆和粉丝可以在活动页面看到实时排名。',
                        p8: '3. 活动期间外，即使爱豆添加该主题标签，也无法参赛。',
                    },
                    warning: {
                        title: '注意事項',
                        p1: '1. 最終結果はイベント期間終了の翌日にGroupyアプリ、公式Twitter@Groupyyyにて発表させていただきます。',
                        p2: '2. 当選アイドルグループは掲載用の写真を2018年6月5日までにご提出いただきます。',
                        p3: '1. 活动结果将在活动结束后的第二天通过GroupyApp专用页面、官方微博、Twitter官号公布',
                        p4: '2. 获奖爱豆团体请在6月5号之前准备好广告看板的照片形象。',
                    },
                    rewards: [{
                        p1: 'ランキング上位1名のアイドルグループ',
                        p2: '来場者数20万人超えの19th FFACGの特大看板に、Groupyの広告モデルとして起用！',
                        p3: '第一名团体：',
                        p4: '将作为Groupy形象代言人，在19th 大型漫展萤火虫曝光！',
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
                    var shareURL = `https://share.groupy.vip/html/activity_ffacg201807_preliminaries/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }else {
                    var shareURL = `https://share.groupy.cn/html/activity_ffacg201807_preliminaries/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }
                var shareImg = `https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/acticity_banner/activity-ffacg201807_spokesman.jpg`;
                if(self.isFans) {
                    var title = `【#Groupy7月広告モデル】`;
                    var description = `上位1名は来場者数20万人超えの中国広州FFACG特大看板に掲載！応援してください(*≧∀≦*)~`;
                }else {
                    var title = `【#Groupy7月広告モデル】`;
                    var description = `上位1名のアイドルグループは来場者数20万人超えの中国広州FFACG特大看板に掲載！応援しよう！`;
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
          this.scrollReveal.reveal('.box', {
            duration: 600,
          });
        },
        created() {
            if(getParams('isFans') == 1) {
                this.isFans = false;
            }else {
                this.isFans = true;
                this.getList();
            }
        }
    }
</script>
