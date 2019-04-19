<template>
  <div class="home">
    <!-- <LazyLoad msg="Welcome to Your Vue.js App"/> -->
    <webpack/>
  </div>
</template>

<script>
// @ is an alias to /src
// import LazyLoad from '@/components/LazyLoad.vue'
import Webpack from '@/components/webpack'

export default {
  name: 'home',
  components: {
    // LazyLoad,
    Webpack
  }
}
</script>
