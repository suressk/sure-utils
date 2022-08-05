import isObject from './isObject'
import isFunction from './isFunction'

/**
 * Check if `value` is `Promise`
 *
 * @param {unknown} val the check value
 * @returns {boolean} boolean
 */
const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export default isPromise
