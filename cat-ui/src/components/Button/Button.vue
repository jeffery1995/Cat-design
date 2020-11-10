<template>
  <button :class="classList" :style="{width: width + 'px', height: height + 'px'}"><slot></slot></button>
</template>

<script>
import { computed, toRefs } from 'vue'
export default {
  name: 'cat-btn',
  props: {
    size: {
      type: String,
      default: 'medium'
    },
    width: Number,
    height: Number,
  },
  computed: {
    classList () {
      const { size } = this
      return [
      "cat-button",
      `cat-button-${size}`
     ]
    }
  },
}
</script>

<style lang="scss" scoped>
.cat-botton {
   background: $color-primary;
}
.cat-button-small {

}


.cat-button-medium {
  width: 200px;
  height: 100px;
}
</style>