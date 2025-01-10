import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'
/**
 * 规格集合一定要和skus集合下的specs顺序保存一致
 * 商品详情
 * @param id 商品的id
 * @returns
 */
export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
