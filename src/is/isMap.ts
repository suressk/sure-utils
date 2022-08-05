import { toTypeString } from '../.internal/staticFucs'
import { MAP_TAG } from '../.internal/constants'
import isObject from './isObject'

/**
 * Check if `value` is `Map`
 *
 * @param val the check value
 * @returns boolean
 */
const isMap = (val: unknown): val is Map<any, any> => {
  return isObject(val) && toTypeString(val) === MAP_TAG
}

export default isMap
