/** 订单状态枚举 */
export enum OrderState {
  DaiFuKuan = 1 /** 待付款 */,
  DaiFaHuo = 2 /** 待发货 */,
  DaiShouHuo = 3 /** 待收货 */,
  DaiPingJia = 4 /** 待评价 */,
  YiWanCheng = 5 /** 已完成 */,
  YiQuXiao = 6 /** 已取消 */,
}
/** 订单状态列表 */
export const orderStateList = [
  { id: 0, text: '' },
  { id: 1, text: '待付款' },
  { id: 2, text: '待发货' },
  { id: 3, text: '待收货' },
  { id: 4, text: '待评价' },
  { id: 5, text: '已完成' },
  { id: 6, text: '已取消' },
]
