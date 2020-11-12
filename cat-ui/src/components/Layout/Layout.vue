<template>
  <div class="mepo--layout">
    <slot v-show="headerVisible" name="header">
    </slot>
    <div class="mepo--layout-body">
      <slot name="body"></slot>
    </div>
    <slot v-show="footerVisible" name="footer">
    </slot>
  </div>
</template>

<script>
export default {
  name: 'mepo--layout',
  props: {
    headerVisible: {
      type: Boolean,
      default: true
    },
    footerVisible: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
.mepo--layout {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: floralwhite;
}

.mepo--layout-body {
  position: relative;
}

</style>