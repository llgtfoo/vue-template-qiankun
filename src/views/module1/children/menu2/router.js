import SideMenu from '@/components/SideMenu/index.vue'
import moduleMenu from './views/menu/index.vue'
export default () => ({
  path: '/menu2',
  component: SideMenu,
  redirect: '/menu2/moduleMenu1',
  meta: {
    title: '实有房屋',
  },
  children: [{
    path: '/menu2/moduleMenu1',
    component: moduleMenu,
    meta: {
      title: '菜单二',
    },
  }],
})