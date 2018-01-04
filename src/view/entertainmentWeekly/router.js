/**
 * Created by yaoze on 2016/9/26.
 */

// 组件只有import之后才能使用
import index from './components/index.vue'
import top10 from './components/top10.vue'
import fans_ranking from './components/fans_ranking.vue'

const routes =
    [
        {
            path: '/',
            component: index,
        },{
            path: '/top10',
            component: top10,
        },{
            path: '/fans_ranking',
            component: fans_ranking,
        }
    ];
export default routes;
