import isNull from './isNull'

/**
 * Check if `value` is like an `Object`
 *
 * @param val the check value
 * @returns boolean
 */
const isObject = (val: unknown): val is Record<any, any> => {
  return typeof val === 'object' && !isNull(val)
}

export default isObject
