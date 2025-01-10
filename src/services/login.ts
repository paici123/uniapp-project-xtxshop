import { http } from '@/utils/http'

/**
 * 小程序登录
 * @param data 请求的参数
 */
type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}
export const postLoginWxMinAPI = (data: LoginParams) => {
  return http({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}
/**
 *小程序登录-内测版
 * @param phoneNumber 模拟手机号码
 * @returns
 */
export const postLoginWxMixSimpleAPI = (phoneNumber: string) => {
  return http({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
