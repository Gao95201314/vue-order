// 路由相关的代码
import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 插件安装
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () =>
        import('./views/Index'),
      children: [
        {
          // 首页
          path: '/home',
          name: 'home',
          component: () =>
            import('./views/Home.vue')
        },
        {
          // 订单页
          path: '/discover',
          name: 'discover',
          component: () =>
            import('./views/discover')
        },
        {
          // 订单页
          path: '/order',
          name: 'order',
          component: () =>
            import('./views/Order')
        },
        {
          // 个人中心页
          path: '/center',
          name: 'center',
          component: () =>
            import('./views/Center.vue')
        }
        /* {
          // 购物车
          path: 'shopcart',
          name: 'shopcart',
          component: () =>
            import('./views/ShopCart')
           beforeEnter(to, from, next) {
            if (localStorage.getItem('userphone')) {
              next();
            } else {
              // 注意，如果需要实现，拦截到登陆页面之后，登录成功回跳到那个页面。
              //localStorage.setItem('myNeedPage','/user/card');
              next({
                path: '/user/login',
                query: {
                  redirect: to.fullPath
                }
              });
            }
          } 
        }, */
      ]
    },
    {
      //用户
      path: '/login',
      name: 'login',
      component: () =>
        import('./views/Login.vue')
    },
    // {
    //   // 详情页面
    //   path: '/filmDetail/:filmId',
    //   name: 'filmDetail',
    //   component: () =>
    //     import('./views/FilmDetail.vue'),
    //   brforeEnter(to, from, next) {
    //     console.log('我是一个路由独享的钩子函数');
    //     next();
    //   }
    // },
    {
      //选择地址路由
      path: '/detailCity',
      name: 'detailCity',
      component: () =>
        import('./views/detailCity.vue')
    },
    {
      //选择城市路由
      path: '/city',
      name: 'city',
      component: () =>
        import('./views/city.vue')
    },
    {
      //首页搜索商家
      path: '/search',
      name: 'search',
      component: () =>
        import('./views/search.vue')
    },
    {
      //商家详情页面
      path: '/shopDetail/:id',
      name: 'shopDetail',
      component: () =>
        import('./views/shopDetail.vue')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
})
router.afterEach((to, from) => {
  NProgress.done();
})
// 需要暴露
export default router;
