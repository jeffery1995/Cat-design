<template>
 <mepo-layout>
   <template #header>
     <mepo-main-header :options="routeOptions"></mepo-main-header>
   </template>
   <router-view></router-view>
 </mepo-layout>
</template>

<script>
export default {
  name: 'App',
  computed: {
    routeOptions () {
      return [
        {
          name: 'Home',
          url: '/'
        },
      ]
    }
  }
}
</script>
