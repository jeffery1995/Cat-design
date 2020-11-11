import Button from './components/Button'
import Layout from './components/Layout'
import { MainHeader, MainFooter } from './components/Layout'

const components = [
  Button,
  Layout,
  MainHeader, 
  MainFooter
]


const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  version: '1.0.0',
  install
}