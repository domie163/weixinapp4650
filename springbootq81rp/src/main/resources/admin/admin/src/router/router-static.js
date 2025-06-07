import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import xinwenfenlei from '@/views/modules/xinwenfenlei/list'
    import guahaoxinxi from '@/views/modules/guahaoxinxi/list'
    import discussxinwenxinxi from '@/views/modules/discussxinwenxinxi/list'
    import keshimingcheng from '@/views/modules/keshimingcheng/list'
    import shangpinxinxi from '@/views/modules/shangpinxinxi/list'
    import jumin from '@/views/modules/jumin/list'
    import feiyongxinxi from '@/views/modules/feiyongxinxi/list'
    import storeup from '@/views/modules/storeup/list'
    import forum from '@/views/modules/forum/list'
    import systemintro from '@/views/modules/systemintro/list'
    import chathelper from '@/views/modules/chathelper/list'
    import feiyongfenlei from '@/views/modules/feiyongfenlei/list'
    import xinwenxinxi from '@/views/modules/xinwenxinxi/list'
    import chat from '@/views/modules/chat/list'
    import discussshangpinxinxi from '@/views/modules/discussshangpinxinxi/list'
    import orders from '@/views/modules/orders/list'
    import jiuzhenxinxi from '@/views/modules/jiuzhenxinxi/list'
    import shangpinleixing from '@/views/modules/shangpinleixing/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/xinwenfenlei',
        name: '新闻分类',
        component: xinwenfenlei
      }
      ,{
	path: '/guahaoxinxi',
        name: '挂号信息',
        component: guahaoxinxi
      }
      ,{
	path: '/discussxinwenxinxi',
        name: '新闻信息评论',
        component: discussxinwenxinxi
      }
      ,{
	path: '/keshimingcheng',
        name: '科室名称',
        component: keshimingcheng
      }
      ,{
	path: '/shangpinxinxi',
        name: '商品信息',
        component: shangpinxinxi
      }
      ,{
	path: '/jumin',
        name: '居民',
        component: jumin
      }
      ,{
	path: '/feiyongxinxi',
        name: '费用信息',
        component: feiyongxinxi
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/forum',
        name: '交流论坛',
        component: forum
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/chathelper',
        name: '智能助手',
        component: chathelper
      }
      ,{
	path: '/feiyongfenlei',
        name: '费用分类',
        component: feiyongfenlei
      }
      ,{
	path: '/xinwenxinxi',
        name: '新闻信息',
        component: xinwenxinxi
      }
      ,{
	path: '/chat',
        name: '在线客服',
        component: chat
      }
      ,{
	path: '/discussshangpinxinxi',
        name: '商品信息评论',
        component: discussshangpinxinxi
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/jiuzhenxinxi',
        name: '就诊信息',
        component: jiuzhenxinxi
      }
      ,{
	path: '/shangpinleixing',
        name: '商品类型',
        component: shangpinleixing
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
