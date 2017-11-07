<template>
    <div class="main">
         <div class="content">
            <v-scroll :on-refresh="refresh" :on-infinite="infinite">
                 <ul class="comment_list" v-if="default1==false">
                    <div class="con_left" :class="{'left_hide':rakingList.length>0}">
                        <li>
                            <span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_metal_1.png" alt=""></span>
                            <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/default_img/default_img.png"alt="" class="avatar">
                            <div class="fans_content">
                                <span><em>...</em></span>
                                <span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png" alt="">0</span>
                            </div>
                        </li>
                        <li>
                           <span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_metal_2.png" alt=""></span>
                            <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/default_img/default_img.png"alt="" class="avatar">
                            <div class="fans_content">
                                <span><em>...</em></span>
                                <span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png" alt="">0</span>
                            </div>
                        </li>
                        <li>
                           <span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_metal_3.png" alt=""></span>
                            <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/default_img/default_img.png"alt="" class="avatar">
                            <div class="fans_content">
                                <span><em>...</em></span>
                                <span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png" alt="">0</span>
                            </div>
                        </li>
                        <li>
                           <span>4</span>
                            <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/default_img/default_img.png"alt="" class="avatar">
                            <div class="fans_content">
                                <span><em>...</em></span>
                                <span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png" alt="">0</span>
                            </div>
                        </li>
                        <li>
                           <span>5</span>
                            <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/default_img/default_img.png"alt="" class="avatar">
                            <div class="fans_content">
                                <span><em>...</em></span>
                                <span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png" alt="">0</span>
                            </div>
                        </li>
                        <li>
                           <span>5</span>
                            <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/default_img/default_img.png"alt="" class="avatar">
                            <div class="fans_content">
                                <span><em>...</em></span>
                                <span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png" alt="">0</span>
                            </div>
                        </li>
                    </div>
                    <li v-for="(idol,key) in rakingList" v-if="key < len">
                        <span v-if="key == 0"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_metal_1.png" alt=""></span>
                        <span v-if="key == 1"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_metal_2.png" alt=""></span>
                        <span v-if="key == 2"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/crown_metal/icon_metal_3.png" alt=""></span>
                        <span v-if="key > 2" :class="[{'second':key>8},{'three':key>98}]">{{key+1}}</span>
                        <span class="avatar"><img v-lazy="idol.avatar" alt=""></span>
                        <div class="fans_content">
                            <span>
                                <em>{{idol.nickname?idol.nickname:'...'}}</em>
                                <span class="level">Lv.{{idol.level_platform?idol.level_platform:0}}</span>
                                <!-- <img class="medal_level" :src="'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/medal/icon_medal_'+(idol.medal)+'.png'" v-if="idol?(idol.medal&&idol.medal>0):false" alt=""> -->
                            </span>
                            <span><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/icon/timeline_icon_likes.png" alt="">{{idol.score?Number(idol.score).toLocaleString(): 0}}</span>
                        </div>
                    </li>
                </ul>
                <div class="default_page default_page3"  v-if="default1">
                    <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/default_img/default_no coin.png" alt="">
                    <p v-html="fans_text.noneGcoin"></p>
                </div>
            <!-- </scroller> -->
            </v-scroll>
         </div>
    </div>
</template>
<style type="text/css" lang="scss" scoped>
     @import "../../../css/fans_ranking.scss";
</style>
<script>
    // import VueScroller from 'vue-scroller';
    import Scroll from 'src/components/scroll.vue';
    import http from '@api/js/http.js';
    require('@api/js/common.js')
    export default {
        data() {
            return {
                rakingList: [],
                meObj: {},
                len: 20,
                default1: false,
                idx: 0,
                fans_text: {
                    noneGcoin: 'まだコインはないようです',
                    noneLike: 'まだLikeはないようです',
                    pubMsg: '応援ランキング'
                },
            }
        },
        components: {
            'v-scroll': Scroll
        },
        methods: {
            close() {
                window.setupWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler('close');
                });
            },
            changePages(val) {
                let tabs = $('.tabs');
                tabs.removeClass('active');
                tabs.eq(val).addClass('active');
                $('.bgActive').css('left','calc((100vw - 24px)* '+ (val) +'/2)');
                this.swiper.slideTo(val, 500, false)
            },
            formatTime(key) {
              let timer = new Date(key*1000 - 1*60*60*1000);
              return timer.Format('MM.dd')+ '&nbsp;&nbsp;&nbsp;&nbsp;' + timer.Format('hh:mm')
            },
            getRanking(token) {
                let self = this;
                if(self.idx < 2) {
                    self.idx++;
                    // let token_ = getParams('token');
                    // if(token) {
                    //     http.defaults.headers.common['Authorization'] = 'Token '+token;
                    // }else if(token_!='(null)' && token_!='') {
                    //     http.defaults.headers.common['Authorization'] = 'Token ' + token_;
                    // }
                    http.get('/ranking/idolActVideoByFans',{
                        params: {
                            activityId: getParams('activityId'),
                            idolId: self.$route.query.idolId
                        }
                    }).then(function(res){
                        console.log(res)
                        if(res.status == 200) {
                            if(res.data.length > 0) {
                                self.default1 = false;
                                self.rakingList = res.data;
                                // for(var i=0;i<self.rakingList.length;i++) {
                                //     if(self.rakingList[i].fansId == getParams('fansId')) {
                                //         self.meObj = self.rakingList[i];
                                //         self.meObj.position = (i+1);
                                //         console.log(self.rakingList)
                                //         return;
                                //     }
                                // }
                            }else {
                                self.default1 = true;
                            }
                        }else {
                           self.default1 = true;
                        }
                    }).catch(function(err){
                                self.getRanking();
                    });
                    
                }else {
                    // let _lan = (navigator.browserLanguage || navigator.language).toLowerCase();
                    window.setupWebViewJavascriptBridge(function(bridge) {
                        // if(_lan === 'zh-cn') {
                        //     bridge.callHandler('makeToast', '服务器出错，请稍后重试');
                        //  }else {
                            bridge.callHandler('makeToast', 'エラーが発生しました\nしばらくしてからもう一度お試しください');
                         // }
                    })
                }
            },
            refresh (done) {
                var self = this;
                setTimeout(() => {
                  self.idx = 0;
                  self.getRanking();
                  done()
                }, 1500)
            },

            infinite (done) {
                var self = this;
                if (self.rakingList.length < self.len) {
                  setTimeout(() => {
                    done(true)
                  }, 1500)
                  return;
                } else {
                    setTimeout(() => {
                      self.len += 20;
                      done()
                    }, 1500)
                }
            }
        },
        created() {
            var self = this;
            self.getRanking();
        }
    }
</script>