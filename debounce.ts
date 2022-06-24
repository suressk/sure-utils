import root from './.internal/root'
import isFunction from './isFunction'
import isNull from './isNull'

/**
 * 防抖
 * @param {Function} fn need debounced function
 * @param {Number} delay delay time
 * @param {Boolean} immediate immediate call the function or not
 */
export default function debounce(
  fn: Function,
  delay: number,
  immediate: boolean = false
) {
  if (!isFunction(fn)) {
    throw new TypeError('Expected a function')
  }

  // Bypass `requestAnimationFrame` by explicitly setting `delay = 0`
  // const useRAF = !delay && delay !== 0 && isFunction(root.requestAnimationFrame)

  const canUseRAF =
    !delay && delay !== 0 && isFunction(root.requestAnimationFrame)

  let timerId: any = null

  const startTimer = (pendindFunc: Function, delay: number) => {
    if (canUseRAF) {
      root.cancelAnimationFrame(timerId)
      // immediate invoke the fn
      return root.requestAnimationFrame(pendindFunc)
    }
    return setTimeout(pendindFunc, delay)
  }

  const cancelTimer = (id: number) => {
    if (canUseRAF) {
      return root.cancelAnimationFrame(id)
    }
    clearTimeout(id)
  }

  return function (...args: any[]) {
    // @ts-ignore
    const ctx: any = this
    let callNow
    if (timerId !== null) {
      cancelTimer(timerId)
    }
    if (immediate) {
      // callNow = !timerId
      callNow = isNull(timerId)
      if (callNow) {
        fn.apply(ctx, args)
      }
      // immedite invoke fn, delay to reset timerId with 'null' for
      // next time, in order to immediate invoke the fn
      timerId = startTimer(() => {
        timerId = null
      }, delay)
      return
    }
    timerId = startTimer(() => {
      fn.apply(ctx, args)
    }, delay)
  }
}
