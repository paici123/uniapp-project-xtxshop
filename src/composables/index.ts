import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

/**
 *猜你喜欢的组合式函数
 * @returns
 */
export const useGuessList = () => {
  //2.获取猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstance>()

  //3.滚动触底事件
  const onScrolltolower = () => {
    // console.log('滚动触底了')
    guessRef.value?.getMore()
  }
  return {
    guessRef,
    onScrolltolower,
  }
}
