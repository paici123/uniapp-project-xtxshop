<script setup lang="ts">
// 1.引用首页自定义导航栏模块2.在template模块中使用CustomNavbar组件
// 注意引用的CustomNavbar 已经关闭了Vetur插件了
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPT } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

import CustomNavbar from './components/CustomNavbar.vue'
// 这里就不再使用import导入轮播图组件模块了 在pages已经配置自动导入了
// 但类型是any需要自定义类型组件，components文件夹下components.d.ts
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'

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
//页面加载 调用函数
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})
</script>

<template>
  <!-- 自定义导航栏模块 -->
  <CustomNavbar />
  <!-- 自定义轮播图XtxSwiper模块 -->
  <XtxSwiper :list="bannerList" />
  <!-- 分类面板模块 -->
  <CategoryPanel :list="categoryList" />
  <!-- 热门推荐模块 -->
  <HotPanel :list="hotList" />
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
