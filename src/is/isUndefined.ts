/**
 * Check if `value` is `undefined`
 *
 * @param val the check value
 * @returns boolean
 */
const isUndefined = (val: unknown): val is undefined => val === undefined || typeof val === 'undefined'

export default isUndefined
