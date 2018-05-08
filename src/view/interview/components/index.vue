<template>
    <div class="main">
         <div class="content">
            <img v-if="isOver" src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/activity_banner/activity-interview-over.png" class="banner">
            <img v-else src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/activity_banner/activity-interview.png" class="banner">
            <h2>{{activity.theme}}</h2>
            <!-- <p class="share-sns" v-if="isFans"><span @click="shareSns('share_facebook')"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_facebook_1.png"><i>シェア</i></span><span @click="shareSns('share_twitter')"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_twitter_1.png"><i>ツイート</i></span></p> -->
            <div class="activity_rule">
                <p>中国区爱豆专属的Groupy官方采访权争夺战盛大来袭！活动期间获得Like数TOP1的爱豆将接受Groupy采访，并在各大官方平台推荐曝光。马上参与让更多人Get你的萌点~~~</p>
            </div>
            <div class="activity_rule">
                <span v-if="isFans" class="shares" @click="shareSns()"><img src="https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/activity_banner/shareAll.jpg">分享</span>
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
                    <p><span>{{activity.start}}</span><i>2018年03月16日（周五）00:00:00</i></p>
                    <p><span>{{activity.end}}</span><i>2018年03月24日（周六）23:59:59</i></p>
                </div>
            </div>
            <ul class="activity_reward">
                <h4>{{activity.award}}</h4>
                <li>
                    <img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/activity/icon_1.png">
                    <div class="reward_desc">
                        <p><i style="font-weight: 600;">{{activity.rewards[0].p1}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p2}}</i></p>
                        <p><span></span><i>{{activity.rewards[0].p3}}</i></p>
                    </div>
                </li>
            </ul>
            <div class="activity_rule">
                <h4>{{activity.rule.title}}</h4>
                <p v-html="activity.rule.p1"></p>
                <p v-html="activity.rule.p2"></p>
                <p v-html="activity.rule.p3"></p>
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
                        <div class="img_content"><img v-lazy="idol.avatar" class="avatar"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_1.png" class="crown" v-if="key == 0"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_2.png" class="crown" v-if="key == 1"><img src="https://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_crown_3.png" class="crown" v-if="key > 1"></div>
                        <div class="idol_content">
                            <span>{{idol.nickname?idol.nickname:'...'}}</span>
                            <div class="idol_desc">
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
        background: #fff3f4;
    }
    h2 {
        background: #B65A5E;
    }
    h4 {
        background-image: linear-gradient(-48deg,  #B65A5E 8%, #E58A8E 92%);
    }
    .activity_reward li {
        background: #FFEEF0;
        border: 1px solid #E5C8CA;
    }
    .activity_rule p i {
        color: #B65A5E;
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
                    theme:'#Groupy官方采访#',
                    time: '活动时间（中国时间）',
                    start: '开始时间',
                    end: '结束时间',
                    rewardList: '活动排名',
                    works: '参赛视频',
                    videos: '查看更多视频',
                    noRanking: '暂无排名',
                    award: '活动奖励',
                    me: '我的排名',
                    all: '全部排名',
                    more: '查看更多',
                    rule: {
                        title: '如何参赛？',
                        p1: '1. 活动期间，爱豆发布视频时添加活动标签<i>#Groupy官方采访</i>即可参赛，视频不限制内容。',
                        p2: '2.爱豆发布参赛视频的次数不受限制。',
                        p3: '<i>※参与活动时，请从下方选择合适的活动标签，手动输入的标签将不被识别</i>',
                    },
                    desc: {
                        title: '活动详情',
                        p1: '中国区爱豆的专属活动终于来啦！Groupy官方采访权争夺战盛大开启！！！！',
                        p2: '活动期间获得Like数排名TOP1的爱豆将接受Groupy官方采访，并在APP内・微信・微博等各大官方SNS平台面向千万粉丝做推广曝光，让更多小伙伴Get你的萌点~~~',
                        p3: '还有更多国内爱豆专属福利等着你，记得要来参加哦♪',
                        p4: '采访形式：Groupy官方提出问题（问题围绕爱豆及其所属团体展开） - 胜出爱豆以文字形式回答',
                        p5:'采访时间：3月下旬',
                        p6:'文章公布时间：3-4月之间',
                        p7:'文章发布平台：Groupy APP・微博・微信公众号等各大官方SNS平台',
                    },
                    fansrule: {
                        title: '活动说明',
                        p1: '1.根据活动期间，爱豆所有参赛视频收获的Like数进行排名。',
                        p2: '2. 实时排名可从APP首页点击活动banner，进入活动页面查看。',
                        p3: '3.活动结束以后，爱豆即使添加该活动标签<i>#Groupy官方采访</i>，也无法参赛。',
                        p4: '4.活动结果将在活动结束后的第二天通过GroupyApp内的活动页面和官方微博（@GGroupy）公布。'
                    },
                    rewards: [{
                        p1: '活动期间Like数排名TOP1的爱豆：',
                        p2: '接受Groupy官方采访，采访文章在GroupyAPP・微博・微信公众号等各大平台曝光',
                        p3: '在APP内顶栏banner位置固定曝光推荐（曝光时间：一周）',
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
                        var shareURL = `https://share.groupy.vip/html/activity_interview/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                    }else {
                        var shareURL = `https://share.groupy.cn/html/activity_interview/index.html?activityId=${getParams('activityId')}&idolId=${self.me.idol_id}`;
                    }
                    var title = `#Groupy独家采访#`;
                    var description = `我正在参加Groupy官方采访权争夺战，发了很多有趣的视频，希望大家多多支持！#Groupy#`;
                    var shareImg = `https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/activity_banner/activity-interview.png`;
                }else {
                    if(location.hostname == 'activity.groupy.vip') {
                        var shareURL = `https://share.groupy.vip/html/activity_interview/index.html?activityId=${getParams('activityId')}&isFans=1`;
                    }else {
                        var shareURL = `https://share.groupy.cn/html/activity_interview/index.html?activityId=${getParams('activityId')}&isFans=1`;
                    }
                    var title = `#Groupy独家采访#`;
                    var description = `我家小偶像正在参加GroupyAPP的官方采访权争夺战，发了很多有趣视频，请大家多多支持！#Groupy#`;
                    var shareImg = `https://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/activity_banner/activity-interview.png`;
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
        },
        created() {
            if(getParams('isFans') == 1) {
                this.isFans = false;
            }else {
                this.isFans = true;
                this.getList();
            }
            window.setupWebViewJavascriptBridge(function(bridge) {
                bridge.callHandler('setTitle', {'title':'Groupy独家采访'})
            })
        }
    }
</script>
