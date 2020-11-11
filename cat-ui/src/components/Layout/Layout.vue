<template>
  <div class="cat-layout">
    <slot v-show="headerVisible" name="header">
    </slot>
    <div class="cat-layout-body">
      <slot name="body"></slot>
    </div>
    <slot v-show="footerVisible" name="footer">
    </slot>
  </div>
</template>

<script>
export default {
  name: 'cat-layout',
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
.cat-layout {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: floralwhite;
}

.cat-layout-body {
  position: relative;
}

</style>