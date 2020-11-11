import { createApp } from 'vue'
import App from './App.vue'
import ui from 'cat-ui'
import './index.css'
import  {createRouter, createWebHistory} from 'vue-router'
import routes from './route'

const history = createWebHistory()

const Router = createRouter({
  history,
  routes
})


const Vue = createApp(App)
Vue.use(Router)
Vue.use(ui)
Vue.mount('#app')
