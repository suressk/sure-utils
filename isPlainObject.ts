import isObjectLike from './isObjectLike'
import { toTypeString } from './.internal/staticFucs'
import { objectTag } from './.internal/constants'

/**
 * Check if `value` is like an `object`
 *
 * @param val the check value
 * @returns boolean
 */
const isPlainObject = (val: unknown): val is object => {
  return isObjectLike(val) && toTypeString(val) === objectTag
}

export default isPlainObject
