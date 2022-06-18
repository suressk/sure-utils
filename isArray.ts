import { toTypeString } from './.internal/staticFucs'
import { arrayTag } from './.internal/constants'

/**
 * Check if `value` is `array`
 *
 * @param val the check value
 * @returns boolean
 */
const isArray = (val: unknown): boolean => {
  if (Array.isArray) {
    return Array.isArray(val)
  }
  // call `Object.prototype.toString` to check
  return toTypeString(val) === arrayTag
}

export default isArray
