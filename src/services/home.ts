import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { http } from '@/utils/http'
/**
 *首页-广告区域-小程序
 * @param distributionSite  广告区域展示位置（投放位置，首页，分类商品）
 * @returns
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
/**
 * 首页-前台分类-小程序
 */
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
/**
 * 首页-热门推荐-小程序
 */
export const getHomeHotAPT = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
