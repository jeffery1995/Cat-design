import Button from './Button.vue'

Button.install = function (vm) {
  vm.component(Button.name, Button)
}

export default Button