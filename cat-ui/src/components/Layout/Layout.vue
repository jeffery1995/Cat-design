<template>
  <div class=".cat-layout">
    <slot name="header"></slot>
    <slot name="body"></slot>
    <footer><slot name="footer"> </slot></footer>
  </div>
</template>

<script>
export default {
  name: 'cat-layout'
}
</script>

<style>

</style>