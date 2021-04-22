import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import SingerDetail from 'components/singer-detail/singer-detail'
import Disc from 'components/disc/disc'
import TopList from 'components/top-list/top-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    }
  ]
})

// 路由使用：
// 1.在router/index 里面先import Router 和需要用到组件
// 2. Vue.use(Router)
// 3. export default new Router({
//    routes:[
//      {
//          path: '/组件路径',
//          component: 组件名称
//    }
//  ]
// })
// 4. 在入口js文件 main.js 里面导入 刚刚export 的new Router
//      import router from './router'
//      在 new Vue 实例中 写上 router
//       new Vue({
//          el: '#app',
//          render: h => h(App),
//          router
//        })
// 5. 在app.vue 上直接使用<router-view></router-view> 即可完成路由注册
