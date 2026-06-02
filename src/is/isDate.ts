import { DATE_TAG } from '../.internal/constants'
import { toTypeString } from '../.internal/staticFucs'
import isObject from './isObject'

/**
 * Check if `value` is `Date`
 *
 * @param val the check value
 * @returns boolean
 */
const isDate = (val: unknown): boolean => {
  // call `Object.prototype.toString` to check '[object Date]'
  return isObject(val) && toTypeString(val) === DATE_TAG
}

export default isDate
