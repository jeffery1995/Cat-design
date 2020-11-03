import Button from './components/Button.vue'

const components = [
  Button,
]


const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  version: '1.0.0',
  install
}