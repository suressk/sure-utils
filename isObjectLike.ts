import isNull from "./isNull"

/**
 * Check if `value` is like an `object`
 *
 * @param val the check value
 * @returns boolean
 */
const isObjectLike = (val: unknown): val is object => {
  return typeof val === 'object' && !isNull(val)
}

export default isObjectLike
