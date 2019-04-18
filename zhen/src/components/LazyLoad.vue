<template>
  <div class="hello">
    <!-- <template v-for="(item, i) in items">
      <div class="img" :key="i">
        <img class="pic" alt="加载中">
        <img class="lazy" data-src="img" alt="loading img">
        <img class="backUrl" alt="加载中">
      </div>
    </template> -->
    <div class="container">
      <div class="img">
        <img class="pic" alt="加载中" data-src="../assets/images/1.png">
      </div>
      <div class="img">
        <img class="pic" alt="加载中" data-src="../assets/images/2.png">
      </div>
      <div class="img">
        <img class="pic" alt="加载中" data-src="../assets/images/3.png">
      </div>
      <div class="img">
        <img class="pic" alt="加载中" data-src="../assets/images/4.png">
      </div>
      <div class="img">
        <img class="pic" alt="加载中" data-src="../assets/images/5.png">
      </div>
      <div class="img">
        <img class="pic" alt="加载中" data-src="../assets/images/6.png">
      </div>
      <div class="img">
        <img class="pic" alt="加载中" data-src="../assets/images/7.png">
      </div>
      <div class="img">
        <img class="pic" alt="加载中" data-src="../assets/images/8.png">
      </div>
      <div class="img">
        <img class="pic" alt="加载中" data-src="../assets/images/9.png">
      </div>
      <div class="img">
        <img class="pic" alt="加载中" data-src="../assets/images/10.png">
      </div>
    </div>
  </div>
</template>

<script>
import img0 from '../assets/images/0.jpg'
import '../assets/images/2.jpg'

export default {
  name: 'LazyLoad',
  data () {
    return {
      imgs: document.getElementsByTagName('img'),
      num: 0
    }
  },
  computed: {
    items: function () {
      return new Array(30)
    },
    viewHeight: function () {
      return window.innerHeight || document.documentElement.clientHeight
    }
  },
  methods: {
    lazyload () {
      for(let i = this.num; i < this.imgs.length; i++) {
        let distance = this.viewHeight - this.imgs[i].getBoundingClientRect().top
        if(distance >= 0 ){
          this.imgs[i].src = this.imgs[i].getAttribute('data-src')
          this.num = i + 1
        }
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.lazyload, false)
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
