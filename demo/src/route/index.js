import button from './button'


export default [
  ...button,
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "layout" */ '../views/Home.vue')
  }
]