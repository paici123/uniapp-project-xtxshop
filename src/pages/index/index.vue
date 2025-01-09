<script setup lang="ts">
// 1.引用首页自定义导航栏模块2.在template模块中使用CustomNavbar组件
// 注意引用的CustomNavbar 已经关闭了Vetur插件了
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPT } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type { XtxGuessInstance } from '@/types/component.d'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

import CustomNavbar from './components/CustomNavbar.vue'
// 这里就不再使用import导入轮播图组件模块了 在pages已经配置自动导入了
// 但类型是any需要自定义类型组件，components文件夹下components.d.ts
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'

//首页-广告区域-小程序
//1.获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  // console.log(res)
  bannerList.value = res.result
}

//2.获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  // console.log(res.result)
  categoryList.value = res.result
}

//3.获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPT()
  // console.log(res)
  hotList.value = res.result
}

//是否加载中的标记
const isLoading = ref(false)

//页面加载 调用函数
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})

//获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()
//滚动触底
const onScrolltolower = () => {
  // console.log('滚动触底了')
  guessRef.value?.getMore()
}

//关闭下拉刷新后的动态效果动画
const isTriggered = ref(false)
//自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // console.log('自定义下拉刷新')
  //开始下拉刷新动画
  isTriggered.value = true
  //加载数据
  // await getHomeBannerData()
  // await getHomeCategoryData()
  // await getHomeHotData()
  //重置猜你喜欢的数据
  guessRef.value?.resetData()
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  guessRef.value?.getMore()
  //关闭下拉刷新动画
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏模块 -->
  <CustomNavbar />
  <!-- <scroll-view scroll-y>为滚动容器，把下面的内容放进容器设置可以滚动，导航栏为固定 -->
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    ckass="scroll-view"
    scroll-y
  >
    <!-- 添加骨架屏 -->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图XtxSwiper模块 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板模块 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐模块 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢模块 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
