import { toTypeString } from './.internal/staticFucs'
import { objectTag } from './.internal/constants'
import isObject from './isObject'
import getPrototype from './getPrototype'

/**
 * Check if `value` is a `plain object`
 *
 * @param val the check value
 * @returns boolean
 */
const isPlainObject = (val: unknown): val is object => {
  if (!isObject(val) || toTypeString(val) !== objectTag) {
    return false
  }
  if (getPrototype(val) === null) {
    return true
  }
  let proto: object | null = val
  // it may be some plain object chain
  while (getPrototype(proto) !== null) {
    proto = getPrototype(proto)
  }
  // proto is Object.prototype
  return getPrototype(val) === proto
}

export default isPlainObject
