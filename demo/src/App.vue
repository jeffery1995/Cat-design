<template>
 <cat-layout>
   <template #header>
     <cat-main-header :options="routeOptions"></cat-main-header>
   </template>
   <router-view></router-view>
 </cat-layout>
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
