/**
 * Check if `value` is `string`
 *
 * @param val the check value
 * @returns boolean
 */
const isString = (val: unknown): val is string => typeof val === 'string'

export default isString
