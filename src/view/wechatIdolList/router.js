/**
 * Created by yaoze on 2016/9/26.
 */

// 组件只有import之后才能使用
import index from './components/index.vue'
import group from './components/group.vue'
// import webview from './components/webview.vue'

let ua = navigator.userAgent.toLowerCase();
// let pages;

// // 还可以通过language，区分开多国语言版

// if (/iphone|ipad|ipod|android/.test(ua)) {
//    pages = '/webview';
// }else {
//    pages = '/index';
// }

const routes =
    [
        {
            path: '/',
            redirect: 'index',
        },{
            path: '/index',
            component: index,
        },{
            path: '/group',
            component: group,
        }
    ];
export default routes;
