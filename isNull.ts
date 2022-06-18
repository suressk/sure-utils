/**
 * Check if `value` is `null`
 * 
 * @param val 
 * @returns 
 */
const isNull = (val: unknown): val is null => val === null

export default isNull