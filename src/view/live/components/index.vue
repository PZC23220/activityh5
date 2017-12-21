<template>
  <div class="index">
    <div class="likes-total"><img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Live/timeline_icon_likes.png" alt=""><span>{{Number(popularity?popularity:0).toLocaleString()}}</span></div>
      <ul class="gift-list">
        <li v-for="gift in videoGifts"><img :src="gift.giftImg" alt=""><span v-if="gift.giftNums > 1">{{gift.giftNums}}</span></li>
      </ul>
    <div class="footer">
      <img @click.stop="support()" src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Live/likes.png" class="send-gift" alt="">
      <img src="http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/Live/icon_.png" class="top5" alt="">
    </div>
  </div>
</template>
<script>
  import http from '@api/js/http.js';
  require('@api/js/common.js');
  export default {
    data() {
      return {
        popularity:0,
        videoGifts: [],
      }
    },
    methods: {
      getVideo() {
        let self = this;
        var data_ = {"data": [{"idolId": getParams('idolId'), "videoIds": [getParams('liveId')] }]};
        http.post('/video/getVideos',data_).then(res => {
          let video = res.data;
          if(video.length > 0) {
            this.popularity = video[0].popularity;
            this.videoGifts = video[0].videoGifts;
          }

        }).catch(err => {

        })
      },
      support() {
        console.log('support');
        var self = this;
        window.setupWebViewJavascriptBridge(function(bridge) {
            bridge.callHandler('send_gift', {'context':'0','idol_id':getParams('idolId')}, function responseCallback(responseData) {
                self.getVideo();
            })
        })
        return;
      }
    },
    mounted() {
      var self = this;
      window.ranking_refresh = function() {
        self.getVideo();
      }
      window.setupWebViewJavascriptBridge(function(bridge) {
          bridge.registerHandler('ranking_refresh', function() {
            self.getVideo();
          })
      });
    },
    created: function() {
      this.getVideo();      
    }
  }
</script>
