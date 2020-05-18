<style lang="less">
@import url('../assets/style/variable.less');
.page-pc { width: 100%; min-width: 1280px; height: 100%; padding: 1px; font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; color: #2c3e50; position: absolute; top: 0; left: 0; overflow-x: scroll;
  .app-bg { width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: -100; opacity: 0.5; background-size: cover; background-repeat: no-repeat; transition: all .5s linear; }
  .app-content { width: 100%; height: 100%; overflow-y: scroll; position: relative;
    .piano-scroll-wrap { overflow: hidden; }
    .score-section { width: 100%; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; margin-top: 5rem;  }
    .section-title { margin: 30px auto 20px; font-size: 28px; font-weight: 500; color: #333; }
  }
}
</style>

<template>
  <div class="page-pc">
    <div class="app-bg" :style="appBgStyle"></div>

    <div class="app-content">
      <PageHeader></PageHeader>
      <!--<RandomLyric></RandomLyric>-->
      <Piano></Piano>
      <!--<div class="score-section responsive-section-a">
        <ManualPlayScoreList></ManualPlayScoreList>
        <AutoPlayScoreList></AutoPlayScoreList>
      </div>-->
      <!--<h2 class="section-title responsive-section-a"></h2>-->
      <!--<CommodityList />-->
      <div class="blank-page-pc" style="height: 200px;"></div>
      <!--<PageFooter></PageFooter>-->
    </div>

  </div>
</template>

<script>
import Observe from 'observe'

import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/Footer'
import RandomLyric from '@/components/RandomLyric'
import Piano from '@/components/Piano'
import ManualPlayScoreList from '@/components/ManualPlayScoreList'
import AutoPlayScoreList from '@/components/AutoPlayScoreList'
import CommodityList from '@/components/CommodityList.vue'

import { mapActions, mapGetters } from 'vuex'
import { OBEvent, Wallpaper } from '@/config'

export default {
  name: 'AutoPianoPC',
  components: {
    PageHeader,
    PageFooter,
    RandomLyric,
    Piano,
    ManualPlayScoreList,
    AutoPlayScoreList,
    CommodityList
  },
  data() {
    return {
      percent: 0,
      rightDrawerShow: false
    }
  },
  computed: {
		...mapGetters([
			'$currentWallpaper'
    ]),
    appBgStyle() {
      return `background-image: url(${this.$currentWallpaper});`
    }
  },
  mounted() {
    // setTimeout(() => {
    //   let winHeight = window.innerHeight
    //   document.documentElement.style.height = winHeight + 'px'
    // }, 0)
  },
  methods: {
    toggleRightDrawer() {
      this.rightDrawerShow = !this.rightDrawerShow
    },
    hideRightDrawer() {
      this.rightDrawerShow = false
    }
  }
}
</script>