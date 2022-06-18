import { toTypeString } from './.internal/staticFucs'
import { arrayTag } from './.internal/constants'
import isObject from './isObject'

/**
 * Check if `value` is `array`
 *
 * @param val the check value
 * @returns boolean
 */
const isArray = (val: unknown): val is Array<any> => {
  if (Array.isArray) {
    return Array.isArray(val)
  }
  // call `Object.prototype.toString` to check it
  return isObject(val) && toTypeString(val) === arrayTag
}

export default isArray
