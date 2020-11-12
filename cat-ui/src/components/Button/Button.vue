<template>
  <button :class="classList" :style="{width: width + 'px', height: height + 'px'}"><slot></slot></button>
</template>

<script>
export default {
  name: 'mepo-btn',
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
      "mepo-button",
      `mepo-button-${size}`
     ]
    }
  },
}
</script>

<style lang="scss">

.mepo-button {
   background: $color-primary;
}
.mepo-button-small {

}
.mepo-button-medium {
  width: 200px;
  height: 100px;
}
</style>