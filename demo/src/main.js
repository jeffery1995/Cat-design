import { createApp } from 'vue'
import App from './App.vue'
import ui from 'cat-ui'
import './index.css'

const Vue = createApp(App)
Vue.use(ui)
Vue.mount('#app')
