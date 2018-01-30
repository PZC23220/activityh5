<template>
    <div class="main">
         <div class="content">
            <img :src="activityInfo.img" class="banner">
            <h2 class="">{{activityInfo.description}}</h2>
            <p class="share-sns"><span class="sns facebook" @click="shareSns('share_facebook')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_facebook_1.png"><i>シェア</i></span><span class="sns" @click="shareSns('share_twitter')"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/sns/icon_twitter_1.png"><i>ツイート</i></span><span @click="activityInfo.actionInfo?open_h5():false" class="detail">詳しくはこちら<img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/arrow/icon_arrow_gray.png"></span></p>
            <div class="countDown-content">
                <div class="countDown"><span>終了まであと</span><p class="timer"><em>{{countimes.Dates}}</em>日<em>{{countimes.Hours}}</em>時間<em>{{countimes.Minutes}}</em>分<em>{{countimes.Seconds}}</em>秒</p></div>
                <div v-if="!isOver" class="goal">対象：{{activityInfo.goal}}</div>
            </div>
            <!-- <div class="idol-ranking">
                <div class="countDown-content">
                    <div class="countDown"><span>距离结束</span><p class="timer"><em>{{countimes.Dates}}</em>天<em>{{countimes.Hours}}</em>时<em>{{countimes.Minutes}}</em>分<em>{{countimes.Seconds}}</em>秒</p></div>
                    <div class="goal">対象：{{activityInfo.goal}}</div>
                </div>
                <div class="ranking-two">
                    <div class="ranking-idol"  v-for="(idol , key) in ranking" v-if="key < 3"><p class="avatar-content"><img :src="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/ranking_'+ (key+1) +'.png'"><span><img v-lazy="idol.avatar"></span></p><p class="idolName-content"><span>{{idol.nickname?idol.nickname:'...'}}</span><span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_likes.png"><i>{{Number(idol.popularity?idol.popularity:0).toLocaleString()}}</i></span></p></div>
                </div>
                <img class="no-ranking" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/default_img/default_no%20ranking.jpg" v-if="ranking.length <= 0">
                <p class="no-ranking-tips" v-if="ranking.length <= 0">ランキング集計中...</p>
                <a v-if="ranking.length > 0" @click="p_log('activityshare_activity_ranking')" target="_blank" :href="hrefs" class="download ranking-download">ランキング</a>
            </div> -->
            <div class="ranking-twitter">
                <h5 class="twitter-title">ランキングは公式Twitterにて公開</h5>
                <div class="twitter-content" v-html='activityInfo.twitterWidgetCodeSnippet'>

                </div>
            </div>
        </div>
    </div>
</template>
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
                belowHeight: 300,
                loadingShow: false,
                isOver: false,
                havedMe: false,
                isFans: true,
                showsStart: false,
                activityInfo: {},
                countimes: {
                    Dates: 0,
                    Hours: 0,
                    Minutes: 0,
                    Seconds: 0
                }
            }
        },
        methods: {
            countDownFormat(deff) {
                var self = this;
                let timer,deffDate;
                clearInterval(timer);
                timer = setInterval(function(){
                    let nowTime = Date.parse(new Date());
                    if(nowTime < deff) {
                        let deffDate = deff - nowTime;
                        self.countimes.Dates = Math.floor(deffDate/(24*3600*1000)); //日
                        var leave1=deffDate%(24*3600*1000)    //计算天数后剩余的毫秒数
                        self.countimes.Hours = Math.floor(leave1/(3600*1000)); //小时
                        var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
                        self.countimes.Minutes = Math.floor(leave2/(60*1000)); //分
                        var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
                        self.countimes.Seconds = Math.floor(leave3/1000); //秒
                    }else {
                        clearInterval(timer);
                        self.countDownShow = false;
                    }
                },1000)
            },
            open_h5() {
                let self = this;
                window.setupWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler('open_h5', {"url": self.activityInfo.actionInfo, "title": self.activityInfo.title})
                      ()
                })
            },
            shareSns(val) {
                var self = this;
                if(location.hostname == 'activity.groupy.vip') {
                    var shareURL = `http://share.groupy.vip/html/activity_twitter/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }else {
                    var shareURL = `http://share.groupy.cn/html/activity_twitter/index.html?activityId=${getParams('activityId')}&isFans=1`;
                }
                var title = self.activityInfo.shareTitle;
                var description = self.activityInfo.shareDesc;
                var shareImg = self.activityInfo.img;
                console.log(shareURL)
                window.setupWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler(val, {'title':title,'description':description,'shareImg':shareImg,'shareURL':shareURL})
                })
            },
            getList() {
                let self = this;
                let _lan = (navigator.browserLanguage || navigator.language).toLowerCase();
                if(self.idx < 2) {
                    http.get('/video/activityIdols',{
                        params: {
                            activityId:getParams('activityId'),
                            rows: 3
                        }
                    }).then(function(res){
                        console.log('res.status:'+res.status)
                        console.log('res.errorMsg:'+res.errorMsg)
                        console.log('res.data:'+res.data)
                        if(res.data) {
                            if(res.data.ranking) {
                                self.ranking = res.data.ranking;
                            }
                            if(res.data.activityInfo) {
                                self.activityInfo = res.data.activityInfo;
                                window.setupWebViewJavascriptBridge(function(bridge) {
                                    bridge.callHandler('setTitle', {'title':self.activityInfo.title})
                                })
                                self.countDownFormat(res.data.activityInfo.endTime);
                            }
                            self.loadingShow = true;
                            if(res.data.isActivityEnded) {
                                self.isOver = true;
                            }else {
                                self.isOver = false;
                            }
                            let spt = document.createElement('script');
                            spt.src = 'https://platform.twitter.com/widgets.js';
                            document.getElementsByTagName('body')[0].appendChild(spt);
                        }else {
                            self.idx++;
                            self.getList();
                        }
                    }).catch(function(err){
                        console.log(err)
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
            },
        },
        mounted() {
            // let deff = document.getElementsByClassName('content')[0].clientHeight;
            // if(deff > this.belowHeight) {
            //     console.log(deff)
            //     this.belowHeight = deff;
            // }

        },
        created() {
            this.getList();
            if(getParams('isFans') == 1) {
                this.isFans = false;
            }else {
                this.isFans = true;
            }
        }
    }
</script>
