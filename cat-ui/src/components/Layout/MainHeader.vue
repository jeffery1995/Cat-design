<template>
  <div class="mepo-main-header">
    <slot>
      <div class="header-options">
        <div v-for="option in options" :key="option.url">
          <router-link :to="option.url">{{ option.name }}</router-link>
        </div>
      </div>
    </slot>
  </div>
  
</template>

<script>
export default {
  name: 'mepo-main-header',
  props: {
    options: {
      type: Array,
      default: []
    },
    height: {
      type: String,
      default: '10vh'
    }
  }
}
</script>

<style>
.mepo-main-header {
  position: sticky;
  top: 0;
  height: 10vh;
}

.header-options {
  display: flex;
}
</style>