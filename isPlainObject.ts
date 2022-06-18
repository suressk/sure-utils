import isObject from './isObject'
import { toTypeString } from './.internal/staticFucs'
import { objectTag } from './.internal/constants'

/**
 * Check if `value` is a `plain object`
 *
 * @param val the check value
 * @returns boolean
 */
const isPlainObject = (val: unknown): val is object => {
  return isObject(val) && toTypeString(val) === objectTag
}

export default isPlainObject
