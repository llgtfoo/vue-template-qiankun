import SideMenu from '@/components/SideMenu/index.vue'
import moduleMenu1 from './views/menu1-1/index.vue'
export default () => ({
  path: '/menu1',
  component: SideMenu,
  redirect: '/menu1/moduleMenu1',
  meta: {
    title: '实有人口',
  },
  children: [{
    path: '/menu1/moduleMenu1',
    component: moduleMenu1,
    meta: {
      title: '菜单一',
    },
  }],
})