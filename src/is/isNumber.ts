/**
 * Check if `value` is `number`
 *
 * @param val the check value
 * @returns boolean
 */
const isNumber = (val: unknown): val is number => typeof val === 'number'

export default isNumber
