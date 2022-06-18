import { toTypeString } from './.internal/staticFucs'
import { dateTag } from './.internal/constants'
import isObjectLike from './isObjectLike'

/**
 * Check if `value` is `Date`
 *
 * @param val the check value
 * @returns boolean
 */
const isDate = (val: unknown): boolean => {
  // call `Object.prototype.toString` to check
  return isObjectLike(val) && toTypeString(val) === dateTag
}

export default isDate
