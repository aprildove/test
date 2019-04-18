<template>
  <div class="home">
    <!-- <LazyLoad msg="Welcome to Your Vue.js App"/> -->
    <webpack/>
  </div>
</template>

<script>
// @ is an alias to /src
// import LazyLoad from '@/components/LazyLoad.vue'
import webpack from '@/components/webpack.vue'

export default {
  name: 'home',
  components: {
    // LazyLoad,
    webpack
  }
}
</script>
