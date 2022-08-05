import { toTypeString } from '../.internal/staticFucs'
import { SET_TAG } from '../.internal/constants'
import isObject from './isObject'

/**
 * Check if `value` is `Map`
 *
 * @param val the check value
 * @returns boolean
 */
const isSet = (val: unknown): val is Set<any> => {
  return isObject(val) && toTypeString(val) === SET_TAG
}

export default isSet
