import { toTypeString } from '../.internal/staticFucs'
import { ARRAY_TAG } from '../.internal/constants'
import isObject from './isObject'

/**
 * Check if `value` is `Array`
 *
 * @param val the check value
 * @returns boolean
 */
const isArray = <T>(val: unknown): val is Array<T> => {
  if (Array.isArray) {
    return Array.isArray(val)
  }
  // call `Object.prototype.toString` to check it '[object Array]'
  return isObject(val) && toTypeString(val) === ARRAY_TAG
}

export default isArray
