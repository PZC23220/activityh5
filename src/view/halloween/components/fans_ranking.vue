<template>
    <div class="main">
         <div class="content">
            <v-scroll :on-refresh="refresh" :on-infinite="infinite">
                 <ul class="comment_list" v-if="default1==false">
                    <div class="con_left" :class="{'left_hide':rakingList.length>0}">
                        <li>
                            <span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/crown_metal/icon_metal_1.png" alt=""></span>
                            <img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/default_img/default_img.png"alt="" class="avatar">
                            <div class="fans_content">
                                <span><em>...</em></span>
                                <span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png" alt="">0</span>
                            </div>
                        </li>
                        <li>
                           <span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/crown_metal/icon_metal_2.png" alt=""></span>
                            <img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/default_img/default_img.png"alt="" class="avatar">
                            <div class="fans_content">
                                <span><em>...</em></span>
                                <span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png" alt="">0</span>
                            </div>
                        </li>
                        <li>
                           <span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/crown_metal/icon_metal_3.png" alt=""></span>
                            <img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/default_img/default_img.png"alt="" class="avatar">
                            <div class="fans_content">
                                <span><em>...</em></span>
                                <span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png" alt="">0</span>
                            </div>
                        </li>
                        <li>
                           <span>4</span>
                            <img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/default_img/default_img.png"alt="" class="avatar">
                            <div class="fans_content">
                                <span><em>...</em></span>
                                <span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png" alt="">0</span>
                            </div>
                        </li>
                        <li>
                           <span>5</span>
                            <img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/default_img/default_img.png"alt="" class="avatar">
                            <div class="fans_content">
                                <span><em>...</em></span>
                                <span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png" alt="">0</span>
                            </div>
                        </li>
                        <li>
                           <span>5</span>
                            <img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/default_img/default_img.png"alt="" class="avatar">
                            <div class="fans_content">
                                <span><em>...</em></span>
                                <span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png" alt="">0</span>
                            </div>
                        </li>
                    </div>
                    <li v-if="rakingList.length>0">
                        <span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/crown_metal/icon_metal_1.png" alt=""></span>
                        <img v-lazy="rakingList[0].fans?rakingList[0].fans.avatar:'http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/default_img/default_img.png'" alt="" class="avatar">
                        <div class="fans_content">
                            <span>
                                <em>{{rakingList[0].fans?rakingList[0].fans.nickname:'...'}}</em>
                                <!-- <img :src="rakingList.length>0?('/static/images/icon_level_'+ (rakingList[0].fans.levelPlatform) +'.png'): 'http://h5.groupy.vip/static/images/icon_level_0.png'" onerror="this.src='http://h5.groupy.vip/static/images/icon_level_0.png'" class="level" alt=""> -->
                                <span class="level">Lv.{{rakingList[0].fans?(rakingList[0].fans.levelPlatform?rakingList[0].fans.levelPlatform:0):0}}</span>
                                <img class="medal_level" :src="'http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/medal/icon_medal_'+(rakingList[0].fans.medal)+'.png'" v-if="rakingList[0].fans?(rakingList[0].fans.medal&&rakingList[0].fans.medal>0):false" alt="">
                            </span>
                            <span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png" alt="">{{rakingList[0].expendGprice?Number(rakingList[0].expendGprice).toLocaleString(): 0}}</span>
                        </div>
                        <!-- <i class="fans_medal"><img src="" alt="" class="avatar"><img src="" alt="" class="medal"></i> -->
                    </li>
                    <li v-if="rakingList.length>1">
                        <span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/crown_metal/icon_metal_2.png" alt=""></span>
                        <img v-lazy="rakingList[1].fans?rakingList[1].fans.avatar:'http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/default_img/default_img.png'" alt="" class="avatar">
                        <div class="fans_content">
                            <span>
                                <em>{{rakingList[1].fans?rakingList[1].fans.nickname:'...'}}</em>
                                <!-- <img :src="rakingList[1].fans?('/static/images/icon_level_'+ (rakingList[1].fans.levelPlatform+1) +'.png'): 'http://h5.groupy.vip/static/images/icon_level_0.png'" onerror="this.src='http://h5.groupy.vip/static/images/icon_level_0.png'" class="level" alt=""> -->
                                <span class="level">Lv.{{rakingList[1].fans?(rakingList[1].fans.levelPlatform?rakingList[1].fans.levelPlatform:0):0}}</span>
                                <img class="medal_level" :src="'http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/medal/icon_medal_'+(rakingList[1].fans.medal)+'.png'" v-if="rakingList[1].fans?(rakingList[1].fans.medal&&rakingList[1].fans.medal>0):false" alt="">
                            </span>
                            <span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png" alt="">{{rakingList[1].expendGprice?Number(rakingList[1].expendGprice).toLocaleString(): 0}}</span>
                        </div>
                        <!-- <i class="fans_medal"><img src="" alt="" class="avatar"><img src="" alt="" class="medal"></i> -->
                    </li>
                    <li v-if="rakingList.length>2">
                        <span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/crown_metal/icon_metal_3.png" alt=""></span>
                        <img v-lazy="rakingList[2].fans?rakingList[2].fans.avatar:'http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/default_img/default_img.png'" alt="" class="avatar">
                        <div class="fans_content">
                            <span>
                                <em>{{rakingList[2].fans?rakingList[2].fans.nickname:'...'}}</em>
                                <!-- <img :src="rakingList[2].fans?('/static/images/icon_level_'+ (rakingList[2].fans.levelPlatform+2) +'.png'): 'http://h5.groupy.vip/static/images/icon_level_0.png'" onerror="this.src='http://h5.groupy.vip/static/images/icon_level_0.png'" class="level" alt=""> -->
                                <span class="level">Lv.{{rakingList[2].fans?(rakingList[2].fans.levelPlatform?rakingList[2].fans.levelPlatform:0):0}}</span>
                                <img class="medal_level" :src="'http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/medal/icon_medal_'+(rakingList[2].fans.medal)+'.png'" v-if="rakingList[2].fans?(rakingList[2].fans.medal&&rakingList[2].fans.medal>0):false" alt="">
                            </span>
                            <span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png" alt="">{{rakingList[2].expendGprice?Number(rakingList[2].expendGprice).toLocaleString(): 0}}</span>
                        </div>
                        <!-- <i class="fans_medal"><img src="" alt="" class="avatar"><img src="" alt="" class="medal"></i> -->
                    </li>
                    <li v-for="(idol,key) in rakingList" v-if="key > 2 && key < len">
                        <span>{{key+1}}</span>
                        <img v-lazy="idol.fans?idol.fans.avatar:'http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/default_img/default_img.png'" alt="" class="avatar">
                        <div class="fans_content">
                            <span>
                                <em>{{idol.fans?idol.fans.nickname:'...'}}</em>
                                <!-- <img :src="idol.fans?('/static/images/icon_level_'+ (idol.fans.levelPlatform+1) +'.png'): 'http://h5.groupy.vip/static/images/icon_level_0.png'" onerror="this.src='http://h5.groupy.vip/static/images/icon_level_0.png'" class="level" alt=""> -->
                                <span class="level">Lv.{{idol.fans?(idol.fans.levelPlatform?idol.fans.levelPlatform:0):0}}</span>
                                <img class="medal_level" :src="'http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/medal/icon_medal_'+(idol.fans.medal)+'.png'" v-if="idol.fans?(idol.fans.medal&&idol.fans.medal>0):false" alt="">
                            </span>
                            <span><img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/icon/timeline_icon_coins.png" alt="">{{idol.expendGprice?Number(idol.expendGprice).toLocaleString(): 0}}</span>
                        </div>
                        <!-- <i class="fans_medal"><img src="" alt="" class="avatar"><img src="" alt="" class="medal"></i> -->
                    </li>
                </ul>
                <div class="default_page default_page3"  v-if="default1">
                    <img src="http://photodebug.oss-cn-hongkong.aliyuncs.com/h5_groupy/default_img/default_no coin.png" alt="">
                    <p v-html="fans_text.noneGcoin"></p>
                </div>
            <!-- </scroller> -->
            </v-scroll>
         </div>
    </div>
</template>
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
                loadingBig: false,
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
                    let token_ = getParams('token');
                    if(token) {
                        http.defaults.headers.common['Authorization'] = 'Token '+token;
                    }else if(token_!='(null)' && token_!='') {
                        http.defaults.headers.common['Authorization'] = 'Token ' + token_;
                    }
                    http.get('/statistic/gb',{
                        params: {
                            idolId: getParams('idolId')
                        }
                    }).then(function(res){
                        if(res.status == 200) {
                            self.loadingBig = true;
                            if(res.data.fansList.length > 0) {
                                self.default1 = false;
                                self.rakingList = res.data.fansList;
                                for(var i=0;i<self.rakingList.length;i++) {
                                    // console.log(self.rakingList[i].fansId == 160)
                                    if(self.rakingList[i].fansId == getParams('fansId')) {
                                        self.meObj = self.rakingList[i];
                                        self.meObj.position = (i+1);
                                        console.log(self.rakingList)
                                        return;
                                    }
                                }
                            }else {
                                self.default1 = true;
                            }
                        }else {
                            window.setupWebViewJavascriptBridge(function(bridge) {
                                bridge.callHandler('getToken', {'targetType':'0','targetId':'0'}, function responseCallback(responseData) {
                                    self.getRanking(responseData.token);
                                })
                            })
                        }
                    }).catch(function(err){
                        window.setupWebViewJavascriptBridge(function(bridge) {
                            bridge.callHandler('getToken', {'targetType':'0','targetId':'0'}, function responseCallback(responseData) {
                                self.getRanking(responseData.token);
                            })
                        })
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
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        created() {
            var self = this;
            self.getRanking();
        }
    }
</script>