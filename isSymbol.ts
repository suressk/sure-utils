/**
 * Check if `value` is `symbol`
 *
 * @param val the check value
 * @returns boolean
 */
const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'

export default isSymbol
