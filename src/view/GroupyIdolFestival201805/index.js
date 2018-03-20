import Vue from 'vue'

import VueRouter from 'vue-router'
import routes  from './router.js'
import VueLazyload from 'vue-lazyload'
import * as VueGoogleMaps from 'vue2-google-maps'
import main from './main.vue'
Vue.use(VueRouter);
Vue.use(VueLazyload, {
        preLoad: 1,
        error: 'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/default_img/default_groupy.jpg',
        loading: 'http://photoh5-jp.oss-ap-northeast-1.aliyuncs.com/h5_groupy/default_img/default_groupy.jpg',
        attempt: 1
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDPvO23ei0E6j_q5_8Apgre_zbJTH_vDgk',
    libraries: 'places,drawing,visualization', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

// 1. 开启debug模式
Vue.config.debug = true


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    mode: 'hash',   // 强制使用hash模式进行导航，不能指望服务器支持history
    routes:routes,  // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    render: h => h(main),
    router:router,
}).$mount('#app')
