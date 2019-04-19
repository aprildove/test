<template>
  <div class="webpack">
     <div class="img">
        <!-- <img class="pic" alt="加载中" src="../assets/logo.png"> -->
      </div>
      <div class="img">
        <!-- <img class="pic" alt="加载中" src="../assets/images/10.png"> -->
      </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'LazyLoad',
  data () {
    return {
      testnum: 3
    }
  },
  computed: {
    items: function () {
      return new Array(30)
    },
    container: function () {
      return document.querySelector('.webpack')
    }
  },
  methods: {
    component () {
      let element = document.createElement('div')
      element.innerHTML = _.join(['Hello', 'webpack'], ' ')
      return element
    }
  },
  mounted () {
    this.container.appendChild(this.component())
  }
}
</script>

<style scoped>
  .img {
    width: 200px;
    height:200px;
    background-color: gray;
  }
</style>

