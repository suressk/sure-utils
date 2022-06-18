import isObject from './isObject'
import { toTypeString } from './.internal/staticFucs'
import { setTag } from './.internal/constants'

/**
 * Check if `value` is `set`
 *
 * @param val the check value
 * @returns boolean
 */
const isMap = (val: unknown): val is Set<any> => {
  return isObject(val) && toTypeString(val) === setTag
}

export default isMap
