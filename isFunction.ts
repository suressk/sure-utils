/**
 * Check if `value` is like an `function`
 *
 * @param val the check value
 * @returns boolean
 */
const isFunction = (val: unknown): val is Function =>
  typeof val === 'function'

export default isFunction