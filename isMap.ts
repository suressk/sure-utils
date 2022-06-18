import isObject from './isObject'
import { toTypeString } from './.internal/staticFucs'
import { mapTag } from './.internal/constants'

/**
 * Check if `value` is `map`
 *
 * @param val the check value
 * @returns boolean
 */
const isMap = (val: unknown): val is Map<any, any> => {
  return isObject(val) && toTypeString(val) === mapTag
}

export default isMap
